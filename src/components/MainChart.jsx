import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceArea,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function MainChart({ data }) {
  const droughtYears = data
    .filter((item) => item.drought)
    .map((item) => item.year);

  return (
    <section className="mx-auto max-w-7xl px-6 py-4">
      <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-stone-900">
            Annual Rainfall & Cereal Production
          </h2>

          <p className="mt-1 text-sm text-stone-500">
            Annual precipitation and cereal production in Syria, 1963–2024
          </p>
        </div>

        <div className="h-105">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 10,
                right: 20,
                left: 10,
                bottom: 10,
              }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#e7e5e4"
              />

              <XAxis
                dataKey="year"
                tick={{ fontSize: 12 }}
                tickLine={false}
              />

              <YAxis
                yAxisId="rain"
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
                tickFormatter={(value) => `${value}M`}
                label={{
                  value: "Production (Mt)",
                  angle: 90,
                  position: "insideRight",
                }}
              />

              {droughtYears.map((year) => (
                <ReferenceArea
                  key={year}
                  x1={year - 0.5}
                  x2={year + 0.5}
                  yAxisId="rain"
                  fill="#fef3c7"
                  fillOpacity={0.35}
                />
              ))}

              <Tooltip
                contentStyle={{
                  borderRadius: "12px",
                  border: "1px solid #e7e5e4",
                }}
                formatter={(value, name) => {
                  if (name === "Production") {
                    return [
                      `${(value / 1000000).toFixed(2)} Mt`,
                      name,
                    ];
                  }

                  return [`${value.toFixed(1)} mm`, name];
                }}
              />

              <Line
                yAxisId="rain"
                type="monotone"
                dataKey="rain_mm"
                name="Rainfall"
                stroke="#2563eb"
                strokeWidth={2}
                dot={false}
              />

              <Line
                yAxisId="production"
                type="monotone"
                dataKey="production_t"
                name="Production"
                stroke="#047857"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 flex items-center gap-5 text-xs text-stone-500">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
            Rainfall
          </div>

          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-700" />
            Cereal production
          </div>

          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-sm bg-amber-100" />
            Drought year
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainChart;