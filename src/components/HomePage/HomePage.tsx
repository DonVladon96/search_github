import {useEffect, useState} from "react";
import {Item, Repos} from "../../interfaces.ts";
import axiosInstance from "../../api.ts";
import RepoList from "../RepoList/RepoList.tsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.tsx";
import FavoriteRepos from "../FavoriteRepos/FavoriteRepos.tsx";
import SearchInput from "../SearchInput/SearchInput.tsx";
import Preloader from "../Preloader/Preloader.tsx";
import CopyButton from "../CopyButton/CopyButton.tsx";
import "../../vendor/index.css";
import '../../vendor/page/App.css'

function HomePage() {
    const [searchValue, setSearchValue] = useState<string>("");
    const [repos, setRepos] = useState<Item[]>([]);
    const [errorMsg, setErrorMsg] = useState<string>("");
    const [preloader, setPreloader] = useState(false);

    useEffect(() => {
        async function fetchRepos() {
            if (searchValue !== "") {
                setPreloader(true);
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
                setPreloader(false);
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
                <div className='searchform__find'>
                    <SearchInput handleChange={handleSearch}/>
                    <CopyButton text={searchValue} />
                </div>


                <div className="repos">
                    {preloader && <Preloader/>}
                    {!preloader && <div className="repos__founded">
                        {repos.length ? <RepoList repos={repos}/> : errorMsg && <ErrorMessage/>}
                    </div>}

                    <div className="repos__favorite">
                        <FavoriteRepos/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
