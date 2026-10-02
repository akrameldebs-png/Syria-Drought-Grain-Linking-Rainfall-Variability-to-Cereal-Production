import React from 'react';
import { CloudRain, Sprout, Calendar, TrendingDown, TrendingUp } from 'lucide-react';

const SummaryCards = ({ stats }) => {
    if (!stats) return null;

    return (
        <div className="w-full max-w-7xl mx-auto p-4 space-y-6">
            <div className="flex items-center justify-center gap-2 mb-4 text-center">
                <Calendar className="w-5 h-5 text-emerald-700" />
                <span className="text-base font-semibold text-textMuted uppercase tracking-wider">
                    Baseline Period: {stats.baseline_period}
                </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-cardBg p-5 rounded-2xl border border-borderColor shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center justify-center">
                    <div className="p-3 bg-blue-50 text-chartRain rounded-xl mb-3">
                        <CloudRain className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-medium text-textMuted mb-1">Baseline Rain Mean</span>
                    <div className="flex items-baseline justify-center gap-1">
                        <span className="text-3xl font-bold text-textMain">{stats.baseline_rain_mean_mm}</span>
                        <span className="text-sm text-textMuted">mm</span>
                    </div>
                </div>

                <div className="bg-cardBg p-5 rounded-2xl border border-borderColor shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center justify-center">
                    <div className="p-3 bg-emerald-50 text-primaryGreen rounded-xl mb-3">
                        <Sprout className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-medium text-textMuted mb-1">Baseline Production Mean</span>
                    <div className="flex items-baseline justify-center gap-1">
                        <span className="text-3xl font-bold text-textMain">
                            {(stats.baseline_prod_mean_tonnes / 1000000).toFixed(2)}M
                        </span>
                        <span className="text-sm text-textMuted">Tonnes</span>
                    </div>
                </div>

                <div className="bg-cardBg p-5 rounded-2xl border border-borderColor shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center justify-center">
                    <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl mb-3">
                        <TrendingUp className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-medium text-textMuted mb-1">Top 10 Wettest Years Avg</span>
                    <div className="flex items-baseline justify-center gap-1 mb-1">
                        <span className="text-3xl font-bold text-primaryGreen">{stats.top10_rain_avg_mm}</span>
                        <span className="text-sm text-textMuted">mm</span>
                    </div>
                    <p className="text-xs text-textMuted">
                        Avg Prod: {(stats.top10_prod_avg_tonnes / 1000000).toFixed(2)}M Tonnes
                    </p>
                </div>

                <div className="bg-cardBg p-5 rounded-2xl border border-borderColor shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center justify-center">
                    <div className="p-3 bg-amber-50 text-amber-600 rounded-xl mb-3">
                        <TrendingDown className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-medium text-textMuted mb-1">Top 10 Driest Years Avg</span>
                    <div className="flex items-baseline justify-center gap-1 mb-1">
                        <span className="text-3xl font-bold text-amber-700">{stats.bot10_rain_avg_mm}</span>
                        <span className="text-sm text-textMuted">mm</span>
                    </div>
                    <p className="text-xs text-textMuted">
                        Avg Prod: {(stats.bot10_prod_avg_tonnes / 1000000).toFixed(2)}M Tonnes
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SummaryCards;