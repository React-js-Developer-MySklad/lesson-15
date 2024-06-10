import React, {useState, useTransition} from "react";
import {Child} from "./child/Child";

export const UseTransitionExample = () => {

    const [isPending, startTransition] = useTransition();
    const [state, setState] = useState(false)

    const handleClick = () => {
        startTransition(() => {
            setState(state => !state);
        })
    }
    if (isPending) {
        return 'Loading...'
    }

    return (
        <>
            <button onClick={() => handleClick()}>Toggle</button>
            {state && <Child />}
        </>
    )
}