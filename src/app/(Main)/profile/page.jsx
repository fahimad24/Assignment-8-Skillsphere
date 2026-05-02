"use client";

import { useAuth } from "@/context/AuthProvider";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const MyProfile = () => {
  const { session, loading, logOut } = useAuth();

  if (loading) return <div className="p-6">Loading profile…</div>;

  if (!session)
    return (
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-2">Not signed in</h2>
        <p className="mb-4 text-muted-foreground">
          Please log in to view your profile.
        </p>
        <Link href="/login">
          <button className="py-2 px-4 rounded-full bg-mauve-200 font-medium">
            Go to Login
          </button>
        </Link>
      </div>
    );

  return (
    <main className="p-8 max-w-3xl mx-auto">
      <section className="flex items-center gap-6">
        <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-light-orange aspect-square relative">
          <Image
            src={session?.image || "/placeholder-avatar.png"}
            alt={session?.name || "User avatar"}
            fill
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold">
            {session?.name || "Unnamed user"}
          </h1>
          <p className="text-sm text-muted-foreground">{session?.email}</p>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Account</h2>
        <div className="bg-card p-4 rounded-md border border-separator">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium">Email</p>
              <p className="text-sm text-muted-foreground">{session?.email}</p>
            </div>
            <div className="flex items-center gap-2">
              <Link href="/profile/update">
                <button className="py-1.5 px-4 rounded-full bg-mauve-200 font-medium hover:opacity-90 transition-opacity">
                  Edit profile
                </button>
              </Link>
              <button
                onClick={logOut}
                className="py-1.5 px-4 rounded-full bg-red-500 text-white hover:opacity-90 transition-opacity"
              >
                Log out
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MyProfile;
