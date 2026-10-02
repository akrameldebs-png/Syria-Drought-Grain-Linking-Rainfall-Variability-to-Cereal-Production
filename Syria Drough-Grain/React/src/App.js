import React from 'react';
import data from './data.json';
import Hero from './components/Hero';
import SummaryCards from './components/SummaryCards';
import MainTimeseriesChart from './components/MainTimeseriesChart';
import DroughtRecovery from './components/DroughtRecovery';
import ExtremesTable from './components/ExtremesTable';
import DataFilterTable from './components/DataFilterTable';
import KeyInsights from './components/KeyInsights';
import FutureOutlook from './components/FutureOutlook';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-bgMain py-10 px-4 text-center" dir="ltr">

      <main>
        <Hero />
        <SummaryCards stats={data.summary_stats} />
        <MainTimeseriesChart data={data.timeseries_data}/>
        <DroughtRecovery recoveryData={data.drought_recovery_comparison}/>
        <ExtremesTable topWettest={data.top_10_wettest} bottomDriest={data.bottom_10_driest}/>
        <DataFilterTable data={data.timeseries_data}/>
        <KeyInsights />
        <FutureOutlook />
        <Footer />
      </main>
    </div>
  );
}

export default App;

