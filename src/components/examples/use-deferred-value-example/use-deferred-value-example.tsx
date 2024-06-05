import {Child} from "./child/child";
import {Suspense, useDeferredValue, useState} from "react";

export const UseDeferredValueExample = () => {
    const [state, setState] = useState('')
    const deferredState = useDeferredValue(state)


    return (
        <div>
            <input value={state} onInput={(e) => setState(e.currentTarget.value)}/>
            <div style={{opacity: state !== deferredState ? 0.5 : 1,}}>
                <Child search={deferredState}/>
            </div>
            <button onClick={() => setState('')}>Reset</button>
        </div>
    )



}