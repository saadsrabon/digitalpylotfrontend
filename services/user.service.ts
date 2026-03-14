import api from "@/lib/api";

export const getUsers = async () => {
  const res = await api.get("/users");
  return res.data;
};

export const createUser = async (data: any) => {
  const res = await api.post("/users", data);
  return res.data;
};
