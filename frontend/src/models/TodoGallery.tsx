import React, {useState} from 'react';
import TodoInput from "./TodoInput";

function TodoGallery() {
    const [inputName,setInputName] = useState("")

    function addTodo() {
        console.log(inputName)
    }



    return (
        <div>
            <p>Here you can add a new To-Do:</p>
            <TodoInput setInputName = {setInputName}></TodoInput>
            <button onClick={addTodo}>Add</button>
        </div>
    );
}

export default TodoGallery;