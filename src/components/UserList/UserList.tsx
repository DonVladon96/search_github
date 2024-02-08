import { User } from "../../interfaces";
import UserInfo from "../UserInfo/UserInfo";
import './UserList.css'

interface Props {
  users: User[];
}

const UserList = ({ users }: Props) => {
  return (
    <div className="find_repo">
      {users.map((user) => (
          <UserInfo key={user.id}  {...user} />
      ))}
    </div>
  );
};

export default UserList;
