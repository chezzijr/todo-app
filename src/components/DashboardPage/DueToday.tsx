import { useContext } from "react"
import TodosContext from "./todo"
import Todo from "./Todo"

export default function DueToday() {
    const context = useContext(TodosContext)

    return (
        <div className="flex flex-col items-center">
            <div className="justify-center">
                {context.todos.filter(todo => {
                    const today = new Date()
                    return todo.dueDate.getDate() === today.getDate() &&
                        todo.dueDate.getMonth() === today.getMonth() &&
                        todo.dueDate.getFullYear() === today.getFullYear()
                }).map(todo => (
                    <Todo
                        key={todo.id}
                        todo={todo}
                        removeTodo={context.removeTodo}
                        updateTodo={context.updateTodo}
                    />
                ))}
            </div>
        </div>
    )
}
