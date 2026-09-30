import Hero from "./components/Hero";
import KpiCards from "./components/KpiCards";
import MainChart from "./components/MainChart";
import WetDryChart from "./components/WetDryChart";
import RecoveryChart from "./components/RecoveryChart";
import Insights from "./components/Insights";
import Footer from "./components/Footer";

import dashboardData from "./data/dashboard.json";

function App() {
  const {
    summary_stats,
    timeseries_data,
    drought_recovery_comparison,
  } = dashboardData;

  const summary = {
    drought_threshold_mm: 260.2,
    drought_years: 13,
    top10_rain_avg_mm: summary_stats.top10_rain_avg_mm,
    bot10_rain_avg_mm: summary_stats.bot10_rain_avg_mm,
    top10_prod_avg_tonnes: summary_stats.top10_prod_avg_tonnes,
    bot10_prod_avg_tonnes: summary_stats.bot10_prod_avg_tonnes,
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <Hero />

      <KpiCards summary={summary} />

      <MainChart data={timeseries_data} />

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-4 lg:grid-cols-2 lg:px-8">
        <WetDryChart summary={summary} />

        <RecoveryChart
          recovery={drought_recovery_comparison}
        />
      </section>

      <Insights />

      <Footer />
    </div>
  );
}

export default App;