import React from "react";

export default function About() {
    return (
        <>
            <div className="bg-[#f5f7f8] dark:bg-[#101922] text-[#111418] dark:text-white overflow-x-hidden">
                <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root">

                    <div className="flex flex-col">
                        <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-5">
                            <div className="layout-content-container flex flex-col max-w-7xl flex-1 w-full">
                                <div className="@container">
                                    <div className="@[480px]:p-4">
                                        <div className="flex min-h-140 flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-2xl md:rounded-3xl items-center justify-center p-8 md:p-12 relative overflow-hidden group shadow-xl"
                                            data-alt="Cinematic shot of a happy passenger looking out a car window in a city"
                                            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBxnqJDgIYJDjyZZy6PCvFr6O88neQmmusvlDmJHngMkWKbFkMt16K80myl0vncB8ytiwRuNEln-dt0P7ZUAlsRKljzBrRSu73lk0V6leu87LbIJ-EcYjphdft47nIPx77ch3z5cI_fXdzu5NgX0Gx7NrbAcDWhG-j5O-_UunZj2mE_upORBXmEcwvUMb95dt_uNcpf6gNf3wvoh5hGQ146az2No4gwzgcsUL02-i79oKiudNM-2EFsQAHOJ99AH3klNLKrhoYFPYA")` }}>
                                            <div className="flex flex-col gap-4 text-center max-w-200 z-10">
                                                <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-6xl lg:text-7xl drop-shadow-md">
                                                    Reimagining Urban Mobility.
                                                </h1>
                                                <h2 className="text-gray-100 text-base font-medium leading-relaxed md:text-xl md:leading-relaxed max-w-2xl mx-auto drop-shadow-sm">
                                                    We connect people to places with safety, reliability, and comfort at the heart
                                                    of every journey. Experience the future of transportation today.
                                                </h2>
                                            </div>
                                            <div className="flex gap-4 mt-4 z-10">
                                                <button className="flex min-w-35 cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-[#0d7ff2] hover:bg-blue-600 transition-all text-white text-base font-bold leading-normal tracking-[0.015em] shadow-lg hover:shadow-[#0d7ff2]/50">
                                                    <span className="truncate">Ride with us</span>
                                                </button>
                                                <button className="flex min-w-35 cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 transition-all text-white text-base font-bold leading-normal tracking-[0.015em]">
                                                    <span className="truncate">Drive with us</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-5">
                        <div className="layout-content-container flex flex-col max-w-7xl flex-1 w-full">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
                                <div className="flex flex-1 flex-col gap-2 rounded-xl p-6 bg-white dark:bg-[#1a2632] shadow-sm border border-[#e5e7eb] dark:border-gray-800 hover:border-[#0d7ff2]/30 transition-colors">
                                    <div className="text-[#0d7ff2] mb-2">
                                        <span className="material-symbols-outlined text-3xl">directions_car</span>
                                    </div>
                                    <p className="text-[#60758a] dark:text-gray-400 text-sm font-medium leading-normal uppercase tracking-wider">
                                        Rides Completed
                                    </p>
                                    <p className="text-[#111418] dark:text-white tracking-tight text-3xl font-black leading-tight">
                                        10M+
                                    </p>
                                </div>
                                <div className="flex flex-1 flex-col gap-2 rounded-xl p-6 bg-white dark:bg-[#1a2632] shadow-sm border border-[#e5e7eb] dark:border-gray-800 hover:border-[#0d7ff2]/30 transition-colors">
                                    <div className="text-[#0d7ff2] mb-2">
                                        <span className="material-symbols-outlined text-3xl">location_city</span>
                                    </div>
                                    <p className="text-[#60758a] dark:text-gray-400 text-sm font-medium leading-normal uppercase tracking-wider">
                                        Cities Covered
                                    </p>
                                    <p className="text-[#111418] dark:text-white tracking-tight text-3xl font-black leading-tight">
                                        120+
                                    </p>
                                </div>
                                <div className="flex flex-1 flex-col gap-2 rounded-xl p-6 bg-white dark:bg-[#1a2632] shadow-sm border border-[#e5e7eb] dark:border-gray-800 hover:border-[#0d7ff2]/30 transition-colors">
                                    <div className="text-[#0d7ff2] mb-2">
                                        <span className="material-symbols-outlined text-3xl">badge</span>
                                    </div>
                                    <p className="text-[#60758a] dark:text-gray-400 text-sm font-medium leading-normal uppercase tracking-wider">
                                        Partner Drivers
                                    </p>
                                    <p className="text-[#111418] dark:text-white tracking-tight text-3xl font-black leading-tight">
                                        50k+
                                    </p>
                                </div>
                                <div className="flex flex-1 flex-col gap-2 rounded-xl p-6 bg-white dark:bg-[#1a2632] shadow-sm border border-[#e5e7eb] dark:border-gray-800 hover:border-[#0d7ff2]/30 transition-colors">
                                    <div className="text-[#0d7ff2] mb-2">
                                        <span className="material-symbols-outlined text-3xl">sentiment_satisfied</span>
                                    </div>
                                    <p className="text-[#60758a] dark:text-gray-400 text-sm font-medium leading-normal uppercase tracking-wider">
                                        Happy Riders</p>
                                    <p className="text-[#111418] dark:text-white tracking-tight text-3xl font-black leading-tight">4.9/5
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-10 md:py-16 bg-white dark:bg-[#111418]">
                        <div className="layout-content-container flex flex-col max-w-7xl flex-1 w-full">
                            <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-center px-4">
                                <div className="flex flex-col gap-6 md:w-1/2 order-2 md:order-1">
                                    <div className="flex flex-col gap-4 text-left">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 w-fit">
                                            <span className="material-symbols-outlined text-[#0d7ff2] text-sm">history_edu</span>
                                            <span className="text-[#0d7ff2] text-xs font-bold uppercase tracking-wide">Our Story</span>
                                        </div>
                                        <h2 className="text-[#111418] dark:text-white text-3xl md:text-5xl font-black leading-tight tracking-[-0.02em]">
                                            Born from a need for better connection.
                                        </h2>
                                        <p className="text-[#60758a] dark:text-gray-300 text-lg font-normal leading-relaxed">
                                            RideApp started in 2018 with a simple observation: getting from point A to point B in
                                            our city was harder than it needed to be. What began as a small fleet of cars and a
                                            basic app has grown into a global movement.
                                        </p>
                                        <p className="text-[#60758a] dark:text-gray-300 text-lg font-normal leading-relaxed">
                                            We believe that transportation shouldn't just be a transaction—it should be an
                                            experience that enables opportunity, connects loved ones, and powers local economies.
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 order-1 md:order-2">
                                    <div className="aspect-4/3 rounded-3xl overflow-hidden shadow-2xl relative group">
                                        <div className="absolute inset-0 bg-[#0d7ff2]/10 group-hover:bg-transparent transition-colors duration-500">
                                        </div>
                                        <img className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                            data-alt="A candid shot of a driver and passenger chatting during a ride through the city streets"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7yyFJKj05u9IzRJV_oRLaYJOuq95zkcs2WCfOk1EXRav4_qvFmPRHSPqNIJLpvAn7TFE0SZkE_kYvR8421Uwbruzqn4CSIR03eKCTTJEul7CGzeFXtS8_DVMEWd732B_N74jy-hdWkNcg3N_zXXtHGzmfulMP0h3DbiuqHh1otl5GgQZjz_XLVm0MKRdM1vhimaaM50NmE6mXYZqmZVQP14ZAYHwbQCfV61QS2gpirVnOLaujeQ6KTbjCdcwcpqx_UvdU9WNOAa0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-10 md:py-16">
                        <div className="layout-content-container flex flex-col max-w-7xl flex-1 w-full">
                            <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-center px-4">
                                <div className="w-full md:w-1/2">
                                    <div className="aspect-4/3 rounded-3xl overflow-hidden shadow-2xl relative group">
                                        <div className="absolute inset-0 bg-[#0d7ff2]/10 group-hover:bg-transparent transition-colors duration-500">
                                        </div>
                                        <img className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                            data-alt="Abstract view of city lights and traffic showing movement and connectivity"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmLdbeNIus9RU4yYx0wlLk2RZC3rV6h89cu-lW8gm2RA-tk_wcRUUGvVs7FjWvt9K8y5k7Es3yryF5x4aMtUnr4J1KFZS0jFBpCWiQ6WoSohvy30ClJEf6Pr_SVYk5CHAujixBY8u1CUliFmJSJmtqG6HpEZOi0p7ObTBerqSS75CFHZ6jyeDfVpdxtI36rVwjH1EkSEMPpkBqESc7UbPpr9Zkd4y59KN1LeKsoKryq4BUmbZIXn1YqxqHBOgx-2f8cIoD7x6LFoM" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-6 md:w-1/2">
                                    <div className="flex flex-col gap-4 text-left">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 w-fit">
                                            <span className="material-symbols-outlined text-[#0d7ff2] text-sm">rocket_launch</span>
                                            <span className="text-[#0d7ff2] text-xs font-bold uppercase tracking-wide">Our Mission</span>
                                        </div>
                                        <h2 className="text-[#111418] dark:text-white text-3xl md:text-5xl font-black leading-tight tracking-[-0.02em]">
                                            Moving the world, one ride at a time.
                                        </h2>
                                        <p className="text-[#60758a] dark:text-gray-300 text-lg font-normal leading-relaxed">
                                            We are dedicated to connecting communities and simplifying transport. We believe in a
                                            world where mobility is accessible, safe, and reliable for everyone, regardless of where
                                            they live or where they're going.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-12 md:py-24 bg-white dark:bg-[#111418]">
                        <div className="layout-content-container flex flex-col max-w-7xl flex-1 w-full">
                            <div className="flex flex-col gap-10 px-4">
                                <div className="flex flex-col gap-4 text-center items-center">
                                    <h2 className="text-[#111418] dark:text-white tracking-tight text-3xl md:text-5xl font-black leading-tight">
                                        Driven by Values
                                    </h2>
                                    <p className="text-[#60758a] dark:text-gray-400 text-lg font-normal leading-normal max-w-180">
                                        Our principles guide every decision we make, ensuring a better experience for riders and drivers alike.
                                    </p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="flex flex-col gap-4 rounded-2xl border border-[#dbe0e6] dark:border-gray-800 bg-[#f8f9fa] dark:bg-[#1a2632] p-8 hover:shadow-lg transition-shadow duration-300">
                                        <div className="size-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-[#0d7ff2] mb-2">
                                            <span className="material-symbols-outlined text-3xl">shield_person</span>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <h3 className="text-[#111418] dark:text-white text-xl font-bold leading-tight">Safety First
                                            </h3>
                                            <p className="text-[#60758a] dark:text-gray-400 text-base font-normal leading-relaxed">
                                                We prioritize your well-being with rigorous background checks, real-time trip tracking, and 24/7 emergency support teams.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-4 rounded-2xl border border-[#dbe0e6] dark:border-gray-800 bg-[#f8f9fa] dark:bg-[#1a2632] p-8 hover:shadow-lg transition-shadow duration-300">
                                        <div className="size-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-[#0d7ff2] mb-2">
                                            <span className="material-symbols-outlined text-3xl">diversity_3</span>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <h3 className="text-[#111418] dark:text-white text-xl font-bold leading-tight">
                                                Community Focused</h3>
                                            <p className="text-[#60758a] dark:text-gray-400 text-base font-normal leading-relaxed">
                                                We believe in fair pay for drivers and active engagement with the cities we serve to create a sustainable ecosystem.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-4 rounded-2xl border border-[#dbe0e6] dark:border-gray-800 bg-[#f8f9fa] dark:bg-[#1a2632] p-8 hover:shadow-lg transition-shadow duration-300">
                                        <div className="size-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-[#0d7ff2] mb-2">
                                            <span className="material-symbols-outlined text-3xl">lightbulb</span>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <h3 className="text-[#111418] dark:text-white text-xl font-bold leading-tight">Innovation
                                            </h3>
                                            <p className="text-[#60758a] dark:text-gray-400 text-base font-normal leading-relaxed">
                                                Leveraging smart routing AI and sustainable electric vehicle options to reduce our carbon footprint and save you time.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-12 md:py-24 bg-white dark:bg-[#111418]">
                        <div className="layout-content-container flex flex-col max-w-7xl flex-1 w-full">
                            <div className="flex flex-col gap-16 px-4">
                                <div className="flex flex-col md:flex-row gap-10 items-center">
                                    <div className="w-full md:w-1/2 order-2 md:order-1">
                                        <div className="aspect-video rounded-3xl overflow-hidden shadow-xl relative group">
                                            <img alt="Diverse driver smiling in car"
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwBwTomzOowQ8NAhyFiC5267uSvVWgNWiOVVTd7ZUVHFwVvFYufPKZut9ftTeJM6d8HCPNLBosGdlPes4OW45kMKh_0rovul1QDtBLPqmDuwRzTBMSK-96gzPczefAoHmaB8A0RkCAkv0at02aR88hTAO8FCeJ2tqKymlikTya4y5P5TLJU-sg73quae-U41rJNwLZ0ZkBIzPdPj39-DINH2rJjNXE_FIQhnS7agg0_0U3v-xmqSN7EP8hdV1PgRgdU6WhR7jNICc" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-6 md:w-1/2 order-1 md:order-2">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 w-fit">
                                            <span className="material-symbols-outlined text-[#0d7ff2] text-sm">steering_wheel_heat</span>
                                            <span className="text-[#0d7ff2] text-xs font-bold uppercase tracking-wide">For Drivers</span>
                                        </div>
                                        <h2 className="text-[#111418] dark:text-white text-3xl md:text-4xl font-black leading-tight">
                                            Empowering your journey behind the wheel.</h2>
                                        <p className="text-[#60758a] dark:text-gray-300 text-lg">We provide more than just a platform;
                                            we provide a partnership. With flexible hours, instant payouts, and comprehensive
                                            insurance coverage, our drivers have the freedom to earn on their own terms.</p>
                                        <ul className="flex flex-col gap-3 mt-2">
                                            <li className="flex items-center gap-3 text-[#111418] dark:text-white font-medium">
                                                <span className="material-symbols-outlined text-[#0d7ff2]">check_circle</span>
                                                Keep 85% of fares
                                            </li>
                                            <li className="flex items-center gap-3 text-[#111418] dark:text-white font-medium">
                                                <span className="material-symbols-outlined text-[#0d7ff2]">check_circle</span>
                                                24/7 Driver Support
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row gap-10 items-center">
                                    <div className="flex flex-col gap-6 md:w-1/2">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 w-fit">
                                            <span className="material-symbols-outlined text-[#0d7ff2] text-sm">sentiment_very_satisfied</span>
                                            <span className="text-[#0d7ff2] text-xs font-bold uppercase tracking-wide">For Riders</span>
                                        </div>
                                        <h2 className="text-[#111418] dark:text-white text-3xl md:text-4xl font-black leading-tight">
                                            Safety and comfort in every mile.
                                        </h2>
                                        <p className="text-[#60758a] dark:text-gray-300 text-lg">Whether you're commuting to work, meeting friends, or exploring a new city, RideApp ensures you get there safely. Our vetted drivers and real-time safety features give you peace of mind.</p>
                                        <ul className="flex flex-col gap-3 mt-2">
                                            <li className="flex items-center gap-3 text-[#111418] dark:text-white font-medium">
                                                <span className="material-symbols-outlined text-[#0d7ff2]">check_circle</span>
                                                Real-time Ride Tracking
                                            </li>
                                            <li className="flex items-center gap-3 text-[#111418] dark:text-white font-medium">
                                                <span className="material-symbols-outlined text-[#0d7ff2]">check_circle</span>
                                                Upfront Pricing, No Surprises
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="w-full md:w-1/2">
                                        <div className="aspect-video rounded-3xl overflow-hidden shadow-xl relative group">
                                            <img alt="Happy passengers in back seat"
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDE5FxKpwGAnuOETw5Vl4LBqBhdXhLSJdYYHX0O_bLyTa6TNw-kSUxuD-DOv4G4DrtbD26Bhsc3ZM8f1-SvTAB1HW-eYvUUZ3iRoOGM7aBd4PrqWpRvEhqTO4s8dyxvFbmdcPg4CS6cMPZY5X1lysFDCfz3oCnFjiZfuSi8ujVEanhgDlh_iTGfnx5cYa_iJHChICX7uIfcqQ7j8nDV5_ayo_cIhFWgCPM1_MjW3IEY6EwxIIMAM0g9jD6-YIsu9VmNlTkk38EeEXA" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-10 pb-20">
                        <div className="layout-content-container flex flex-col max-w-7xl flex-1 w-full">
                            <div className="relative rounded-3xl overflow-hidden bg-[#f5f7f8] dark:bg-[#1a2632] group">
                                <div className="absolute inset-0">
                                    <img alt="Cityscape with traffic"
                                        className="w-full h-full object-cover opacity-20 dark:opacity-10 scale-105 group-hover:scale-110 transition-transform duration-1000"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuADjUrusg2eDMOb2Bv_omtT40iDGqPxjEukmxOos_YThBK12LHyTkurgzNJRIaZ4v8lQUmarcEI3MGCkhXf8dRIiyIX9ZOtLp8tfaNtnHO9GPMFO7gNSC1YHzwps82i9YetCSGkQY1qu1OxaZY0TZ8N4Ffm_0NgsV7jyZiHvbkop7FAqAYl2BV4tRQV3EMFXvxDTBrwSqmVAYskfc1_ilVEYek4AN_c8mVltC5apPdk-bxexYVkQp_53cXMgG0N0tQPOg5zWLg7PwE" />
                                    <div className="absolute inset-0 bg-linear-to-t from-white via-white/80 to-transparent dark:from-[#111418] dark:via-[#111418]/80 dark:to-transparent">
                                    </div>
                                </div>
                                <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 p-8 md:p-16">
                                    <div className="flex-1 flex flex-col gap-6">
                                        <h2 className="text-[#111418] dark:text-white text-3xl md:text-5xl font-black leading-tight">
                                            Building stronger communities together.
                                        </h2>
                                        <p className="text-[#60758a] dark:text-gray-300 text-lg font-medium leading-relaxed">
                                            We pledge 1% of every ride to local infrastructure projects and community development
                                            initiatives. By choosing RideApp, you aren't just going places—you're helping your city
                                            move forward.
                                        </p>
                                        <div className="flex gap-4 pt-2">
                                            <div className="flex flex-col gap-1">
                                                <span className="text-3xl font-black text-[#0d7ff2]">$50M+</span>
                                                <span className="text-sm text-[#60758a] dark:text-gray-400 font-bold uppercase">Contributed</span>
                                            </div>
                                            <div className="w-px bg-gray-300 dark:bg-gray-700 mx-4"></div>
                                            <div className="flex flex-col gap-1">
                                                <span className="text-3xl font-black text-[#0d7ff2]">500+</span>
                                                <span className="text-sm text-[#60758a] dark:text-gray-400 font-bold uppercase">Local Partners</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-1 w-full">
                                        <div className="grid grid-cols-2 gap-4">
                                            <img className="rounded-2xl shadow-lg w-full h-48 object-cover translate-y-4"
                                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3DjSgEEA8wSwxElzjV9-8SleqKA-advIJc5HcYJZ6SfCEEYT6vAy7SzVSdCyh5Ft5KaVxFRJk5lJqgp5S8HwWcczktqp7ahlVQjCT44IvTIfszbNO0qj3q2NYYQemLeQsobDfq03ycEl6ai5erBcL88SuBpFrIrMJixg-9xD2Lie4I-rSf3Xbz-9VC8PN6mJpQvjJcBkx24ibGE8Yx-hjdM302TfNQ1XMr3eoSBgjM1y6h6fF0ItfSrPKfvaWTd91GiHUotQV7no" />
                                            <img className="rounded-2xl shadow-lg w-full h-48 object-cover -translate-y-4"
                                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7i7S4dK8SxhrjcSN1kWxAL0Zhca_7DZnCxj1Qbcih4m1Ht0QBF1pGjP6IBvaomtWSGAHktsR-pgDLpvZ1tapN4UW5Cn7m84jpQo0m585ppoIuKjE-E152VykS1yoC0ruOukYlatEevZZfTSvLld69CWnyBu3wWaddXF0AVwLFPzQ8UOdNY1rp1W7dmeGmi1EcIh3X6y6YIpwwfXTC7RyIjGOB1clVzT5FRbIQ4r_5v0l61GG2P3C4uQuLKfWeK9BWQA9Z-D-4kPE" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}