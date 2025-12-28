"use client";
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';

export default function TermsOfService() {
    const [activeTab, setActiveTab] = useState("rider");

    return (
        <>
            <div className="bg-[#f6f6f8] dark:bg-[#101622] text-[#0d121b] dark:text-white transition-colors duration-200">

                <main className="flex flex-col min-h-screen">
                    {/* Hero Section */}
                    <section className="bg-white dark:bg-[#151c2b] border-b border-[#e7ebf3] dark:border-gray-800">
                        <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
                            <div className="flex flex-col-reverse lg:flex-row gap-10 items-center">
                                <div className="flex flex-col gap-6 lg:w-1/2">
                                    <div className="flex flex-col gap-3">
                                        <span className="text-[#135bec] font-semibold text-sm tracking-wider uppercase">Legal Center</span>
                                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-[-0.033em] text-[#0d121b] dark:text-white">
                                            Terms of Service
                                        </h1>
                                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
                                            Our terms and conditions are designed to ensure a safe, reliable, and fair experience for everyone using RideApp.
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-500 text-sm">
                                        <span className="material-symbols-outlined text-[18px]">schedule</span>
                                        <span>Last Updated: October 24, 2023</span>
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/2">
                                    <div className="relative w-full aspect-video md:aspect-2/1 lg:aspect-video rounded-2xl overflow-hidden shadow-lg">
                                        <div className="absolute inset-0 bg-linear-to-tr from-[#135bec]/10 to-transparent mix-blend-overlay z-10"></div>
                                        <img alt="City street with car dashboard view" className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700" data-alt="Soft focus abstract city street with car dashboard view at sunset" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4f47HZ5n3IQykd-zqVzgI1FZIZvFVMFASdkAaht0XhXQ3dcD_WDhc-xY5dTlBQNN5v4qdW_VvA1Al-MC1QJr4IofwSEeCDwFNfYrV4KznIrLjGKPI8xxXBbgrZ-_nhVB2MjN_i7-9bmliQPnlRW3y0lv9nQR2qYqUUR-Ebrwdc-0A9o07DLhNNg3GR2bjzT-boKaP0yjg7ilfN6b3PZ_SaTGsW0m97WZSaKUbfR_KxKGKanzzhtCV2QSZnmWV5Euugn-MQlwUowBp" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Main Content Area with Sticky Sidebar */}
                    <div className="mx-auto flex w-full max-w-7xl flex-col lg:flex-row gap-8 px-6 py-12">
                        <aside className="hidden lg:block w-64 shrink-0">
                            <div className="sticky top-28 flex flex-col gap-6">
                                {activeTab == "rider" && (
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Table of Contents</h3>
                                        <nav className="flex flex-col gap-1">
                                            <a className="group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" href="#general">
                                                <span>General Terms</span>
                                            </a>
                                            <a className="group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" href="#registration">
                                                <span>Account Registration</span>
                                            </a>
                                            <a className="group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" href="#services">
                                                <span>Services Provided</span>
                                            </a>
                                            <a className="group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" href="#payments">
                                                <span>Payments &amp; Charges</span>
                                            </a>
                                            <a className="group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" href="#conduct">
                                                <span>User Conduct</span>
                                            </a>
                                            <a className="group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" href="#liability">
                                                <span>Liability &amp; Insurance</span>
                                            </a>
                                        </nav>
                                    </div>
                                )}

                                {activeTab === "drivers" && (
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Table of Contents</h3>
                                        <nav className="flex flex-col gap-1">
                                            <a className="group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" href="#general">
                                                <span>General Terms</span>
                                            </a>
                                            <a className="group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" href="#driver-eligibility">
                                                <span>Driver Eligibility</span>
                                            </a>
                                            <a className="group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" href="#service-standards">
                                                <span>Services Standards</span>
                                            </a>
                                            <a className="group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" href="#fares-payments">
                                                <span>Fares &amp; Payments </span>
                                            </a>
                                            <a className="group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" href="#driver-conduct">
                                                <span>Driver Conduct</span>
                                            </a>
                                            <a className="group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" href="#insurance-liability">
                                                <span>Insurance &amp; Liability</span>
                                            </a>
                                        </nav>
                                    </div>
                                )}
                            </div>
                        </aside>
                        {/* Main Text Content */}
                        <article className="flex-1 min-w-0">
                            <div className="bg-white dark:bg-[#151c2b] rounded-2xl shadow-sm border border-[#e7ebf3] dark:border-gray-800 p-6 md:p-10 lg:p-12">
                                {/* Tabs */}
                                <div className="mb-10 border-b border-gray-200 dark:border-gray-700">
                                    <div className="flex gap-8">
                                        <button onClick={() => setActiveTab("rider")} className={`relative pb-4 text-sm font-bold   ${activeTab === "rider" ? "text-[#135bec]" : "hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors text-gray-500"}`}>
                                            Rider Terms
                                            <span className={`absolute bottom-0 left-0 h-0.5 w-full rounded-t-full ${activeTab === "rider" ? "bg-[#135bec]" : ""}`}></span>
                                        </button>
                                        <button onClick={() => setActiveTab("drivers")} className={`relative pb-4 text-sm font-bold   ${activeTab === "drivers" ? "text-[#135bec]" : "hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors text-gray-500"}`}>
                                            Driver Terms
                                            <span className={`absolute bottom-0 left-0 h-0.5 w-full rounded-t-full ${activeTab === "drivers" ? "bg-[#135bec]" : ""}`}></span>
                                        </button>
                                    </div>
                                </div>

                                {/* Introduction */}
                                <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
                                    <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-8">
                                        Welcome to RideApp! These Terms of Service ("Terms") constitute a legally binding agreement between you and RideApp Inc. regarding your use of our platform. Please read them carefully. By accessing or using our services, you agree to be bound by these Terms.
                                    </p>
                                </div>
                                {(activeTab === "rider" &&
                                    <div className="space-y-12">
                                        {/* Section 1 */}
                                        <section className="scroll-mt-32" id="general">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-[#135bec]">
                                                    <span className="material-symbols-outlined text-sm font-bold">article</span>
                                                </div>
                                                <h2 className="text-2xl font-bold text-[#0d121b] dark:text-white">1. General Terms</h2>
                                            </div>
                                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                                                By using the RideApp Platform, you confirm that you are at least 18 years of age and have the legal capacity to enter into this agreement. If you reside in a jurisdiction that restricts the use of the Service because of age, or restricts the ability to enter into agreements such as this one due to age, you must abide by such age limits and you must not use the Service.
                                            </p>
                                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                                We may amend the Terms related to the Services from time to time. Amendments will be effective upon RideApp's posting of such updated Terms at this location or the amended policies or supplemental terms on the applicable Service. Your continued access or use of the Services after such posting constitutes your consent to be bound by the Terms, as amended.
                                            </p>
                                        </section>
                                        {/* Section 2 */}
                                        <section className="scroll-mt-32" id="registration">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-[#135bec]">
                                                    <span className="material-symbols-outlined text-sm font-bold">person_add</span>
                                                </div>
                                                <h2 className="text-2xl font-bold text-[#0d121b] dark:text-white">2. Account Registration</h2>
                                            </div>
                                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                                                In order to use most aspects of the Services, you must register for and maintain an active personal user Services account ("Account"). You must be at least 18 years of age, or the age of legal majority in your jurisdiction (if different than 18), to obtain an Account.
                                            </p>
                                            <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400 mb-4 marker:text-[#135bec]">
                                                <li>You agree to maintain accurate, complete, and up-to-date information in your Account.</li>
                                                <li>You are responsible for all activity that occurs under your Account.</li>
                                                <li>You agree to maintain the security and secrecy of your Account username and password at all times.</li>
                                            </ul>
                                        </section>
                                        {/* Section 3 */}
                                        <section className="scroll-mt-32" id="services">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-[#135bec]">
                                                    <span className="material-symbols-outlined text-sm font-bold">directions_car</span>
                                                </div>
                                                <h2 className="text-2xl font-bold text-[#0d121b] dark:text-white">3. Services Provided</h2>
                                            </div>
                                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                                                The Services constitute a technology platform that enables users of RideApp's mobile applications or websites provided as part of the Services to arrange and schedule transportation and/or logistics services with independent third party providers of such services, including independent third party transportation providers and independent third party logistics providers under agreement with RideApp or certain of RideApp's affiliates ("Third Party Providers").
                                            </p>
                                            <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg border-l-4 border-[#135bec]">
                                                <p className="text-sm text-gray-700 dark:text-gray-300 italic">
                                                    <strong>Note:</strong> Unless otherwise agreed by RideApp in a separate written agreement with you, the Services are made available solely for your personal, noncommercial use.
                                                </p>
                                            </div>
                                        </section>
                                        {/* Section 4 */}
                                        <section className="scroll-mt-32" id="payments">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-[#135bec]">
                                                    <span className="material-symbols-outlined text-sm font-bold">payments</span>
                                                </div>
                                                <h2 className="text-2xl font-bold text-[#0d121b] dark:text-white">4. Payments &amp; Charges</h2>
                                            </div>
                                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                                                You understand that use of the Services may result in charges to you for the services or goods you receive from a Third Party Provider ("Charges"). After you have received services or goods obtained through your use of the Service, RideApp will facilitate your payment of the applicable Charges on behalf of the Third Party Provider as such Third Party Provider's limited payment collection agent.
                                            </p>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                                <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-[#135bec]/50 transition-colors">
                                                    <h4 className="font-bold text-[#0d121b] dark:text-white mb-2">Standard Rates</h4>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                                        Fares are calculated based on time and distance. Base fares vary by city.
                                                    </p>
                                                </div>
                                                <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-[#135bec]/50 transition-colors">
                                                    <h4 className="font-bold text-[#0d121b] dark:text-white mb-2">Dynamic Pricing</h4>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400">During times of high demand, fares may increase to ensure driver availability.</p>
                                                </div>
                                            </div>
                                        </section>
                                        {/* Section 5 */}
                                        <section className="scroll-mt-32" id="conduct">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-[#135bec]">
                                                    <span className="material-symbols-outlined text-sm font-bold">handshake</span>
                                                </div>
                                                <h2 className="text-2xl font-bold text-[#0d121b] dark:text-white">5. User Conduct</h2>
                                            </div>
                                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                                                We are committed to safety. You agree to comply with all applicable laws when using the Services, and you may only use the Services for lawful purposes. You will not, in your use of the Services, cause nuisance, annoyance, inconvenience, or property damage, whether to the Third Party Provider or any other party.
                                            </p>
                                        </section>
                                        {/* Section 6 */}
                                        <section className="scroll-mt-32" id="liability">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-[#135bec]">
                                                    <span className="material-symbols-outlined text-sm font-bold">gavel</span>
                                                </div>
                                                <h2 className="text-2xl font-bold text-[#0d121b] dark:text-white">6. Liability &amp; Insurance</h2>
                                            </div>
                                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                                                RideApp shall not be liable for indirect, incidental, special, exemplary, punitive or consequential damages, including lost profits, lost data, personal injury or property damage related to, in connection with, or otherwise resulting from any use of the services, even if RideApp has been advised of the possibility of such damages.
                                            </p>
                                        </section>
                                    </div>
                                )}

                                {activeTab === "drivers" && (
                                    <div className="space-y-12">
                                        {/* Section 1 */}
                                        <section className="scroll-mt-32" id="general">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-[#135bec]">
                                                    <span className="material-symbols-outlined text-sm font-bold">article</span>
                                                </div>
                                                <h2 className="text-2xl font-bold text-[#0d121b] dark:text-white">1. General Terms</h2>
                                            </div>
                                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                                                By registering as a driver on the RideApp Platform, you confirm that you are at least 21
                                                years of age (or the legal driving age in your jurisdiction, whichever is higher) and
                                                possess the legal capacity to enter into this agreement. You must abide by all local
                                                laws and regulations concerning ride-hailing services.
                                            </p>
                                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                                We may amend these Terms related to driver services from time to time. Amendments will
                                                be effective upon RideApp's posting of such updated Terms at this location. Your
                                                continued access or use of the Services after such posting constitutes your consent to
                                                be bound by the Terms, as amended. Drivers will be notified of significant changes via
                                                the app or email.
                                            </p>
                                        </section>
                                        {/* Section 2 */}
                                        <section className="scroll-mt-32" id="driver-eligibility">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-[#135bec]">
                                                    <span className="material-symbols-outlined text-sm font-bold">badge</span>
                                                </div>
                                                <h2 className="text-2xl font-bold text-[#0d121b] dark:text-white">Driver Eligibility &amp; Requirements</h2>
                                            </div>
                                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                                                To be eligible to drive with RideApp, you must meet and continuously maintain specific
                                                criteria, including but not limited to, a valid driver's license, vehicle registration,
                                                proof of insurance, and passing a background check.
                                            </p>
                                            <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400 mb-4 marker:text-[#135bec]">
                                                <li>You must possess a valid driver's license and maintain a clean driving record.</li>
                                                <li>Your vehicle must meet RideApp's minimum age, safety, and inspection standards.</li>
                                                <li>You must pass a comprehensive background check and maintain eligibility.</li>
                                                <li>You are responsible for all permits, licenses, and authorizations required to operate as a driver.</li>
                                            </ul>
                                        </section>
                                        {/* Section 3 */}
                                        <section className="scroll-mt-32" id="service-standards">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-[#135bec]">
                                                    <span className="material-symbols-outlined text-sm font-bold">grade</span>
                                                </div>
                                                <h2 className="text-2xl font-bold text-[#0d121b] dark:text-white">3. Service Standards &amp; Professionalism</h2>
                                            </div>
                                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                                                Drivers are expected to provide high-quality, professional transportation services. This
                                                includes maintaining a safe vehicle, adhering to traffic laws, and treating riders with
                                                respect and courtesy.
                                            </p>
                                            <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg border-l-4 border-[#135bec]">
                                                <p className="text-sm text-gray-700 dark:text-gray-300 italic">
                                                    <strong>Note:</strong> RideApp reserves the right to deactivate accounts for failure
                                                    to meet service standards, including low ratings or reported safety concerns.
                                                </p>
                                            </div>
                                        </section>
                                        {/* Section 4 */}
                                        <section className="scroll-mt-32" id="fares-payments">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-[#135bec]">
                                                    <span className="material-symbols-outlined text-sm font-bold">currency_exchange</span>
                                                </div>
                                                <h2 className="text-2xl font-bold text-[#0d121b] dark:text-white">4. Fares &amp; Payments</h2>
                                            </div>
                                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                                                You will receive payment for completed trips facilitated through the RideApp platform.
                                                Fares are calculated based on RideApp's dynamic pricing model, which may include base
                                                fares, time, distance, and surge pricing during high demand.
                                            </p>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                                <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-[#135bec]/50 transition-colors">
                                                    <h4 className="font-bold text-[#0d121b] dark:text-white mb-2">Earnings Structure</h4>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                                        Drivers receive a percentage of the total fare, excluding platform fees and taxes.
                                                    </p>
                                                </div>
                                                <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-[#135bec]/50 transition-colors">
                                                    <h4 className="font-bold text-[#0d121b] dark:text-white mb-2">Payment Schedule</h4>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                                        Earnings are typically disbursed weekly, though instant payout options may be available in some regions.
                                                    </p>
                                                </div>
                                            </div>
                                        </section>
                                        {/* Section 5 */}
                                        <section className="scroll-mt-32" id="driver-conduct">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-[#135bec]">
                                                    <span className="material-symbols-outlined text-sm font-bold">policy</span>
                                                </div>
                                                <h2 className="text-2xl font-bold text-[#0d121b] dark:text-white">5. Driver Conduct &amp; Safety</h2>
                                            </div>
                                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                                                Drivers are expected to operate safely and responsibly, adhering to all traffic laws and
                                                RideApp's community guidelines. Any form of harassment, discrimination, or unsafe
                                                driving will result in immediate account deactivation.
                                            </p>
                                        </section>
                                        {/* Section 6 */}
                                        <section className="scroll-mt-32" id="insurance-liability">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-[#135bec]">
                                                    <span className="material-symbols-outlined text-sm font-bold">security</span>
                                                </div>
                                                <h2 className="text-2xl font-bold text-[#0d121b] dark:text-white">6. Insurance &amp; Liability</h2>
                                            </div>
                                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                                                Drivers are required to maintain their own personal and commercial automobile insurance
                                                as mandated by local laws. RideApp provides supplementary insurance coverage during
                                                active trips, subject to specific terms and conditions.
                                            </p>
                                        </section>
                                    </div>
                                )}

                                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center gap-6">
                                    <div className="text-center md:text-left">
                                        <h4 className="font-bold text-[#0d121b] dark:text-white">Still have questions?</h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Our support team is available 24/7 to assist you.</p>
                                    </div>
                                    <button className="group flex items-center gap-2 rounded-lg bg-[#e7ebf3] hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 px-6 py-3 text-[#0d121b] dark:text-white text-sm font-bold transition-colors">
                                        <span className="material-symbols-outlined text-[18px]">support_agent</span>
                                        <Link href="/contact">Contact Support</Link>
                                    </button>
                                </div>
                            </div>
                        </article>
                    </div>
                </main >
            </div >
        </>
    )
}