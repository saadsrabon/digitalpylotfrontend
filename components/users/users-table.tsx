"use client";

import { useUsers } from "@/hooks/useUsers";

export default function UsersTable() {
  const { data, isLoading } = useUsers();

  if (isLoading) return <div>Loading...</div>;

  return (
    <table className="w-full">
      <thead>
        <tr>
          <th>Email</th>
          <th>Role</th>
        </tr>
      </thead>

      <tbody>
        {data?.map((user: any) => (
          <tr key={user.id}>
            <td>{user.email}</td>
            <td>{user.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
