import React from "react";
import { User } from "../../interfaces";
import UserInfo from "../UserInfo/UserInfo";

interface Props {
  users: User[];
}

const UserList = ({ users }: Props) => {
  return (
    <div className="find_repo">
      {users.map((user) => (
        <div className="Column" key={user.id}>
          <UserInfo key={user.id}  {...user} />
        </div>
      ))}
    </div>
  );
};

export default UserList;
