import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function RecoveryChart({ recovery }) {
  const chartData = [
    {
      type: "Single drought",
      recovery: recovery.avg_single_drought_yield_recovery_pct,
      events: recovery.total_single_drought_events,
    },
    {
      type: "Consecutive drought",
      recovery: recovery.avg_consecutive_drought_yield_recovery_pct,
      events: recovery.total_consecutive_drought_spells,
    },
  ];

  return (
    <section className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-stone-900">
          Yield Recovery After Drought
        </h2>

        <p className="mt-1 text-sm text-stone-500">
          Average yield recovery in the year following drought events.
        </p>
      </div>

      <div className="h-85">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{
              top: 10,
              right: 20,
              left: 0,
              bottom: 10,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#e7e5e4"
            />

            <XAxis
              dataKey="type"
              tick={{ fontSize: 12 }}
              tickLine={false}
            />

            <YAxis
              tick={{ fontSize: 12 }}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}%`}
            />

            <Tooltip
              contentStyle={{
                borderRadius: "12px",
                border: "1px solid #e7e5e4",
              }}
              formatter={(value, name, item) => {
                if (name === "Recovery") {
                  return [
                    `${value.toFixed(1)}%`,
                    `Average recovery (${item.payload.events} events)`,
                  ];
                }

                return [value, name];
              }}
            />

            <Bar
              dataKey="recovery"
              name="Recovery"
              fill="#047857"
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <p className="mt-4 text-xs leading-5 text-stone-500">
        Recovery averages are descriptive for this sample. Consecutive
        drought results are based on only two drought spells.
      </p>
    </section>
  );
}

export default RecoveryChart;