import React from "react";

export default function Home() {
  const arr = [{ image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5R6WTnL1rmwP6vhLiBEB-GCCmpxALJ-Z1SZQ2arA63kHtC5YGB46mgze0Fh47aVGyckJyxlfu6H3X0Z048Lt3IJRvfcxSFfQ9ZZSTL--03jRL7au4gD1Wuh3kGG5LdrKQqQ7nkUFHb7fa94i4_-hPsLrYfIqAllwErrj2QGt8zrwOMUFAoVIFQCmtF6qeWJUxweAWeky-Bekcotx2k0BOfKnRX-EPHwO2Ozfiju7KpPr_IGcDO_c5M-D559BCSoVXsD_aUO9zLWk", type: "", title: "Standard", subTitle: "Affordable everyday rides" }, { image: "https://lh3.googleusercontent.com/aida-public/AB6AXuADxEJQHgn8RM3in2W1Q6_WJcTSXJdCfSuaeys1jR2F-TEny-2XLOKs11tF44p_XPk4rbSnLSp71BmF_j9v2n4b_DBV146S3WB6GnbTRClc-Zzd_9yJljhnTqhzGERoH9FB7B1HZigxOf_FGGDE5P2lR9sdLyrwrneHzRtBTEEni3Ok4nDzb5WJCoEUFHelJBk5aCtznqCH7BpOHoAQVy-DTI4hjURQBhC60XqHwXpn-yf7eBWQ0tWgsIPNW_p4wbjsNJ_VxwzzvZs", type: "", title: "Premium", subTitle: "High-end cars for comfort" }, { image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFioW8XTJOYA7YqdTUGh-xXuoCTixG1VIKcQSWF5h9_c1Q57G2h1NgGCtC2BKk_kKOgJwtjE8hZ8bHJvU6-6BWX-x6ch_nA2C00UtoJmcuVU78xLrvdS7xmY_PSJ57v_JxiOOcFEIYJbST7Fdktywv25CdixaHSDp1F4x9hNZm0-vLqNUO3Auzgf8z5e6XzDsZyiWVYe0qfEd4y5KFq5-VEnO37kpdvT0NSZHbNhBFWx0P3d9rNSIvbncCwyPu3eHuCjS0q0WuaL4", type: "ECO", title: "Green", subTitle: "Sustainable electric rides" }, { image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdASroNxM3Ul2zAscYtZuT1gQiJp8smIF5KdvY3qDgOr1nOjdeCzAJc5Gu0QREORAqy1xbsyKq5a_vqo5f3ougw_4CcKdXaVg0yFaf2U9zCxzDqpaPcAV-Kz8APNCa99o4CQQPEZgqBEw2SKHSoMTukBxdnK-tntnrD7tYEwgaVeO4-VC-Cm19lJee8dCCpH4-4VIP28qVyN7j9pTSEoKg43BYFrUn66pDdDetSGgqvDRxYwsT2iP_aFIjVXK48YX9oLfmwHM7xJk", type: "", title: "XL", subTitle: "High-capacity for groups" }]
  return (
    <>
      <div className="bg-[#ffffff] text-[#000000] font-montserrat antialiased overflow-x-hidden">
        <div className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0 bg-cover bg-center"
            data-alt="City skyline at night with long exposure light trails from cars on a highway"
            style={{
              backgroundImage:
                'linear-gradient(to bottom, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.8) 80%, #ffffff 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBppnwDJ1gJhx7yqdIp5qdCNLLy-ywSD6uYSAhP2xfDE4xMcru3C7UAMeoQcf1jaaiQj7NbSmRPSttftKNtzPUZJI6phIGuYSZoHXI8nByddB_WAPD4ocSyW9OSmcRauiQBE5CVIjfB2pQhVY-jdAr6OGmzPLKdQsNW6uGKfEvIaHUQcEassITHTjNmz5vzMWgILSaEWTUv2-GtywmDqtglAo_ikpfTyZURhGDsaZ4XnOk6cpyRYk7xFEfPzNOUcbQyj2IbWqQzwHY")',
              backgroundBlendMode: 'lighten',
            }}>
          </div>
          <div
            className="relative z-10 w-full max-w-7xl px-4 md:px-10 flex flex-col md:flex-row items-center md:items-end justify-between gap-12 pt-20 pb-20">
            <div className="flex flex-col gap-6 max-w-2xl">
              <h1 className="font-display text-5xl md:text-7xl font-black leading-tight tracking-tight text-[#000000] ">
                The World at <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-[#0d59f2] to-blue-400">
                  Your Fingertips
                </span>
              </h1>
              <p className="text-lg md:text-xl text-[#6a6a6a]  font-light max-w-lg leading-relaxed">
                Connecting you with reliable rides anytime, anywhere. Experience the next generation of urban
                mobility.
              </p>
            </div>
            <div
              className="w-full md:w-105 bg-[#ffffff]/90 backdrop-blur-xl border border-[#e0e0e0] p-6 rounded-xl">
              <h3 className="text-xl font-display font-bold text-[#000000]  mb-5">Request a ride</h3>
              <div className="flex flex-col gap-4">
                <div className="relative">
                  <div className="absolute left-4 top-3.5 text-[#6a6a6a] ">
                    <span className="material-symbols-outlined text-[20px]">trip_origin</span>
                  </div>
                  <input
                    className="w-full bg-[#f0f0f0] border border-[#e0e0e0] rounded-lg py-3 pl-12 pr-4 text-[#000000]  placeholder:text-[#6a6a6a]  focus:ring-1 focus:ring-[#0d59f2] focus:border-[#0d59f2] outline-none"
                    placeholder="Enter pickup location" />
                </div>
                <div className="relative">
                  <div className="absolute left-4 top-3.5 text-[#6a6a6a] ">
                    <span className="material-symbols-outlined text-[20px]">location_on</span>
                  </div>
                  <input
                    className="w-full bg-[#f0f0f0] border border-[#e0e0e0] rounded-lg py-3 pl-12 pr-4 text-[#000000]  placeholder:text-[#6a6a6a]  focus:ring-1 focus:ring-[#0d59f2] focus:border-[#0d59f2] outline-none"
                    placeholder="Enter destination" />
                </div>
                <button className="w-full h-12 bg-[#0d59f2] hover:bg-blue-600 text-white font-bold rounded-lg mt-2 transition-all flex items-center justify-center gap-2">
                  <span>See prices</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="py-20 px-4 md:px-10 max-w-7xl mx-auto">
          <div className="flex flex-col gap-4 mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#000000] ">Value Proposition for Riders
            </h2>
            <p className="text-[#6a6a6a]  text-lg max-w-2xl">
              Experience smarter navigation and better pricing tailored your daily needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group bg-[#f0f0f0] border border-[#e0e0e0] rounded-xl p-8 hover:border-[#0d59f2] transition-colors">
              <div className="size-12 rounded-full bg-[#0d59f2]/10 flex items-center justify-center text-[#0d59f2] mb-6 group-hover:bg-[#0d59f2] group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">payments</span>
              </div>
              <h3 className="font-display text-xl font-bold text-[#000000]  mb-3">Predictive Pricing</h3>
              <p className="text-[#6a6a6a]  leading-relaxed">
                Know your fare before you go with upfront pricing that adapts to demand without surprises.
              </p>
            </div>
            <div className="group bg-[#f0f0f0] border border-[#e0e0e0] rounded-xl p-8 hover:border-[#0d59f2] transition-colors">
              <div className="size-12 rounded-full bg-[#0d59f2]/10 flex items-center justify-center text-[#0d59f2] mb-6 group-hover:bg-[#0d59f2] group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <h3 className="font-display text-xl font-bold text-[#000000]  mb-3">Smart Pickups</h3>
              <p className="text-[#6a6a6a]  leading-relaxed">
                AI-suggested pickup spots that save you time and help drivers find you instantly.
              </p>
            </div>
            <div className="group bg-[#f0f0f0] border border-[#e0e0e0] rounded-xl p-8 hover:border-[#0d59f2] transition-colors">
              <div className="size-12 rounded-full bg-[#0d59f2]/10 flex items-center justify-center text-[#0d59f2] mb-6 group-hover:bg-[#0d59f2] group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">explore</span>
              </div>
              <h3 className="font-display text-xl font-bold text-[#000000]  mb-3">Smarter Navigation</h3>
              <p className="text-[#6a6a6a]  leading-relaxed">
                Real-time traffic updates ensure the fastest route to your destination every single time.
              </p>
            </div>
          </div>
        </div>
        <div className="py-20 bg-[#ffffff] border-y border-[#e0e0e0]">
          <div className="px-4 md:px-10 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#000000] ">A Fleet for Every Occasion</h2>
              <div className="flex gap-2">
                <button className="size-10 rounded-full border border-[#e0e0e0] flex items-center justify-center hover:bg-[#f0f0f0] text-[#000000] ">
                  <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <button
                  className="size-10 rounded-full border border-[#e0e0e0] flex items-center justify-center hover:bg-[#f0f0f0] text-[#000000] ">
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>
            <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory">
              {arr.map((prop) => (
                <div key={prop.image} className="min-w-70 md:min-w-[320px] snap-center">
                  <div className="aspect-4/3 rounded-xl bg-[#f0f0f0] relative overflow-hidden mb-4 group">
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      data-alt="Black luxury sedan car on a dark background"
                      style={{
                        backgroundImage:
                          `url("${prop.image}")`,
                      }}>
                    </div>
                    <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                      {prop.type}</div>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-bold font-display text-[#000000] ">{prop.title}</h4>
                      <p className="text-sm text-[#6a6a6a] ">{prop.subTitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="py-24 px-4 md:px-10 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="relative rounded-2xl overflow-hidden border border-[#e0e0e0] bg-[#ffffff] p-2">
                <div className="aspect-square md:aspect-4/3 bg-cover bg-center rounded-xl"
                  data-alt="Close up of a hand holding a smartphone with a map application showing a route"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAsTzap2YPi9w5ru4XZJLFRe223lwnxdeJS7y0ENjHAC_UShUo2kYW05LY_xmVzEmdWV9I-n4XtgrzUIJisTu4d6QU--itihPABx6mzZuP0aX1NX2gVi9LAIp1gqV7JsOUL8QRO2k04V2Qfaidv67_aPkZAxlCoIj2_4fXdKVb0-WJ9_Ue_AvaYGpS8vv-SzPWelYwOXED-cdqe0BFXJOL0I1GY_7hGGZrKh8FGpy7_4nmNH-ENQjaXCeK9M9mKYqyigu6WXEvl34Y")',
                  }}>
                  <div
                    className="absolute bottom-6 left-6 right-6 bg-[#ffffff]/90 backdrop-blur-md p-4 rounded-lg border border-[#e0e0e0]">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[#6a6a6a]  text-sm">Today's Earnings</span>
                      <span className="text-green-600 font-bold text-sm">+12% vs last week</span>
                    </div>
                    <div className="text-3xl font-display font-bold text-[#000000] ">$142.50</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d59f2]/10 border border-[#0d59f2]/20 w-fit">
                <span className="size-2 rounded-full bg-[#0d59f2] animate-pulse"></span>
                <span className="text-xs font-bold text-[#0d59f2] uppercase tracking-wider">Driver Ecosystem</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[#000000]  leading-tight">
                Drive When You Want,<br />Earn What You Need
              </h2>
              <p className="text-[#6a6a6a]  text-lg leading-relaxed">
                Flexible opportunities designed around your life. Join the largest network of active riders and
                start earning immediately.
              </p>
              <div className="flex flex-col gap-6 mt-4">
                <div className="flex gap-4 items-start">
                  <div className="mt-1 bg-[#f0f0f0] p-2 rounded-lg border border-[#e0e0e0] text-[#000000] ">
                    <span className="material-symbols-outlined">schedule</span>
                  </div>
                  <div>
                    <h4 className="text-[#000000]  font-bold text-lg">Weekly Payouts</h4>
                    <p className="text-[#6a6a6a]  text-sm">Get paid instantly or weekly. Your money, your
                      schedule.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div
                    className="mt-1 bg-[#f0f0f0] p-2 rounded-lg border border-[#e0e0e0] text-[#000000] ">
                    <span className="material-symbols-outlined">monitoring</span>
                  </div>
                  <div>
                    <h4 className="text-[#000000]  font-bold text-lg">Heat Maps</h4>
                    <p className="text-[#6a6a6a]  text-sm">Visualize high-demand areas in real-time to maximize
                      earnings.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="mt-1 bg-[#f0f0f0] p-2 rounded-lg border border-[#e0e0e0] text-[#000000] ">
                    <span className="material-symbols-outlined">card_giftcard</span>
                  </div>
                  <div>
                    <h4 className="text-[#000000]  font-bold text-lg">Driver Rewards</h4>
                    <p className="text-[#6a6a6a]  text-sm">Unlock fuel discounts, vehicle maintenance, and more.
                    </p>
                  </div>
                </div>
              </div>
              <button className="mt-6 w-fit bg-[#0d59f2] text-white hover:bg-blue-600 font-bold py-3 px-8 rounded-lg transition-colors">
                Sign up to Drive
              </button>
            </div>
          </div>
        </div>
        <div className="py-20 bg-[#ffffff] border-t border-[#e0e0e0]">
          <div className="px-4 md:px-10 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#000000]  mb-4">Trust and Safety
                Infrastructure</h2>
              <p className="text-[#6a6a6a]  max-w-2xl mx-auto">Safety is built into every part of the experience.
                We're committed to your well-being before, during, and after every ride.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-[#f0f0f0] p-6 rounded-xl border border-[#e0e0e0] flex flex-col items-center text-center gap-4">
                <div className="size-14 rounded-full bg-[#0d59f2]/10 flex items-center justify-center text-[#0d59f2]">
                  <span className="material-symbols-outlined text-3xl">share_location</span>
                </div>
                <h3 className="text-lg font-bold text-[#000000] ">Real-time Tracking</h3>
                <p className="text-sm text-[#6a6a6a] ">Share your trip status with loved ones in real-time for peace
                  of mind.</p>
              </div>
              <div className="bg-[#f0f0f0] p-6 rounded-xl border border-[#e0e0e0] flex flex-col items-center text-center gap-4">
                <div className="size-14 rounded-full bg-[#0d59f2]/10 flex items-center justify-center text-[#0d59f2]">
                  <span className="material-symbols-outlined text-3xl">perm_phone_msg</span>
                </div>
                <h3 className="text-lg font-bold text-[#000000] ">Anonymized Calling</h3>
                <p className="text-sm text-[#6a6a6a] ">Contact your driver without revealing your personal phone
                  number.</p>
              </div>
              <div className="bg-[#f0f0f0] p-6 rounded-xl border border-[#e0e0e0] flex flex-col items-center text-center gap-4">
                <div className="size-14 rounded-full bg-[#0d59f2]/10 flex items-center justify-center text-[#0d59f2]">
                  <span className="material-symbols-outlined text-3xl">support_agent</span>
                </div>
                <h3 className="text-lg font-bold text-[#000000] ">24/7 Incident Support</h3>
                <p className="text-sm text-[#6a6a6a] ">Our dedicated safety team is available around the clock to
                  assist you.</p>
              </div>
              <div className="bg-[#f0f0f0] p-6 rounded-xl border border-[#e0e0e0] flex flex-col items-center text-center gap-4">
                <div className="size-14 rounded-full bg-[#0d59f2]/10 flex items-center justify-center text-[#0d59f2]">
                  <span className="material-symbols-outlined text-3xl">person_check</span>
                </div>
                <h3 className="text-lg font-bold text-[#000000] ">Verified Backgrounds</h3>
                <p className="text-sm text-[#6a6a6a] ">All drivers undergo rigorous multi-step background checks.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-24 px-4 md:px-10 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#000000]  mb-6">Powered by Advanced
                Technology</h2>
              <p className="text-[#6a6a6a]  mb-8">
                Our platform leverages cutting-edge algorithms to ensure the smoothest experience possible.
              </p>
              <a className="text-[#0d59f2] font-bold flex items-center gap-2 hover:gap-3 transition-all" href="#">
                <span>Learn more about our tech</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
            <div className="md:w-2/3 flex flex-col gap-6">
              <div className="flex gap-5 p-6 rounded-xl border border-[#e0e0e0] bg-[#f0f0f0] hover:bg-[#ffffff]   transition-colors">
                <div className="text-[#0d59f2] shrink-0">
                  <span className="material-symbols-outlined text-4xl">psychology</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#000000]  mb-2">AI-Powered Matching</h3>
                  <p className="text-[#6a6a6a]  text-sm">
                    Proprietary machine learning models match you with the best driver in seconds, optimizing
                    for ETA and traffic conditions.
                  </p>
                </div>
              </div>
              <div className="flex gap-5 p-6 rounded-xl border border-[#e0e0e0] bg-[#f0f0f0] hover:bg-[#ffffff]   transition-colors">
                <div className="text-[#0d59f2] shrink-0">
                  <span className="material-symbols-outlined text-4xl">credit_card</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#000000]  mb-2">Seamless Payments</h3>
                  <p className="text-[#6a6a6a]  text-sm">
                    Integrated digital wallets and encrypted payment processing mean you never have to fumble
                    for cash.
                  </p>
                </div>
              </div>
              <div className="flex gap-5 p-6 rounded-xl border border-[#e0e0e0] bg-[#f0f0f0] hover:bg-[#ffffff]   transition-colors">
                <div className="text-[#0d59f2] shrink-0">
                  <span className="material-symbols-outlined text-4xl">chat</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#000000]  mb-2">In-App Communication</h3>
                  <p className="text-[#6a6a6a]  text-sm">
                    Chat with your driver directly within the app, complete with auto-translation for seamless
                    coordination.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative py-24 bg-[#ffffff] overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-no-repeat bg-center bg-contain"
            data-alt="Abstract world map dots pattern"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBaFxfCDV-GmrbCBIbMuzQTpga6R7hVpY-MvkN0WUTFEsiqt0CDDTbrQ6rHmYBqP5EmXftnMLMhAlG761PQvEpx17tc7T3fzp28TztTlU9MdYOiKp4aVTQe46P4NYPWGda9UCptYp-G8MrioD2KGnWPZVQMkclsjnvJuPbRaq1q4vZ-Ky4bsFOaKIYZ5LFQwikj8EmUoraJ_mHPY03GC-sGC6X3QNtqCeshnvH5492FMu_8EU7jfCScCXeSYkdPZ_8R_kTGM7igMYU")',
              filter: "invert(0)",
            }} >
          </div>
          <div className="relative z-10 px-4 md:px-10 max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 p-3 rounded-full bg-[#0d59f2]/10 border border-[#0d59f2]/20">
              <span className="material-symbols-outlined text-[#0d59f2] text-3xl">public</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#000000]  mb-6">Global Reach &amp;
              Community</h2>
            <p className="text-xl text-[#6a6a6a]  mb-10">
              Proudly operating in over <span className="text-[#000000]  font-bold">50+ cities</span> worldwide. We
              are dedicated to making mobility accessible to everyone, everywhere.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
              <div className="flex items-center gap-3 bg-[#f0f0f0]/80 backdrop-blur border border-[#e0e0e0] p-4 rounded-lg">
                <span className="material-symbols-outlined text-[#0d59f2]">check_circle</span>
                <span className="text-[#000000]  font-medium">Wheelchair Accessible Rides</span>
              </div>
              <div className="flex items-center gap-3 bg-[#f0f0f0]/80 backdrop-blur border border-[#e0e0e0] p-4 rounded-lg">
                <span className="material-symbols-outlined text-[#0d59f2]">check_circle</span>
                <span className="text-[#000000]  font-medium">Community Guidelines</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}