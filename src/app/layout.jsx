import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nassy & Franc",
  description: "A Story of Love",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[url(/homepagebackground.jpg)] bg-fixed bg-cover bg-no-repeat`}>

        {children}

      </body>
    </html>
  );
}
