export interface User {
    login: string
    readonly id: number
    readonly avatar_url: string
    readonly public_repos: number
    readonly followers: number
    readonly email: string
    readonly html_url: string
    readonly starred_url: string
    readonly stargazers_count: string
}
