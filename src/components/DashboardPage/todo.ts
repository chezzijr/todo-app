import { createContext } from "react";

export type Priority = "low" | "medium" | "high";
export type Todo = {
    id: string;
    title: string;
    description: string;
    dueDate: Date;
    completed: boolean;
    priority: Priority;
}

const TodosContext = createContext({
    todos: [] as Todo[],
    addTodo: (_: Omit<Todo, "id">) => { }, // eslint-disable-line @typescript-eslint/no-unused-vars
    removeTodo: (_: string) => { }, // eslint-disable-line @typescript-eslint/no-unused-vars
    updateTodo: (_: Todo) => { }, // eslint-disable-line @typescript-eslint/no-unused-vars
});
export const TodosProvider = TodosContext.Provider;
export const TodosConsumer = TodosContext.Consumer;
export default TodosContext;
