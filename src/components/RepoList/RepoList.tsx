import React, { useState } from "react";
import { Item } from "../../interfaces";
import "./RepoList.css";

interface Props {
    repos: Item[];
}

const RepoList: React.FC<Props> = ({ repos }) => {
    const [likedRepos, setLikedRepos] = useState<number[]>([]);

    const handleLikeClick = (repoId: number) => {
        if (likedRepos.includes(repoId)) {
            setLikedRepos(likedRepos.filter((id) => id !== repoId));
        } else {
            setLikedRepos([...likedRepos, repoId]);
        }
    };

    return (
        <ul className="repos-card__container ">
            {repos.map((repo) => (
                <div className="repos-card" key={repo.id}>
                    <img
                        className="repos-card__avatar"
                        src={repo.owner.avatar_url}
                        alt="User Avatar"
                        width="300"
                        height="180"
                    />
                    <div className="repos-card__info">
                        <h2 className="repos-card__title">{repo.full_name}</h2>
                        <a className="repos-card__url" href={repo.html_url} target="_blank">
                            {repo.html_url}
                        </a>
                        <div className='repos-card__wrapper'>
                            <ul className="repos-card__elements">
                                <li className="repos-card__list">
                                    {repo.stargazers_count ? (
                                        <p className="repos-card__text">Stars: {repo.stargazers_count}</p>
                                    ) : (
                                        "No Stars. "
                                    )}
                                    {repo.stargazers_count ? (
                                        <p className="repos-card__text">Forks: {repo.forks_count}</p>
                                    ) : (
                                        "No Forks. "
                                    )}
                                </li>
                            </ul>
                            <div className="element__like-container">
                                <button
                                    type="button"
                                    aria-label="Like"
                                    className={`element__button-like ${
                                        likedRepos.includes(repo.id) ? `element__button-like_active` : ""
                                    }`}
                                    onClick={() => handleLikeClick(repo.id)}
                                />
                            </div>
                        </div>

                    </div>

                </div>
            ))}
        </ul>
    );
};

export default RepoList;
