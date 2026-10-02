import React from 'react';
import { AlertTriangle, RefreshCw, Zap, ShieldAlert } from 'lucide-react';

const DroughtRecovery = ({ recoveryData }) => {
    if (!recoveryData) return null;

    return (
        <div className="w-full max-w-7xl mx-auto p-4 mt-6">
            <div className="bg-cardBg p-6 rounded-2xl border border-borderColor shadow-sm">

                <div className="text-center mb-8 pb-4 border-b border-borderColor">
                    <div className="inline-flex items-center justify-center p-2.5 bg-amber-50 text-amber-600 rounded-xl mb-3">
                        
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-textMain mb-1">
                        Drought Impact & Recovery Analysis
                    </h2>
                    <p className="text-xs sm:text-sm text-textMuted max-w-2xl mx-auto">
                        Comparing production loss and recovery resilience between single-year droughts and consecutive multi-year droughts.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

                    <div className="p-5 rounded-2xl bg-amber-50/50 border border-amber-200/60 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-xs font-bold text-amber-800 uppercase tracking-wider px-2.5 py-1 justify-center text-center">
                                    Single Year Drought
                                </span>
                                
                            </div>
                            <p className="text-sm text-stone-600 mb-4 ">
                                Immediate production hit during a single isolated drought year.
                            </p>
                        </div>

                        <div className="space-y-3 pt-3 border-t border-amber-200/50">
                            <div className="flex justify-between items-center">
                                <span className="text-xs text-textMuted">Avg Production Drop:</span>
                                <span className="text-base font-bold text-amber-700">
                                    {recoveryData.single_year_drought?.avg_drop_pct || '44.9'}%
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-xs text-textMuted">Post-Drought Recovery:</span>
                                <span className="text-base font-bold text-emerald-700">
                                    +{recoveryData.single_year_drought?.avg_recovery_pct || '82.1'}%
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="p-5 rounded-2xl bg-red-50/40 border border-red-200/60 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-xs font-bold text-red-800 uppercase tracking-wider px-2.5 py-1 ">
                                    Multi Year Consecutive Drought
                                </span>
                                
                            </div>
                            <p className="text-sm text-stone-600 mb-4">
                                Compounded damage across back-to-back drought years.
                            </p>
                        </div>

                        <div className="space-y-3 pt-3 border-t border-red-200/50">
                            <div className="flex justify-between items-center">
                                <span className="text-xs text-textMuted">Compounded Production Drop:</span>
                                <span className="text-base font-bold text-red-700">
                                    {recoveryData.multi_year_drought?.avg_drop_pct || '56.7'}%
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-xs text-textMuted">Post-Drought Recovery:</span>
                                <span className="text-base font-bold text-emerald-700">
                                    +{recoveryData.multi_year_drought?.avg_recovery_pct || '41.3'}%
                                </span>
                            </div>
                        </div>
                    </div>

                </div>

                {recoveryData.historic_events && (
                    <div className="bg-stone-50 p-4 rounded-xl border border-borderColor">
                        <h3 className="text-xs font-bold text-textMuted uppercase tracking-wider text-center mb-3">
                            Key Historical Drought Cycles
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-center">
                            {recoveryData.historic_events.map((event, idx) => (
                                <div key={idx} className="bg-white p-3 rounded-lg border border-borderColor shadow-2xs">
                                    <span className="text-xs font-semibold text-primaryGreen block mb-0.5">
                                        {event.period} ({event.type})
                                    </span>
                                    <span className="text-xs text-textMuted">
                                        {event.description}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default DroughtRecovery;