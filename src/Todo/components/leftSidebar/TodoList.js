// import {useState} from "react";
// import {TodoItem} from "./TodoItem";
import './styles/TodoList.css';
import {TodoItem} from "./TodoItem";
import React, {useState} from "react";

export function TodoList ({lists}){

    return(
    <div>
        <ul className='todoList'>
            {lists.map((todoItem) =>
                    <TodoItem item={todoItem}
                              key={todoItem.id}
                    />

                )
            }
        </ul>
    </div>
    )
}
