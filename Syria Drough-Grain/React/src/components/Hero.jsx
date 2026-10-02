import React from 'react';
import { ArrowDown } from 'lucide-react';

const HeaderHero = () => {
    return (
        <header className="relative w-full min-h-screen flex flex-col justify-between items-center text-center px-4 py-10 bg-gradient-to-b from-stone-50 via-bgMain to-bgMain overflow-hidden border-b border-borderColor">

            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primaryGreen/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />

            <div className="w-full max-w-7xl flex justify-between items-center pt-2">
                
                <span className="text-2xs font-bold text-textMuted uppercase tracking-widest px-3 py-1 bg-stone-100 rounded-lg">
                    1963 – 2024 Dataset
                </span>
            </div>

            <div className="max-w-4xl mx-auto my-auto py-12 space-y-6 relative z-10">

                

                <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-textMain tracking-tight leading-tight sm:leading-none">
                    Syria Drought <br className="hidden sm:inline" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryGreen via-emerald-600 to-teal-700">
                        & Grain
                    </span>
                </h1>

                <p className="text-sm sm:text-lg text-textMuted max-w-2xl mx-auto font-normal leading-relaxed">
                Analyzing 61 years of data to show how rainfall changes and drought affect wheat and barley production in Syria.
                    </p>

                <div className="pt-4 flex flex-wrap justify-center gap-3 text-xs sm:text-sm font-semibold">
                    <div className="px-4 py-2 bg-cardBg border border-borderColor rounded-xl text-textMain shadow-2xs flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primaryGreen"></span>
                        61 Years Analyzed
                    </div>
                    <div className="px-4 py-2 bg-cardBg border border-borderColor rounded-xl text-textMain shadow-2xs flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-chartRain"></span>
                        Rainfall vs Yield
                    </div>
                </div>

            </div>

            <div className="pb-4 flex flex-col items-center gap-2 text-textMuted animate-bounce cursor-pointer">
                <span className="text-2xs font-bold uppercase tracking-widest">Explore Findings</span>
                <div className="p-2 bg-cardBg border border-borderColor rounded-full shadow-2xs">
                    <ArrowDown className="w-4 h-4 text-primaryGreen" />
                </div>
            </div>

        </header>
    );
};

export default HeaderHero;