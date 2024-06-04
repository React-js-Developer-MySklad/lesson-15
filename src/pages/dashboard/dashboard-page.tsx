import React, {useEffect, useRef} from "react";
import {useAuthentication} from "../../hooks/useAuthentication/authenticatoin.hook";
import {Users} from "../../components/users/users";
import {Slider} from "../../components/slider/slider";
import {UseStatePage} from "../use-state-page/use-state-page";
import {Input} from "../../components/input/input";


export const DashboardPage = () => {
    const {isAuthenticated, login} = useAuthentication();
    const userRef = useRef<{focus: () => void}>(null)


    return (
        <>
            {/*<UseStatePage/>*/}
            <Input ref={userRef} label={'username'}/>
            {/*<button onClick={() => userRef.current.focus()}>Focus Input</button>*/}



            {/*<Slider/>*/}



            <button onClick={() => login('emilys', 'emilyspass')}> Login</button>
            {isAuthenticated && <Users/>}
            {!isAuthenticated && <div>'User is not authenticated!'</div>}

        </>
    )
}