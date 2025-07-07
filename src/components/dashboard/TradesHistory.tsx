import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { Eye, TrendingUp, TrendingDown } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import AnalysisModal from './AnalysisModal';

interface Trade {
  id: string;
  trade_pair: string;
  entry_price: number;
  exit_price: number | null;
  lot_size: number;
  timeframe: string;
  trade_type: string;
  status: string;
  notes: string | null;
  created_at: string;
  ai_analysis?: {
    id: string;
    analysis_text: string;
    confidence_score: number;
  }[];
}

const TradesHistory = () => {
  const [trades, setTrades] = useState<Trade[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedAnalysis, setSelectedAnalysis] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    fetchTrades();
  }, []);

  const fetchTrades = async () => {
    try {
      const { data, error } = await supabase
        .from('trades')
        .select(`
          *,
          ai_analysis (
            id,
            analysis_text,
            confidence_score
          )
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setTrades(data || []);
    } catch (error: any) {
      toast({
        title: "Error loading trades",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const calculatePnL = (trade: Trade) => {
    if (!trade.exit_price) return null;
    
    const priceDiff = trade.trade_type === 'buy' 
      ? trade.exit_price - trade.entry_price
      : trade.entry_price - trade.exit_price;
    
    return priceDiff * trade.lot_size * 100000; // Assuming forex pip value
  };

  const formatPnL = (pnl: number) => {
    const isProfit = pnl > 0;
    return (
      <span className={`flex items-center ${isProfit ? 'text-green-400' : 'text-red-400'}`}>
        {isProfit ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
        {isProfit ? '+' : ''}${pnl.toFixed(2)}
      </span>
    );
  };

  if (loading) {
    return (
      <Card className="bg-dark-card border-gray-800">
        <CardContent className="p-8 text-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Loading your trades...</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      <Card className="bg-dark-card border-gray-800">
        <CardHeader>
          <CardTitle className="text-xl gradient-text">Trade History</CardTitle>
        </CardHeader>
        
        <CardContent>
          {trades.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-400 mb-4">No trades logged yet</p>
              <p className="text-sm text-gray-500">Start by logging your first trade to see AI analysis</p>
            </div>
          ) : (
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {trades.map((trade) => {
                const pnl = calculatePnL(trade);
                const hasAnalysis = trade.ai_analysis && trade.ai_analysis.length > 0;
                
                return (
                  <div
                    key={trade.id}
                    className="bg-dark rounded-lg p-4 border border-gray-700 hover:border-gray-600 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-semibold text-white mb-1">{trade.trade_pair}</h3>
                        <div className="flex items-center space-x-2">
                          <Badge
                            variant={trade.trade_type === 'buy' ? 'default' : 'destructive'}
                            className={trade.trade_type === 'buy' ? 'bg-green-600' : 'bg-red-600'}
                          >
                            {trade.trade_type.toUpperCase()}
                          </Badge>
                          <Badge variant="outline" className="border-gray-600 text-gray-400">
                            {trade.timeframe}
                          </Badge>
                          <Badge
                            variant={trade.status === 'open' ? 'secondary' : 'default'}
                            className={trade.status === 'open' ? 'bg-yellow-600' : 'bg-gray-600'}
                          >
                            {trade.status.toUpperCase()}
                          </Badge>
                        </div>
                      </div>
                      
                      {hasAnalysis && (
                        <Button
                          size="sm"
                          onClick={() => setSelectedAnalysis(trade.ai_analysis![0].analysis_text)}
                          className="bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30"
                        >
                          <Eye className="w-4 h-4 mr-1" />
                          View Analysis
                        </Button>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-gray-400">Entry</p>
                        <p className="text-white font-medium">{trade.entry_price}</p>
                      </div>
                      
                      <div>
                        <p className="text-gray-400">Exit</p>
                        <p className="text-white font-medium">
                          {trade.exit_price || 'Open'}
                        </p>
                      </div>
                      
                      <div>
                        <p className="text-gray-400">Lot Size</p>
                        <p className="text-white font-medium">{trade.lot_size}</p>
                      </div>
                      
                      <div>
                        <p className="text-gray-400">P&L</p>
                        <p className="font-medium">
                          {pnl !== null ? formatPnL(pnl) : <span className="text-gray-400">--</span>}
                        </p>
                      </div>
                    </div>
                    
                    {trade.notes && (
                      <div className="mt-3 pt-3 border-t border-gray-700">
                        <p className="text-sm text-gray-400">{trade.notes}</p>
                      </div>
                    )}
                    
                    <div className="mt-3 text-xs text-gray-500">
                      {new Date(trade.created_at).toLocaleDateString()} at {new Date(trade.created_at).toLocaleTimeString()}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </CardContent>
      </Card>

      {selectedAnalysis && (
        <AnalysisModal
          analysis={selectedAnalysis}
          onClose={() => setSelectedAnalysis(null)}
        />
      )}
    </>
  );
};

export default TradesHistory;