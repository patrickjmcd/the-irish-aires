import type {Metadata} from "next";
import {Raleway} from "next/font/google";
import {Analytics} from "@vercel/analytics/react";
import Navbar from "@/templates/Navbar";
import "./globals.css";
import Footer from "@/templates/Footer";

const font = Raleway({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "The Irish Aires",
    description: "The Irish Aires Band Website",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${font.className} min-h-screen bg-gray-50 dark:bg-emerald-950 flex flex-col`}>
        <div className="flex-grow-0">
            <Navbar/>
        </div>
        <div className={`flex-grow`}>
            {children}
        </div>
        <div className={`flex-grow-0`}>
            <Footer/>
        </div>
        <Analytics/>
        </body>
        </html>
    );
}
