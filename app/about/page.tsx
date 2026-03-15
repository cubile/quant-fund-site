export default function AboutPage() {
  return (
    <div className="container-page space-y-10">
      <header className="space-y-3 pt-4">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-400">
          About the firm
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          A research-focused quantitative investment operation.
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-neutral-400">
          The firm is dedicated to building systematic investment programs informed by empirical
          research, volatility analysis, and rigorous portfolio risk management. The objective is to
          create resilient return streams that are not dependent on a single market outcome.
        </p>
      </header>

      <section className="grid gap-10 pb-8 md:grid-cols-3">
        <div className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-300">
            Quantitative research
          </h2>
          <p className="text-sm leading-relaxed text-neutral-400">
            Research focuses on statistical market models, volatility term structure behavior, and
            scenario analysis across macro and micro regimes. The emphasis is on explainability,
            robustness to model error, and careful validation on out-of-sample data.
          </p>
        </div>
        <div className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-300">
            Systematic implementation
          </h2>
          <p className="text-sm leading-relaxed text-neutral-400">
            Investment models are implemented in a fully systematic manner, using pre-defined rules
            and parameter governance. This reduces behavioral bias and supports consistent
            execution through different market environments.
          </p>
        </div>
        <div className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-300">
            Risk discipline
          </h2>
          <p className="text-sm leading-relaxed text-neutral-400">
            Portfolio construction incorporates diversification across volatility regimes,
            instrument types, and time horizons. Risk limits, drawdown thresholds, and stress
            testing frameworks are central to the ongoing risk review process.
          </p>
        </div>
      </section>
    </div>
  );
}

