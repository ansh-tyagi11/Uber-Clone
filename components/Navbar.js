import React from 'react';
import Link from 'next/link';

export default function Navbar() {
    return (
        <>
            <div className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-200">
                <div className="px-4 md:px-10 py-4 max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-8 h-8 text-blue-600">
                            <span className="material-symbols-outlined text-4xl">local_taxi</span>
                        </div>
                        <h2 className="text-xl font-bold">RideApp</h2>
                    </div>
                    <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
                        <div className="flex items-center gap-6">
                            <a className="text-sm font-medium hover:text-blue-600 transition-colors" href="#">Ride</a>
                            <a className="text-sm font-medium hover:text-blue-600 transition-colors" href="/">Home</a>
                            <a className="text-sm font-medium hover:text-blue-600 transition-colors" href="/about">About</a>
                            <a className="text-sm font-medium hover:text-blue-600 transition-colors" href="/contact">Contact</a>
                        </div>
                        <div className="flex gap-3">
                            <button className="flex items-center justify-center rounded-lg h-9 px-4 bg-transparent border border-gray-200 text-sm font-bold hover:bg-gray-100 transition-colors">
                                <Link href="/login">Log in</Link>
                            </button>
                            <button className="flex items-center justify-center rounded-lg h-9 px-4 bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition-colors">
                                <Link href="/signup">Sign up</Link>
                            </button>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <span className="material-symbols-outlined">menu</span>
                    </div>
                </div>
            </div>
        </>
    )
}
