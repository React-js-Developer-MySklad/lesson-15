import React, {memo, useEffect} from "react";
import {useLogger} from "../../../../utils/effect.utils";

type Props = {
    id: number,
    name: string,
    data: {url: string}
}

// export const Child = React.memo((props: Props) => {
export const Child = (props: Props) => {

    useLogger('Child')

    return (
        <div>
            {JSON.stringify(props)}
        </div>
    )
}