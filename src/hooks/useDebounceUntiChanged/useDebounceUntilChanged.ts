import {useCallback, useEffect, useRef, useState} from "react";

type DebounceUntilChangedResult<T> = [ T, T, (value: T) => void, () =>void ]

export const useDebounceUntilChanged = <T> (actualValue: T, delay: number = 500): DebounceUntilChangedResult<T> => {
    const [state, setState] = useState<T | undefined>(actualValue)
    const [debounceState, setDebounceState] = useState<T | undefined>(actualValue);

    const timeoutId = useRef<NodeJS.Timeout>()

    useEffect(() => {
        timeoutId.current = setTimeout(() => {
            if (state !== debounceState) {
                setDebounceState(state);
            }
        }, delay);

        return () => {
            clearTimeout(timeoutId.current);
        }
    }, [state, delay]);

    const reset = useCallback(() => {
        setState(undefined);
        setDebounceState(undefined)
    },[])


    return [debounceState, state, setState, reset]
}