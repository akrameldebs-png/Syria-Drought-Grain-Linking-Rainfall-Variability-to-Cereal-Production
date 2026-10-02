import React from 'react';


const FutureOutlook = () => {
    return (
        <div className="w-full max-w-7xl mx-auto p-4 mt-6 mb-8">
            <div className="bg-cardBg p-6 sm:p-8 rounded-2xl border border-borderColor shadow-sm relative overflow-hidden">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

                <div className="text-center pb-6 border-b border-borderColor">
                    
                    <h2 className="text-xl sm:text-3xl font-extrabold text-textMain mb-2">
                        Future Horizons: Scaling into AI Predictive Models
                    </h2>
                    
                </div>

                <div className="my-6 p-5 sm:p-6 bg-stone-50 rounded-2xl border border-borderColor flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                    
                    <div className="space-y-1">
                        <h3 className="text-base font-bold text-textMain">
                            Research Core as an AI Dataset Seed
                        </h3>
                        <p className="text-xs sm:text-sm text-textMuted leading-relaxed">
                            The engineered features (such as 5-year smooth rainfall, anomaly percentages, and historical recovery dynamics) provide the essential ground-truth input required to train predictive algorithms for proactive decision-making.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

                    <div className="p-5 bg-white rounded-xl border border-borderColor hover:border-emerald-300 transition-all shadow-2xs space-y-3">
                        
                        <h4 className="font-bold text-sm text-textMain">Drought Early Warning Prediction</h4>
                        <p className="text-xs text-textMuted leading-normal">
                            Training Time-Series & LSTM models to predict drought cycles 3–6 months ahead, giving policymakers time to implement water-saving strategies.
                        </p>
                    </div>

                    <div className="p-5 bg-white rounded-xl border border-borderColor hover:border-emerald-300 transition-all shadow-2xs space-y-3">
                        
                        <h4 className="font-bold text-sm text-textMain">Yield Forecasting Models</h4>
                        <p className="text-xs text-textMuted leading-normal">
                            Predicting national and regional crop production (tonnes/ha) prior to harvest by analyzing early-season precipitation and satellite soil moisture.
                        </p>
                    </div>

                    <div className="p-5 bg-white rounded-xl border border-borderColor hover:border-emerald-300 transition-all shadow-2xs space-y-3 sm:col-span-2 lg:col-span-1">
                        
                        <h4 className="font-bold text-sm text-textMain">Precision Agricultural Action</h4>
                        <p className="text-xs text-textMuted leading-normal">
                            Integrating high-resolution GIS spatial layers (Sentinel-2) to deliver localized seed selection and irrigation advice directly to farmers.
                        </p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default FutureOutlook;