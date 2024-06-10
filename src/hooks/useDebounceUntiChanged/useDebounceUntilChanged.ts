import {useCallback, useEffect, useRef, useState} from "react";

export const useDebounceUntilChanged = <T>(
    initialValue: T,
    cb: () => void,
    delay: number = 1000
): [T, (t: T) => void ] => {

    const [actualValue, setActualValue] = useState(initialValue);

    const prevValue = useRef<T>()
    const debounceId = useRef<NodeJS.Timeout>()

    useEffect(() => {
        debounceId.current = setTimeout(() => {
            if (actualValue && prevValue.current !== actualValue) {
                prevValue.current = actualValue;
                cb();
            }
        }, delay);

        return () => clearTimeout(debounceId.current);

    }, [actualValue, delay]);

    const resetActual = useCallback((newValue: T) => {
        if (actualValue !== newValue) {
            setActualValue(newValue);
        }

    }, [actualValue]);

    return [actualValue, resetActual];
};