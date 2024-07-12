import type {Metadata} from "next";
import {Inter} from "next/font/google";
import Navbar from "@/templates/Navbar";
import "./globals.css";
import Footer from "@/templates/Footer";

const inter = Inter({subsets: ["latin"]});

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
        <body className={`${inter.className} min-h-screen`}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}
