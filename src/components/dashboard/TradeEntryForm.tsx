import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Upload } from 'lucide-react';

const TradeEntryForm = () => {
  const [formData, setFormData] = useState({
    tradePair: '',
    entryPrice: '',
    exitPrice: '',
    lotSize: '',
    timeframe: '',
    tradeType: '',
    notes: ''
  });
  const [loading, setLoading] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('Not authenticated');

      // Insert trade into database
      const { data: trade, error } = await supabase
        .from('trades')
        .insert({
          user_id: user.id,
          trade_pair: formData.tradePair,
          entry_price: parseFloat(formData.entryPrice),
          exit_price: formData.exitPrice ? parseFloat(formData.exitPrice) : null,
          lot_size: parseFloat(formData.lotSize),
          timeframe: formData.timeframe,
          trade_type: formData.tradeType,
          status: formData.exitPrice ? 'closed' : 'open',
          notes: formData.notes
        })
        .select()
        .single();

      if (error) throw error;

      toast({
        title: "Trade logged successfully!",
        description: "Starting AI analysis...",
      });

      // Start AI analysis
      setAnalyzing(true);
      const { data: analysisResult, error: analysisError } = await supabase.functions.invoke('analyze-trade', {
        body: {
          tradeId: trade.id,
          tradePair: formData.tradePair,
          entryPrice: formData.entryPrice,
          exitPrice: formData.exitPrice,
          lotSize: formData.lotSize,
          timeframe: formData.timeframe,
          tradeType: formData.tradeType,
          notes: formData.notes
        }
      });

      if (analysisError) {
        console.error('Analysis error:', analysisError);
        toast({
          title: "Trade logged, but analysis failed",
          description: "Your trade was saved but AI analysis couldn't be completed.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "AI Analysis Complete!",
          description: "Your trade has been analyzed. Check the history tab for insights.",
        });
      }

      // Reset form
      setFormData({
        tradePair: '',
        entryPrice: '',
        exitPrice: '',
        lotSize: '',
        timeframe: '',
        tradeType: '',
        notes: ''
      });
    } catch (error: any) {
      toast({
        title: "Error logging trade",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
      setAnalyzing(false);
    }
  };

  return (
    <Card className="bg-dark-card border-gray-800">
      <CardHeader>
        <CardTitle className="text-xl gradient-text">Log New Trade</CardTitle>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="tradePair" className="text-gray-300">Trade Pair</Label>
            <Input
              id="tradePair"
              placeholder="e.g., EUR/USD, BTC/USD"
              value={formData.tradePair}
              onChange={(e) => handleInputChange('tradePair', e.target.value)}
              required
              className="bg-dark border-gray-700 text-white"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="entryPrice" className="text-gray-300">Entry Price</Label>
              <Input
                id="entryPrice"
                type="number"
                step="0.00001"
                placeholder="1.1234"
                value={formData.entryPrice}
                onChange={(e) => handleInputChange('entryPrice', e.target.value)}
                required
                className="bg-dark border-gray-700 text-white"
              />
            </div>
            
            <div>
              <Label htmlFor="exitPrice" className="text-gray-300">Exit Price (Optional)</Label>
              <Input
                id="exitPrice"
                type="number"
                step="0.00001"
                placeholder="1.1289"
                value={formData.exitPrice}
                onChange={(e) => handleInputChange('exitPrice', e.target.value)}
                className="bg-dark border-gray-700 text-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="lotSize" className="text-gray-300">Lot Size</Label>
              <Input
                id="lotSize"
                type="number"
                step="0.01"
                placeholder="0.1"
                value={formData.lotSize}
                onChange={(e) => handleInputChange('lotSize', e.target.value)}
                required
                className="bg-dark border-gray-700 text-white"
              />
            </div>
            
            <div>
              <Label htmlFor="timeframe" className="text-gray-300">Timeframe</Label>
              <Select value={formData.timeframe} onValueChange={(value) => handleInputChange('timeframe', value)}>
                <SelectTrigger className="bg-dark border-gray-700 text-white">
                  <SelectValue placeholder="Select timeframe" />
                </SelectTrigger>
                <SelectContent className="bg-dark-card border-gray-700">
                  <SelectItem value="M1">1 Minute</SelectItem>
                  <SelectItem value="M5">5 Minutes</SelectItem>
                  <SelectItem value="M15">15 Minutes</SelectItem>
                  <SelectItem value="M30">30 Minutes</SelectItem>
                  <SelectItem value="H1">1 Hour</SelectItem>
                  <SelectItem value="H4">4 Hours</SelectItem>
                  <SelectItem value="D1">Daily</SelectItem>
                  <SelectItem value="W1">Weekly</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="tradeType" className="text-gray-300">Trade Type</Label>
            <Select value={formData.tradeType} onValueChange={(value) => handleInputChange('tradeType', value)}>
              <SelectTrigger className="bg-dark border-gray-700 text-white">
                <SelectValue placeholder="Select trade type" />
              </SelectTrigger>
              <SelectContent className="bg-dark-card border-gray-700">
                <SelectItem value="buy">Buy</SelectItem>
                <SelectItem value="sell">Sell</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="notes" className="text-gray-300">Notes (Optional)</Label>
            <Textarea
              id="notes"
              placeholder="Add any additional notes about this trade..."
              value={formData.notes}
              onChange={(e) => handleInputChange('notes', e.target.value)}
              className="bg-dark border-gray-700 text-white min-h-[80px]"
            />
          </div>

          <Button
            type="submit"
            disabled={loading || analyzing}
            className="w-full bg-primary hover:bg-primary-dark text-dark font-semibold"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin mr-2" />
                Logging Trade...
              </>
            ) : analyzing ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin mr-2" />
                Analyzing with AI...
              </>
            ) : (
              'Log Trade & Analyze'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default TradeEntryForm;