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


export const metadata = {
  metadataBase: new URL("https://ahmedisawebdev.vercel.app"),

  title: {
    template: "Muritala Ahmed | %s",
    default: "Muritala Ahmed",
  },
  description:
    "Hey there! I'm Muritala Ahmed, a developer on a mission to craft engaging experiences through code. Welcome to my corner of the web!",
  verification: {
    google: "8W2KdbnsmX6v1yxvfA6MIweGEeAkd3DcnN5ji9LCANM", 
  },
  referrer: "origin-when-cross-origin",
  keywords: 
    [
      "Muritala",
      "Alao",
      "Ahmed",
      "Muritala Alao",
      "Muritala Ahmed",
      "Muritala Alao Ahmed",
      "Muritala Ahmed Web Developer",
      "Portfolio",
      "Projects",
      "Contact",
      "Website",
      "Portfolio Website",
      "Muritala Ahmed Portfolio",
      "Muritala Alao Portfolio",
      "Muritala Ahmed Portfolio Website",
      "Muritala Ahmed Frontend Developer",
      "Muritala Ahmed Next.js Developer",
      "Muritala Ahmed React Developer",
      "Muritala Ahmed Nigeria",
      "Muritala Ahmed Developer Portfolio",
      "Frontend Developer in Nigeria",
      "Next.js Portfolio Website",
      "React.js Developer Portfolio",
      "Tailwind CSS Portfolio",
      "Web Developer Portfolio",
      "Frontend Developer Portfolio",
      "JavaScript Developer Portfolio",
      "Software Engineer Portfolio",
      "Muritala Ahmed Projects",
      "Muritala Ahmed Contact",
      "Ahmed Muritala Web Projects",
      "Ahmed Is a Web Developer",
      "Ahmed Is a Frontend Developer",
      "Ahmed Is a Next.js Developer",
      "Ahmed Is a web Dev",
      "Ahmed Isa Portfolio",
      "Muritala Ahmed Developer Website",
      "Muritala Ahmed Online Portfolio",
      "Hire Muritala Ahmed",
      "Work with Muritala Ahmed",
      "Best Frontend Developer in Nigeria",
      "Modern Portfolio Developer",
      "Creative Web Developer Nigeria",
      "Freelance Frontend Developer",
      "Ahmed Muritala Personal Website",
      "Muritala Ahmed Github",
      "Muritala Ahmed LinkedIn",
      "Clean Developer Portfolio Design"
    ],
    
  authors: [
    { name: "Ahmed" },
    { name: "Muritala", url: "https://ahmedisawebdev.vercel.app" },
  ],
  alternates: {
    canonical: "https://ahmedisawebdev.vercel.app",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },
  openGraph: {
    type: "website",
    url: "https://ahmedisawebdev.vercel.app",
    title: "Muritala Ahmed | Developer Extraordinaire",
    description: "Welcome to my digital hub! Explore my projects, journey, and passion for turning ideas into reality with code.",
    images: [
      {
        url: "https://ahmedisawebdev.vercel.app/logo.png",
        width: 1200,
        height: 630,
        alt: "Muritala Ahmed Portfolio",
      },
    ],
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
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
        {children}

          </ThemeProvider>
      </body>
    </html>
  );
}
