import React from 'react';
import { ArrowUpCircle, ArrowDownCircle } from 'lucide-react';

const ExtremesTable = ({ topWettest, bottomDriest }) => {
    if (!topWettest || !bottomDriest) return null;

    return (
        <div className="w-full max-w-7xl mx-auto p-4 mt-6">
            <div className="bg-cardBg p-6 rounded-2xl border border-borderColor shadow-sm">

                <div className="text-center mb-8 pb-4 border-b border-borderColor">
                    <h2 className="text-xl sm:text-2xl font-bold text-textMain mb-1">
                        Historical Extremes (Top 10 Wettest vs Driest Years)
                    </h2>
                    <p className="text-xs sm:text-sm text-textMuted max-w-2xl mx-auto">
                        Detailed breakdown of the 10 highest rainfall years versus the 10 lowest rainfall years recorded (1963–2024).
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    <div className="space-y-4">
                        <div className="flex items-center justify-center gap-2 p-3 bg-emerald-50 rounded-xl border border-emerald-100 text-emerald-800">
                            <ArrowUpCircle className="w-5 h-5 text-primaryGreen" />
                            <h3 className="font-bold text-sm">Top 10 Wettest Years</h3>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-center">
                                <thead className="text-xs text-textMuted uppercase bg-stone-50 border-b border-borderColor">
                                    <tr>
                                        <th className="py-2.5 px-3">#</th>
                                        <th className="py-2.5 px-3">Year</th>
                                        <th className="py-2.5 px-3">Rainfall</th>
                                        <th className="py-2.5 px-3">Production</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-borderColor">
                                    {topWettest.map((item, idx) => (
                                        <tr key={idx} className="hover:bg-stone-50/50 transition-colors">
                                            <td className="py-2.5 px-3 font-semibold text-textMuted text-xs">{idx + 1}</td>
                                            <td className="py-2.5 px-3 font-bold text-textMain">{item.year}</td>
                                            <td className="py-2.5 px-3 font-semibold text-chartRain">{item.rain_mm} mm</td>
                                            <td className="py-2.5 px-3 text-primaryGreen font-medium">
                                                {(Number(item.production_t || item.production_tonnes || 0) / 1000000).toFixed(2)}M t
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center justify-center gap-2 p-3 bg-amber-50 rounded-xl border border-amber-100 text-amber-800">
                            <ArrowDownCircle className="w-5 h-5 text-amber-600" />
                            <h3 className="font-bold text-sm">Top 10 Driest Years</h3>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-center">
                                <thead className="text-xs text-textMuted uppercase bg-stone-50 border-b border-borderColor">
                                    <tr>
                                        <th className="py-2.5 px-3">#</th>
                                        <th className="py-2.5 px-3">Year</th>
                                        <th className="py-2.5 px-3">Rainfall</th>
                                        <th className="py-2.5 px-3">Production</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-borderColor">
                                    {bottomDriest.map((item, idx) => (
                                        <tr key={idx} className="hover:bg-stone-50/50 transition-colors">
                                            <td className="py-2.5 px-3 font-semibold text-textMuted text-xs">{idx + 1}</td>
                                            <td className="py-2.5 px-3 font-bold text-textMain">{item.year}</td>
                                            <td className="py-2.5 px-3 font-semibold text-amber-700">{item.rain_mm} mm</td>
                                            <td className="py-2.5 px-3 text-stone-600 font-medium">
                                                {(Number(item.production_t || item.production_tonnes || 0) / 1000000).toFixed(2)}M t
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ExtremesTable;