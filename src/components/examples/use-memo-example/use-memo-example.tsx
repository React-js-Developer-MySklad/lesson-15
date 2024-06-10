import {useMemo, useState} from "react";
import {ExpensiveCalculationChild} from "./expensive-calculation-child/expensive-calculation-child";
import {MemoChild} from "./memo-child/memo-child";
import {useCounter} from "../../../utils/effect.counter";

export const UseMemoExample = () => {
    const count = useCounter();
    const [isVisibale, setIsVisibale] = useState(false)
    const [memoChildState, setMemoChildState] = useState({url: 'url'})

    const onChange = (url: string) => setMemoChildState({url})
    // const onChange = useMemo(() => (url: string) => setMemoChildState({url}), [])

    return (
        <div>
            <div>{count}</div>
            <button onClick={() => setIsVisibale(!isVisibale)}>Toggle Expensive</button>
            <div>
                <div>
                    <MemoChild value={memoChildState} onChange={onChange}/>
                </div>
                <div>
                    {isVisibale && <ExpensiveCalculationChild/>}
                </div>
            </div>
        </div>
    )
}