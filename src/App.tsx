import { useEffect, useState } from "react";
import SearchInput from "./components/SearchInput";
import { Repos, Item, Owner } from "./interfaces";
import axiosInstance from "./api";
import RepoList from "./components/RepoList/RepoList";
import "./vendor/index.css";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage.tsx";

function App() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [repos, setRepos] = useState<Item[]>([]);
  const [errorMsg, setErrorMsg] = useState<string>("");

  useEffect(() => {
    async function fetchRepos() {
      if (searchValue !== "") {
        try {
          const result = await axiosInstance.get<Repos>(
              `/search/repositories?q=${searchValue}/`
          );
          setErrorMsg("");
          setRepos(result.data.items);
          console.log(result);
        } catch (e) {
          setErrorMsg(e.message);
        }
      }
    }
    fetchRepos();
  }, [searchValue]);

  const handleSearch = (value: string): void => {
    setSearchValue(value);
  };

  return (
      <div className='root-container'>
        <div className="main-page">
          <SearchInput handleChange={handleSearch}/>
          {errorMsg && <ErrorMessage/>}
          {repos.length ? <RepoList repos={repos}/> : 'Repostiory list is empty'}
        </div>
      </div>
  );
}

export default App;
