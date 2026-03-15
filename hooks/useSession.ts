import { useQuery } from "@tanstack/react-query";
import { getProfile } from "@/services/auth.service";
import { useAuthStore } from "@/store/authStore";
import { useEffect } from "react";

export const useSession = () => {
  const setAuth = useAuthStore((s) => s.setAuth);

  const query = useQuery({
    queryKey: ["session"],
    queryFn: getProfile,
    retry: false,
  staleTime: 1000 * 60 * 5
  });

  useEffect(() => {
    if (query.data) {
      setAuth(query.data.user, query.data.permissions);
    }
  }, [query.data, setAuth]);

  return query;
};