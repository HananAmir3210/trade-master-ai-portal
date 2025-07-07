import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import { TrendingUp, TrendingDown, BarChart3, Target } from 'lucide-react';

interface Stats {
  totalTrades: number;
  openTrades: number;
  winRate: number;
  totalPnL: number;
}

const DashboardStats = () => {
  const [stats, setStats] = useState<Stats>({
    totalTrades: 0,
    openTrades: 0,
    winRate: 0,
    totalPnL: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const { data: trades, error } = await supabase
        .from('trades')
        .select('*');

      if (error) throw error;

      const totalTrades = trades?.length || 0;
      const openTrades = trades?.filter(t => t.status === 'open').length || 0;
      const closedTrades = trades?.filter(t => t.status === 'closed') || [];
      
      let totalPnL = 0;
      let winningTrades = 0;

      closedTrades.forEach(trade => {
        if (trade.exit_price) {
          const priceDiff = trade.trade_type === 'buy' 
            ? trade.exit_price - trade.entry_price
            : trade.entry_price - trade.exit_price;
          
          const pnl = priceDiff * trade.lot_size * 100000;
          totalPnL += pnl;
          
          if (pnl > 0) winningTrades++;
        }
      });

      const winRate = closedTrades.length > 0 ? (winningTrades / closedTrades.length) * 100 : 0;

      setStats({
        totalTrades,
        openTrades,
        winRate,
        totalPnL
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    {
      title: "Total Trades",
      value: stats.totalTrades,
      icon: BarChart3,
      color: "text-blue-400"
    },
    {
      title: "Open Positions",
      value: stats.openTrades,
      icon: Target,
      color: "text-yellow-400"
    },
    {
      title: "Win Rate",
      value: `${stats.winRate.toFixed(1)}%`,
      icon: stats.winRate >= 50 ? TrendingUp : TrendingDown,
      color: stats.winRate >= 50 ? "text-green-400" : "text-red-400"
    },
    {
      title: "Total P&L",
      value: `$${stats.totalPnL.toFixed(2)}`,
      icon: stats.totalPnL >= 0 ? TrendingUp : TrendingDown,
      color: stats.totalPnL >= 0 ? "text-green-400" : "text-red-400"
    }
  ];

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <Card key={i} className="bg-dark-card border-gray-800">
            <CardContent className="p-6">
              <div className="animate-pulse">
                <div className="h-4 bg-gray-700 rounded mb-2"></div>
                <div className="h-8 bg-gray-700 rounded"></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statCards.map((stat, index) => (
        <Card key={index} className="bg-dark-card border-gray-800 hover:border-gray-700 transition-colors">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400 mb-1">{stat.title}</p>
                <p className={`text-2xl font-bold ${stat.color}`}>
                  {stat.value}
                </p>
              </div>
              <stat.icon className={`w-8 h-8 ${stat.color}`} />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DashboardStats;