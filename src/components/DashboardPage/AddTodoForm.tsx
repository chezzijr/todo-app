import { useState } from "react";
import { Calendar } from "primereact/calendar";
import { Dialog } from "primereact/dialog";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Priority, type Todo } from "./todo";
import { Button } from "primereact/button";

type AddTodoFormProps = {
    visible: boolean
    onHide: () => void
    handleForm: (todo: Omit<Todo, "id">) => void
}

export default function AddTodoForm(props: AddTodoFormProps) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [dueDate, setDueDate] = useState<Date | null | undefined>(null)
    const [priority, setPriority] = useState<Priority>("low")

    const priorityOptions = [
        { label: "Low", value: "low" },
        { label: "Medium", value: "medium" },
        { label: "High", value: "high" }
    ]

    return (
        <Dialog header="Add Todo" onHide={props.onHide} visible={props.visible}>
            <InputText placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <InputTextarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
            <Calendar placeholder="Due Date" value={dueDate} onChange={(e) => setDueDate(e.value)} />
            <Dropdown placeholder="Priority" options={priorityOptions} onChange={(e) => setPriority(e.value)} />
            <Button label="Add" type="submit" onClick={e => {
                e.preventDefault()
                props.handleForm({ title, description, dueDate, priority })
            }} />
        </Dialog>
    )
}
