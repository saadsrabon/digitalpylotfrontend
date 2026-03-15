"use client";

import { useMutation } from "@tanstack/react-query";
import { logoutRequest } from "@/services/auth.service";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";

export const useLogout = () => {
  const router = useRouter();
  const clearAuth = useAuthStore((s) => s.logout);

  return useMutation({
    mutationFn: logoutRequest,

    onSuccess: () => {
      // clear local session
      clearAuth();

      // redirect to login
      router.push("/login");
    },

    onError: () => {
      // even if API fails we still clear local state
      clearAuth();
      router.push("/login");
    },
  });
};