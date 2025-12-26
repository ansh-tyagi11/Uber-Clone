import React from 'react'

export default function Login() {
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
                            <form className="flex flex-col gap-5">
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-[#0d121c] dark:text-gray-200 text-sm font-semibold">
                                        Email or Mobile Number
                                    </label>
                                    <div className="relative">
                                        <input
                                            className="w-full h-12 px-4 rounded-lg bg-gray-50 dark:bg-[#101622] border border-gray-200 dark:border-gray-700 text-[#0d121c] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0d59f2]/20 focus:border-[#0d59f2] transition-all placeholder:text-gray-400 text-base"
                                            placeholder="Enter your email"
                                            name='email'
                                            type="email"
                                            autoComplete='email'
                                            required
                                        />
                                        <span className="material-symbols-outlined absolute right-4 top-3 text-gray-400 pointer-events-none text-[20px]">mail</span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <div className="flex justify-between items-center">
                                        <label className="text-[#0d121c] dark:text-gray-200 text-sm font-semibold">
                                            Password
                                        </label>
                                        <a className="text-sm font-medium text-[#0d59f2] hover:text-[#0b4ecf] hover:underline" href="#">Forgot password?</a>
                                    </div>
                                    <div className="relative">
                                        <input
                                            className="w-full h-12 px-4 rounded-lg bg-gray-50 dark:bg-[#101622] border border-gray-200 dark:border-gray-700 text-[#0d121c] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0d59f2]/20 focus:border-[#0d59f2] transition-all placeholder:text-gray-400 text-base"
                                            name='password'
                                            placeholder="Enter your password"
                                            type="password"
                                            autoComplete='password'
                                            required
                                        />
                                        <span className="material-symbols-outlined absolute right-4 top-3 text-gray-400 cursor-pointer hover:text-gray-600 text-[20px]">visibility_off</span>
                                    </div>
                                </div>
                                <button className="w-full h-12 mt-2 bg-[#0d59f2] hover:bg-[#0b4ecf] text-white font-bold rounded-lg transition-all shadow-lg shadow-[#0d59f2]/30 flex items-center justify-center gap-2">
                                    <span>Log in</span>
                                    <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                                </button>
                            </form>
                            <div className="relative flex py-6 items-center">
                                <div className="grow border-t border-gray-200 dark:border-gray-700"></div>
                                <span className="shrink-0 mx-4 text-gray-400 text-xs uppercase font-medium tracking-wider">Or continue with</span>
                                <div className="grow border-t border-gray-200 dark:border-gray-700"></div>
                            </div>
                            <div className="grid grid-cols-3 gap-3">
                                <button className="h-12 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#101622] hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.766 12.2764C23.766 11.4607 23.6999 10.6406 23.5588 9.83807H12.24V14.4591H18.7217C18.4528 15.9494 17.5885 17.2678 16.323 18.1056V21.1039H20.19C22.4608 19.0139 23.766 15.9274 23.766 12.2764Z" fill="#4285F4"></path>
                                        <path d="M12.24 24.0008C15.4765 24.0008 18.2058 22.9382 20.1945 21.1039L16.3275 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.24 24.0008Z" fill="#34A853"></path>
                                        <path d="M5.50253 14.3003C5.00236 12.8099 5.00236 11.1961 5.50253 9.70575V6.61481H1.5166C-0.18551 10.0056 -0.18551 14.0004 1.5166 17.3912L5.50253 14.3003Z" fill="#FBBC05"></path>
                                        <path d="M12.24 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.034466 12.24 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.61049L5.50253 9.70143C6.45064 6.86173 9.10947 4.74966 12.24 4.74966Z" fill="#EA4335"></path>
                                    </svg>
                                </button>
                                <button className="h-12 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#101622] hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                    <svg className="w-6 h-6 text-black dark:text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.2 11.45V11.45L13.2 11.45ZM13.2 11.45L13.2 11.45ZM13.2 11.45L13.2 11.45Z"></path>
                                        <path d="M16.99 8.019C15.619 8.019 15.059 8.979 15.059 8.979V8.149H12.609V16H15.059V11.979C15.059 10.919 15.259 9.879 16.549 9.879C17.829 9.879 17.849 11.079 17.849 12.049V16H20.299V11.669C20.299 9.539 19.839 7.919 18.069 7.919C17.219 7.919 16.639 8.309 16.329 8.799L16.299 8.799L16.299 8.799L16.299 8.019H16.99ZM11.379 6.849C12.229 6.849 12.929 6.169 12.929 5.309C12.929 4.459 12.239 3.769 11.379 3.769C10.519 3.769 9.839 4.459 9.839 5.309C9.839 6.169 10.529 6.849 11.379 6.849ZM12.609 16H10.159V8.149H12.609V16ZM7.709 16H5.259V8.149H7.709V16ZM4.899 16.5H22.149C22.689 16.5 23.149 16.049 23.149 15.499V4.509C23.149 3.969 22.699 3.509 22.149 3.509H4.899C4.349 3.509 3.899 3.969 3.899 4.509V15.499C3.899 16.049 4.349 16.5 4.899 16.5Z"></path>
                                    </svg>
                                </button>
                                <button className="h-12 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#101622] hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                    <svg className="w-6 h-6 text-black dark:text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.05 20.28c-.98.95-2.05.88-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.48 2.24-1.26 3.63-1.24 1.52.05 2.67.77 3.35 1.73-3.25 1.73-2.72 5.76.32 7.01-.26.8-.57 1.56-1.02 2.28-.6.96-1.28 1.96-2.36 2.39h-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"></path>
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
                    <a className="text-xs text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200" href="/terms">Terms of Service</a>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 pointer-events-auto bg-white/80 dark:bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-sm">
                    <span className="material-symbols-outlined text-[14px]">lock</span>
                    Secure Login
                </div>
            </footer>
        </>
    )
}