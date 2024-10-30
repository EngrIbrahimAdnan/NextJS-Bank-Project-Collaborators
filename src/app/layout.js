//Added this
"use client";
import { usePathname } from "next/navigation";
//end

import localFont from "next/font/local";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata = {
//   title: "Bank of Failaka",
//   description: "The most insecure investment of your life",
// };

export default function RootLayout({ children }) {
  //added these two lines in

  let hideNavbar;
  if (true) {
    const pathname = usePathname();

    hideNavbar = pathname === "/login" || pathname === "/register";
  } else {
    hideNavbar = false;
  }

  //end

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
