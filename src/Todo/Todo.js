import {Component} from "react";
import {TodoForm} from "./components/leftSidebar/TodoForm";
import {TodoDescription} from "./components/mainArea/TodoDescription";
import './components/Todo.css'

export class Todo extends Component{

    state = {}

    getCurrentTodo = (todo) => {
        this.setState(todo)
    }

    onTodoAddHandler = (newItem) => {
        console.log(newItem);
    }

    render() {
        return(
            <>
                <div className={'todo'}>
                    <TodoForm
                    onTodoAdd={this.onTodoAddHandler}
                    getCurrentTodo={this.getCurrentTodo}
                    />
                    <TodoDescription
                        currentTodo={this.state}
                    />
                </div>

            </>
        )
    }
}