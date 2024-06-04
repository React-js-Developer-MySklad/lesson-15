import {useEffect, useState} from "react";
import {httpRequest} from "../../tools/http-request";
import {useAuthentication} from "../useAuthentication/authenticatoin.hook";

export type QueryData<T = unknown> = {
    loading: boolean;
    error: Error;
    data: T;
};

export const useRequest = <T>(url: string) => {
    const {token} = useAuthentication()

    const [state, setState] = useState<QueryData<T>>({
        loading: true, data: null, error: null
    })

    useEffect(() => {
        httpRequest<T>(url, {
            headers:
                {
                    'Content-Type': 'application/json',
                    'Authorize': `Bearer ${token}`
                }})
            .then((res) => setState({error: null, loading: false, data: res}))
            .catch((e) => setState({error: e, loading: false, data: null}));
    }, []);

    return state;
}