"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useLogin } from "@/hooks/useLogin";
import { useState } from "react";

type FormData = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const router = useRouter();
  const { register, handleSubmit } = useForm<FormData>();
  const login = useLogin();

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    setErrorMessage(null);

    try {
      await login.mutateAsync(data);
      router.push("/dashboard");
    } catch (err: any) {
      const message =
        err?.response?.data?.message || "Login failed. Please try again.";
      setErrorMessage(message);
    }
  };

  return (
    <div className="bg-white w-105 rounded-2xl p-8 shadow-xl">

      <h2 className="text-2xl font-semibold text-center">
        Login
      </h2>

      <p className="text-gray-400 text-center mb-6">
        Enter your details to continue
      </p>

      {/* Error Message */}
      {errorMessage && (
        <div className="bg-red-50 text-red-600 text-sm p-3 rounded-md mb-4">
          {errorMessage}
        </div>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >

        <div>
          <label className="text-sm">Email</label>

          <input
            {...register("email")}
            placeholder="example@email.com"
            className="w-full border rounded-lg p-3 mt-1"
          />
        </div>

        <div>
          <label className="text-sm">Password</label>

          <input
            {...register("password")}
            type="password"
            placeholder="Enter your password"
            className="w-full border rounded-lg p-3 mt-1"
          />
        </div>

        <div className="flex justify-between text-sm">

          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Remember me
          </label>

          <span className="text-orange-500 cursor-pointer">
            Forgot password?
          </span>

        </div>

        {/* Login Button */}
        <button
          type="submit"
          disabled={login.isPending}
          className="bg-orange-500 text-white p-3 rounded-lg shadow-md hover:bg-orange-600 transition disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {login.isPending ? (
            <span className="flex items-center gap-2">

              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>

              Logging in...
            </span>
          ) : (
            "Log in"
          )}
        </button>

      </form>

      <p className="text-center text-sm mt-6">
        Don’t have an account?
        <span className="font-semibold ml-1 cursor-pointer">
          Sign up
        </span>
      </p>

    </div>
  );
}