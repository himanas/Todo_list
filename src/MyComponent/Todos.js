import React from 'react'
import {TodoItem} from "./TodoItem";

export const Todos = ({todos,onDelete}) => {
    let todoStyle = {
        minHeight: "70vh",
        mergin: "50px auto"
    }
    return (
        <div className="container my-3" style = {todoStyle}>
            <h3 className="text-center my-10" >Todo List</h3>
            {todos.length==0?"No Todos to display" :
            todos.map((todo)=>{
                return(<>
                    <TodoItem todo ={todo} key ={todo.sno} onDelete={onDelete}/><hr/>
                    </>
                )
            })}
           
        </div>
    )
}
