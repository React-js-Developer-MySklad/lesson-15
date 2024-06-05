import {useMemo, useState} from "react";
import {createTodos, expensiveCalculation} from "../../../utils/utils";
import {ExpensiveCalculationChild} from "./expensive-calculation-child/expensive-calculation-child";
import {MemoChild} from "./memo-child/memo-child";
import {useCounter} from "../../../utils/effect.counter";

export const UseMemoExample = () => {
    const count = useCounter();
    const [state, setState] = useState<'hide' | 'expensive' >('hide')
    const [memoChildState, setMemoChildState] = useState({url: 'url'})

    // const onChange = (url: string) => setMemoChildState({url})
    const onChange = useMemo(() => (url: string) => setMemoChildState({url}), [])

    return (
        <div>
            <div>{count}</div>
            <button onClick={() => setState('hide')}>Hide</button>
            <button onClick={() => setState('expensive')}>Expensive</button>
            <div style={{display: 'flex'}}>
                {state === 'expensive' && <ExpensiveCalculationChild/>}
                <MemoChild value={memoChildState} onChange={onChange}/>
            </div>
        </div>
    )
}