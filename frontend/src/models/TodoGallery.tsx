import React, {useEffect, useState} from 'react';
import TodoInput from "./TodoInput";
import axios from "axios";
import {Todo} from "./Todo";
import TodoCard from "./TodoCard";

function TodoGallery() {
    const [inputName,setInputName] = useState("")
    const [todos,setTodos] = useState<Todo[]>([])


    useEffect(getAllTodosFromBackend,[])

    function getAllTodosFromBackend() {
        axios.get("/api/todo")
            .then(response =>setTodos(response.data))
    }


    function addTodo() {
        axios.post("/api/todo", {
            description: inputName,
            status: 'OPEN'
        })
            .then(getAllTodosFromBackend); // keeping the list with todos updated after newly added todo
    }


    return (
        <div>
            <p>Here you can add a new To-Do:</p>
            <TodoInput setInputName = {setInputName}></TodoInput>
            <button onClick={addTodo}>Add</button>

            {todos.map((currentTodo:Todo) => <TodoCard currentTodo={currentTodo} getAllTodosFromBackend={getAllTodosFromBackend}></TodoCard>)}
        </div>
    );
}

export default TodoGallery;