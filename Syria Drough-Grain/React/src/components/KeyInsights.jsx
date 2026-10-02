import React from 'react';
import { HelpCircle, CheckCircle2, TrendingDown, ShieldAlert, Cpu } from 'lucide-react';

const KeyInsights = ({ insightsData }) => {
    return (
        <div className="w-full max-w-7xl mx-auto p-4 mt-6">
            <div className="bg-cardBg p-6 sm:p-8 rounded-2xl border border-borderColor shadow-sm space-y-8">

                <div className="text-center pb-4 border-b border-borderColor">
                    
                    <h2 className="text-xl sm:text-3xl font-extrabold text-textMain mt-3 mb-2">
                        Research Insights & Core Answers
                    </h2>
                    
                </div>

                <div className="bg-gradient-to-br from-stone-50 to-emerald-50/30 p-6 rounded-2xl border border-emerald-200/60 relative overflow-hidden">
                    <div className="flex items-start gap-3 mb-4">
                        <div className="p-2 bg-primaryGreen text-white rounded-xl shadow-xs mt-0.5">
                        </div>
                        <div>
                            <span className="text-2xs font-bold text-primaryGreen uppercase tracking-wider">Research Core Question</span>
                            <h3 className="text-base sm:text-lg font-bold text-textMain">
                                How has the decline in seasonal rainfall rates impacted cereal crop production in Syria compared to historical averages?
                            </h3>
                        </div>
                    </div>

                    <div className="space-y-3 text-xs sm:text-sm text-stone-700 leading-relaxed pl-1 sm:pl-11">
                        <p>
                            <strong className="text-textMain font-semibold">Direct Impact: </strong>
                            Less rainfall directly hurts crop output. A single drought year reduces production by an average of <span className="font-bold text-amber-700">~45%</span> compared to normal years.</p>
                        <p>
                            <strong className="text-textMain font-semibold">Multi Year Droughts: </strong>
                            When drought lasts for two or more years in a row, production drops by up to <span className="font-bold text-red-700">56.7%</span>, drying out the soil and reducing seed supplies.
                        </p>
                        <p>
                            <strong className="text-textMain font-semibold">Rain Timing Matters: </strong>
                            Crop yield depends heavily on rain during key growing months (March–April), making seasonal rainfall the main driver of annual harvest.
                            </p>
                    </div>
                </div>

                <div>
                    <h4 className="text-sm font-bold text-textMain uppercase tracking-wider text-center mb-6">
                        Key Analytical Insights
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                        <div className="p-5 bg-white rounded-xl border border-borderColor hover:border-emerald-300 transition-all shadow-2xs flex flex-col justify-between">
                            <div>
                                
                                <h5 className="font-bold text-sm text-textMain mb-2">High Sensitivity to Rain</h5>
                                <p className="text-xs text-textMuted leading-normal">
                                Rain-fed crop production reacts immediately to rainfall changes, showing little resistance during dry years.</p>
                            </div>
                            
                        </div>

                        <div className="p-5 bg-white rounded-xl border border-borderColor hover:border-emerald-300 transition-all shadow-2xs flex flex-col justify-between">
                            <div>
                                
                                <h5 className="font-bold text-sm text-textMain mb-2">Fast Post-Drought Recovery</h5>
                                <p className="text-xs text-textMuted leading-normal">
                                After a single dry year, production jumps back by <span className="font-semibold text-textMain">+82%</span> when good rains return, showing strong soil resilience.</p>
                            </div>
                            
                        </div>

                        <div className="p-5 bg-white rounded-xl border border-borderColor hover:border-emerald-300 transition-all shadow-2xs flex flex-col justify-between">
                            <div>
                                
                                <h5 className="font-bold text-sm text-textMain mb-2">Smart Action</h5>
                                <p className="text-xs text-textMuted leading-normal">
                                Using AI for early warning and watering crops in March can protect harvest and prevent big farm losses.</p>
                            </div>
                            
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default KeyInsights;