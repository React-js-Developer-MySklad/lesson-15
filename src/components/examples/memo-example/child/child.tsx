import {memo, useEffect} from "react";

type Props = {
    id: number,
    name: string,
    data: {url: string}
}

export const Child = (props: Props) => {

    useEffect(() => {
        console.log('Child: did mount')
        return () => {
            console.log('Child: did unmount')
        }
    }, []);

    useEffect(() => {
        console.log('Child: did update')
    });

    return (
        <div>
            {JSON.stringify(props)}
        </div>
    )
}