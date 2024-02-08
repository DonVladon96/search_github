import React, {useEffect, useState} from "react";
import SearchInput from "./components/SearchInput";
import {User} from "./interfaces";
import axiosInstance from "./api";
import UserList from "./components/UserList/UserList.tsx";
import './vendor/index.css'

function App() {
  const [searchValue, setSearchValue] = useState<string>('');
  const [users, setUsers] = useState<User[]>([]);
  const [errorMsg, setErrorMsg] = useState<string>('');

  useEffect(() => {
    async function fetchUser() {
      if (searchValue !== '') {
        try {
          const result = await axiosInstance.get(`/users/${searchValue}`);
          const { id } = result.data as User;
          setErrorMsg('');
          if (users.some(user => {
            const {id: id1} = user;
            return id1 === id;
          })) {
            return;
          }
          setUsers(prevUsers => [...prevUsers, result.data]);
          console.log(result);
        } catch (e) {
          setErrorMsg(e.message);
        }
      }
    }
    fetchUser();
  }, [searchValue]);

  const handleSearch = (value: string): void => {
    setSearchValue(value);
  };

  return (
      <div className='main-page'>
        <SearchInput handleChange={handleSearch} />
        {users.length ? <UserList users={users} /> : `Users list is empty`}
      </div>
  );
}

export default App;
