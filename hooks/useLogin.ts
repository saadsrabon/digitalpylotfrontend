import { useMutation } from "@tanstack/react-query";
import { loginRequest } from "@/services/auth.service";
import { useAuthStore } from "@/store/authStore";

export const useLogin = () => {
  const setAuth = useAuthStore((s) => s.setAuth);

  return useMutation({
    mutationFn: loginRequest,

    onSuccess: (data) => {
      setAuth(data.user, data.permissions);
    },
  });
};