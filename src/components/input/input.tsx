import React, {
    forwardRef,
    HTMLProps,
    useImperativeHandle,
    useRef
} from "react";

type Props = {
    focus: () => void
}

export const Input = forwardRef<Props, HTMLProps<HTMLInputElement>>(
    (props, ref) => {
        const inputRef = useRef(null)
        const {label, ...otherProps} = props;

        useImperativeHandle(ref, () => {
            return {
                focus() {
                    inputRef.current.focus();
                },
            };
        }, []);

        return (
            <label>
                {label}
                <input {...otherProps} ref={inputRef} />
            </label>
        );
    });