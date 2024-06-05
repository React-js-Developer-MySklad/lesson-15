import React, {memo, useState} from "react";
import {useLogger} from "../../../../utils/effect.utils";

type Props = {
    value: {url: string}
    onChange: (url: string) => void
}

export const MemoChild: React.FC<Props> = memo(
    ({value, onChange}) => {

        const [state, setState] = useState('')
        useLogger('MemoChild')

        return (
            <div>
                {JSON.stringify(value)}
                <input value={state} onInput={e => setState(e.currentTarget.value)}/>
                <button onClick={() => onChange(state)}>On Change</button>
            </div>
        )
    })