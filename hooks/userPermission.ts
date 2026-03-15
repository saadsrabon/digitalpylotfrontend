import { useAuthStore } from "@/store/authStore";

export const usePermission = () => {
  const permissions = useAuthStore((s) => s.permissions);

  const hasPermission = (perm: string) => {
    return permissions.includes(perm);
  };

  return { hasPermission };
};