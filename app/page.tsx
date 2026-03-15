import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { EquityChart } from '@/components/EquityChart';

export default function HomePage() {
  return (
    <div className="container-page space-y-20">
      <Hero />

      <section className="space-y-6">
        <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-neutral-400">
          High-level portfolio statistics (simulated)
        </h2>
        <Stats />
      </section>

      <section className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-start">
        <div className="space-y-4 rounded-2xl border border-[#1f1f1f] bg-[#111111] p-6">
          <div className="flex items-center justify-between text-xs text-[#9ca3af]">
            <span>Simulated Equity Curve</span>
            <span>Volatility-aware systematic portfolio</span>
          </div>
          <EquityChart />
        </div>
        <div className="space-y-6">
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-white">
              Research-led, implementation-aware
            </h3>
            <p className="max-w-xl text-sm leading-relaxed text-[#9ca3af]">
              The firm focuses on systematic derivatives strategies that seek to harvest volatility
              and risk premia across market regimes. Emphasis is placed on robust statistical
              modeling, conservative assumptions, and a disciplined research review process.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-white">
              Institutional risk and portfolio safeguards
            </h3>
            <p className="max-w-xl text-sm leading-relaxed text-[#9ca3af]">
              Portfolio construction is guided by quantitative risk constraints, scenario analysis,
              and explicit drawdown thresholds. Implementation is fully systematic, with monitoring
              focused on model stability, liquidity conditions, and adherence to risk budgets.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-16 lg:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-white">
            Research philosophy
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-[#9ca3af]">
            Research is grounded in statistical modeling, volatility dynamics, and scenario
            analysis. The aim is to design systematic derivatives portfolios that express a
            diversified set of volatility-aware views while maintaining transparency, governance,
            and clear model documentation.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-white">
            Risk management framework
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-[#9ca3af]">
            The risk framework emphasizes diversification across regimes, predefined exposure and
            drawdown limits, and regular stress testing. The objective is to maintain a stable risk
            profile over time rather than maximize short-term returns, aligning the program with
            institutional standards.
          </p>
        </div>
      </section>
    </div>
  );
}
