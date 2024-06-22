import { useSelector } from "react-redux"
import { IRootState } from "@/libs/stores/store";
import { Menubar } from "primereact/menubar";
import { Avatar } from "primereact/avatar";
import { useEffect, useRef, useState } from "react";
import { OverlayPanel } from "primereact/overlaypanel";
import TodosContext, { type Todo } from "./todo";
import List from "./List";
import { createUUID } from "@/libs/utils/randomUUID";
import DueToday from "./DueToday";

export default function DashboardPage() {
    const currentUser = useSelector((state: IRootState) => state.currentUser.currentUser);
    const [view, setView] = useState(<List />)
    const op = useRef(null);

    const [todos, setTodos] = useState<Todo[]>(localStorage.getItem(currentUser) ? JSON.parse(localStorage.getItem(currentUser)!) : [])
    function addTodo(todo: Omit<Todo, 'id'>) {
        const id = createUUID()
        setTodos([...todos, { ...todo, id }])
    }
    function removeTodo(id: string) {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    function updateTodo(todo: Todo) {
        setTodos(todos.map(t => t.id === todo.id ? todo : t))
    }

    useEffect(() => {
        localStorage.setItem(currentUser, JSON.stringify(todos))
    }, [todos, currentUser])

    const menuItems = [
        {
            label: 'List',
            icon: 'pi pi-fw pi-home',
            command: () => setView(<List />)
        },
        {
            label: 'Due Today',
            icon: 'pi pi-fw pi-user',
            command: () => setView(<DueToday />)
        },
        {
            label: 'Done',
            icon: 'pi pi-fw pi-cog',
            command: () => setView(<div>Settings</div>)
        },
        {
            label: 'Overdue',
            icon: 'pi pi-fw pi-power-off',
            command: () => console.log('Logout')
        }
    ]

    const start = <h3 className="mx-3">Todo App</h3>;
    const end = (
        <div className="flex items-center">
            <Avatar label={currentUser[0]} shape="circle" />
            <OverlayPanel ref={op}>
                <div className="flex items-center">
                    Your mom
                </div>
            </OverlayPanel>
        </div>
    );

    return (
        <div className="w-full h-full">
            <Menubar
                className="w-screen h-[5vh]"
                model={menuItems}
                start={start}
                end={end}
            />
            <TodosContext.Provider value={{ todos, addTodo, removeTodo, updateTodo }}>
                {view}
            </TodosContext.Provider>
        </div>
    )
}
