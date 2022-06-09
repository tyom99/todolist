import React from 'react';
import './TodoItem.css'

export default function TodoItem({todo,onChange,onDelete,number}) {
    return (
        <>
        <div className="ItemWrapper">
            <div className="ItemInnerContainer">
                <div className="ItemLeftContainer">
                <input className="CheckBox" type="checkbox" checked={todo.isCompleted}
                onChange={(e)=>{
                    onChange({
                        ...todo,
                        isCompleted: e.target.checked
                        })
                    }}/>
                    <div className="TaskNumber">
                        Task<span>{number}</span>&ensp;
                    </div>
                    <span>{todo.text}</span>
                </div>
                <div className="RemoveButton" onClick={ ()=> {
                    onDelete(todo)
                }}><div className="close"></div></div>
            </div>
        </div>
        </>
    );
}

