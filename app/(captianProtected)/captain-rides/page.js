import React from 'react'

const page = () => {
    return (
        <>
            <div className="bg-[#f6f7f8] dark:bg-[#101922] pt-20 font-display text-slate-900 dark:text-slate-100 min-h-screen">
                {/* Main Container */}
                <div className="flex overflow-hidden">
                    {/* Main Content Area */}
                    <main className="flex-1 overflow-y-auto flex flex-col">

                        {/* Page Content */}
                        <div className="p-8 max-w-6xl w-full mx-auto">
                            {/* Page Heading */}
                            <div className="flex flex-wrap items-center justify-between gap-4">
                                <div className="flex flex-col gap-1">
                                    <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">All Rides</h1>
                                    <p className="text-slate-500 text-sm font-medium">
                                        Review your trip history and detailed earnings report
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-bold shadow-sm hover:shadow-md transition-all">
                                        <span className="material-symbols-outlined text-sm">download</span>
                                        Export CSV
                                    </button>
                                </div>
                            </div>
                            {/* Top Navigation Bar */}
                            <header className="flex items-center justify-between dark:border-slate-800 py-8 dark:bg-slate-900/80 backdrop-blur-md sticky top-0 z-10">
                                <div className="flex items-center gap-4 flex-1">
                                    <label className="flex items-center w-full max-w-md relative">
                                        <span className="material-symbols-outlined absolute left-3 text-slate-400">search</span>
                                        <input
                                            className="w-full h-10 pl-10 pr-4 rounded-lg border border-slate-300 bg-slate-100 dark:bg-slate-800 text-sm focus:border-[#137fec] focus:ring-2 focus:ring-[#137fec]/50 transition-all placeholder:text-slate-400"
                                            placeholder="Search ride ID, destination, or date..."
                                        />
                                    </label>
                                </div>

                            </header>
                            {/* Filters (Chips) */}
                            <div className="flex gap-3 mb-8 overflow-x-auto pb-2 scrollbar-hide">
                                <button className="px-5 py-2 rounded-full bg-[#137fec] text-white text-sm font-bold shadow-lg shadow-[#137fec]/20 transition-all">
                                    All
                                </button>
                                <button className="px-5 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
                                    Completed
                                </button>
                                <button className="px-5 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
                                    Canceled
                                </button>
                                <button className="px-5 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
                                    Ongoing
                                </button>
                            </div>
                            {/* Ride Cards List */}
                            <div className="grid gap-6">
                                {/* Ride Card 1 (Completed) */}
                                <div className="bg-white dark:bg-slate-900 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-800 hover:border-[#137fec]/40 transition-all flex flex-col lg:flex-row gap-6">
                                    <div className="w-full lg:w-48 h-32 lg:h-auto bg-center bg-no-repeat bg-cover rounded-lg overflow-hidden shrink-0 border border-slate-100 dark:border-slate-800"
                                        data-alt="Map showing a city route from downtown to airport" data-location="Dubai, UAE"
                                        style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuA4TXpQ_w5zchUC4uhnPZYEb_A2sKtCNhEiJ6mTsHGwoPleSBLOyYUyGvgL8iow4_IBW1b6nRMwi78CRxduHWa_yjfEywSeyKOHAdG1iRu4rSFYFmNCueeGQgtMIGj4SNgE_aDkrGmv2ggIW_2guTeEgwpHbi5hWpNTmsm7YikXlVrTpzD9XvmjQNorKuHDr_0fBX75iPX4wUfATiHsOiKjKylB9balP1_Bn4h9zDoxx7Tg4dxwTyqeaUB10BhhgOnVKcAYra_dejQ")` }}>
                                    </div>
                                    <div className="flex-1 flex flex-col justify-between">
                                        <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                                            <div className="flex flex-col">
                                                <div className="flex items-center gap-2 mb-3">
                                                    <span className="bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase">Completed</span>
                                                    <span className="text-slate-400 text-sm font-medium">Oct 24, 2023 • 02:30 PM</span>
                                                </div>
                                                <div className="space-y-3">
                                                    <div className="flex items-start gap-3">
                                                        <span className="material-symbols-outlined text-[#137fec] text-lg">radio_button_checked</span>
                                                        <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                                                            123 Business Bay Towers, Downtown
                                                        </p>
                                                    </div>
                                                    <div className="flex items-start gap-3">
                                                        <span className="material-symbols-outlined text-slate-400 text-lg">location_on</span>
                                                        <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                                                            International Airport Terminal 3
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Total Earned</p>
                                                <p className="text-2xl font-black text-slate-900 dark:text-white">$24.50</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50 dark:border-slate-800">
                                            <div className="flex items-center gap-4">
                                                <div className="flex items-center gap-1.5 text-slate-500 text-xs font-medium">
                                                    <span className="material-symbols-outlined text-sm">schedule</span>
                                                    24 mins
                                                </div>
                                                <div className="flex items-center gap-1.5 text-slate-500 text-xs font-medium">
                                                    <span className="material-symbols-outlined text-sm">distance</span>
                                                    12.5 km
                                                </div>
                                            </div>
                                            <button className="text-[#137fec] text-sm font-bold hover:underline flex items-center gap-1">
                                                View Details
                                                <span className="material-symbols-outlined text-sm">chevron_right</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* Ride Card 2 (Canceled) */}
                                <div className="bg-white dark:bg-slate-900 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-800 hover:border-red-400/40 transition-all flex flex-col lg:flex-row gap-6">
                                    <div className="w-full lg:w-48 h-32 lg:h-auto bg-center bg-no-repeat bg-cover rounded-lg overflow-hidden shrink-0 border border-slate-100 dark:border-slate-800 grayscale"
                                        data-alt="Route map with a cancellation indicator" data-location="Dubai, UAE"
                                        style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuA4TXpQ_w5zchUC4uhnPZYEb_A2sKtCNhEiJ6mTsHGwoPleSBLOyYUyGvgL8iow4_IBW1b6nRMwi78CRxduHWa_yjfEywSeyKOHAdG1iRu4rSFYFmNCueeGQgtMIGj4SNgE_aDkrGmv2ggIW_2guTeEgwpHbi5hWpNTmsm7YikXlVrTpzD9XvmjQNorKuHDr_0fBX75iPX4wUfATiHsOiKjKylB9balP1_Bn4h9zDoxx7Tg4dxwTyqeaUB10BhhgOnVKcAYra_dejQ")` }}>
                                    </div>
                                    <div className="flex-1 flex flex-col justify-between">
                                        <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                                            <div className="flex flex-col">
                                                <div className="flex items-center gap-2 mb-3">
                                                    <span className="bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase">Canceled</span>
                                                    <span className="text-slate-400 text-sm font-medium">Oct 24, 2023 • 11:15 AM</span>
                                                </div>
                                                <div className="space-y-3 opacity-60">
                                                    <div className="flex items-start gap-3">
                                                        <span className="material-symbols-outlined text-[#137fec] text-lg">radio_button_checked</span>
                                                        <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                                                            Marina Walk Entrance, Gate 2
                                                        </p>
                                                    </div>
                                                    <div className="flex items-start gap-3">
                                                        <span className="material-symbols-outlined text-slate-400 text-lg">location_on</span>
                                                        <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                                                            Mall of the Emirates
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Fee</p>
                                                <p className="text-2xl font-black text-slate-900 dark:text-white">$3.00</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50 dark:border-slate-800">
                                            <div className="flex items-center gap-4">
                                                <p className="text-red-500 text-xs font-bold uppercase italic">Canceled by Passenger</p>
                                            </div>
                                            <button className="text-slate-400 text-sm font-bold hover:underline flex items-center gap-1">
                                                Report Issue
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* Ride Card 3 (Ongoing) */}
                                <div className="bg-white dark:bg-slate-900 rounded-xl p-5 shadow-sm border border-[#137fec]/30 dark:border-[#137fec]/20 transition-all flex flex-col lg:flex-row gap-6 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-1">
                                        <span className="flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#137fec] opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#137fec]"></span>
                                        </span>
                                    </div>
                                    <div className="w-full lg:w-48 h-32 lg:h-auto bg-center bg-no-repeat bg-cover rounded-lg overflow-hidden shrink-0 border border-slate-100 dark:border-slate-800"
                                        data-alt="Active navigation map with live car icon" data-location="Dubai, UAE"
                                        style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuA4TXpQ_w5zchUC4uhnPZYEb_A2sKtCNhEiJ6mTsHGwoPleSBLOyYUyGvgL8iow4_IBW1b6nRMwi78CRxduHWa_yjfEywSeyKOHAdG1iRu4rSFYFmNCueeGQgtMIGj4SNgE_aDkrGmv2ggIW_2guTeEgwpHbi5hWpNTmsm7YikXlVrTpzD9XvmjQNorKuHDr_0fBX75iPX4wUfATiHsOiKjKylB9balP1_Bn4h9zDoxx7Tg4dxwTyqeaUB10BhhgOnVKcAYra_dejQ")` }}>
                                    </div>
                                    <div className="flex-1 flex flex-col justify-between">
                                        <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                                            <div className="flex flex-col">
                                                <div className="flex items-center gap-2 mb-3">
                                                    <span className="bg-[#137fec] text-white px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase">Ongoing Ride</span>
                                                    <span className="text-[#137fec] text-sm font-bold">In Progress</span>
                                                </div>
                                                <div className="space-y-3">
                                                    <div className="flex items-start gap-3">
                                                        <span className="material-symbols-outlined text-[#137fec] text-lg">radio_button_checked</span>
                                                        <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                                                            Palm Jumeirah, Shoreline Apts
                                                        </p>
                                                    </div>
                                                    <div className="flex items-start gap-3">
                                                        <span className="material-symbols-outlined text-slate-400 text-lg">location_on</span>
                                                        <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                                                            Dubai Media City, Building 5
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Est. Fare </p>
                                                <p className="text-2xl font-black text-[#137fec]">$18.20</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#137fec]/10">
                                            <div className="flex items-center gap-4">
                                                <div className="flex items-center gap-1.5 text-[#137fec] text-xs font-bold">
                                                    <span className="material-symbols-outlined text-sm animate-pulse">navigation</span>
                                                    8 mins remaining
                                                </div>
                                            </div>
                                            <button className="bg-[#137fec] text-white px-4 py-1.5 rounded-lg text-sm font-bold hover:bg-[#137fec]/90 transition-all">
                                                Open Navigation
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* Ride Card 4 (Completed) */}
                                <div className="bg-white dark:bg-slate-900 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-800 hover:border-[#137fec]/40 transition-all flex flex-col lg:flex-row gap-6">
                                    <div className="w-full lg:w-48 h-32 lg:h-auto bg-center bg-no-repeat bg-cover rounded-lg overflow-hidden shrink-0 border border-slate-100 dark:border-slate-800"
                                        data-alt="Map showing city route from hotel to park" data-location="Dubai, UAE"
                                        style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuA4TXpQ_w5zchUC4uhnPZYEb_A2sKtCNhEiJ6mTsHGwoPleSBLOyYUyGvgL8iow4_IBW1b6nRMwi78CRxduHWa_yjfEywSeyKOHAdG1iRu4rSFYFmNCueeGQgtMIGj4SNgE_aDkrGmv2ggIW_2guTeEgwpHbi5hWpNTmsm7YikXlVrTpzD9XvmjQNorKuHDr_0fBX75iPX4wUfATiHsOiKjKylB9balP1_Bn4h9zDoxx7Tg4dxwTyqeaUB10BhhgOnVKcAYra_dejQ")` }}>
                                    </div>
                                    <div className="flex-1 flex flex-col justify-between">
                                        <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                                            <div className="flex flex-col">
                                                <div className="flex items-center gap-2 mb-3">
                                                    <span className="bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase">Completed</span>
                                                    <span className="text-slate-400 text-sm font-medium">Oct 23, 2023 • 08:45 PM</span>
                                                </div>
                                                <div className="space-y-3">
                                                    <div className="flex items-start gap-3">
                                                        <span className="material-symbols-outlined text-[#137fec] text-lg">radio_button_checked</span>
                                                        <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                                                            Burj Al Arab Hotel Entrance
                                                        </p>
                                                    </div>
                                                    <div className="flex items-start gap-3">
                                                        <span className="material-symbols-outlined text-slate-400 text-lg">location_on</span>
                                                        <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                                                            Zabeel Park, Gate 4
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Total
                                                    Earned</p>
                                                <p className="text-2xl font-black text-slate-900 dark:text-white">$42.10</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50 dark:border-slate-800">
                                            <div className="flex items-center gap-4">
                                                <div className="flex items-center gap-1.5 text-slate-500 text-xs font-medium">
                                                    <span className="material-symbols-outlined text-sm">schedule</span>
                                                    38 mins
                                                </div>
                                                <div className="flex items-center gap-1.5 text-slate-500 text-xs font-medium">
                                                    <span className="material-symbols-outlined text-sm">distance</span>
                                                    22.1 km
                                                </div>
                                            </div>
                                            <button className="text-[#137fec] text-sm font-bold hover:underline flex items-center gap-1">
                                                View Details
                                                <span className="material-symbols-outlined text-sm">chevron_right</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Pagination/Load More */}
                            <div className="mt-12 flex flex-col items-center gap-4">
                                <p className="text-slate-400 text-sm font-medium">Showing 4 of 128 trips</p>
                                <button className="px-8 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-700 dark:text-slate-200 text-sm font-bold shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
                                    Load More History
                                </button>
                            </div>
                        </div>
                    </main>
                </div >
            </div >
        </>
    )
}

export default page