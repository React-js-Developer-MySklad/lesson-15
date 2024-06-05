import {createTodos, expensiveCalculation, Todo} from "../../../../utils/utils";
import React, {memo, useEffect, useState} from "react";

const Item:React.FC<{todo: Todo}> = ({todo}) => {

    expensiveCalculation(10)

    return (
        <div>{todo.text} {todo.completed}</div>
    )

}

export const Child: React.FC<{search: string}> = memo(({search}) => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        setTodos(createTodos(search.length))
    }, [search])

    return (
        <div>
            {todos.map(item => <Item key={item.id} todo={item}/>)}
        </div>
    )

})