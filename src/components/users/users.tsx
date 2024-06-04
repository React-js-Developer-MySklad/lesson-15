import {useRequest} from "../../hooks/useRequest/useRequest";

type User = {
    id: number
    firstName: string
}

type UserResponse = {
    users: User[]

}

export const Users = () => {
    const state = useRequest<UserResponse>('https://dummyjson.com/users')

    return (
        <ul>
            {state.loading}
            {state.data && state.data.users.map(item => <li key={item.id}>{item.firstName}</li>)}
        </ul>
    )
}