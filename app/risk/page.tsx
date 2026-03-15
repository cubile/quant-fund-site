export default function RiskPage() {
  return (
    <div className="container-page space-y-10">
      <header className="space-y-3 pt-4">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-400">
          Risk management
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Institutional risk practices around derivatives portfolios.
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-neutral-400">
          Risk management is integrated into every stage of the research and implementation process.
          The framework is designed to manage exposure through changing volatility regimes and
          market conditions, with explicit attention to drawdowns and liquidity.
        </p>
      </header>

      <section className="grid gap-10 pb-10 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-300">
            Diversification across regimes
          </h2>
          <p className="text-sm leading-relaxed text-neutral-400">
            Portfolios are diversified across multiple volatility and market environments. The aim
            is to avoid dependence on a single regime, instead targeting exposures that can perform
            differently across quiet, transitional, and stressed conditions.
          </p>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-300">
            Position and exposure limits
          </h2>
          <p className="text-sm leading-relaxed text-neutral-400">
            Strict limits govern position sizes, gross and net exposure, and concentration by
            underlying or theme. These limits are defined quantitatively, reviewed periodically, and
            incorporated directly into portfolio implementation.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-300">
            Systematic drawdown control
          </h2>
          <p className="text-sm leading-relaxed text-neutral-400">
            The program incorporates predefined drawdown thresholds and response protocols, which
            may include scaling risk budgets or pausing certain portfolio components. The intention
            is to prioritize capital preservation and keep risk aligned with investor expectations.
          </p>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-300">
            Stress testing and scenarios
          </h2>
          <p className="text-sm leading-relaxed text-neutral-400">
            Scenario analysis and stress testing are used to evaluate portfolio behavior under
            adverse conditions, including volatility spikes, correlation shifts, and liquidity
            dislocations. These analyses inform limit setting and ongoing portfolio governance.
          </p>
        </div>
      </section>
    </div>
  );
}

