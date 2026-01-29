import React from 'react';


const AssignedCaptainScreen = () => {
    return (
        <>
            <div className="font-display bg-[#f6f7f8] dark:bg-[#101a22] text-[#111518] h-screen flex flex-col overflow-hidden">
                {/* Main Layout */}
                <main className="flex-1 flex flex-col lg:flex-row overflow-hidden relative">
                    {/* Right Panel: Map */}
                    <div className="flex-1 relative bg-[#e5e7eb] min-h-100">
                        {/* Map Background Image */}
                        <div className="absolute inset-0 w-full h-full bg-cover bg-center"
                            data-alt="Map showing city streets and route in light mode" data-location="San Francisco Map View"
                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD2WNcjeOBkQGWbDQz26fF_3qQb7ughAU1o6L4FW0O_YIaD_36p53RKtYdDnWPx16F-xPJmo2FMBTs7HR42qth7X9umD8oVdk_8s3Td4ZIzYw4MlqdF_d67OE0MLj9ZTZphh9eTqRji45HI8yqkVkbiHM0qlaD0--Pn4fer-0L6Ny1BQtYhB-ibqSEZxMqBHlw_z6IN8YJB5uuCmzJuUy6B90yons0WS6OLqhaSSWw8Y2CU1QOrUEBkCSQzd9Xhmesxv1ez-xNghUi2")' }}>
                            {/* Overlay for lighter map style */}
                            < div className="absolute inset-0 bg-white/10 backdrop-contrast-[0.9] backdrop-brightness-[1.1]" ></div>
                        </div>
                        {/* Map UI Elements */}
                        <div className="absolute inset-0 pointer-events-none p-6 flex flex-col justify-between">
                            {/* Zoom Controls */}
                            <div className="pointer-events-auto self-end flex flex-col gap-2 mt-auto mb-8 mr-4">
                                <button className="flex size-12 items-center justify-center rounded-full bg-white shadow-lg text-[#111518] hover:bg-gray-50 transition-colors">
                                    <span className="material-symbols-outlined">my_location</span>
                                </button>
                                <div className="flex flex-col rounded-full bg-white shadow-lg overflow-hidden">
                                    <button className="flex size-12 items-center justify-center border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                        <span className="material-symbols-outlined">add</span>
                                    </button>
                                    <button className="flex size-12 items-center justify-center hover:bg-gray-50 transition-colors">
                                        <span className="material-symbols-outlined">remove</span>
                                    </button>
                                </div>
                            </div>
                            {/* Simulated Map Markers */}
                            {/* Car Marker */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                                <div className="relative bg-[#2b9dee] text-white p-2 rounded-xl shadow-xl border-2 border-white mb-2 transform -translate-y-full">
                                    <p className="text-xs font-bold whitespace-nowrap">4 min away</p>
                                    <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#2b9dee] rotate-45 border-r-2 border-b-2 border-white">
                                    </div>
                                </div>
                                <div className="bg-white p-2 rounded-full shadow-lg border-2 border-[#2b9dee] z-10">
                                    <span className="material-symbols-outlined text-[#2b9dee] block text-2xl">directions_car</span>
                                </div>
                            </div>
                            {/* Route Path Simulation*/}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-60 mix-blend-multiply">
                                <path d="M400 300 Q 600 450 800 500 T 1200 400" fill="none" stroke="#2b9dee" strokeDasharray="12 4"
                                    strokeLinecap="round" strokeWidth="6"></path>
                            </svg>
                        </div>
                    </div >
                    {/* Left Panel: Driver & Trip Info */}
                    <aside className="pt-22 w-full lg:w-120 xl:w-135 bg-white z-10 flex flex-col shadow-[4px_0_24px_rgba(0,0,0,0.02)] overflow-y-auto h-full lg:h-auto border-r border-[#f0f3f4]" >
                        {/* Status Header */}
                        <div className="pt-8 px-8 pb-4" >
                            <div className="flex items-center gap-2 mb-2">
                                <span className="bg-[#d1fae5] text-green-800 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">On time</span>
                            </div>
                            <h1 className="text-[#111518] text-[32px] font-bold leading-tight tracking-tight">Your driver is on the way! </h1>
                        </div >

                        <div className="px-8 py-2" >
                            <div className="flex gap-6 justify-between items-center mb-3">
                                <p className="text-[#617989] text-2xl font-medium">Estimated arrival</p>
                                <p className="text-[#2b9dee] text-2xl font-bold leading-normal">4 min</p>
                            </div>
                        </div >
                        {/* Driver Card */}
                        < div className="px-6 py-6" >
                            <div className="bg-[#f6f7f8]/50 border border-[#eff2f5] rounded-4xl p-6 relative overflow-hidden group">
                                {/* Decorative subtle background blob */}
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#eaf5fd] rounded-full opacity-50 blur-2xl">
                                </div>
                                <div className="flex items-start justify-between relative z-10">
                                    <div className="flex gap-4 items-center">
                                        <div className="relative">
                                            <div className="bg-center bg-no-repeat bg-cover rounded-full size-16 shadow-md border-2 border-white"
                                                data-alt="Portrait of driver named Michael"
                                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBySmpDG4c-XR7N_mfpiko8r_uBnVsYaVHPLbhQY1KBib0bKorck8hwGZoR6jtf0jUx-2Ge0AUvej9ImJy01GfcbWPXz4pG3aeVjxTpfK6PWIGIO4gB1P-Cfg4m1m8m-hlDhWQgLVp2lnbQtlMSv8fpaSZH4igoL9w9a-TTIfgTXatV54Wo3PAXJVGH4KH6_fu5KlzDf_vHCUMKQREaaczCicxYC-Or5xa3OzoFdMluzFZfwYK0GEvVAVxif5e02FzTP9scTnhn_los")' }}>
                                            </div>
                                            <div className="absolute -bottom-1 -right-1 bg-white p-1 rounded-full shadow-sm">
                                                <span className="material-symbols-outlined text-[#2b9dee] text-[16px] font-bold">verified</span>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-[#111518] text-xl font-bold leading-tight">Michael</h3>
                                            <div className="flex items-center gap-1.5 mt-1">
                                                <div className="flex items-center bg-[#fef3c7] px-2 py-0.5 rounded-md gap-1">
                                                    <span className="material-symbols-outlined text-yellow-600 text-[14px] fill-current">star</span>
                                                    <span className="text-yellow-800 text-xs font-bold">4.9</span>
                                                </div>
                                                <span className="text-[#617989] text-sm">• 1,240 trips</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Car Illustration */}
                                    <div className="flex flex-col items-end">
                                        <div className="w-24 h-16 bg-contain bg-center bg-no-repeat"
                                            data-alt="Illustration of a white sedan car"
                                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC29Bcs4ksQAyvwW9nXihEbKgUquiD4B1RyDKGTgx7hgLwYSq1RHkB2X9HEBSWfRpf1BTARzzveVrAPopVMJ3Adq3WSS_ZDgHJBcLjJdoVab2v3RfcXqxKZCDdlLbbDPo5MlDHu2P0hJJ2aiC0bquyVJi1E_g457X5-Ko2bh31K_DZGavAdyAc_u5dnHtWyuCfCauYJGLxMmy7CawDYScyXvD_ila45_J1DTeuBaLPD1ubwu92Np8igpSsASG4k1m77DyxuH5fe5-t0")' }}>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6 pt-5 border-t border-gray-100 flex justify-between items-center relative z-10">
                                    <div>
                                        <p className="text-[#617989] text-xs font-bold uppercase tracking-wider mb-1">Vehicle</p>
                                        <p className="text-[#111518] text-base font-semibold">Toyota Camry <span
                                            className="text-[#617989] font-normal">• White</span></p>
                                    </div>
                                    <div className="bg-white border border-gray-200 px-3 py-1.5 rounded-lg shadow-sm">
                                        <p className="text-[#111518] font-mono font-bold tracking-widest text-sm">ABC 1234</p>
                                    </div>
                                </div>
                            </div>
                        </div >
                        {/* Action Buttons */}
                        < div className="px-8 flex gap-4 mt-2" >
                            <button className="flex-1 h-14 bg-[#2b9dee] hover:bg-[#258bd3] active:scale-[0.98] transition-all rounded-full flex items-center justify-center gap-2.5 text-white font-bold text-base shadow-lg shadow-[#2b9dee]/20">
                                <span className="material-symbols-outlined">call</span>
                                Call Driver
                            </button>
                            <button className="size-14 bg-[#eaf5fd] hover:bg-blue-100 text-[#2b9dee] active:scale-[0.95] transition-all rounded-full flex items-center justify-center">
                                <span className="material-symbols-outlined">chat_bubble</span>
                            </button>
                        </div >
                        {/* Trip Route Info */}
                        < div className="px-8 py-8 mt-auto" >
                            <h4 className="text-[#617989] text-xs font-bold uppercase tracking-wider mb-4">Trip Details</h4>
                            <div className="flex gap-4 relative">
                                {/* Dotted Line Connector */}
                                <div className="flex flex-col items-center pt-1.5">
                                    <div className="size-3 rounded-full border-[3px] border-[#111518] bg-white z-10"></div>
                                    <div className="w-0.5 flex-1 bg-gray-200 my-1 border-l-2 border-dotted border-gray-300"></div>
                                    <div className="size-3 rounded-full bg-[#2b9dee] shadow-[0_0_0_3px_rgba(43,157,238,0.2)] z-10"></div>
                                </div>
                                <div className="flex flex-col gap-8 pb-2 flex-1">
                                    <div>
                                        <p className="text-[#617989] text-xs mb-0.5">Pick-up · 12:45 PM</p>
                                        <p className="text-[#111518] text-base font-medium">1024 Market St, San Francisco</p>
                                    </div>
                                    <div>
                                        <p className="text-[#617989] text-xs mb-0.5">Drop-off · 1:15 PM</p>
                                        <p className="text-[#111518] text-base font-medium">SFO International Airport</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 pt-4 border-t border-[#f0f3f4]">
                                <button
                                    className="w-full py-3 text-red-500 hover:bg-red-50 rounded-xl text-sm font-semibold transition-colors">
                                    Cancel Ride
                                </button>
                            </div>
                        </div >
                    </aside >
                </main >
            </div >
        </>
    )
}

export default AssignedCaptainScreen