import './styles/TodoItem.css'
import {useState} from "react";

export function TodoItem(props, remove, lists){

    const [isDone, setDone] = useState(false);
    const handleChange = () => {
        setDone(!isDone);
    }

    const [active, setActive] = useState(false);

    return(
            <div
                 onClick={()=>setActive(!active)}
                 className={`todoItem ${ active ? 'todoItem_active': 'todoItem'}`}>
                <input  type="checkbox"
                        checked={isDone}
                        onChange={handleChange}
                />
                <span
                    className={isDone ? 'completed' : 'default'}
                >{props.item.title}

                </span>
                <div className='description'>
                    <span className={isDone ? 'completed' : 'default'}>{props.item.description}</span>
                </div>

                {/*<button onClick={() => props.remove(props.list)}>X</button>*/}
            </div>
        );
}


