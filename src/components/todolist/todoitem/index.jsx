export const ToDoItem = (props) => {
    return(
        <li>
            <span>{`${props.index}. `}</span>
            <span>{props.name}</span>
        </li>
    )
}