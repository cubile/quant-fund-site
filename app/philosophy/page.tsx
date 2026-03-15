export default function PhilosophyPage() {
  return (
    <div className="container-page space-y-10">
      <header className="space-y-3 pt-4">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-400">
          Investment philosophy
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Quantitative, volatility-aware, and regime-conscious.
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-neutral-400">
          The philosophy centers on building systematic derivatives portfolios that are rooted in
          statistical evidence and volatility dynamics rather than narrative-driven views. The aim
          is to participate in long-term risk premia while respecting uncertainty and structural
          change.
        </p>
      </header>

      <section className="grid gap-10 pb-10 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-300">
            Statistical modeling
          </h2>
          <p className="text-sm leading-relaxed text-neutral-400">
            Research is grounded in statistical analysis of return distributions, tail behavior, and
            cross-sectional relationships. Models are evaluated on stability, out-of-sample
            robustness, and sensitivity to structural breaks, with an emphasis on avoiding
            overfitting.
          </p>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-300">
            Volatility risk premium
          </h2>
          <p className="text-sm leading-relaxed text-neutral-400">
            The firm views volatility as a core state variable and potential source of compensated
            risk. Portfolios are designed to engage with volatility risk premia in a controlled,
            diversified manner, rather than concentrating exposure in any single expression.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-300">
            Systematic derivatives portfolios
          </h2>
          <p className="text-sm leading-relaxed text-neutral-400">
            Portfolios are built from rules-based, repeatable processes that define how exposure is
            adjusted through time. The objective is to maintain a coherent framework for allocating
            risk to derivatives across different volatility and market regimes, while keeping
            implementation transparent and auditable.
          </p>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-300">
            Regime-aware adjustments
          </h2>
          <p className="text-sm leading-relaxed text-neutral-400">
            Rather than attempting to forecast precise market moves, the research framework focuses
            on identifying broad regime characteristics—such as volatility level, dispersion, and
            trend conditions—and adjusting portfolio risk budgets accordingly within predefined
            limits.
          </p>
        </div>
      </section>
    </div>
  );
}

