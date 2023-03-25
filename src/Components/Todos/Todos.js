import React, { useEffect, useState } from 'react';

const Todos = () => {
    const [todos , setItems] = useState([]);
    useEffect( () =>{
        fetch("https://jsonplaceholder.typicode.com/todos/")
        .then(res=>res.json())
        .then(data=>setItems(data));
    }, []);
    return (
        <div>
            {
                todos.map(todo=> <h3>Title:{todo.title}</h3>)
            }
        </div>
    );
};

export default Todos;