import React from "react";

export default function UserProfileSettings() {

  return (
    <>
      <div className="bg-[#f6f7f8] dark:bg-[#101922] pt-16 min-h-screen flex flex-col font-display text-slate-900 dark:text-slate-100 transition-colors duration-200">
        {/* Main Content */}
        <main className="flex-1 py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-2 mb-8">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Settings</h2>
              <p className="text-slate-500 dark:text-slate-400">Manage your account preferences and personal details.</p>
            </div>
            <div>
              {/* Main Form Area */}
              <div className="lg:col-span-8 xl:col-span-9">
                <div className="rounded-2xl bg-[#ffffff] dark:bg-[#1a2430] shadow-sm border border-slate-200 dark:border-slate-800 p-6 md:p-8">
                  <div className="mb-8 flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">My Profile</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                        Update your photo and personal details here.
                      </p>
                    </div>
                    <div className="hidden sm:block rounded-full bg-blue-50 dark:bg-blue-900/20 p-3">
                      <span className="material-symbols-outlined text-[#137fec] text-2xl">manage_accounts</span>
                    </div>
                  </div>
                  <form action="#" className="flex flex-col gap-8">
                    {/* Personal Info Section */}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div className="col-span-1 md:col-span-2">
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2" >Full Name</label>
                        <div className="relative">
                          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <span className="material-symbols-outlined text-slate-400 text-[20px]">person</span>
                          </div>
                          <input
                            className="block w-full rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white py-2.5 pl-10 focus:border-[#137fec] focus:ring-2 focus:ring-blue-500 focus:outline-none sm:text-sm shadow-sm transition-shadow"
                            id="full-name"
                            name="full-name"
                            type="text"
                            value="John Doe"
                            readOnly
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                        <div className="relative">
                          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <span className="material-symbols-outlined text-slate-400 text-[20px]">mail</span>
                          </div>
                          <input
                            className="block w-full rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white py-2.5 pl-10 focus:border-[#137fec] focus:ring-2 focus:ring-blue-500 focus:outline-none sm:text-sm shadow-sm transition-shadow"
                            id="email"
                            name="email"
                            type="email"
                            value="john.doe@example.com"
                            readOnly
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Phone Number</label>
                        <div className="relative">
                          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <span className="material-symbols-outlined text-slate-400 text-[20px]">call</span>
                          </div>
                          <input
                            className="block w-full rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white py-2.5 pl-10 focus:border-[#137fec] focus:ring-2 focus:ring-blue-500 focus:outline-none sm:text-sm shadow-sm transition-shadow"
                            id="phone"
                            name="phone"
                            type="tel"
                            value="+91 999999999"
                            readOnly
                          />
                        </div>
                      </div>
                    </div>
                    <hr className="border-slate-200 dark:border-slate-700" />
                    {/* Password Section */}
                    <div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white mb-4">Security</h4>
                      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Current Password</label>
                          <input
                            className="block w-full rounded-xl border border-slate-300 pl-3 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white py-2.5 focus:border-[#137fec] focus:ring-2 focus:ring-blue-500 focus:outline-none sm:text-sm shadow-sm"
                            id="current-password"
                            name="current-password"
                            placeholder="••••••••"
                            type="password"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">New Password</label>
                          <input
                            className="block w-full pl-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white py-2.5 focus:border-[#137fec] focus:ring-2 focus:ring-blue-500 focus:outline-none sm:text-sm shadow-sm"
                            id="new-password"
                            name="new-password"
                            type="password"
                          />
                        </div>
                      </div>
                    </div>
                    <hr className="border-slate-200 dark:border-slate-700" />
                    {/* Preferences Section */}
                    <div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white mb-4">Preferences</h4>
                      <div className="space-y-4">
                        {/* Language Dropdown */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center size-10 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                              <span className="material-symbols-outlined">language</span>
                            </div>
                            <div>
                              <p className="font-medium text-slate-900 dark:text-white">Language</p>
                              <p className="text-xs text-slate-500 dark:text-slate-400">
                                Select your preferred language</p>
                            </div>
                          </div>
                          <select className="block w-full sm:w-48 rounded-xl border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white py-2 focus:border-[#137fec] focus:ring-2 focus:ring-blue-500 focus:outline-none sm:text-sm shadow-sm">
                            <option>English (US)</option>
                            <option>Spanish</option>
                            <option>French</option>
                          </select>
                        </div>
                        {/* Notifications Toggle */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center size-10 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                              <span className="material-symbols-outlined">notifications_active</span>
                            </div>
                            <div>
                              <p className="font-medium text-slate-900 dark:text-white">
                                Email Notifications
                              </p>
                              <p className="text-xs text-slate-500 dark:text-slate-400">
                                Receive updates about your rides
                              </p>
                            </div>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input checked="" className="sr-only peer" type="checkbox" readOnly />
                            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#137fec]">
                            </div>
                          </label>
                        </div>
                        {/* Dark Mode Toggle */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center size-10 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                              <span className="material-symbols-outlined">dark_mode</span>
                            </div>
                            <div>
                              <p className="font-medium text-slate-900 dark:text-white">Dark Mode</p>
                              <p className="text-xs text-slate-500 dark:text-slate-400">Adjust the appearance of the app</p>
                            </div>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input className="sr-only peer" type="checkbox" readOnly />
                            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#137fec]">
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                    {/* Action Buttons */}
                    <div className="flex items-center justify-end gap-4 pt-4">
                      <button className="px-5 py-2.5 rounded-xl text-sm font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        type="button">Cancel</button>
                      <button className="px-6 py-2.5 rounded-xl bg-[#137fec] hover:bg-blue-600 text-white text-sm font-bold shadow-md shadow-blue-500/30 transition-all hover:-translate-y-0.5"
                        type="submit">Save Changes</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}