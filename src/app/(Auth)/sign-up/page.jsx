import SignUpForm from "@/components/auth/SignUpForm";

export default function SignUp() {
  return (
    <section className="flex min-h-[calc(100dvh-100px)] items-center justify-center">
      <div className="flex w-96 flex-col gap-4 bg-light-orange/5 px-8 py-5 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center gradient-bg-2 text-transparent bg-clip-text!">
          Sign Up
        </h2>
        <SignUpForm />
      </div>
    </section>
  );
}
