import React, {useRef} from "react";
import {useAuthentication} from "../../hooks/useAuthentication/authenticatoin.hook";
import {Users} from "../../components/users/users";
import {Input} from "../../components/input/input";
import {UseReducerExample} from "../../components/examples/use-reducer-example/use-reducer-example";


export const DashboardPage = () => {
    const {isAuthenticated, login} = useAuthentication();
    const userRef = useRef<{focus: () => void}>(null)


    return (
        <>
            <UseReducerExample/>
        </>
    )
}