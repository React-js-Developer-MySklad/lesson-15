import {useId} from "react";

export const Child = () => {
    const id = useId()
    return (
        <label aria-describedby={id}>
            Label
            <input id={id} />
        </label>
    )
}