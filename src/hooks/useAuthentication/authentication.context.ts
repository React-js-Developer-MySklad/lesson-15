import {createContext} from "react";
import {AuthenticationState} from "./authentication.type";

export const AuthenticationContext =
    createContext<AuthenticationState>(null)