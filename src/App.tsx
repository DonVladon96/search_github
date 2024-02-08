import React, { useState, useEffect } from "react";
import SearchInput from "./components/SearchInput";
import { User } from "./interfaces";
import axiosInstance from "./api";
import UserList from "./components/UserList/UserList.tsx";


function App() {
  const [searchValue, setSearchValue] = useState<string>('');
  const [users, setUsers] = useState<Partial<User[]>>([])
  const [errorMsg, setErrorMsg] = useState<string>('')

  useEffect(() => {
    async function fetchUser() {
      if (searchValue) {
        try {
          const result = await axiosInstance.get(`/users/${searchValue}`)
          const { id } = result.data as User
          setErrorMsg('')
          if (users.some(user => user.id === id )) {
           return 
          }
          setUsers([...users, result.data])
          //Смотрим в консоли результат поиска юзеров
          console.log(result)

   
        } catch (e) {
          setErrorMsg(e.message)
        }
      }
    }
    fetchUser()
  }, [searchValue]);

  const handleSearch = (value: string): void => {
    setSearchValue(value);
  };

  return (
      <div>
        <SearchInput handleChange={handleSearch} />
        {users.length ? <UserList users={users} /> : `Users list is empty`}
      </div>
  );
}

export default App;
