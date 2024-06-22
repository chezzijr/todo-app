import { useContext, useState } from "react"
import TodosContext from "./todo"
import TodoComponent from "./Todo"
import type { Todo } from "./todo"
import AddTodoForm from "./AddTodoForm"
import { Button } from "primereact/button"

export default function List() {
    const context = useContext(TodosContext)
    const [visible, setVisible] = useState(false)

    function handleForm(todo: Omit<Todo, "id">) {
        context.addTodo(todo)
        setVisible(false)
    }

    return (
        <>
            <AddTodoForm visible={visible} onHide={() => setVisible(false)} handleForm={handleForm} />
            <div className="flex flex-col items-center">
                <Button label="Add Todo" onClick={() => setVisible(true)} />
                <div className="justify-center">
                    {context.todos.map(todo => (
                        <TodoComponent
                            key={todo.id}
                            todo={todo}
                            removeTodo={context.removeTodo}
                            updateTodo={context.updateTodo}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}
