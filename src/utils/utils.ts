function getRandomArbitrary(min: number, max: number) {
    return Math.round(Math.random() * (max - min) + min);
}

export type Todo = {
    id: number
    text: string
    completed: boolean
}
export const createTodos = (length: number = 1): Todo[] => {
    const todos = [];
    const limit = getRandomArbitrary(1, length)
    let i = limit + 50
    for (; i > limit; i--) {
        todos.push({
            id: i,
            text: "Todo " + (i - 1),
            completed: Math.random() > 0.5
        });
    }
    return todos
}

export const createTodo = (): Todo => {
    const id = getRandomArbitrary(1, 1000);
    return {id: id, text: `Todo :${id}`, completed: Math.random() > 0.5}
}

export const expensiveCalculation = (time: number = 500) => {
    let startTime = performance.now();
    while (performance.now() - startTime < time) {}
}