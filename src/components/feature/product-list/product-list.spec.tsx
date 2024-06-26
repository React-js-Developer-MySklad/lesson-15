import React from "react";
import "@testing-library/jest-dom"
import {render, screen, waitFor} from "@testing-library/react";
import userEvent from '@testing-library/user-event'

import {ProductList} from "./product-list";


// @ts-ignore
global.fetch = jest.fn();

const setup = () => {
    const user = userEvent.setup();
    render(<ProductList/>)
    const searchElement = screen.getByLabelText('Search Products');

    return {user, searchElement};
}

describe('Product List', () => {

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
        jest.clearAllMocks();
    });


    it('should render typing message ', async () => {
        const {user, searchElement} = setup();

        await user.click(searchElement);
        await user.keyboard("Phone")

        expect(screen.getByText('Typing...')).toBeInTheDocument()

    })

    it('should not send empty request', async () => {

        const {user, searchElement} = setup();

        await user.click(searchElement);
        await user.keyboard("Phone");

        expect(await screen.findByText('Typing...')).toBeInTheDocument();
        await user.clear(searchElement);

        expect(screen.queryByText('Typing...')).not.toBeInTheDocument();

        await waitFor(() => expect(fetch).toBeCalledTimes(0), {timeout: 500});
    })

    it('should send request after delay', async () => {

        const {user, searchElement} = setup();

        await user.click(searchElement);
        await user.keyboard("Phone");

        await waitFor(() => expect(fetch).toBeCalled(), {timeout: 500});
    })

    it('should not send the same request again', async () => {

        const {user, searchElement} = setup();

        await user.click(searchElement);
        await user.keyboard("Phone");

        expect(await screen.findByText('Phone', {exact: false})).toBeInTheDocument();

        await user.clear(searchElement);

        expect(searchElement).toHaveValue('')

        await user.keyboard("Phone");
        await waitFor(() => expect(fetch).toBeCalledTimes(1), {timeout: 500});
    })

    it('should render product list', async () => {
        const {user, searchElement} = setup();

        await user.click(searchElement);
        await user.keyboard("Phone");

        expect(await screen.findByText('Phone', {exact: false})).toBeInTheDocument();
    })

    it('should clear product list after removing search request', async () => {
        const {user, searchElement} = setup();

        await user.click(searchElement);
        await user.keyboard("Phone");

        expect(await screen.findByText('Phone', {exact: false})).toBeInTheDocument();

        await user.clear(searchElement);

        await waitFor(() => expect(screen.queryByText('Typing...')).not.toBeInTheDocument())

        expect(screen.findByText('Phone', {exact: false})).rejects.toThrow();
        expect(fetch).toBeCalledTimes(1);
    })

})