import {Component} from "react";
import './TodoItem.css'

export class TodoItem extends Component{
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return(
            <div className='todoItem' onClick={()=> this.props.getCurrentTodo(this.props.item)} >
                <input type="checkbox" onClick={() => this.props.onItemComplete(this.props.item.id)}></input>
                <span className={this.props.item.completed ? 'completed' : 'default'}>{this.props.item.title}</span>
                <div className='description'>
                    <span className={this.props.item.completed ? 'completed' : 'default'}>{this.props.item.description}</span>
                </div>

                {/*<button onClick={() => this.props.onItemDelete(this.props.item.id)}>X</button>*/}
            </div>
        );
    }
}