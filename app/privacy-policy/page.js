"use client"
import React, { useState } from 'react';

const PrivacyPolicy = () => {
    const [activeTab, setActiveTab] = useState('rider-policy');

    const navItems = [
        { id: 'rider-policy', label: 'Rider Policy' },
        { id: 'driver-policy', label: 'Driver Policy' },
        { id: 'security', label: 'Security' },
    ];

    return (
        <div className="bg-[#f6f6f8] dark:bg-[#101622] text-[#111318] dark:text-white font-display antialiased overflow-x-hidden min-h-screen w-full flex flex-col">
            <main className="flex flex-1 flex-col items-center">

                {/* Hero Section */}
                <div className="w-full max-w-300 px-4 md:px-10 lg:px-40 py-10">
                    <div className="@container">
                        <div className="flex flex-col-reverse gap-8 @[864px]:flex-row @[864px]:items-center">
                            {/* Text Content */}
                            <div className="flex flex-col gap-6 flex-1 @[864px]:max-w-125">
                                <div className="flex flex-col gap-4 text-left">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#1152da] w-fit">
                                        <span className="material-symbols-outlined text-[18px]">verified_user</span>
                                        <span className="text-xs font-bold uppercase tracking-wide">Last Updated: Oct 2023</span>
                                    </div>
                                    <h1 className="text-[#111318] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl">
                                        Your Privacy Matters
                                    </h1>
                                    <p className="text-[#616f89] dark:text-gray-400 text-lg leading-relaxed">
                                        Transparency is at the core of RideApp. We are committed to protecting your personal
                                        data and ensuring a safe, secure ride for everyone.
                                    </p>
                                </div>
                            </div>

                            {/* Hero Image */}
                            <div className="w-full flex-1">
                                <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center"
                                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA8cUCmsRH_EcrBRLuZfzbAMkY-NkVP7yNDKd2zvv7AbZ33kF4ZMmVm9pS328uYi_AfXBu56EZiexcz9rbns8_uGmstpbZDeYyuTBPgA5MpnyNu_mMBj3MylIyD1ehOf1OG_jtqq9WgcRo9VSBMhkwFQ-t0t_eZ8g9XCg9ESJRYT8737DD1OoXiRZ_LTK1Lh13xzh4VFk72yjAw1OsQGTqwxcvAV1EsWP7tN1bvBqf_BwVdMe3baPhQba_AwtsO-HH9cb-NkBkrwfs")' }}
                                    />
                                    <div className="absolute inset-0 bg-linear-to-tr from-[#1152da]/20 to-transparent mix-blend-multiply" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sticky Tabs / Navigation */}
                <div className="sticky top-0 z-40 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-[#f0f2f4] dark:border-gray-800">
                    <div className="w-full max-w-300 mx-auto px-4 md:px-10 lg:px-40">
                        <div className="flex gap-8 overflow-x-auto no-scrollbar">
                            {navItems.map((item) => (
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    onClick={() => setActiveTab(item.id)}
                                    className={`flex items-center justify-center border-b-[3px] pb-3 pt-4 px-2 whitespace-nowrap transition-colors ${activeTab === item.id
                                        ? 'border-b-[#1152da] text-[#1152da]'
                                        : 'border-b-transparent text-[#616f89] hover:text-[#111318] dark:text-gray-400 dark:hover:text-white'
                                        }`}
                                >
                                    <p className="text-sm font-bold leading-normal tracking-[0.015em]">{item.label}</p>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Rider Section */}
                <section className="w-full max-w-300 px-4 md:px-10 lg:px-40 py-12 scroll-mt-24" id="rider-policy">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="material-symbols-outlined text-[#1152da] text-3xl">hail</span>
                        <h2 className="text-[#111318] dark:text-white text-[28px] font-bold leading-tight">Rider Privacy Data</h2>
                    </div>
                    <p className="text-[#616f89] dark:text-gray-400 max-w-2xl mb-8">
                        When you use RideApp as a rider, we collect specific data to provide you with reliable
                        transportation. Here is a breakdown of what we collect and why.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <RiderCard
                            icon="location_on"
                            title="Location Data"
                            desc="We collect precise location data from your device to facilitate pickups, navigation, and drop-offs."
                        />
                        <RiderCard
                            icon="credit_card"
                            title="Secure Payments"
                            desc="Payment info is encrypted and processed by secure providers. We do not store full card numbers."
                        />
                        <RiderCard
                            icon="history"
                            title="Ride History"
                            desc="We maintain a record of your past trips, including dates, times, and routes for support and safety."
                        />
                        <RiderCard
                            icon="call"
                            title="Communication"
                            desc="In-app calls and messages are masked to protect your personal phone number from drivers."
                        />
                    </div>
                </section>

                {/* Divider */}
                <div className="w-full max-w-300 px-4 md:px-10 lg:px-40">
                    <div className="h-px bg-[#f0f2f4] dark:bg-gray-800 w-full"></div>
                </div>

                {/* Driver Section */}
                <section className="w-full max-w-300 px-4 md:px-10 lg:px-40 py-12 scroll-mt-24" id="driver-policy">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="material-symbols-outlined text-[#1152da] text-3xl">directions_car</span>
                        <h2 className="text-[#111318] dark:text-white text-[28px] font-bold leading-tight">Driver Privacy Data</h2>
                    </div>
                    <p className="text-[#616f89] dark:text-gray-400 max-w-2xl mb-8">
                        Drivers are the backbone of RideApp. We require additional information to ensure regulatory
                        compliance and safety for everyone on the platform.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <DriverFeature
                            icon="badge"
                            color="green"
                            title="Driver Profile & Verification"
                            desc="We collect your driver's license, background check reports, and photo ID to verify your identity and eligibility to drive."
                        />
                        <DriverFeature
                            icon="account_balance_wallet"
                            color="orange"
                            title="Earnings & Financials"
                            desc="To process your payouts, we store bank account details and tax identification numbers. We also provide summaries."
                        />
                        <DriverFeature
                            icon="garage_home"
                            color="purple"
                            title="Vehicle Information"
                            desc="Vehicle registration, insurance policy details, and inspection reports are stored to ensure safety standards."
                        />
                        <DriverFeature
                            icon="share_location"
                            color="red"
                            title="Real-time Location Tracking"
                            desc="While online, your location is tracked to match you with riders and monitor trip progress and efficiency."
                        />
                    </div>
                </section>

                {/* Security Section */}
                <section className="w-full bg-[#f8f9fc] dark:bg-gray-800/50 py-16" id="security">
                    <div className="max-w-300 mx-auto px-4 md:px-10 lg:px-40">
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="flex-1">
                                <div className="inline-block p-3 rounded-xl bg-blue-100 dark:bg-blue-900 mb-6">
                                    <span className="material-symbols-outlined text-[#1152da] text-4xl">lock</span>
                                </div>
                                <h2 className="text-[#111318] dark:text-white text-[32px] font-black leading-tight mb-4">Uncompromising Security</h2>
                                <p className="text-[#616f89] dark:text-gray-300 text-lg leading-relaxed mb-8">
                                    We use industry-standard encryption and security protocols to keep your data safe.
                                </p>
                                <ul className="space-y-4">
                                    {['AES-256 Data Encryption', 'SOC2 Type II Compliant', 'Regular Security Audits', '24/7 Fraud Monitoring'].map((text) => (
                                        <li key={text} className="flex items-center gap-3">
                                            <span className="material-symbols-outlined text-green-600">check_circle</span>
                                            <span className="text-[#111318] dark:text-white font-medium">{text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex-1 w-full">
                                <div className="grid grid-cols-2 gap-4">
                                    <SecurityCard icon="vpn_key" color="text-purple-600" title="Data Access" desc="Strict access controls for employee data access." />
                                    <SecurityCard icon="cloud_done" color="text-blue-600" title="Cloud Safety" desc="Secure cloud infrastructure with redundancy." className="mt-8" />
                                    <SecurityCard icon="delete_forever" color="text-orange-600" title="Data Deletion" desc="Request full account deletion at any time." />
                                    <SecurityCard icon="shield" color="text-teal-600" title="GDPR Ready" desc="Full compliance with European data standards." className="mt-8" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

// Helper Components for cleaner code
const RiderCard = ({ icon, title, desc }) => (
    <div className="flex flex-col gap-4 rounded-xl border border-[#dbdfe6] dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-subtle hover:shadow-card transition-shadow">
        <div className="size-12 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-[#1152da]">
            <span className="material-symbols-outlined text-[24px]">{icon}</span>
        </div>
        <div>
            <h3 className="text-[#111318] dark:text-white text-lg font-bold leading-tight mb-2">{title}</h3>
            <p className="text-sm text-[#616f89] dark:text-gray-400 leading-normal">{desc}</p>
        </div>
    </div>
);

const DriverFeature = ({ icon, color, title, desc }) => {
    const colorClasses = {
        green: "bg-green-50 dark:bg-green-900/30 text-green-600",
        orange: "bg-orange-50 dark:bg-orange-900/30 text-orange-600",
        purple: "bg-purple-50 dark:bg-purple-900/30 text-purple-600",
        red: "bg-red-50 dark:bg-red-900/30 text-red-600",
    };
    return (
        <div className="flex items-start gap-5 p-6 rounded-xl bg-white dark:bg-gray-800 border border-[#dbdfe6] dark:border-gray-700">
            <div className={`size-12 min-w-12 rounded-full flex items-center justify-center ${colorClasses[color]}`}>
                <span className="material-symbols-outlined text-[24px]">{icon}</span>
            </div>
            <div>
                <h3 className="text-[#111318] dark:text-white text-lg font-bold mb-2">{title}</h3>
                <p className="text-[#616f89] dark:text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
        </div>
    );
};

const SecurityCard = ({ icon, color, title, desc, className = "" }) => (
    <div className={`bg-white dark:bg-gray-900 p-6 rounded-xl shadow-card border border-gray-100 dark:border-gray-700 ${className}`}>
        <span className={`material-symbols-outlined text-3xl mb-3 ${color}`}>{icon}</span>
        <h4 className="font-bold text-[#111318] dark:text-white">{title}</h4>
        <p className="text-xs text-[#616f89] dark:text-gray-400 mt-2">{desc}</p>
    </div>
);

export default PrivacyPolicy;