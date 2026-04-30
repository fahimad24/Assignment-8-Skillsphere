"use client";

import { use, useState } from "react";
import Link from "next/link";
import { Button, cn } from "@heroui/react"; // or your cn utility
import { useAuth } from "@/context/AuthProvider";
import Image from "next/image";
import { usePathname } from "next/navigation";

const maxWidthClasses = {
  sm: "max-w-[640px]",
  md: "max-w-[768px]",
  lg: "max-w-[1024px]",
  xl: "max-w-[1300px]",
  "2xl": "max-w-[1536px]",
  full: "max-w-full",
};

const rightContent = (
  <>
    <Link href="/login">
      <button className="py-1.5 px-4 rounded-full bg-mauve-200 font-medium cursor-pointer hover:bg-mauve-300 transition-colors">
        Login
      </button>
    </Link>
    <Link href="/sign-up">
      <button className="py-1.5 px-4 rounded-full gradient-bg-2 text-white font-medium cursor-pointer hover:opacity-90 transition-opacity">
        Sign Up
      </button>
    </Link>
  </>
);

export function Navbar({
  brand,
  items,
  className,
  maxWidth = "xl",
  position = "sticky",
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { session, loading, logOut } = useAuth();
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "z-40 w-full bg-light-orange/5 backdrop-blur-lg",
        position === "sticky" && "sticky top-0",
        position === "fixed" && "fixed top-0",
        className,
      )}
    >
      <header
        className={cn(
          "flex h-16 items-center justify-between px-6",
          maxWidth !== "full" && maxWidthClasses[maxWidth],
          "mx-auto",
        )}
      >
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          {brand}
        </div>
        <ul className="hidden items-center gap-4 md:flex">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`font-medium text-md hover:text-light-orange ${pathname === item.href ? "text-light-orange border-b-2 pb-2" : ""}`}
                aria-current={item.isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        {session && (
          <div className="hidden items-center gap-4 md:flex">
            <Link
              href="/profile"
              className="w-10 h-10 rounded-full overflow-hidden relative border-2 border-light-orange"
              title="Profile"
            >
              <Image
                src={session?.image}
                alt="User avatar"
                width={40}
                height={40}
                className="object-cover"
                loading="eager"
              />
            </Link>
            <div>
              <Button
                variant="danger"
                onClick={logOut}
                className="cursor-pointer hover:opacity-90 transition-opacity"
              >
                LogOut
              </Button>
            </div>
          </div>
        )}

        {!session && rightContent && (
          <div className="hidden items-center gap-4 md:flex">
            {rightContent}
          </div>
        )}
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "block py-2 font-medium text-lg hover:text-light-orange",
                    item.isActive && "",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            {rightContent && (
              <li className="mt-4 flex flex-col gap-2 border-t border-separator pt-4">
                {rightContent}
              </li>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}
