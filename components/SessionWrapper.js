"use client"
import { SessionProvider } from "next-auth/react";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

const SessionWrapper = ({ children }) => {
  const pathname = usePathname()

  const hiddenRoutes = ["/login", "/signup", "/otp", "/forgot-password", "/home"];
  const hiddenLayout = hiddenRoutes.includes(pathname);

  return (
    <SessionProvider>
      {!hiddenLayout && <Navbar />}
      {children}
      {!hiddenLayout && <Footer />}
    </SessionProvider>
  )
}

export default SessionWrapper