"use client";

import { useForm } from "react-hook-form";
import { loginUser } from "@/services/auth.service";

type LoginData = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginData): Promise<void> => {
    try {
      const res = await loginUser(data);
      console.log("Login successful:", res);
      // Add navigation or success handling here, e.g., router.push('/dashboard');
    } catch (error) {
      console.error("Login failed:", error);
      // Add error handling, e.g., set an error state and display it
    }
  };

  return (
    <div>
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4"
    >
      <input
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Invalid email address",
          },
        })}
        type="email"
        placeholder="Email"
        className="border p-2 rounded"
      />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}

      <input
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Password must be at least 6 characters",
          },
        })}
        type="password"
        placeholder="Password"
        className="border p-2 rounded"
      />
      {errors.password && <p className="text-red-500">{errors.password.message}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-black text-white p-2 rounded disabled:opacity-50"
      >
        {isSubmitting ? "Logging in..." : "Login"}
      </button>
    </form>
    </div>
  );
}
