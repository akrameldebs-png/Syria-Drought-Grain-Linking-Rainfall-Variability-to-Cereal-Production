import React, { useState } from 'react';
import { ResponsiveContainer, ComposedChart, Line, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import { BarChart2 } from 'lucide-react';

const MainTimeseriesChart = ({ data }) => {
    const [showRain, setShowRain] = useState(true);
    const [showProd, setShowProd] = useState(true);

    if (!data || data.length === 0) return null;

    return (
        <div className="w-full max-w-7xl mx-auto p-4 mt-6">
            <div className="bg-cardBg p-6 rounded-2xl border border-borderColor shadow-sm">

                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6 pb-4 border-b border-borderColor text-center sm:text-left">
                    <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-emerald-50 text-primaryGreen rounded-xl">
                            <BarChart2 className="w-6 h-6" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-textMain">Rainfall vs Production Time Series (1963 - 2024)</h2>
                            <p className="text-xs text-textMuted mt-0.5">Comparative analysis of annual rainfall (mm) and crop production (tonnes)</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            onClick={() => setShowRain(!showRain)}
                            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${showRain ? 'bg-chartRain text-white shadow-sm' : 'bg-stone-100 text-textMuted'
                                }`}
                        >
                            Rainfall (mm)
                        </button>
                        <button
                            type="button"
                            onClick={() => setShowProd(!showProd)}
                            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${showProd ? 'bg-primaryGreen text-white shadow-sm' : 'bg-stone-100 text-textMuted'
                                }`}
                        >
                            Production (Tonnes)
                        </button>
                    </div>
                </div>

                <div className="h-80 sm:h-96 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <ComposedChart data={data} margin={{ top: 10, right: 20, left: 20, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" vertical={false} />
                            <XAxis dataKey="year" stroke="#78716c" tick={{ fontSize: 12 }} />

                            <YAxis yAxisId="left" orientation="left" stroke="#2563eb" domain={[0, 'auto']} />

                            <YAxis
                                yAxisId="right"
                                orientation="right"
                                stroke="#047857"
                                domain={[0, 'auto']}
                                tickFormatter={(val) => `${(val / 1000000).toFixed(1)}M`}
                            />

                            <Tooltip
                                contentStyle={{ backgroundColor: '#ffffff', borderRadius: '12px', borderColor: '#e7e5e4', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}
                                formatter={(value, name) => [
                                    name === 'Production (Tonnes)' ? `${(Number(value) / 1000000).toFixed(2)}M Tonnes` : `${value} mm`,
                                    name
                                ]}
                            />
                            <Legend verticalAlign="top" height={36} />

                            {showRain && (
                                <Bar
                                    yAxisId="left"
                                    dataKey="rain_mm"
                                    name="Rainfall (mm)"
                                    fill="#2563eb"
                                    radius={[4, 4, 0, 0]}
                                    opacity={0.75}
                                />
                            )}
                            {showProd && (
                                <Line
                                    yAxisId="right"
                                    type="monotone"
                                    dataKey="production_t"
                                    name="Production (Tonnes)"
                                    stroke="#047857"
                                    strokeWidth={3}
                                    dot={false}
                                    connectNulls={true}
                                />
                            )}
                        </ComposedChart>
                    </ResponsiveContainer>
                </div>

            </div>
        </div>
    );
};

export default MainTimeseriesChart;