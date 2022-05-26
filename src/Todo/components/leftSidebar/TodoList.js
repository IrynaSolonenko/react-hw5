import {Component} from "react";
import {TodoItem} from "./TodoItem";
import './TodoList.css';

export class TodoList extends Component{
    // constructor(props) {
    //     super(props);
    // }
    state = {
        list: [
        {id:1, title: 'Clean the flat', completed: false, description: 'прибраться в комнате получше'},
        {id:2, title: 'Garbage', completed: false, description: ''},
        {id:3, title: 'Prepare dinner', completed: false, description: ''}
    ],
    history: [
        {field: '', action: '', prevValue: '', currentValue: '', appliedAt: ''}
    ]
    }


   onItemCompleteHandler = (id) => {
        const item = this.state.list.find((todoItem) => todoItem.id === id);
       const updatedItem = {...item, completed: !item.completed}

    this.setState({
        list: this.state.list.map((todoItem) => todoItem.id === id ? updatedItem : todoItem)
    }, ()=>{
        console.log(this.state.list);
    })
    }

    onItemDeleteHandler = (id) => {
        this.setState({
            list: this.state.list.find((todoItem) => todoItem.id !== id),
        });
    }

    onItemChangeHandler = (id) => {
          const item = this.state.list.filter((todoItem) => todoItem.id === id);
        console.log(item);
    }


    render() {
        return(
            <div>
                <ul
                    className='todoList'
                >
                    {this.state.list.map((todoItem) =>
                        <TodoItem item={todoItem}
                            key={todoItem.id}
                            getCurrentTodo={this.props.getCurrentTodo}
                            onItemDelete={this.onItemDeleteHandler}
                            onItemComplete={this.onItemCompleteHandler}
                            onItemChange = {this.onItemChangeHandler}
                    />
                    )}
                </ul>
            </div>
        )
    }
}