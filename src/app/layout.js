import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Link from "next/link";
import { Navbar } from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { Toast } from "@heroui/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Skillsphere - Learn Practical Skills with Curated Courses and Projects",
  description: "Skillsphere offers a wide range of courses and projects designed to help you learn practical skills for real-world applications. Whether you're looking to advance your career or explore new hobbies, Skillsphere has something for everyone.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="">
        <Toast.Provider />
        <header>
          <Navbar
            brand={
              <>
                <Link
                  href="/"
                  className="font-bold text-4xl gradient-bg-2 text-transparent bg-clip-text!"
                >
                  Skillsphere
                </Link>
              </>
            }
            items={[
              { label: "Home", href: "/" },
              { label: "Courses", href: "/courses" },
              { label: "My Profile", href: "/profile" },
              { label: "Contact", href: "/contact" },
            ]}

          />
        </header>
        {children}
        <Footer />

      </body>
    </html>
  );
}
