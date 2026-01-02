"use client"
import { SessionProvider } from "next-auth/react";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

const SessionWrapper = ({ children }) => {
  const pathname = usePathname()

  const hiddenLayout = pathname === "/login" || pathname === "/signup" || pathname === "/otp";

  return (
    <SessionProvider>
      {!hiddenLayout && <Navbar />}
      {children}
      {!hiddenLayout && <Footer />}
    </SessionProvider>
  )
}

export default SessionWrapper