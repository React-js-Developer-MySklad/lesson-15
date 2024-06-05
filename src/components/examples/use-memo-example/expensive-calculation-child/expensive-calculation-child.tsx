import {createTodos, expensiveCalculation} from "../../../../utils/utils";
import {useMemo} from "react";

export const ExpensiveCalculationChild = () => {
    const todos = useMemo(() => {
        expensiveCalculation(2000)
        return createTodos()
    }, [])


    return <div>
        {todos.map(item => <div key={item.id}>{item.text} {item.completed}</div>)}
    </div>

}