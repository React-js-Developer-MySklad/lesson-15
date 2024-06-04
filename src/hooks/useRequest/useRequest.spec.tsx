import {act, renderHook, waitFor} from "@testing-library/react";
import {useRequest} from "./useRequest";
import {AuthenticationProvider} from "../useAuthentication/authentication.provider";

// @ts-ignore
global.fetch = jest.fn();

describe('useRequest', () => {
    beforeEach(() => {
        jest.spyOn(global, 'fetch').mockResolvedValue(
            {
                status: 200,
                json: jest.fn().mockResolvedValue(new Promise(res => res({id: 1, name: 'Bob'})))
            } as any
        )
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('should send HTTP request', async () => {
        const { result } = renderHook(
            () => useRequest('https://localhost:8080/user/1'),
            {
                wrapper: (props)=> <AuthenticationProvider>{props.children}</AuthenticationProvider>
            })
        await waitFor(() => expect(result.current.data).toEqual({id: 1, name: 'Bob'}));

    })
})