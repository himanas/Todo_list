import React, { useState } from 'react'

export const AddTodo = (props) => {
    
    const [title, setTitile] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description Cannot be blanks")
        } else {
            props.addTodo(title, desc);
            setTitile("");
            setDesc("");
        }
    }
    return (
        <div className="container my-3">
            <h2>Add a Todo</h2>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e) => { setTitile(e.target.value) }} className="form-control" id="title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="desc" />
                </div>
                <button type="submit" className="btn btn-success">Add Todo</button>
            </form>
        </div>

    )
}




