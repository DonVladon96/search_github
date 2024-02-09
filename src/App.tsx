import { useEffect, useState } from "react";
import SearchInput from "./components/SearchInput";
import { User } from "./interfaces";
import axiosInstance from "./api";
import UserList from "./components/UserList/UserList.tsx";
import './vendor/index.css'
import ErrorMessage from "./components/ErrorMessage/ErrorMessage.tsx";

function App() {
  const [searchValue, setSearchValue] = useState<string>('');
  const [user, setUser] = useState<User | null>(null);
  const [errorMsg, setErrorMsg] = useState<string>('');

  useEffect(() => {
    async function fetchUser() {
      if (searchValue !== '') {
        try {
          const result = await axiosInstance.get(`/search/repositories?q=${searchValue}`);
          const userData = result.data.items[0].owner as User;
          userData.login = result.data.items[0].owner.login;
          setErrorMsg('');
          setUser(userData);
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
        {errorMsg && <ErrorMessage />}
        {user && <UserList users={[user]} />}
      </div>
  );
}

export default App;
