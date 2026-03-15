import { create } from "zustand";

type User = {
  id: string;
  name: string;
  email: string;
  role: string;
};

type AuthState = {
  user: User | null;
  permissions: string[];
  setAuth: (user: User, permissions: string[]) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  permissions: [],

  setAuth: (user, permissions) =>
    set({
      user,
      permissions,
    }),

  logout: () =>
    set({
      user: null,
      permissions: [],
    }),
}));