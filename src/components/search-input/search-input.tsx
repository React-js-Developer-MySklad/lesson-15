import React, {useEffect} from "react";
import {useDebounceUntilChanged} from "../../hooks/useDebounceUntiChanged/useDebounceUntilChanged";

type Props<T, V> = {
    value: T
    onChange: (value: T) => void
}

export const SearchInput: React.FC<Props<string, {id: number, title: string}>> = ({value, onChange}) => {
    const [debouncedValue, search, setSearch] = useDebounceUntilChanged<string>(value);
    useEffect(() => onChange(debouncedValue), [debouncedValue]);

    return (
        <div>
            <label>
                Search Products
                <input value={search} onChange={e => setSearch(e.currentTarget.value)}/>
            </label>
            {search !== debouncedValue && <div> Searching...</div>}
        </div>
    )
}