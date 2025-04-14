import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/Themeprovider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muritala Ahmed | Frontend Developer",
  description: "Hi, I'm Muritala Ahmed — a passionate frontend developer crafting beautiful web experiences with Next.js, TypeScript, and Tailwind CSS.",
  openGraph: {
    title: "Muritala Ahmed | Frontend Developer",
    description: "Hi, I'm Muritala Ahmed — a passionate frontend developer crafting beautiful web experiences with modern tools.",
    url: "https://yourdomain.com", 
    siteName: "Muritala Ahmed Portfolio",
    images: [
      {
        url: "https://files.catbox.moe/76nawh.png", 
        width: 1200,
        height: 630,
        alt: "Muritala Ahmed Portfolio",
      },
    ],
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        {children}

          </ThemeProvider>
      </body>
    </html>
  );
}
