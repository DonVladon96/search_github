export interface User {
    readonly login: string
    readonly id: number
    readonly avatar_url: string
    readonly public_repos: number
    readonly followers: number
    readonly email: string
    readonly html_url: string
}
