'use client'
import { useEffect, useState } from "react";
import { Sacramento } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const inter = Sacramento({ subsets: ["latin"], weight: "400" });


export default function RootLayout({ children }) {
  const [headerBackground, setHeaderBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHeaderBackground(true);
      } else {
        setHeaderBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <html lang="en">
      <body className={`${inter.className} bg-[url(/homepagebackground.jpg)] bg-fixed bg-cover bg-no-repeat`}>
        <div className={`sticky inset-0 z-50 transition-colors duration-300 ${headerBackground ? "bg-[orange]" : "bg-transparent"}`}>
          <Header />
        </div>

        {children}
        
      </body>
    </html>
  );
}
