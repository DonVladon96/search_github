import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "../../api.ts";
import { Item } from "../../interfaces.ts";
import './RepoDetails.css'
import icon from "../../assets/back-icon.png";

const RepoDetails = () => {
    const { id } = useParams();
    const [repo, setRepo] = useState<Item | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchRepoDetails() {
            try {
                const result = await axiosInstance.get<Item>(`/repositories/${id}`);
                setRepo(result.data);
            } catch (e) {
                console.error(e);
            }
        }
        fetchRepoDetails();
    }, [id]);

    if (!repo) {
        return <div>Loading...</div>;
    }

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <div className='RepoDetails-container'>

            <div className='RepoDetails-container__navigate'>
                <div className=''>
                    <button onClick={handleGoBack} className="button">
                        <img src={icon} alt={"Ручка назад"}></img>
                    </button>
                </div>

                <img
                    className="repos-card__avatar"
                    src={repo.owner.avatar_url}
                    alt="User Avatar"
                    width="300"
                    height="180"
                />
            </div>

            <h2 className='container__title'>{repo.full_name}</h2>
            <p className='RepoDetails__text'>{repo.description}</p>
            <p className='RepoDetails__text'>Stars: {repo.stargazers_count}</p>
            <p className='RepoDetails__text'>Forks: {repo.forks_count}</p>
            <p className='RepoDetails__text'>Language: {repo.language}</p>
            <p className='RepoDetails__text'>Created at: {repo.created_at}</p>
            <div className="RepoDetails__wrapper">
                <h3 className='RepoDetails__text'>User Details</h3>
                <p className='RepoDetails__text'>Login: {repo.owner.login}</p>
                <p className='RepoDetails__text'>ID: {repo.owner.id}</p>
                <p className='RepoDetails__text'>Node ID: {repo.owner.node_id}</p>
                <p className='RepoDetails__url repos-card__url_color-white'>Avatar URL: {repo.owner.avatar_url}</p>
                <p className=' RepoDetails__text RepoDetails__text'>Gravatar ID: {repo.owner.gravatar_id}</p>
                <p className='RepoDetails__text RepoDetails__url'>URL: {repo.owner.url}</p>
                <p className='RepoDetails__text RepoDetails__url'>HTML URL: {repo.owner.html_url}</p>
                <p className='RepoDetails__text RepoDetails__url'>Followers URL: {repo.owner.followers_url}</p>
                <p className='RepoDetails__text RepoDetails__url'>Following URL: {repo.owner.following_url}</p>
                <p className='RepoDetails__text RepoDetails__url'>Gists URL: {repo.owner.gists_url}</p>
                <p className='RepoDetails__text RepoDetails__url'>Starred URL: {repo.owner.starred_url}</p>
                <p className='RepoDetails__text RepoDetails__url'>Subscriptions URL: {repo.owner.subscriptions_url}</p>
                <p className='RepoDetails__text RepoDetails__url'>Organizations URL: {repo.owner.organizations_url}</p>
                <p className='RepoDetails__text RepoDetails__url'>Repos URL: {repo.owner.repos_url}</p>
                <p className='RepoDetails__text RepoDetails__url'>Events URL: {repo.owner.events_url}</p>
                <p className='RepoDetails__text RepoDetails__url'>Received Events
                    URL: {repo.owner.received_events_url}</p>
                <p className='RepoDetails__text'>Type: {repo.owner.type}</p>
                <p className='RepoDetails__text RepoDetails__url'>Site Admin: {repo.owner.site_admin ? "Yes" : "No"}</p>
            </div>

        </div>
    );
};

export {RepoDetails};
