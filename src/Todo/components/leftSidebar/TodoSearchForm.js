import {Component} from "react";
import './TodoSearchForm'
import './TodoSearchForm.css'

export class TodoSearchForm extends Component {

    onSearchChange(){

    }



    render() {
        return(
                <input
                    type="text"
                    className='searchArea'
                    onChange={this.onSearchChange}
                    placeholder={'Search'}
                />

        )
    }
}
