import {TodoForm} from "./components/leftSidebar/TodoForm";
import {TodoDescription} from "./components/mainArea/TodoDescription";
import './components/Todo.css'
import {useState} from "react";

export function Todo (change, setChange){
    const getCurrentTodo = (todo) => {
        setChange(todo)
    }


        return(
            <>
                <div className={'todo'}>
                    <TodoForm
                    />
                    <TodoDescription
                        getCurrentTodo={getCurrentTodo}
                    />
                </div>

            </>
        )
}