import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function WetDryChart({ summary }) {
  const chartData = [
    {
      group: "Wettest 10",
      rainfall: summary.top10_rain_avg_mm,
      production: summary.top10_prod_avg_tonnes / 1000000,
    },
    {
      group: "Driest 10",
      rainfall: summary.bot10_rain_avg_mm,
      production: summary.bot10_prod_avg_tonnes / 1000000,
    },
  ];

  return (
    <section className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-stone-900">
          Wettest vs Driest Years
        </h2>

        <p className="mt-1 text-sm text-stone-500">
          Average rainfall and cereal production across the 10 wettest
          and 10 driest years.
        </p>
      </div>

      <div className="h-85">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{
              top: 10,
              right: 10,
              left: 0,
              bottom: 10,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#e7e5e4"
            />

            <XAxis
              dataKey="group"
              tick={{ fontSize: 12 }}
              tickLine={false}
            />

            <YAxis
              yAxisId="rainfall"
              tick={{ fontSize: 12 }}
              tickLine={false}
              axisLine={false}
              label={{
                value: "Rainfall (mm)",
                angle: -90,
                position: "insideLeft",
              }}
            />

            <YAxis
              yAxisId="production"
              orientation="right"
              tick={{ fontSize: 12 }}
              tickLine={false}
              axisLine={false}
              label={{
                value: "Production (Mt)",
                angle: 90,
                position: "insideRight",
              }}
            />

            <Tooltip
              contentStyle={{
                borderRadius: "12px",
                border: "1px solid #e7e5e4",
              }}
              formatter={(value, name) => {
                if (name === "Production") {
                  return [`${value.toFixed(2)} Mt`, name];
                }

                return [`${value.toFixed(1)} mm`, name];
              }}
            />

            <Bar
              yAxisId="rainfall"
              dataKey="rainfall"
              name="Rainfall"
              fill="#2563eb"
              radius={[6, 6, 0, 0]}
            />

            <Bar
              yAxisId="production"
              dataKey="production"
              name="Production"
              fill="#047857"
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

export default WetDryChart;