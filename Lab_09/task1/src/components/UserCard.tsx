import { memo } from "react";

export const UserCard = memo(function UserCard({ user }: any) {
  console.log("UserCard render");

  return (
    <div>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
});