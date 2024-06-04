export type User = {
    id: number
    firstName: string
    lastName: string
}

export type AuthenticationState = {
    isAuthenticated: boolean
    login: (username: string, password: string) => void
    token: string
    user: User
}