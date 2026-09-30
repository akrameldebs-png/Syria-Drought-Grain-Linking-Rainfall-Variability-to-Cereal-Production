import { CloudRain, Wheat, Droplets } from "lucide-react";

function Card({ icon: Icon, title, value, text }) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between text-sm text-stone-500">
        <span>{title}</span>
        <Icon size={20} className="text-emerald-700" />
      </div>

      <h3 className="mt-4 text-3xl font-bold text-stone-900">
        {value}
      </h3>

      <p className="mt-1 text-sm text-stone-500">
        {text}
      </p>
    </div>
  );
}

function KpiCards({ summary }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card
          icon={CloudRain}
          title="Drought Threshold"
          value={`${summary.drought_threshold_mm.toFixed(1)} mm`}
          text="20th percentile of annual rainfall"
        />

        <Card
          icon={Droplets}
          title="Drought Years"
          value={summary.drought_years}
          text="identified during the study period"
        />

        <Card
          icon={CloudRain}
          title="Wettest 10"
          value={`${summary.top10_rain_avg_mm.toFixed(1)} mm`}
          text="average annual rainfall"
        />

        <Card
          icon={Wheat}
          title="Driest 10"
          value={`${summary.bottom10_rain_avg_mm.toFixed(1)} mm`}
          text="average annual rainfall"
        />
      </div>
    </section>
  );
}

export default KpiCards;