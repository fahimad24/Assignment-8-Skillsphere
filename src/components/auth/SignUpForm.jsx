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
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignUpForm() {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();
  const logOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/"); // redirect to login page
        },
      },
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const dataform = {};

    // Convert FormData to plain object
    formData.forEach((value, key) => {
      dataform[key] = value.toString();
    });

    // sign up logic here, e.g. send data to API
    const { data, error } = await authClient.signUp.email({
      name: dataform.name,
      email: dataform.email,
      password: dataform.password,
      image: dataform.photoURL,
      callbackURL: "/",
    });

    if (data) {
      logOut(); // Ensure any existing session is cleared
    }

    if (error) {
      toast.danger(error.message);
    } else {
      toast.success("Sign up successful! Please check your email to verify.");
    }
  };

  return (
    <>
      <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
        <TextField
          isRequired
          name="name"
          type="text"
          validate={(value) => {
            if (value.length < 2) {
              return "Name must be at least 2 characters";
            }

            return null;
          }}
        >
          <Label>Name</Label>
          <Input placeholder="John Doe" />
          <FieldError />
        </TextField>
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
          name="photoURL"
          type="url"
          validate={(value) => {
            if (
              !/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/i.test(
                value,
              )
            ) {
              return "Please enter a valid URL";
            }

            return null;
          }}
        >
          <Label>Photo URL</Label>
          <Input placeholder="https://example.com/photo.jpg" />
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
            Sign Up
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
        <div className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </div>
      </Form>
    </>
  );
}
