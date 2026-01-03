"use client";
import React from 'react';
import { useSession, signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { login } from '@/actions/useractions';
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify';

export default function Login() {
    const { data: session, status } = useSession();
    const { register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting }
    } = useForm();
    const router = useRouter();

    const onSubmit = async (data) => {
        let res = await login(data)
        console.log(res)
        if (res?.error) {
            toast.error(res.error)
            return;
        }
        if (res.success) return router.push(`/otp?login=true&email=${encodeURIComponent(res.email)}&id=${encodeURIComponent(res.otpId)}`)
        let a = await data;
        console.log(a)
        // reset();
    }

    return (
        <>
            <main className="relative min-h-screen flex items-center justify-center pt-20 pb-10 px-4">
                <div className="absolute inset-0 w-full h-full hidden lg:flex">
                    <div className="w-1/2 h-full relative overflow-hidden bg-gray-900">
                        <img alt="Serene highway at dawn with electric car" className="object-cover w-full h-full opacity-60 hover:scale-105 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhsXRr1R2zlEIUjUsQivUxjid3_derjSRpZ0g8r44wANcdi9pfmapwvnahfNFc_o3k5dN7qja7MCoENdEzHR9y8w4c_mnEzxDksWwtwcZUZOdz4EZyp48ZhD0kXuPlAIy6jl--bo8arKMqK9hfE0k1qsu9J3mieF_Mg9SJhX0u_dsZdA8MBtaX7_iXWLLXvoSiIv7_kLpXtokGrj6nqR685Q6vAmY5f6HfaszNJGk_j22fa-ltIUk65r81GxqOJRlWGauHxjjkuNBZ" />
                        <div className="absolute bottom-12 left-12 max-w-md z-10 text-white p-6">
                            <h1 className="text-4xl font-panel-text font-bold mb-4 leading-tight">Travel in comfort, wherever you go.</h1>
                            <p className="text-lg opacity-90 font-panel-text">Experience peace of mind with premium, quiet rides designed for your ultimate relaxation and destination.</p>
                        </div>
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent"></div>
                    </div>
                    <div className="w-1/2 h-full bg-[#f5f6f8] dark:bg-[#101622]"></div>
                </div>
                <div className="relative w-full max-w-120 z-10 lg:ml-auto lg:mr-[calc(25%-240px)]">
                    <div className="bg-white dark:bg-[#1a2233] rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden">
                        <div className="px-8 pt-8 pb-4">
                            <h2 className="text-2xl font-bold text-[#0d121c] dark:text-white mb-2">Welcome back</h2>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">Please enter your details to Login.</p>
                        </div>
                        <div className="px-8 pb-8">
                            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-[#0d121c] dark:text-gray-200 text-sm font-semibold">
                                        Email or Mobile Number
                                    </label>
                                    <div className="relative">
                                        <input
                                            className="w-full h-12 px-4 rounded-lg bg-gray-50 dark:bg-[#101622] border border-gray-200 dark:border-gray-700 text-[#0d121c] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0d59f2]/20 focus:border-[#0d59f2] transition-all placeholder:text-gray-400 text-base"
                                            placeholder="Enter your email"
                                            type="email"
                                            autoComplete='email'
                                            {...register("email", { required: "This field is required" })}
                                        />
                                        {errors.email && <div className="text-xs text-red-500 dark:text-red-500">{errors.email.message}</div>}
                                        <span className="material-symbols-outlined absolute right-4 top-3 text-gray-400 pointer-events-none text-[20px]">mail</span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <div className="flex justify-between items-center">
                                        <label className="text-[#0d121c] dark:text-gray-200 text-sm font-semibold">
                                            Password
                                        </label>
                                        <a className="text-sm font-medium text-[#0d59f2] hover:text-[#0b4ecf] hover:underline" href="/forgot-password">Forgot password?</a>
                                    </div>
                                    <div className="relative">
                                        <input
                                            className="w-full h-12 px-4 rounded-lg bg-gray-50 dark:bg-[#101622] border border-gray-200 dark:border-gray-700 text-[#0d121c] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0d59f2]/20 focus:border-[#0d59f2] transition-all placeholder:text-gray-400 text-base"
                                            placeholder="Enter your password"
                                            type="password"
                                            autoComplete='password'
                                            {...register("password", {
                                                required: "This field is requird.", minLength: { value: 8, message: "Password must be at least 8 characters", }, pattern: {
                                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()_+\-])[A-Za-z\d@$!%*?&#^()_+\-]{8,}$/,
                                                    message: "Password must contain A-Z, a-z, number, symbol & no spaces."
                                                }
                                            })}
                                        />
                                        {errors.password && <div className="text-xs text-red-500 dark:text-red-500">{errors.password.message}</div>}
                                    </div>
                                </div>
                                <button disabled={isSubmitting} type="submit" value="submit" className={`w-full h-12 mt-2 bg-[#0d59f2] hover:bg-[#0b4ecf] text-white font-bold rounded-lg transition-all shadow-lg shadow-[#0d59f2]/30 flex items-center justify-center gap-2 ${isSubmitting ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}>
                                    <span>Log in</span>
                                    <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                                </button>
                            </form>
                            <div className="relative flex py-6 items-center">
                                <div className="grow border-t border-gray-200 dark:border-gray-700"></div>
                                <span className="shrink-0 mx-4 text-gray-400 text-xs uppercase font-medium tracking-wider">Or continue with</span>
                                <div className="grow border-t border-gray-200 dark:border-gray-700"></div>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <button onClick={() => signIn("google")} className="h-12 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#101622] hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.766 12.2764C23.766 11.4607 23.6999 10.6406 23.5588 9.83807H12.24V14.4591H18.7217C18.4528 15.9494 17.5885 17.2678 16.323 18.1056V21.1039H20.19C22.4608 19.0139 23.766 15.9274 23.766 12.2764Z" fill="#4285F4"></path>
                                        <path d="M12.24 24.0008C15.4765 24.0008 18.2058 22.9382 20.1945 21.1039L16.3275 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.24 24.0008Z" fill="#34A853"></path>
                                        <path d="M5.50253 14.3003C5.00236 12.8099 5.00236 11.1961 5.50253 9.70575V6.61481H1.5166C-0.18551 10.0056 -0.18551 14.0004 1.5166 17.3912L5.50253 14.3003Z" fill="#FBBC05"></path>
                                        <path d="M12.24 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.034466 12.24 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.61049L5.50253 9.70143C6.45064 6.86173 9.10947 4.74966 12.24 4.74966Z" fill="#EA4335"></path>
                                    </svg>
                                </button>
                                <button onClick={() => signIn("github")} className="h-12 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#101622] hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                    <svg className="w-6 h-6 text-black dark:text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.372 0 0 5.372 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.809 1.305 3.495.997.108-.774.418-1.305.762-1.605-2.665-.303-5.466-1.332-5.466-5.931 0-1.31.468-2.381 1.235-3.221-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.51 11.51 0 0 1 3-.404c1.02.005 2.045.138 3 .404 2.289-1.552 3.295-1.23 3.295-1.23.653 1.653.242 2.873.12 3.176.77.84 1.232 1.911 1.232 3.221 0 4.609-2.807 5.625-5.48 5.921.43.371.813 1.102.813 2.222 0 1.606-.015 2.896-.015 3.287 0 .32.216.694.825.576C20.565 21.796 24 17.3 24 12c0-6.628-5.372-12-12-12z" />
                                    </svg>
                                </button>
                            </div>
                            <div className="mt-8 text-center">
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Don't have an account?
                                    <a className="font-bold text-[#0d121c] dark:text-white hover:underline ml-1" href="/signup">Sign up</a>
                                </p>
                            </div>
                            <div className="mt-8 text-center border-t border-gray-100 dark:border-gray-800 pt-4">
                                <p className="text-xs text-gray-400 leading-normal max-w-xs mx-auto">
                                    By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from RideApp and its affiliates to the number provided.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:hidden absolute inset-0 z-0">
                    <img alt="Abstract map background pattern" className="object-cover w-full h-full opacity-10 dark:opacity-20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOCKbJ9Aa2ITKNtYW3td5taL7dEuY-RfrWwcoxR8cPURKx-qsAGZBzvFd3pcv6ZQvcqtP8r27SzNmpL8wEW2H1bPVidHOBbbblHnKnrMGLu0J-3hxiz9xHYjKCq6RvqG1BDIugRA2iYBMokLmkhZhfRKjX4d2QfYzikiNLchItoOyqA345Z2KlalDrlr1aX5UbRj-3JEiM8mIg48LEZKUdYkhoV1IlAfj74BRKdhKPultaS5FUWvRkysPj6MbWMGLhui5wP5-CsqaX" />
                </div>
            </main>
            <footer className="fixed bottom-0 left-0 right-0 p-4 z-20 hidden lg:flex justify-between items-center bg-transparent pointer-events-none px-12 pb-6">
                <div className="flex gap-6 pointer-events-auto">
                    <a className="text-xs text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200" href="/privacy-policy">Privacy Policy</a>
                    <a className="text-xs text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200" href="/terms-of-service">Terms of Service</a>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 pointer-events-auto bg-white/80 dark:bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-sm">
                    <span className="material-symbols-outlined text-[14px]">lock</span>
                    Secure Login
                </div>
            </footer>
        </>
    )
}