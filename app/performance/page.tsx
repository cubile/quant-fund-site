import { EquityChart } from '@/components/EquityChart';
import { DrawdownChart } from '@/components/DrawdownChart';
import { Stats } from '@/components/Stats';

export default function PerformancePage() {
  return (
    <div className="space-y-12">
      <header className="container-page space-y-3 pt-4">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-400">
          Simulated performance profile
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          High-level portfolio behavior, not trade-by-trade detail.
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-neutral-400">
          The charts and statistics shown below are for illustrative purposes only and are based on
          simulated data series designed to approximate a diversified, volatility-aware systematic
          derivatives portfolio. They are not live results, and do not represent an offer or
          guarantee of future performance.
        </p>
      </header>

      <section className="container-page">
        <Stats />
      </section>

      <section className="container-page grid gap-8 pb-10 lg:grid-cols-2">
        <div className="space-y-4 rounded-2xl border border-neutral-800 bg-black/40 p-5">
          <div className="flex items-center justify-between text-xs text-neutral-400">
            <span>Simulated Equity Curve</span>
            <span>Index level (gross of fees)</span>
          </div>
          <EquityChart />
        </div>
        <div className="space-y-4 rounded-2xl border border-neutral-800 bg-black/40 p-5">
          <div className="flex items-center justify-between text-xs text-neutral-400">
            <span>Simulated Drawdown</span>
            <span>Peak-to-trough (% from peak)</span>
          </div>
          <DrawdownChart />
        </div>
      </section>
    </div>
  );
}

