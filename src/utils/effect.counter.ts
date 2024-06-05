import {useEffect, useReducer} from "react";

export const useCounter = () => {
    const [count, counter] = useReducer((value) => value + 1, 1)

    useEffect(() => {
        setInterval(() => counter(), 1000)
    }, [])

    return count;
}