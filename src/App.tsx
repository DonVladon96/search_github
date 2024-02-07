import { useState, useEffect } from "react";
import SearchInput from "./components/SearchInput";
import UserInfo from "./components/UserInfo";
import { User } from "./interfaces";
import axiosInstance from "./api";


function App() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [user, setUser] = useState<Partial<User>>(null)
  const [errorMsg, setErrorMsg] = useState<string>('')

  useEffect(() => {
    async function fetchUser() {
      if (searchValue) {
        try {
          const result = await axiosInstance.get(`/users/${searchValue}`);
          setErrorMsg('')
          console.table(result);
          setUser(result.data)
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
        <button className="Button">Кнопка</button>
        <SearchInput handleChange={handleSearch} />
        {user && <UserInfo {...user} />}
      </div>
  );
}

export default App;
