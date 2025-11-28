// components/AdvancedCoinChart.tsx
"use client";

import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Area,
  ComposedChart
} from "recharts";

interface ChartData {
  time: string;
  price: number;
  volume?: number;
}

type Timeframe = "24h" | "7d" | "1m" | "3m" | "1y";

export default function AdvancedCoinChart({ coinCode }: { coinCode: string }) {
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [loading, setLoading] = useState(true);
  const [timeframe, setTimeframe] = useState<Timeframe>("24h");
  const [priceChange, setPriceChange] = useState<{ value: number; percent: number }>({ value: 0, percent: 0 });

  useEffect(() => {
    async function fetchChartData() {
      if (!coinCode) return;

      try {
        setLoading(true);

        const generatedData = generateRealisticData(coinCode, timeframe);
        setChartData(generatedData);
        
        if (generatedData.length > 1) {
          const firstPrice = generatedData[0].price;
          const lastPrice = generatedData[generatedData.length - 1].price;
          const changeValue = lastPrice - firstPrice;
          const changePercent = (changeValue / firstPrice) * 100;
          
          setPriceChange({
            value: changeValue,
            percent: changePercent
          });
        }

      } catch (error) {
        console.error("خطا در دریافت داده:", error);
        setChartData(generateFallbackData(timeframe));
      } finally {
        setLoading(false);
      }
    }

    fetchChartData();
  }, [coinCode, timeframe]);

  function generateRealisticData(coinCode: string, timeframe: Timeframe): ChartData[] {
    const basePrices: { [key: string]: number } = {
      "BTC": 60000,
      "ETH": 3500,
      "USDT": 1,
      "ADA": 0.5,
      "DOT": 7,
      "default": 100
    };

    const basePrice = basePrices[coinCode] || basePrices.default;
    const data: ChartData[] = [];
    const now = new Date();
    let dataPoints = 24;
    let timeFormat: "hour" | "day" | "month" = "hour";

    switch (timeframe) {
      case "24h":
        dataPoints = 24;
        timeFormat = "hour";
        break;
      case "7d":
        dataPoints = 7;
        timeFormat = "day";
        break;
      case "1m":
        dataPoints = 30;
        timeFormat = "day";
        break;
      case "3m":
        dataPoints = 12;
        timeFormat = "month";
        break;
      case "1y":
        dataPoints = 12;
        timeFormat = "month";
        break;
    }

    let currentPrice = basePrice;
    const volatility = 0.02; 

    for (let i = dataPoints - 1; i >= 0; i--) {
      const time = new Date(now);
      
      switch (timeFormat) {
        case "hour":
          time.setHours(now.getHours() - i);
          break;
        case "day":
          time.setDate(now.getDate() - i);
          break;
        case "month":
          time.setMonth(now.getMonth() - i);
          break;
      }

      const change = (Math.random() - 0.5) * 2 * volatility;
      currentPrice = currentPrice * (1 + change);

      let timeLabel = "";
      switch (timeFormat) {
        case "hour":
          timeLabel = time.toLocaleTimeString('fa-IR', { 
            hour: '2-digit', 
            minute: '2-digit' 
          });
          break;
        case "day":
          timeLabel = time.toLocaleDateString('fa-IR', { 
            day: '2-digit', 
            month: 'short' 
          });
          break;
        case "month":
          timeLabel = time.toLocaleDateString('fa-IR', { 
            year: '2-digit', 
            month: 'short' 
          });
          break;
      }

      data.push({
        time: timeLabel,
        price: Number(currentPrice.toFixed(2)),
        volume: Math.random() * 1000000 + 500000 // حجم معاملات تصادفی
      });
    }

    return data;
  }


  function generateFallbackData(timeframe: Timeframe): ChartData[] {
    const sampleData = [
      { time: "00:00", price: 28500, volume: 4500000 },
      { time: "04:00", price: 29000, volume: 5200000 },
      { time: "08:00", price: 29500, volume: 4800000 },
      { time: "12:00", price: 29200, volume: 5100000 },
      { time: "16:00", price: 29800, volume: 5500000 },
      { time: "20:00", price: 30200, volume: 6000000 },
      { time: "23:59", price: 30500, volume: 5800000 },
    ];

    return sampleData;
  }

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-lg">
          <p className="text-gray-600 font-medium">{`زمان: ${label}`}</p>
          <p className="text-blue-600 font-bold">
            {`قیمت: ${payload[0].value.toLocaleString('en-US')} $`}
          </p>
          {payload[1] && (
            <p className="text-green-600">
              {`حجم: ${Math.round(payload[1].value).toLocaleString('en-US')}`}
            </p>
          )}
        </div>
      );
    }
    return null;
  };

  const TimeframeButtons = () => (
    <div className="flex gap-1 bg-gray-100 rounded-lg p-1">
      {[
        { key: "24h" as Timeframe, label: "۲۴ ساعت" },
        { key: "7d" as Timeframe, label: "هفته" },
        { key: "1m" as Timeframe, label: "ماه" },
        { key: "3m" as Timeframe, label: "۳ ماه" },
        { key: "1y" as Timeframe, label: "سال" }
      ].map(({ key, label }) => (
        <button
          key={key}
          onClick={() => setTimeframe(key)}
          className={`px-3 py-2 rounded-md text-xs font-medium transition-all ${
            timeframe === key
              ? "bg-white text-blue-600 shadow-sm"
              : "text-gray-600 hover:text-blue-600"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );

  if (loading) {
    return (
      <div className="w-full bg-white rounded-2xl p-6 shadow-lg">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="h-64 bg-gray-200 rounded mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        </div>
      </div>
    );
  }

  const isPositive = priceChange.percent >= 0;

  return (
    <div className="w-full bg-white rounded-2xl p-6 shadow-lg">
     
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
        <div className="flex items-center gap-4 mb-4 lg:mb-0">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              {chartData[chartData.length - 1]?.price.toLocaleString('en-US')} $
            </h2>
            <p className={`text-sm font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
              {isPositive ? '↑' : '↓'} {Math.abs(priceChange.percent).toFixed(2)}% 
              ({isPositive ? '+' : ''}{priceChange.value.toFixed(2)} $)
            </p>
          </div>
        </div>
        <TimeframeButtons />
      </div>

      
      <div className="h-80 mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={chartData}>
            <defs>
              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2563eb" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#2563eb" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="#f3f4f6" 
              horizontal={true}
              vertical={false}
            />
            
            <XAxis 
              dataKey="time"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6b7280' }}
              interval="preserveStartEnd"
            />
            
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6b7280' }}
              tickFormatter={(value) => {
                if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
                if (value >= 1000) return `${(value / 1000).toFixed(0)}K`;
                return value.toFixed(0);
              }}
              width={60}
            />
            
            <Tooltip content={<CustomTooltip />} />
            
            <Area
              type="monotone"
              dataKey="price"
              stroke="#2563eb"
              fill="url(#colorPrice)"
              strokeWidth={2}
            />
            
            <Line
              type="monotone"
              dataKey="price"
              stroke="#2563eb"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4, stroke: '#2563eb', strokeWidth: 2, fill: '#fff' }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* نمودار حجم معاملات */}
      <div className="h-20">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" horizontal={false} />
            <XAxis 
              dataKey="time"
              axisLine={false}
              tickLine={false}
              tick={false}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={false}
              width={0}
            />
            <Area
              type="monotone"
              dataKey="volume"
              stroke="#10b981"
              fill="#10b981"
              fillOpacity={0.3}
              strokeWidth={1}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

     
      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex justify-between text-sm text-gray-600">
          <div className="text-left">
            <span className="font-medium">بالاترین:</span>{" "}
            {Math.max(...chartData.map(d => d.price)).toLocaleString('en-US')} $
          </div>
          <div className="text-right">
            <span className="font-medium">پایین‌ترین:</span>{" "}
            {Math.min(...chartData.map(d => d.price)).toLocaleString('en-US')} $
          </div>
        </div>
      </div>
    </div>
  );
}