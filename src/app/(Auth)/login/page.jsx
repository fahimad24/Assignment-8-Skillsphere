import LoginForm from "@/components/auth/LoginForm";
import Link from "next/link";

export default function Login() {
  return (
    <section className="flex min-h-[calc(100dvh-100px)] items-center justify-center">
      <div className="flex w-96 flex-col gap-4 bg-light-orange/5 px-8 py-5 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center gradient-bg-2 text-transparent bg-clip-text!">
          Login
        </h2>
        <LoginForm />
        <div className="text-center text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <Link href="/sign-up" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </div>
      </div>
    </section>
  );
}
