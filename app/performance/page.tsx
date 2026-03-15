import { Stats } from '@/components/Stats';

export default function PerformancePage() {
  return (
    <div className="space-y-12">
      <header className="container-page space-y-3 pt-4">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-400">
          Performance profile
        </p>

        <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Quantitative strategy analytics and portfolio behavior
        </h1>

        <p className="max-w-2xl text-sm leading-relaxed text-neutral-400">
          The statistics and analytics below illustrate the structural characteristics
          of systematic derivatives strategies including profitability distribution,
          regression behavior, and higher moment statistics. These are illustrative
          portfolio analytics and do not represent live trading results.
        </p>
      </header>

      <section className="container-page space-y-10 pb-10">

        <Stats />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

          {/* MID RISK STRATEGY */}

          <div className="space-y-3 rounded-2xl border border-[#1f1f1f] bg-[#111111] p-6">
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
                <dd>2,11,13,834</dd>
              </div>

              <div className="flex justify-between">
                <dt className="text-neutral-500">Max Drawdown</dt>
                <dd>-14,03,303</dd>
              </div>

              <div className="flex justify-between">
                <dt className="text-neutral-500">Profit Factor</dt>
                <dd>4.86</dd>
              </div>

              <div className="flex justify-between">
                <dt className="text-neutral-500">Expectancy</dt>
                <dd>1,97,325</dd>
              </div>
            </dl>
          </div>


          {/* HIGH RISK STRATEGY */}

          <div className="space-y-3 rounded-2xl border border-[#1f1f1f] bg-[#111111] p-6">
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
                <dd>1,17,66,371</dd>
              </div>

              <div className="flex justify-between">
                <dt className="text-neutral-500">Max Drawdown</dt>
                <dd>-6,29,036</dd>
              </div>

              <div className="flex justify-between">
                <dt className="text-neutral-500">Profit Factor</dt>
                <dd>4.57</dd>
              </div>

              <div className="flex justify-between">
                <dt className="text-neutral-500">Expectancy</dt>
                <dd>1,09,966</dd>
              </div>
            </dl>
          </div>


          {/* QUANT ANALYTICS PANEL */}

          <div className="space-y-4 rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f] p-6">

            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-300">
              Quant Analytics
            </h2>

            <dl className="space-y-3 text-sm text-neutral-300">

              <div className="flex justify-between">
                <dt className="text-neutral-500">Linear Regression α</dt>
                <dd>0.27</dd>
              </div>

              <div className="flex justify-between">
                <dt className="text-neutral-500">Linear Regression β</dt>
                <dd>0.84</dd>
              </div>

              <div className="flex justify-between">
                <dt className="text-neutral-500">Return Skewness</dt>
                <dd>-0.41</dd>
              </div>

              <div className="flex justify-between">
                <dt className="text-neutral-500">Return Kurtosis</dt>
                <dd>3.72</dd>
              </div>

              <div className="flex justify-between">
                <dt className="text-neutral-500">Annual Volatility</dt>
                <dd>11.8%</dd>
              </div>

              <div className="flex justify-between">
                <dt className="text-neutral-500">Sharpe Ratio</dt>
                <dd>1.45</dd>
              </div>

            </dl>
          </div>

        </div>
      </section>
    </div>
  );
}