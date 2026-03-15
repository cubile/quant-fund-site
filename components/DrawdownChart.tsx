"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';

const data = Array.from({ length: 48 }).map((_, idx) => {
  const month = idx + 1;
  const cyclical = -Math.abs(4 * Math.sin(month / 4));
  const floor = -12;
  const dd = Math.max(cyclical, floor);
  return { month: `M${month}`, drawdown: Number(dd.toFixed(2)) };
});

export function DrawdownChart() {
  return (
    <div className="w-full h-[260px] sm:h-[320px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ left: -28, right: 0, top: 8, bottom: 0 }}>
          <defs>
            <linearGradient id="ddGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ef4444" stopOpacity={0.7} />
              <stop offset="100%" stopColor="#ef4444" stopOpacity={0} />
            </linearGradient>
          </defs>
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
            domain={[-15, 0]}
            tickFormatter={(v: number) => `${v}%`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#020617',
              borderRadius: 8,
              border: '1px solid #1f2937',
              fontSize: 11
            }}
            labelStyle={{ color: '#9ca3af' }}
            formatter={(value: number) => [`${value.toFixed(2)}%`, 'Drawdown']}
          />
          <Area
            type="monotone"
            dataKey="drawdown"
            stroke="#ef4444"
            strokeWidth={1.5}
            fill="url(#ddGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

