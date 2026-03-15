import { Stats } from '@/components/Stats';

export default function PerformancePage() {
  return (
    <div className="space-y-12">
      <header className="container-page space-y-3 pt-4">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-400">
          Performance profile
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          High-level portfolio behavior, not trade-by-trade detail.
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-neutral-400">
          The statistics and information shown below are for illustrative purposes only and are
          designed to approximate the behavior of a diversified, volatility-aware systematic
          derivatives portfolio. They are not live results, and do not represent an offer or
          guarantee of future performance.
        </p>
      </header>

      <section className="container-page space-y-10 pb-10">
        <Stats />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3 rounded-2xl border border-[#1f1f1f] bg-[#111111] p-5">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-300">
              Low Risk Strategy
            </h2>
            <dl className="space-y-2 text-sm text-neutral-300">
              <div className="flex justify-between">
                <dt className="text-neutral-500">Total Trades</dt>
                <dd>107</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-neutral-500">Win Rate</dt>
                <dd>18%</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-neutral-500">Net Profit</dt>
                <dd>-24,306,235</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-neutral-500">Max Drawdown</dt>
                <dd>-24,255,682</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-neutral-500">Profit Factor</dt>
                <dd>0.10</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-neutral-500">Expectancy</dt>
                <dd>-227,161</dd>
              </div>
            </dl>
          </div>

          <div className="space-y-3 rounded-2xl border border-[#1f1f1f] bg-[#111111] p-5">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-300">
              Mid Risk Strategy
            </h2>
            <dl className="space-y-2 text-sm text-neutral-300">
              <div className="flex justify-between">
                <dt className="text-neutral-500">Total Trades</dt>
                <dd>107</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-neutral-500">Win Rate</dt>
                <dd>81%</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-neutral-500">Net Profit</dt>
                <dd>21,113,834</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-neutral-500">Max Drawdown</dt>
                <dd>-1,403,303</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-neutral-500">Profit Factor</dt>
                <dd>4.86</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-neutral-500">Expectancy</dt>
                <dd>197,325</dd>
              </div>
            </dl>
          </div>

          <div className="space-y-3 rounded-2xl border border-[#1f1f1f] bg-[#111111] p-5">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-300">
              High Risk Strategy
            </h2>
            <dl className="space-y-2 text-sm text-neutral-300">
              <div className="flex justify-between">
                <dt className="text-neutral-500">Total Trades</dt>
                <dd>107</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-neutral-500">Win Rate</dt>
                <dd>78%</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-neutral-500">Net Profit</dt>
                <dd>11,766,371</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-neutral-500">Max Drawdown</dt>
                <dd>-629,036</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-neutral-500">Profit Factor</dt>
                <dd>4.57</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-neutral-500">Expectancy</dt>
                <dd>109,966</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}

