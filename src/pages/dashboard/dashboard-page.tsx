import React from "react";
import {MemoExample} from "../../components/examples/memo-example/memo-example";
import {UseMemoExample} from "../../components/examples/use-memo-example/use-memo-example";
import {UseCallbackExample} from "../../components/examples/use-callback-example/use-callback-example";
import {UseIdExample} from "../../components/examples/use-id-example/use-id-example";
import {UseDeferredValueExample} from "../../components/examples/use-deferred-value-example/use-deferred-value-example";
import {ProductList} from "../../components/feature/product-list/product-list";
import {UseReducerExample} from "../../components/examples/use-reducer-example/use-reducer-example";
import {UseTransitionExample} from "../../components/examples/use-transition-example/use-transition-example";

export const DashboardPage = () => {
    return (
        <>
            {/*<UseReducerExample/>*/}
            {/*<MemoExample/>*/}
            {/*<UseMemoExample/>*/}
            {/*<UseCallbackExample/>*/}
            {/*<UseIdExample/>*/}
            {/*<UseDeferredValueExample/>*/}
            <UseTransitionExample/>
            {/*<ProductList/>*/}
            {/*<App/>*/}
        </>
    )
}