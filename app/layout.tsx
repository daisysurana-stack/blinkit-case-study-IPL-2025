import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import "./globals.css";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans"
});

export const metadata: Metadata = {
  title: "Daisy Surana Portfolio",
  description: "Selected works, motion archive, about, and contact for Daisy Surana."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={workSans.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <div className="site-shell">
          <Sidebar />
          <main className="page-main">{children}</main>
        </div>
        <div className="page-noise" />
      </body>
    </html>
  );
}
