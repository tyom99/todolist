import {useState} from "react";
import './TodoForm.css'

export default function TodoForm({onAdd}){

    const [text,setText] = useState("")

    return(
        <>
        <form className="FormWrapper" onSubmit={(e)=>{
            e.preventDefault()
            onAdd(text)
            setText("")
        }} >
            <input className="InputWrapper" type="text" value={text} onChange={(e)=>{
                setText(e.target.value)
            }} />
            <button className="addTaskButton">ADD</button>
        </form>
            </>
    )

}