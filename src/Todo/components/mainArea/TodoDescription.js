import {Component} from "react";
import './TodoDescription.css';

export class TodoDescription extends Component {

    // constructor(props) {
    //     super(props);
    // }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(prevProps)
    }

    render() {
        return (
            <div className={'descriptionContainer'}>
                {
                    this.props.currentTodo.title ?
                        <>
                            <h2>
                                {this.props.currentTodo.title}
                            </h2>
                            <textarea
                                type="text"
                                className={'todoDescription'}>
                                {this.props.currentTodo.description}</textarea>
                        </>
                         :
                         <h1>Title</h1>
                }
            </div>
        )
    }
}