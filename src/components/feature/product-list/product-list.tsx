import {useEffect, useState} from "react";
import {SearchInput} from "../../search-input/search-input";
import {httpRequest} from "../../../tools/http-request";

export const ProductList = () => {
    const [products, setProducts] = useState<{id: number, title: string}[]>([])
    const [search, setSearch] = useState<string>()

    useEffect(() => {
        if (!search) {
            setProducts([])
        } else {
            httpRequest<{products: {id: number, title: string}[]}>(
                `https://dummyjson.com/products/search?q=${search}`)
                .then(res =>
                    setProducts(res.products));
        }
    }, [search]);

    return (
        <>
            <SearchInput value={''} onChange={v => setSearch(v)}/>
            {products.map(item => <div key={item.id}>{item.title}</div>)}
        </>
    )
}