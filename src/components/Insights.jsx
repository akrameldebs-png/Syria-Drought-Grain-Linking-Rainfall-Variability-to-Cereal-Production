import {
  AlertTriangle,
  CloudRain,
  TrendingUp,
} from "lucide-react";

function Insight({ icon: Icon, title, children }) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
          <Icon size={20} />
        </div>

        <h3 className="font-semibold text-stone-900">
          {title}
        </h3>
      </div>

      <p className="mt-4 text-sm leading-6 text-stone-600">
        {children}
      </p>
    </div>
  );
}

function Insights() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-stone-900">
          Key Insights
        </h2>

        <p className="mt-1 text-sm text-stone-500">
          Selected findings from the historical rainfall and cereal
          production analysis.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Insight
          icon={CloudRain}
          title="Drought threshold"
        >
          Years with annual rainfall below 260.2 mm were classified as
          drought years, identifying 13 drought years in the study period.
        </Insight>

        <Insight
          icon={TrendingUp}
          title="Recovery varies"
        >
          Average yield recovery after single drought events was 44.9%
          across eight events. Recovery varied substantially between
          individual years.
        </Insight>

        <Insight
          icon={AlertTriangle}
          title="Rainfall is not the only factor"
        >
          The historical data show an association between rainfall
          variability and cereal production, but production also varies
          substantially in relatively wet years. Rainfall alone does not
          explain all production variability.
        </Insight>
      </div>
    </section>
  );
}

export default Insights;