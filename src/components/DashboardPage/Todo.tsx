import { Fieldset } from "primereact/fieldset";
import { Tag } from "primereact/tag";
import type { Todo } from "./todo";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";

type TodoProps = {
    todo: Todo;
    removeTodo: (id: string) => void;
    updateTodo: (todo: Todo) => void;
}

export default function Todo({ todo, removeTodo, updateTodo }: TodoProps) {
    const severity = "low" === todo.priority ? "success" : "medium" === todo.priority ? "warning" : "danger";

    return (
        <Fieldset legend={todo.title} toggleable className="w-[50vw]">
            <div className="flex justify-between w-full h-full">
                <div>
                    <p>{todo.description}</p>
                    <Checkbox checked={todo.completed} onChange={e => updateTodo({...todo, completed: !!e.checked})} />
                </div>
                <div className="flex flex-col justify-between h-full gap-3">
                    <Button
                        icon="pi pi-times"
                        className="bg-red-500 hover:bg-red-700"
                        severity="warning"
                        aria-label="Remove"
                        onClick={() => removeTodo(todo.id)}
                    />
                    <Tag value={todo.priority} severity={severity} />
                </div>
            </div>
        </Fieldset>
    )
}
