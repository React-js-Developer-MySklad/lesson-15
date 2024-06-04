import {Suspense, useRef} from "react";
import {useSlider} from "../../hooks/useSlider/useSlider";

export const Slider = () => {
    const divRef = useRef<HTMLDivElement>(null);

    const state = useSlider(divRef, {
        onDrag: (value) => {
            console.log('onDrag', value);
        },
    });

    return (
        <>
            <div ref={divRef} style={{position: 'relative', background: 'yellow', padding: 4}}>
                <p style={{margin: 0, textAlign: 'center'}}>Slide me</p>
            </div>
            <pre>{JSON.stringify(state, null, 2)}</pre>
        </>
    )
}