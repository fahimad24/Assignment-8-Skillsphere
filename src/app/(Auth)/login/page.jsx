"use client";

import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import { useState } from "react";
import {
  Button,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  TextField,
  toast,
} from "@heroui/react";
import { authClient, signIn } from "@/lib/auth-client";
import Link from "next/link";

export default function Login() {
  const [isVisible, setIsVisible] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const dataform = {};

    // Convert FormData to plain object
    formData.forEach((value, key) => {
      dataform[key] = value.toString();
    });

    // login logic here, e.g. send data to API
    const { error } = await authClient.signIn.email({
      email: dataform.email,
      password: dataform.password,
      callbackURL: "/",
    });

    if (error) {
      toast.danger(error.message);
    } else {
      toast.success("Login successful!");
    }
  };

  return (
    <section className="flex min-h-[calc(100dvh-100px)] items-center justify-center">
      <div className="flex w-96 flex-col gap-4 bg-light-orange/5 px-8 py-5 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center gradient-bg-2 text-transparent bg-clip-text!">
          Login
        </h2>
        <Form className="flex flex-col gap-4 " onSubmit={onSubmit}>
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }

              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }

              return null;
            }}
            className="w-full"
            name="password"
          >
            <Label>Password</Label>
            <InputGroup>
              <InputGroup.Input
                className="w-full "
                type={isVisible ? "text" : "password"}
                placeholder="Enter your password"
                required
              />
              <InputGroup.Suffix className="pr-0">
                <Button
                  isIconOnly
                  aria-label={isVisible ? "Hide password" : "Show password"}
                  size="sm"
                  variant="ghost"
                  onPress={() => setIsVisible(!isVisible)}
                >
                  {isVisible ? (
                    <Eye className="size-4" />
                  ) : (
                    <EyeSlash className="size-4" />
                  )}
                </Button>
              </InputGroup.Suffix>
            </InputGroup>
            <FieldError />
          </TextField>

          <div className="flex justify-center gap-2">
            <Button className={"gradient-bg-2"} type="submit">
              <Check />
              Login
            </Button>
            <Button type="reset" variant="secondary">
              Reset
            </Button>
          </div>
        </Form>
        <div className="flex justify-center items-center gap-2">
          <hr className="flex-1" />
          <span>or</span> <hr className="flex-1" />
        </div>
        <div className="flex justify-center ">
          <button
            onClick={signIn}
            className=" bg-light-orange/5 hover:bg-light-orange/10 text-gray-800 font-semibold py-2 px-4 border border-gray-300 rounded-md cursor-pointer transition-colors"
          >
            Continue with Google
          </button>
        </div>
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
