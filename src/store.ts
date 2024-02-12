import { observable, action, makeObservable } from "mobx";
import { Item } from "./interfaces";

class RepoStore {
    favoriteRepos: Item[] = [];

    constructor() {
        makeObservable(this, {
            favoriteRepos: observable,
            addFavoriteRepo: action,
            removeFavoriteRepo: action,
        });
    }

    addFavoriteRepo(repo: Item) {
        this.favoriteRepos.push(repo);
    }

    removeFavoriteRepo(repo: Item) {
        this.favoriteRepos = this.favoriteRepos.filter((r) => r.id !== repo.id);
    }
}

const repoStore = new RepoStore();
export default repoStore;
