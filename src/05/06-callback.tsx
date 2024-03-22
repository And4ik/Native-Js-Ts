import React, {ChangeEvent, MouseEvent, useEffect, useRef, useState} from 'react';
import {Button} from "./Button";

type TodosType = {
    userId: number
    id: number
    title: string
    completed: boolean
}

export const User = () => {

    // const deleteUser = (e: MouseEvent<HTMLButtonElement>) => {
    //     alert(e.currentTarget.name)
    // }
    //
    // const onNameChange = () => {
    //     console.log("name changed")
    // }
    //
    // const fokusLost = () => {
    //     console.log("fokus lost")
    // }
    // let [value,setValue]=useState("")
    //
    // const onAgeChanged= (event:ChangeEvent<HTMLInputElement>) => {
    //     console.log("age changed: " + event.currentTarget.value)
    // }
    const[todos,setTodos] = useState<TodosType[]>([])

    const fetchTodos = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodos(json))

    }
    useEffect(()=>{
        fetchTodos()
    }, [])



    const newTitle = useRef<HTMLInputElement>(null);

    const addMessage = () => {
        if (newTitle.current){
            const newMessage = {
                userId: 666,
                id: todos.length + 1,
                title: newTitle.current.value,
                completed: true,
            }
            setTodos([newMessage,...todos])
            newTitle.current.value = ''
        }
    }

    return (
        <div>
            {/*<textarea onChange={onNameChange} onBlur={fokusLost}>Dimych</textarea>*/}
            {/*<input type="text" onChange={onAgeChanged}/>*/}
            {/*<button name="delete" onClick={deleteUser}>Delete</button>*/}
            {/*<button name="save" onClick={deleteUser}>Save</button>*/}
            <div>
                <input ref={newTitle}/>
                <Button onclick={ addMessage} name={"Add new Li"}/>
            </div>
            <ul>
                {todos.map(el => {
                    return (
                        <li key={el.id}>
                            <span>{el.id}</span>
                            <span>{el.title}</span>
                            <input type="checkbox" checked={el.completed}/>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

