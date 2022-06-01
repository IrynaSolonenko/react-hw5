import './TodoDescription.css';
import {useState} from "react";

export function TodoDescription ({props, lists}){
    const [active, setActive] = useState(false);
    return(
        <div className={'descriptionContainer'}>
            <h1>Title</h1>
        <h2 >
            {active ? active.props.item.title : null}
        </h2>
            <p
                className={'todoDescription'}>
                {active ? active.props.item.description : null}
            </p>
        </div>
    )

}