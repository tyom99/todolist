import './TodoFooter.css'

export default function TodoFooter({todos}) {

    const completedSize = todos.filter((todo)=>todo.isCompleted).length

    return(
        <div className="FooterWrapper">
            <span>  Completed Tasks ={completedSize}&ensp;All Tasks=&ensp;{todos.length} </span>
        </div>
    )
}