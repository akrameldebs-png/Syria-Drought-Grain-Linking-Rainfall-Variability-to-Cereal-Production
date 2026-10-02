import React, { useState, useMemo } from 'react';
import { Search, Filter, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

const DataFilterTable = ({ data }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [periodFilter, setPeriodFilter] = useState('ALL');
    const [droughtFilter, setDroughtFilter] = useState('ALL');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const filteredData = useMemo(() => {
        if (!data) return [];
        return data.filter((item) => {
            const matchesSearch = item.year.toString().includes(searchTerm);
            const matchesPeriod = periodFilter === 'ALL' || item.period === periodFilter;
            const matchesDrought =
                droughtFilter === 'ALL' ||
                (droughtFilter === 'DROUGHT' && item.drought) ||
                (droughtFilter === 'NORMAL' && !item.drought);

            return matchesSearch && matchesPeriod && matchesDrought;
        });
    }, [data, searchTerm, periodFilter, droughtFilter]);


    const totalPages = Math.ceil(filteredData.length / itemsPerPage) || 1;
    const paginatedData = useMemo(() => {
        const start = (currentPage - 1) * itemsPerPage;
        return filteredData.slice(start, start + itemsPerPage);
    }, [filteredData, currentPage]);


    const periods = useMemo(() => {
        if (!data) return [];
        return Array.from(new Set(data.map((d) => d.period))).filter(Boolean);
    }, [data]);

    if (!data || data.length === 0) return null;

    return (
        <div className="w-full max-w-7xl mx-auto p-4 mt-6 mb-12">
            <div className="bg-cardBg p-6 rounded-2xl border border-borderColor shadow-sm">

                {/* Header */}
                <div className="text-center mb-6 pb-4 border-b border-borderColor">
                    <h2 className="text-xl sm:text-2xl font-bold text-textMain mb-1">
                        Complete Historical Dataset & Explorer
                    </h2>
                    <p className="text-xs sm:text-sm text-textMuted max-w-2xl mx-auto">
                        Search, filter, and inspect annual agricultural and rainfall metrics from 1963 to 2024.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-6">

                    <div className="relative w-full md:w-64">
                        <Search className="w-4 h-4 text-textMuted absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                            type="text"
                            placeholder="Search year..."
                            value={searchTerm}
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                                setCurrentPage(1);
                            }}
                            className="w-full pl-9 pr-4 py-2 bg-stone-50 border border-borderColor rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-primaryGreen/20 focus:border-primaryGreen transition-all text-textMain"
                        />
                    </div>


                    <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                        <div className="flex items-center gap-2 bg-stone-50 px-3 py-1.5 rounded-xl border border-borderColor text-xs">
                            <Filter className="w-3.5 h-3.5 text-textMuted" />
                            <select
                                value={periodFilter}
                                onChange={(e) => {
                                    setPeriodFilter(e.target.value);
                                    setCurrentPage(1);
                                }}
                                className="bg-transparent text-textMain font-medium focus:outline-none cursor-pointer"
                            >
                                <option value="ALL">All Periods</option>
                                {periods.map((p) => (
                                    <option key={p} value={p}>{p}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex items-center gap-2 bg-stone-50 px-3 py-1.5 rounded-xl border border-borderColor text-xs">
                            <Calendar className="w-3.5 h-3.5 text-textMuted" />
                            <select
                                value={droughtFilter}
                                onChange={(e) => {
                                    setDroughtFilter(e.target.value);
                                    setCurrentPage(1);
                                }}
                                className="bg-transparent text-textMain font-medium focus:outline-none cursor-pointer"
                            >
                                <option value="ALL">All Years</option>
                                <option value="DROUGHT">Drought Years Only</option>
                                <option value="NORMAL">Normal/Wet Years</option>
                            </select>
                        </div>
                    </div>

                </div>

                <div className="overflow-x-auto rounded-xl border border-borderColor">
                    <table className="w-full text-xs sm:text-sm text-center">
                        <thead className="bg-stone-50 text-textMuted uppercase font-semibold border-b border-borderColor">
                            <tr>
                                <th className="py-3 px-4">Year</th>
                                <th className="py-3 px-4">Rainfall (mm)</th>
                                <th className="py-3 px-4">Production (Tonnes)</th>
                                <th className="py-3 px-4">Yield (kg/ha)</th>
                                <th className="py-3 px-4">Status</th>
                                <th className="py-3 px-4">Period</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-borderColor">
                            {paginatedData.length > 0 ? (
                                paginatedData.map((row) => (
                                    <tr key={row.year} className="hover:bg-stone-50/60 transition-colors">
                                        <td className="py-3 px-4 font-bold text-textMain">{row.year}</td>
                                        <td className="py-3 px-4 font-semibold text-chartRain">{row.rain_mm} mm</td>
                                        <td className="py-3 px-4 font-semibold text-primaryGreen">
                                            {(Number(row.production_t || 0) / 1000000).toFixed(2)}M t
                                        </td>
                                        <td className="py-3 px-4 text-stone-600 font-medium">{row.yield_kg_ha || 'N/A'}</td>
                                        <td className="py-3 px-4">
                                            {row.drought ? (
                                                <span className="px-2.5 py-1 bg-red-100 text-red-700 rounded-full text-3xs font-bold uppercase tracking-wider">
                                                    Drought
                                                </span>
                                            ) : (
                                                <span className="px-2.5 py-1 bg-emerald-100 text-emerald-700 rounded-full text-3xs font-bold uppercase tracking-wider">
                                                    Normal
                                                </span>
                                            )}
                                        </td>
                                        <td className="py-3 px-4 text-textMuted text-xs font-medium">{row.period || '-'}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="py-8 text-center text-textMuted">
                                        No records found matching your filters.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {totalPages > 1 && (
                    <div className="flex justify-between items-center mt-6 pt-4 border-t border-borderColor text-xs">
                        <span className="text-textMuted">
                            Showing <span className="font-semibold text-textMain">{paginatedData.length}</span> of <span className="font-semibold text-textMain">{filteredData.length}</span> results
                        </span>

                        <div className="flex items-center gap-2">
                            <button
                                type="button"
                                disabled={currentPage === 1}
                                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                className="p-1.5 rounded-lg border border-borderColor bg-white hover:bg-stone-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                            >
                                <ChevronLeft className="w-4 h-4 text-textMain" />
                            </button>

                            <span className="font-semibold px-2 text-textMain">
                                {currentPage} / {totalPages}
                            </span>

                            <button
                                type="button"
                                disabled={currentPage === totalPages}
                                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                                className="p-1.5 rounded-lg border border-borderColor bg-white hover:bg-stone-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                            >
                                <ChevronRight className="w-4 h-4 text-textMain" />
                            </button>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default DataFilterTable;