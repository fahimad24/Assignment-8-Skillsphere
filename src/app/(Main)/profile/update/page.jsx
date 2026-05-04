"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { toast } from "@heroui/react";

const EditProfile = () => {
  const userData = authClient.useSession();
  const session = userData.data?.user;
  const router = useRouter();

  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const image = formData.get("image");

    if (!session) {
      toast.danger("You must be logged in to update your profile.");
      return;
    }

    if (session?.name === name && session?.image === image) {
      toast.info("No changes to save.");
      return;
    }

    setSaving(true);
    const { error } = await authClient.updateUser({
      name,
      image,
    });
    setSaving(false);
    if (error) {
      toast.danger("Failed to update profile: " + error.message);
      return;
    } else {
      toast.success("Profile updated successfully!");
    }
    router.push("/profile");
  };

  return (
    <main className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Edit profile</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            defaultValue={session?.name || ""}
            name="name"
            className="w-full rounded-md border p-2"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Avatar image URL
          </label>
          <input
            defaultValue={session?.image || ""}
            name="image"
            className="w-full rounded-md border p-2"
            placeholder="https://..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Email (read-only)
          </label>
          <input
            defaultValue={session?.email || ""}
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
