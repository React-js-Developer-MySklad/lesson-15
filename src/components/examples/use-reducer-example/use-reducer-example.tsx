import {useEffect, useReducer} from "react";

enum ActionKind {
    RESET = 'RESET',
    LOADING = 'LOADING',
    LOADED = 'LOADED'

}

type State = {
    isLoading: boolean,
    data: string | undefined
}

type Action = {
    type: ActionKind
    payload?: string | undefined
}

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case ActionKind.RESET:
            return {isLoading: false, data: undefined}

        case ActionKind.LOADING:
            return {...state, isLoading: true,}

        case ActionKind.LOADED:
            return {isLoading: false, data: action.payload}
    }

    throw Error('Action is wrong');
}

export const UseReducerExample = () => {
    const [state, dispatch] = useReducer(reducer, {isLoading: false, data: undefined});


    return (
        <div>
            <div>{JSON.stringify(state)}</div>

            <button onClick={() => {
                    dispatch({type: ActionKind.LOADING})
                    setTimeout(
                        () => dispatch({type: ActionKind.LOADED, payload: 'Data'}),
                        2000)
            }}>Load data</button>

            <button onClick={() => {dispatch({type: ActionKind.RESET})}}>Reset Data</button>
        </div>
    )


}