import React, { useContext, useState } from 'react';
import { TodoContext } from '../context/TodoProvider';
import { v1 } from 'uuid';

function TodoInput () {
    const [ name, setName ] = useState("");
    let todoContext = useContext (TodoContext);
    return (
        <div className='row'>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder='YOUR TODAY GOAL' className='col form-control' type='text' />
            <div
                onChange={() => {
                    if (name !== "") {
                        todoContext.addTodo({
                            id: v1(),
                            title: name
                        })
                        setName("");
                    }
                }}
                className='ml-2 btn btn-primary'>ADD TODO</div>
        </div>
    ) 
}

export default TodoInput