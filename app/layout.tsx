import type { Metadata } from "next"; 
import { Plus_Jakarta_Sans } from "next/font/google";
import { Merriweather } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--plus--jakarta--sans",
  subsets: ["latin"],
  display: "swap",
});

const merriweather = Merriweather({
  variable: "--merriweather-font",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});


export const metadata: Metadata = {
  title: "CRIATEUR",
  description: "Curate your creative self.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${merriweather.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
