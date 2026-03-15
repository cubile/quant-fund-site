const stats = [
  { label: "Annual Return", value: "14.2%" },
  { label: "Sharpe Ratio", value: "1.45" },
  { label: "Maximum Drawdown", value: "-9.8%" },
  { label: "Years of Research", value: "3+" }
];

export function Stats() {
  return (
    <dl className="grid grid-cols-1 gap-6 text-sm text-neutral-300 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="space-y-2 rounded-2xl border border-[#1f1f1f] bg-[#111111] p-5 transition-colors duration-200 hover:border-accent/70"
        >
          <dd className="text-2xl font-semibold text-white">
            {stat.value}
          </dd>

          <dt className="text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-500">
            {stat.label}
          </dt>
        </div>
      ))}
    </dl>
  );
}