import {useEffect, useMemo, useReducer, useState} from "react";
import {Child} from "./child/child";



export const MemoExample = () => {
    const [count, counter] = useReducer((value) => value + 1, 1)

    useEffect(() => {
        setInterval(() => counter(), 1000)
    }, [])


    return (
        <div>
            <span>Counter: {count}</span>

            <Child id={1} name={''} data={{url: 'some http link'}}/>
        </div>
    )
}