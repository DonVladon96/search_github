import React from "react";
import {observer} from "mobx-react";
import repoStore from "../../store.ts";
import {Item} from "../../interfaces";
import '../RepoList/RepoList.css'

interface Props {
    repo: Item;
}

const ButtonLike: React.FC<Props> = observer(({repo}) => {
    const likedRepos = repoStore.favoriteRepos;

    const handleLikeClick = () => {
        likedRepos.includes(repo) ? repoStore.removeFavoriteRepo(repo) : repoStore.addFavoriteRepo(repo);
    };

    return (
        <button
            type="button"
            aria-label="Like"
            className={`element__button-like ${
                likedRepos.includes(repo) ? `element__button-like_active` : ""
            }`}
            onClick={handleLikeClick}
        />
    );
});

export default ButtonLike;
