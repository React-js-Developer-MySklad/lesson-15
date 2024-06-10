import {useCallback, useState} from "react";
import {useCounter} from "../../../utils/effect.counter";
import {MemoChild} from "./memo-child/memo-child";

export const UseCallbackExample = () => {
    const count = useCounter();
    const [memoChildState, setMemoChildState] = useState({url: 'url'})

    const onChange = (url: string) => setMemoChildState({url})
    // const onChange = useCallback((url: string) => setMemoChildState({url}), [])

    return(
        <div>
            {count}
            <MemoChild value={memoChildState} onChange={onChange}/>
        </div>
    )
}