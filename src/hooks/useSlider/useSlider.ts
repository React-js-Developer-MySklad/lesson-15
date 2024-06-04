import React, {MutableRefObject,  useEffect, useRef, useState} from "react";

type SliderState = {
    isSliding: boolean
    value: number
}

type SliderOptionsProps = {
    onDrag: (value: number) => void
    vertical?: boolean
}


export const useSlider = (ref: MutableRefObject<HTMLElement>, options: Partial<SliderOptionsProps> = {}): SliderState => {

    const mountedRef = useRef<boolean>(false);
    const isSliding = useRef(false);
    const valueRef = useRef(0);
    const frame = useRef(0);

    // Complex State object
    const [state, setState] = useState<SliderState>({
        isSliding: false,
        value: 0,
    });

    valueRef.current = state.value;


    useEffect(() => {
        mountedRef.current = true;

        return () => {
            mountedRef.current = false;
        };
    }, []);


    useEffect(() => {
        const startDragging = () => {
            if (!isSliding.current && mountedRef.current) {
                isSliding.current = true;
                setState(state => ({...state, isSliding: true}));
                bindEvents();
            }
        };

        const onStopDrag = () => {
            if (isSliding.current && mountedRef.current) {
                isSliding.current = false;
                setState(state => ({...state, isSliding: false}));
                unbindEvents();
            }
        };

        const onMouseDown = (event: MouseEvent) => {
            startDragging();
            onMouseMove(event);
        };

        const onMouseMove = options.vertical
            ? (event: MouseEvent) => onDrag(event.clientY)
            : (event: MouseEvent) => onDrag(event.clientX);

        const bindEvents = () => {
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onStopDrag);
        };

        const unbindEvents = () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onStopDrag);
        };

        const onDrag = (clientXY: number) => {
            cancelAnimationFrame(frame.current);

            frame.current = requestAnimationFrame(() => {
                if (mountedRef.current && ref.current) {
                    const rect = ref.current.getBoundingClientRect();
                    const pos = options.vertical ? rect.top : rect.left;
                    const length = options.vertical ? rect.height : rect.width;

                    // Prevent returning 0 when element is hidden by CSS
                    if (!length) {
                        return;
                    }

                    let value = (clientXY - pos) / length;

                    if (value > 1) {
                        value = 1;
                    } else if (value < 0) {
                        value = 0;
                    }

                    setState(state => ({...state, value}));

                    options.onDrag(value);
                }
            });
        };

        if (ref.current) {
            ref.current.style.userSelect = 'none';
            ref.current.style.cursor = 'ew-resize';

            ref.current.addEventListener('mousedown', onMouseDown);
        }

        return () => {
            ref.current && ref.current.removeEventListener('mousedown', onMouseDown);
        };

    }, [ref]);

    return state;
}