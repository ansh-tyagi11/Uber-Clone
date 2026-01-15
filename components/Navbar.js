"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => setIsOpen(!isOpen);


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
                    <span onClick={toggleSidebar} className="md:hidden material-symbols-outlined cursor-pointer z-70">{isOpen ? 'close' : 'menu'}</span>
                    {isOpen && (<div className="md:hidden fixed inset-0 bg-black/50 z-40" onClick={toggleSidebar} />)}
                    <aside className={`md:hidden fixed top-0 right-0 h-screen w-50 flex bg-white flex-col shadow-xl pt-14 p-6 z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                        <div className="flex flex-col gap-4">
                            <Link onClick={toggleSidebar} className="hover:text-blue-600 rounded-lg h-9 px-4 bg-transparent border border-gray-200" href="#">Ride</Link>
                            <Link onClick={toggleSidebar} className="hover:text-blue-600" href="/">Home</Link>
                            <Link onClick={toggleSidebar} className="hover:text-blue-600" href="/about">About</Link>
                            <Link onClick={toggleSidebar} className="hover:text-blue-600" href="/contact">Contact</Link>
                            <button className="flex items-center justify-center rounded-lg h-9 px-4 bg-transparent border border-gray-200 text-sm font-bold hover:bg-gray-100 transition-colors">
                                <Link href="/login">Log in</Link>
                            </button>
                            <button className="flex items-center justify-center rounded-lg h-9 px-4 bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition-colors">
                                <Link href="/signup">Sign up</Link>
                            </button>
                        </div>
                    </aside>
                </div>
            </div>
        </>
    )
}
