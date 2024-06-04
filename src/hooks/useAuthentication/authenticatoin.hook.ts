import {useContext} from "react";
import {AuthenticationContext} from "./authentication.context";

export const useAuthentication = () => {
    const context = useContext(AuthenticationContext);
    if (context === null) {
        throw Error('useAuthentication hook outside AuthenticationProvider')
    }

    return context;
}