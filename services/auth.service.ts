import api from "@/lib/api";

export const loginRequest = async (data: {
  email: string;
  password: string;
}) => {
  const res = await api.post("/auth/login", data);
  return res.data;
};

export const getProfile = async () => {
  const res = await api.get("/auth/me");
  return res.data;
};

export const logoutRequest = async () => {
  await api.post("/auth/logout");
};