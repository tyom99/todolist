import './TodoFooter.css'

export default function TodoFooter({todos}) {

    const completedSize = todos.filter((todo)=>todo.isCompleted).length

    return(
        <div className="FooterWrapper">
            <div><span>Completed Tasks&ensp;=&ensp;{completedSize}&ensp;All Tasks&ensp;=&ensp;{todos.length}</span></div>
        </div>
    )
}