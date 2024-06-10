import {createTodos, expensiveCalculation, Todo} from "../../../../utils/utils";
import React, {memo, useEffect, useState} from "react";

const Item:React.FC<{todo: Todo}> = ({todo}) => {

    expensiveCalculation(10)

    return (
        <div>{todo.text} {todo.completed}</div>
    )

}

export const Child: React.FC = () => {
    const [todos, ] = useState(() => createTodos(50))

    return (
        <div>
            {todos.map(item => <Item key={item.id} todo={item}/>)}
        </div>
    )

}