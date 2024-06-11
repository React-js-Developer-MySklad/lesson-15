import {findByText, render, screen, waitFor} from "@testing-library/react";
import {ProductListLive} from "./product-list-live";
import userEvent from '@testing-library/user-event'
import React from "react";
import {ProductList} from "../product-list/product-list";

import "@testing-library/jest-dom"

// @ts-ignore
global.fetch = jest.fn();

const setup = () => {
    const user = userEvent.setup();
    render(<ProductList/>)
    const searchElement = screen.getByLabelText('Search Products');

    return {user, searchElement};
}


describe('Product List Live', () => {
    beforeEach(() => {
        jest.spyOn(global, 'fetch').mockResolvedValue(
            {
                status: 200,
                    json: jest.fn().mockResolvedValue(new Promise(res => res(
                        {products: [ {id: 1, title: 'iPhone'} ] })))
            } as any
        )
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

})