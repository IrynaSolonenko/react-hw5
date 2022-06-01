import './styles/TodoForm.css'
import {useMemo, useState} from "react";
import TodoAdd from "./TodoAdd";
import React from "react";
import {TodoList} from "./TodoList";
import {TodoSearchForm} from "./TodoSearchForm";

export function TodoForm(props) {

    const [lists, setLists] = useState([
        {id:1, title: 'Clean the flat', completed: false, description: 'прибраться в комнате получше'},
        {id:2, title: 'Garbage', completed: false, description: ''},
        {id:3, title: 'Prepare dinner', completed: false, description: ''}
    ])

    console.log(lists);

    const createItem = (newItem) => {
        setLists([...lists, newItem])
    }

    const [filter, setFilter] = useState({query: ''})

const sortedList = useMemo(()=>{
    if (filter.query){
        return sortedList.filter(list=>list.title.toLowerCase().includes(filter.query))
    }
    return lists;
}, [filter.sort, lists])

    const sortedAndSearchLists = useMemo(()=>{
        return sortedList.filter(list=>list.title.toLowerCase().includes(filter.query))
    },[filter.query, sortedList])


    return (
        <div className='mainForm'>
            <form
            >
               <TodoSearchForm
               filter={filter}
               setFilter={setFilter}
               />
                <TodoList
                    lists={sortedAndSearchLists}
                />
             <TodoAdd create={createItem}/>
            </form>
        </div>
    )
}
