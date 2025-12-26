import React from "react";
import Link from "next/link";

export default function signup() {
    return (
        <>
            <div className="font-display text-[#111318] dark:text-white bg-[#f5f6f8] dark:bg-[#101622] antialiased overflow-x-hidden">
                {/* Background Container */}
                <div className="relative min-h-screen w-full flex flex-col">
                    {/* Hero Background Image */}
                    <div className="absolute inset-0 z-0 h-full w-full bg-cover bg-center bg-no-repeat"
                        data-alt="Blurred city street with traffic and modern buildings at twilight"
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDnMhzm1JVwOQDlZuVnMl4xXMl5KZq3Nk8cBaNvET09lrvlgiTNpUs32Tw-Zv9dg9Zvwq4_rmrF75rv8JMo53Pg4zl5BoiboYKIulj1AJHCr6FdgYNglPh3M-vBdwumK55G8hGNWXlorP9Y9lTz2iXPMqDKJIMlc2EYtxkChcruIrJVWwmZIRV-QsYaT_Or-9uuxCK4I5lAp16QVbLtGOSj0103ApSgdUMNK826zejOdPcAp7h0XyRAG4c0zvUb7cLaqHPtjbGiZ0M')" }}>
                        {/* Overlay Gradient for legibility */}
                        <div className="absolute inset-0 bg-linear-to-br from-black/60 via-black/40 to-black/30 backdrop-blur-[2px]">
                        </div>
                    </div>
                    {/* Main Content Area */}
                    <main className="relative z-10 flex-1 flex items-center justify-center px-4 py-8">
                        {/* Floating Sign Up Card */}
                        <div
                            className="w-full max-w-130 bg-white dark:bg-[#1a202c] rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up">
                            {/* Card Header */}
                            <div className="px-8 pt-8 pb-2">
                                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#111318] dark:text-white mb-2">Create
                                    your account</h2>
                                <p className="text-[#606e8a] dark:text-gray-400 text-sm md:text-base">Sign up to start riding in minutes
                                </p>
                            </div>
                            {/* Form Section */}
                            <div className="p-8 pt-6">
                                <form className="flex flex-col gap-5">
                                    {/* Full Name Field */}
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-semibold text-[#111318] dark:text-gray-200" >
                                            Full Name
                                        </label>
                                        <div className="relative">
                                            <input
                                                className="w-full h-12 rounded-lg border border-[#dbdfe6] dark:border-gray-600 bg-white dark:bg-[#2d3748] px-4 text-base text-[#111318] dark:text-white placeholder:text-[#9ca3af] focus:border-[#256af4] focus:ring-2 focus:ring-[#256af4]/20 transition-all outline-none"
                                                placeholder="Enter your full name"
                                                required
                                                type="text"
                                                name="name"
                                                autoComplete="name"
                                            />
                                            <span
                                                className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-[20px]">person</span>
                                        </div>
                                    </div>
                                    {/* Email/Phone Field */}
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-semibold text-[#111318] dark:text-gray-200" htmlFor="email">
                                            Email or Phone Number
                                        </label>
                                        <div className="relative">
                                            <input
                                                className="w-full h-12 rounded-lg border border-[#dbdfe6] dark:border-gray-600 bg-white dark:bg-[#2d3748] px-4 text-base text-[#111318] dark:text-white placeholder:text-[#9ca3af] focus:border-[#256af4] focus:ring-2 focus:ring-[#256af4]/20 transition-all outline-none"
                                                placeholder="name@example.com"
                                                required
                                                type="text"
                                                name="email"
                                                autoComplete="email"
                                            />
                                            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-[20px]">mail</span>
                                        </div>
                                    </div>
                                    {/* Password Field */}
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-semibold text-[#111318] dark:text-gray-200">
                                            Password
                                        </label>
                                        <div className="relative group">
                                            <input
                                                className="w-full h-12 rounded-lg border border-[#dbdfe6] dark:border-gray-600 bg-white dark:bg-[#2d3748] px-4 text-base text-[#111318] dark:text-white placeholder:text-[#9ca3af] focus:border-[#256af4] focus:ring-2 focus:ring-[#256af4]/20 transition-all outline-none pr-12"
                                                placeholder="Create a password"
                                                required
                                                type="password"
                                                autoComplete="password"
                                                name="password"
                                            />
                                            <button className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-md text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 focus:outline-none"
                                                type="button">
                                                <span className="material-symbols-outlined text-[20px]">visibility_off</span>
                                            </button>
                                        </div>
                                        <p className="text-xs text-[#606e8a] dark:text-gray-500 mt-1">Must be at least 8 characters long
                                        </p>
                                    </div>
                                    {/* Confirm Password Field */}
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-semibold text-[#111318] dark:text-gray-200">
                                            Confirm Password
                                        </label>
                                        <div className="relative">
                                            <input
                                                className="w-full h-12 rounded-lg border border-[#dbdfe6] dark:border-gray-600 bg-white dark:bg-[#2d3748] px-4 text-base text-[#111318] dark:text-white placeholder:text-[#9ca3af] focus:border-[#256af4] focus:ring-2 focus:ring-[#256af4]/20 transition-all outline-none"
                                                placeholder="Confirm your password"
                                                required
                                                name="confirmPassword"
                                                autoComplete="password"
                                                type="password" />
                                        </div>
                                    </div>
                                    {/* Submit Button */}
                                    <button className="mt-2 flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-[#256af4] hover:bg-[#256af4]/90 text-white text-base font-bold leading-normal tracking-[0.015em] shadow-md transition-colors duration-200"
                                        type="submit">
                                        Sign Up
                                    </button>
                                </form>
                                {/* Divider */}
                                <div className="relative flex items-center py-6">
                                    <div className="grow border-t border-[#dbdfe6] dark:border-gray-700"></div>
                                    <span className="shrink-0 mx-4 text-xs font-medium text-[#606e8a] dark:text-gray-400 uppercase tracking-wide">Or
                                        sign up with</span>
                                    <div className="grow border-t border-[#dbdfe6] dark:border-gray-700"></div>
                                </div>
                                {/* Social Buttons */}
                                <div className="grid grid-cols-3 gap-3 mb-6">
                                    <button className="flex items-center justify-center h-12 rounded-lg border border-[#dbdfe6] dark:border-gray-600 hover:bg-[#f5f6f8] dark:hover:bg-gray-700 transition-colors bg-white dark:bg-[#2d3748]">
                                        {/* Google Icon SVG */}
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                                fill="#4285F4"></path>
                                            <path
                                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                                fill="#34A853"></path>
                                            <path
                                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                                fill="#FBBC05"></path>
                                            <path
                                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                                fill="#EA4335"></path>
                                        </svg>
                                    </button>
                                    <button className="flex items-center justify-center h-12 rounded-lg border border-[#dbdfe6] dark:border-gray-600 hover:bg-[#f5f6f8] dark:hover:bg-gray-700 transition-colors bg-white dark:bg-[#2d3748]">
                                        {/* Apple Icon SVG */}
                                        <svg className="w-5 h-5 dark:fill-white fill-black" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm.5-5.5h-1v-4h1v4zm0-6h-1v-1h1v1z"
                                                fill="none" fillRule="nonzero"></path>
                                            <path
                                                d="M16.634 13.628c-.126-2.126 1.742-3.149 1.821-3.19-1.002-1.458-2.548-1.656-3.095-1.68-1.309-.133-2.56.768-3.219.768-.669 0-1.696-.749-2.793-.73-1.438.02-2.775.836-3.504 2.124-1.5 2.584-.383 6.408 1.065 8.504.708 1.037 1.554 2.179 2.658 2.138 1.066-.043 1.469-.691 2.76-.691 1.289 0 1.652.691 2.779.67 1.147-.021 1.875-1.045 2.576-2.094.809-1.18 1.141-2.32 1.156-2.38-.026-.01-2.227-.852-2.204-3.44zM14.944 6.903c.591-.715.989-1.706.88-2.695-.851.034-1.88.567-2.488 1.282-.544.629-.997 1.637-.872 2.61.949.073 1.916-.475 2.48-1.197z">
                                            </path>
                                        </svg>
                                    </button>
                                    <button className="flex items-center justify-center h-12 rounded-lg border border-[#dbdfe6] dark:border-gray-600 hover:bg-[#f5f6f8] dark:hover:bg-gray-700 transition-colors bg-white dark:bg-[#2d3748]">
                                        {/* Facebook Icon SVG */}
                                        <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z">
                                            </path>
                                        </svg>
                                    </button>
                                </div>
                                {/* Footer Link */}
                                <div className="text-center">
                                    <p className="text-sm text-[#606e8a] dark:text-gray-400">
                                        Already have an account?
                                        <Link className="text-[#256af4] hover:text-blue-600 font-bold hover:underline transition-colors" href="/login">Log in</Link>
                                    </p>
                                </div>
                                {/* Terms */}
                                <div className="mt-8 text-center px-4">
                                    <p className="text-xs text-[#9ca3af] leading-tight">
                                        By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated
                                        means, from RideApp and its affiliates.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}