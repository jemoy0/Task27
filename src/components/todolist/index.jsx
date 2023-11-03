import { ToDoItem } from './todoitem'

export const ToDoList = (props) => {
    const {toDos} = props

    return(
        <ul>
            {toDos.map((item, index) => (
                <ToDoItem key={index} index={index + 1} name={item.name}/>
            ))}
        </ul>
    )
}