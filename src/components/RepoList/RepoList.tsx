import React from "react";
import {Item} from "../../interfaces";
import './RepoList.css'

interface Props {
    repos: Item[];
}

const RepoList: React.FC<Props> = ({repos}) => {
    return (
        <ul className='repos-card__container '>
            {repos.map((repo) => (
                <div className="repos-card" key={repo.id}>
                    <img className='repos-card__avatar' src={repo.owner.avatar_url} alt="User Avatar" width="300"
                         height="180"/>

                    <div className='repos-card__info'>
                        <h2 className="repos-card__title">{repo.full_name}</h2>
                        <a className='repos-card__url' href={repo.html_url} target='_blank'>{repo.html_url}</a>
                    </div>
                    <ul className='repos-card__elements'>
                        <li>
                            {repo.stargazers_count ? <p className='repos-card__text'>Stars: {repo.stargazers_count}</p> : ''}
                            {repo.stargazers_count ? <p className='repos-card__text'>Forks: {repo.forks_count}</p> : ''}
                        </li>
                    </ul>


                </div>

            ))}
        </ul>
    );
};

export default RepoList;
