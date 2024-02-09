import {User} from '../../interfaces.ts'
import './UserInfo.css'

const UserInfo = (props: User) => {
    const {login, stargazers_count, html_url, starred_url, followers, public_repos, avatar_url} = props

    return (
        <div className="user-card">
            <img className='user-card__avatar' src={avatar_url} alt="User Avatar" width="300" height="180"/>

            <div className='user-card__info'>
                <h2 className="user-card__title">{login}</h2>
                <a className='user-card__url' href={html_url} target='_blank'>{html_url}</a>
            </div>


            <ul className='user-card__elements'>
                <li>Stars: {stargazers_count}</li>
                {stargazers_count && <li className=''>Starred: {stargazers_count}</li>}
                <li>Followers: {followers}</li>
                <li>Public repos: {public_repos}</li>
            </ul>
            <a href="/about" className="about-button">About</a>
        </div>
    )
}

export default UserInfo
