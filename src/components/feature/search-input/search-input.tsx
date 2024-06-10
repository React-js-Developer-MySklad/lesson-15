
import {useEffect, useState} from "react";
import {useDebounceUntilChanged} from "../../../hooks/useDebounceUntiChanged/useDebounceUntilChanged";
import {httpRequest} from "../../../tools/http-request";

export const SearchInput = () => {

    const [products, setProducts] = useState<{id: number, title: string}[]>([])
    const [debouncedValue, setDebouncedValue] = useState<string>('')
    const [search, setSearch] = useDebounceUntilChanged<string>('', () => {
        setDebouncedValue(search);

        httpRequest<{products: {id: number, title: string}[]}>(
            `https://dummyjson.com/products/search?q=${search}`
        ).then(res =>
            setProducts(res.products));
    });

    useEffect(() => {

    }, []);

    return (
        <div>
            <label>
                Search Products
                <input value={search} onChange={e => setSearch(e.currentTarget.value)}/>
            </label>

            {search !== debouncedValue && <div> Waiting...</div>}

            {products.map(item => (
                <div key={item.id}
                     style={{opacity: search !== debouncedValue ? 0.5 : 1}}>
                    {item.title}
                </div>
            ))}
        </div>
    )
}