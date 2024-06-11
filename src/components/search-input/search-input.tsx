import React, {useEffect} from "react";
import {useDebounceUntilChanged} from "../../hooks/useDebounceUntiChanged/useDebounceUntilChanged";

type Props<T, V> = {
    value: T
    onChange: (value: T) => void
    delay?: number
}

export const SearchInput: React.FC<Props<string, {id: number, title: string}>> = ({value, onChange, delay = 500}) => {
    const [debouncedValue, search, setSearch] = useDebounceUntilChanged<string>(value, delay);
    useEffect(() => onChange(debouncedValue), [debouncedValue]);

    return (
        <form role='search'>
            <label>
                Search Products
                <input type='search' value={search} onChange={e => setSearch(e.currentTarget.value)}/>
            </label>
            {search !== debouncedValue && <div> Typing...</div>}
        </form>
    )
}