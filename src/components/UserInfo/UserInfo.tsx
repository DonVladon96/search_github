import {User} from '../../interfaces.ts'
import './UserInfo.css'

const UserInfo = (props: User) => {
    const {login, html_url, email, followers, public_repos, avatar_url} = props

    return (
        <div className="user-card">
            <img src={avatar_url} alt="User Avatar" width="300" height="180"/>
            <h2 className="card-title">{login}</h2>
            <ul>
                {email && <li>Email: {email}</li>}
                <li>Followers: {followers}</li>
                <li>Public repos: {public_repos}</li>
            </ul>
            <p className="subtitle">{email}</p>
            <a href="/about" className="about-button">About</a>
        </div>
    )
}

export default UserInfo
