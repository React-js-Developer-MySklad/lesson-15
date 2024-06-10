import {AuthenticationContext} from "./authentication.context";
import React, {PropsWithChildren, useCallback, useState} from "react";
import {httpRequest} from "../../tools/http-request";
import {AuthenticationState, User} from "./authentication.type";

type UserResponse = {
    token: string
} & User

export const AuthenticationProvider: React.FC<PropsWithChildren> = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [user, setUser] = useState<User>(null)
    const [token, setToken] = useState<string>()

    const login = useCallback((username: string, password: string) => {
        httpRequest<UserResponse>('https://dummyjson.com/auth/login', {
            headers: {'Content-Type': 'application/json'},
            method: 'POST', body: JSON.stringify({username, password})})
            .then(res => {
                setUser({id: res.id, firstName: res.firstName, lastName: res.lastName })
                setToken(res.token)
                setIsAuthenticated(true)
            })
    }, [])

    const context = {
        isAuthenticated,
        login,
        user,
        token
    } as AuthenticationState;

    return (
        <AuthenticationContext.Provider value={context}>
            {children}
        </AuthenticationContext.Provider>
    )
}