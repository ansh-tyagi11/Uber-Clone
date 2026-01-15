"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const userNavbar = () => {
    const pathname = usePathname();
    const isActive = (path) => pathname === path;

    return (
        <>
            {/* Top Navigation */}
            <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 pointer-events-none">
                <div className="pointer-events-auto flex items-center gap-3 bg-white/80 backdrop-blur-md rounded-full px-5 py-2 shadow-sm border border-white/50">
                    <div className="p-1.5 bg-[#2b9dee] rounded-full text-white">
                        <span className="material-symbols-outlined text-[20px]">local_taxi</span>
                    </div>
                    <h2 className="text-slate-900 text-lg font-bold tracking-tight">RideApp</h2>
                </div>
                <div className="pointer-events-auto flex items-center gap-4">
                    <nav className="hidden md:flex bg-white/80 backdrop-blur-md rounded-full px-2 p-1.5 shadow-sm border border-white/50">
                        <Link className={`px-5 py-2 text-sm  ${isActive('/user-home') ? 'font-semibold text-slate-800 bg-white rounded-full shadow-sm' : 'font-medium text-slate-600 hover:text-[#2b9dee] transition-colors'}`}
                            href="/user-home">
                            Home
                        </Link>
                        <Link className={`px-5 py-2 text-sm  ${isActive('/user-rides') ? 'font-semibold text-slate-800 bg-white rounded-full shadow-sm' : 'font-medium text-slate-600 hover:text-[#2b9dee] transition-colors'}`} href="/user-rides">
                            Rides
                        </Link>
                        <Link className={`px-5 py-2 text-sm  ${isActive('/user-payment') ? 'font-semibold text-slate-800 bg-white rounded-full shadow-sm' : 'font-medium text-slate-600 hover:text-[#2b9dee] transition-colors'}`} href="/user-payment">
                            Payment
                        </Link>
                        <Link className={`px-5 py-2 text-sm  ${isActive('/user-profile') ? 'font-semibold text-slate-800 bg-white rounded-full shadow-sm' : 'font-medium text-slate-600 hover:text-[#2b9dee] transition-colors'}`} href="/user-profile">
                            Profile
                        </Link>
                    </nav>
                    <div className="flex items-center gap-3">
                        <button className="flex items-center justify-center w-11 h-11 bg-white/90 backdrop-blur rounded-full text-slate-700 hover:bg-white hover:text-[#2b9dee] shadow-sm transition-all">
                            <span className="material-symbols-outlined">notifications</span>
                        </button>
                        <div
                            className="w-11 h-11 rounded-full bg-cover bg-center border-2 border-white shadow-sm cursor-pointer"
                            style={{
                                backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBnWnXhqt2gJ1xjCWWALJmhPrDL_NhFbZ8lhBrwuOhzPnwJzg9Fsllee_IriCz6reqTw3czUCYd7XfsqQjcC6QR9zMNeMjEtdQ9WZqqSfuc38YTETwTw9a0i6qioDrwBmC03OgPP6snFDmmxB8lFu_5chKZT98nY__47e5GhAk--SX1EWd5Lhkqn_RDQaqFQjEi5D_uL48qu3PdZPuZWzgBgyHMKP3133XGmsRO_XXY7Zh_zwL5OZaTc5-msl0MxgBRb65QNZPA-UHT')"
                            }}
                        />
                    </div>
                </div>
            </header>
        </>
    )
}

export default userNavbar
