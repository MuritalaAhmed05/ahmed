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

// export const metadata: Metadata = {
//   title: "Muritala Ahmed | Frontend Developer",
//   description: "Hi, I'm Muritala Ahmed — a passionate frontend developer crafting beautiful web experiences with Next.js, TypeScript, and Tailwind CSS.",
//   openGraph: {
//     title: "Muritala Ahmed | Frontend Developer",
//     description: "Hi, I'm Muritala Ahmed — a passionate frontend developer crafting beautiful web experiences with modern tools.",
//     url: "https://yourdomain.com", 
//     siteName: "Muritala Ahmed Portfolio",
//     images: [
//       {
//         url: "https://files.catbox.moe/76nawh.png", 
//         width: 1200,
//         height: 630,
//         alt: "Muritala Ahmed Portfolio",
//       },
//     ],
//     type: "website",
//   },
// };
export const metadata = {
  metadataBase: new URL("https://ahmedisawebdev.vercel.app"),
  // metadataBase: new URL("https://Muritala-Ahmed.is-a.dev/"),

  title: {
    template: "Muritala Ahmed | %s",
    default: "Muritala Ahmed | Home",
  },
  description:
    "Hey there! I'm Muritala Ahmed, a developer on a mission to craft engaging experiences through code. Welcome to my corner of the web!",
  verification: {
    // google: "-", // for vercel
    google: "8W2KdbnsmX6v1yxvfA6MIweGEeAkd3DcnN5ji9LCANM", 
  },
  referrer: "origin-when-cross-origin",
  keywords: [
    "Muritala",
    "Alao",
    "Ahmed",
    "Muritala Alao",
    "Muritala Ahmed",
    "Muritala Alao Ahmed",
    "Portfolio",
    "Projects",
    "Contact",
    "Website",
    "Portfolio Website",
    "Muritala Ahmed Portfolio",
    "Muritala Alao Portfolio",
    "Muritala Ahmed Portfolio Website",
    "Muritala Alao Ahmed Portfolio Website",
  ],
  authors: [
    { name: "Ahmed" },
    { name: "Muritala", url: "https://ahmedisawebdev.vercel.app" },
  ],
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },
  openGraph: {
    images: "/opengraph-image.webp",
    title: "Muritala Ahmed | Developer Extraordinaire",
    description:
      "Welcome to my digital hub! Explore my projects, journey, and passion for turning ideas into reality with code.",
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
