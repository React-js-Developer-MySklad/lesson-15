import {useEffect, useMemo, useReducer, useState} from "react";
import {Child} from "./child/child";
import {useCounter} from "../../../utils/effect.counter";



export const MemoExample = () => {
    const count = useCounter();

    return (
        <div>
            <span>Counter: {count}</span>

            <Child id={1} name={''} data={{url: 'some http link'}}/>
        </div>
    )
}