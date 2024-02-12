import { useEffect, useState } from "react";
import { Repos, Item } from "./interfaces";
import axiosInstance from "./api";
import RepoList from "./components/RepoList/RepoList";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import FavoriteRepos from "./components/FavoriteRepos/FavoriteRepos";
import SearchInput from "./components/SearchInput.tsx";
import "./vendor/index.css";
import './vendor/page/App.css'

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
                    setRepos(result.data.items);
                    console.log(result);
                    if (result.data.items.length === 0) {
                        setErrorMsg("No repositories found");
                    } else {
                        setErrorMsg("");
                    }
                } catch (e) {
                    setErrorMsg("Error");
                }
            }
        }
        fetchRepos();
    }, [searchValue]);

    const handleSearch = (value: string): void => {
        setSearchValue(value);
    };

    return (
        <div className="root-container">
            <div className="main-page">
                <SearchInput handleChange={handleSearch} />
                <div className="repos">
                    <div className="repos__founded">
                        {repos.length ? <RepoList repos={repos} /> : errorMsg && <ErrorMessage />}
                    </div>
                    <div className="repos__favorite">
                        <FavoriteRepos />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
