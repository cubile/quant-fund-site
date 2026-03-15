"use client";

import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid
} from 'recharts';

const data = Array.from({ length: 48 }).map((_, idx) => {
  const month = idx + 1;
  const base = 100;
  const drift = 0.35 * month;
  const cyclical = 3 * Math.sin(month / 3);
  const equity = base + drift + cyclical;
  return { month: `M${month}`, equity: Number(equity.toFixed(2)) };
});

export function EquityChart() {
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ left: -28, right: 0, top: 8, bottom: 0 }}>
          <CartesianGrid stroke="#1f2937" strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tick={{ fill: '#6b7280', fontSize: 10 }}
            interval={5}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tick={{ fill: '#6b7280', fontSize: 10 }}
            domain={['dataMin - 5', 'dataMax + 5']}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#020617',
              borderRadius: 8,
              border: '1px solid #1f2937',
              fontSize: 11
            }}
            labelStyle={{ color: '#9ca3af' }}
            formatter={(value: number) => [`${value.toFixed(2)}`, 'Equity (index)']}
          />
          <Line
            type="monotone"
            dataKey="equity"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4, strokeWidth: 0 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

