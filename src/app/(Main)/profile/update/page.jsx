"use client";

import React, { useState } from "react";
import { useAuth } from "@/context/AuthProvider";
import { useRouter } from "next/navigation";

const EditProfile = () => {
  const { session } = useAuth();
  const router = useRouter();

  const [name, setName] = useState(session?.name || "");
  const [image, setImage] = useState(session?.image || "");
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    // TODO: integrate with backend to persist updates.
    // For now, simulate save and navigate back to profile.
    setTimeout(() => {
      setSaving(false);
      router.push("/profile");
    }, 700);
  };

  return (
    <main className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Edit profile</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-md border p-2"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Avatar image URL
          </label>
          <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full rounded-md border p-2"
            placeholder="https://..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Email (read-only)
          </label>
          <input
            value={session?.email || ""}
            readOnly
            disabled={true}
            className="w-full rounded-md border p-2 bg-gray-50"
          />
        </div>

        <div className="flex items-center gap-2">
          <button
            type="submit"
            disabled={saving}
            className="py-2 px-4 rounded-full bg-light-orange text-white font-medium"
          >
            {saving ? "Saving..." : "Save changes"}
          </button>
          <button
            type="button"
            onClick={() => router.push("/profile")}
            className="py-2 px-4 rounded-full bg-mauve-200"
          >
            Cancel
          </button>
        </div>
      </form>
    </main>
  );
};

export default EditProfile;
