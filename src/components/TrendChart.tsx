import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface TrendChartProps {
  keyword: string;
}

function TrendChart({ keyword }: TrendChartProps) {
  // Sample data - in a real app, this would come from an API
  const data = Array.from({ length: 60 }, (_, i) => ({
    month: new Date(2019, i % 12, 1).toLocaleString('default', { month: 'short' }),
    value: 50 + Math.sin(i * 0.5) * 30 + Math.random() * 20,
  }));

  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis
            dataKey="month"
            tick={{ fill: '#6B7280' }}
            tickLine={{ stroke: '#E5E7EB' }}
          />
          <YAxis
            tick={{ fill: '#6B7280' }}
            tickLine={{ stroke: '#E5E7EB' }}
            label={{ value: 'Interest Over Time', angle: -90, position: 'insideLeft', fill: '#6B7280' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #E5E7EB',
              borderRadius: '8px',
              padding: '8px',
            }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#4F46E5"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6, fill: '#4F46E5' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TrendChart;