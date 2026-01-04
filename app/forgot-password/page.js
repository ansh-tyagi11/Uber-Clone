"use client";
import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from "next/navigation";
import { forResetPassword, forUpdatePassword, forCheckToken } from '@/actions/useractions';
import { toast } from 'react-toastify';

const ForgotPassword = () => {
    const params = useSearchParams();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(null);
    const token = params.get("token");
    const userId = params.get("id");
    const router = useRouter();

    const isResetMode = token && userId;

    useEffect(() => {
        if (!isResetMode) return;
        if (!token) return;

        checkToken();
    }, [token, isResetMode]);


    const sendLink = async () => {
        if (isSubmitting) return;

        setIsSubmitting(true);

        try {
            const response = await forResetPassword(email);

            if (response?.success) {
                toast.success(response.message);
            } else {
                toast.error(response?.message || "Something went wrong");
            }
        } catch (error) {
            toast.error("Failed to send reset link");
        } finally {
            setIsSubmitting(false);
        }
    };

    const updatePassword = async () => {
        if (isSubmitting) return;

        setIsSubmitting(true);

        try {
            const response = await forUpdatePassword(password, token, userId);

            if (response?.success) {
                toast.success(response.message);
                router.push("/login?reset=success");
            } else {
                toast.error(response?.message || "Something went wrong");
            }
        } catch (error) {
            toast.error("Failed to send reset link");
        } finally {
            setIsSubmitting(false);
        }
    }

    const checkToken = async () => {
        let result = await forCheckToken(token);
        if (!result.success) {
            toast.error(result.message);
            router.push("/forgot-password");
        }
    }

    return (
        <>
            <div className="bg-[#f6f6f8] dark:bg-[#111621] font-display antialiased min-h-screen flex items-center justify-center p-4 sm:p-0">
                <div className="relative flex h-full min-h-200 w-full max-w-md flex-col overflow-hidden rounded-3xl bg-white dark:bg-[#111621] shadow-2xl ring-1 ring-gray-900/5">
                    {/* Top Navigation Bar */}
                    <div className="flex items-center bg-transparent p-4 justify-between z-10">
                        <button className="text-[#111318] dark:text-white flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                        </button>
                    </div>
                    {/* Header Image Area */}
                    <div className="@container px-6 pt-2 pb-6 flex justify-center">
                        <div className="w-full max-w-70 aspect-4/3 bg-center bg-contain bg-no-repeat flex flex-col justify-end overflow-hidden rounded-2xl"
                            data-alt="Soft 3D illustration of a security lock with shield"
                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuASmX60s0E42UnMSU3x74aBHXfAFlNiSK4Rkp746F7_UwE6n5NZsNXmcqwFM6wbIaD2JTHEJHGqtS4-cTENtftBOzaDV-8kf8BaYLsR7oBVubjgAx09aPvwv15xzCGg6QA6fCzWDkrMxNqBF60stJ5aSt-vEXOqIyYu6ECoBWTKDrXe3zJI-YfZlhJsk-SlsFm0hFkfic3BrZgMkQByWU94fPkhsygHGrRnzAuKJxCo3eMs7uFvVP3sSsEqKacrxurrNRhabIS0Juw")' }}>
                        </div>
                    </div>
                    {/* Main Content */}
                    <div className="flex-1 flex flex-col px-8">
                        {/* Headlines */}
                        <div className="pb-6">
                            {!isResetMode && <h1 className="text-[#111318] dark:text-white tracking-tight text-[32px] font-bold leading-tight text-left mb-3">Forgot Password?</h1>}
                            {isResetMode && <h1 className="text-[#111318] dark:text-white tracking-tight text-[32px] font-bold leading-tight text-left mb-3">New Password</h1>}
                            {!isResetMode && <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-relaxed">
                                Don't worry! It happens. Please enter the email or phone number associated with your account.
                            </p>}
                            {isResetMode && <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-relaxed">
                                Create a new password for your account. Make sure it’s something secure and easy for you to remember.
                            </p>}
                        </div>
                        {/* Form */}
                        <div className="flex flex-col gap-6 w-full mt-2">
                            {/* Input Field */}
                            {!isResetMode && <div className="w-full">
                                <label className="flex flex-col w-full">
                                    <span className="text-[#111318] dark:text-gray-200 text-sm font-semibold leading-normal pb-2 ml-1">
                                        Email or Phone
                                    </span>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <span className="material-symbols-outlined text-gray-400 group-focus-within:text-[#1754cf] transition-colors">mail</span>
                                        </div>
                                        <input
                                            className="form-input flex w-full min-w-0 resize-none overflow-hidden rounded-xl text-[#111318] dark:text-white border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 h-14 placeholder:text-gray-400 pl-11 pr-4 text-base font-medium leading-normal focus:outline-0 focus:ring-2 focus:ring-[#1754cf]/20 focus:border-[#1754cf] transition-all"
                                            placeholder="example@email.com"
                                            type="email"
                                            name='email'

                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                </label>
                            </div>}

                            {!isResetMode && <button onClick={sendLink} disabled={isSubmitting} className={`w-full bg-[#1754cf] hover:bg-blue-700 text-white font-bold h-14 px-6 rounded-xl shadow-lg shadow-blue-500/20 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 ${isSubmitting ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`} >
                                <span>{isSubmitting ? "Sending..." : "Send Reset Link"}</span>
                                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                            </button>}

                            {isResetMode && <div className="w-full">
                                <label className="flex flex-col w-full">
                                    <span className="text-[#111318] dark:text-gray-200 text-sm font-semibold leading-normal pb-2 ml-1">
                                        New Password
                                    </span>
                                    <div className="relative group">
                                        <input
                                            className="form-input flex w-full min-w-0 resize-none overflow-hidden rounded-xl text-[#111318] dark:text-white border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 h-14 placeholder:text-gray-400 pl-2 pr-4 text-base font-medium leading-normal focus:outline-0 focus:ring-2 focus:ring-[#1754cf]/20 focus:border-[#1754cf] transition-all"
                                            placeholder="New Password"
                                            type="password"
                                            name="password"
                                            required
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                </label>
                            </div>}
                            {isResetMode && <button onClick={updatePassword} disabled={isSubmitting} className={`w-full bg-[#1754cf] hover:bg-blue-700 text-white font-bold h-14 px-6 rounded-xl shadow-lg shadow-blue-500/20 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 ${isSubmitting ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`} >
                                <span>{isSubmitting ? "Password Changed" : "Change Password"}</span>
                                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                            </button>}
                        </div>
                    </div>
                    {/* Footer */}
                    <div className="mt-auto p-6 pb-8 text-center">
                        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                            Remember password?
                            <a className="text-[#1754cf] font-bold hover:underline ml-1" href="/login">Back to Login</a>
                        </p>
                    </div>
                    {/* Spacing for bottom safe area on mobile */}
                    <div className="h-4 w-full"></div>
                </div>
            </div >
        </>
    )
}

export default ForgotPassword