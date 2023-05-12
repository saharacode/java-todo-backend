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

    function filterTodosOpen(){
        return todos.filter((currentTodo:Todo)=>{
            return currentTodo.status.includes("OPEN");
        })
    }

    function filterTodosInProgress(){
        return todos.filter((currentTodo:Todo)=>{
            return currentTodo.status.includes("IN_PROGRESS");
        })
    }

    function filterTodosDone(){
        return todos.filter((currentTodo:Todo)=>{
            return currentTodo.status.includes("DONE");
        })
    }


    return (
        <div>
            <p>Here you can add a new To-Do:</p>
            <TodoInput setInputName = {setInputName}></TodoInput>
            <button onClick={addTodo}>Add</button>

            <h2>Open:</h2>
            {filterTodosOpen().map((currentTodo:Todo) => <TodoCard currentTodo={currentTodo} getAllTodosFromBackend={getAllTodosFromBackend}></TodoCard>)}
            <h2>In progress:</h2>
            {filterTodosInProgress().map((currentTodo:Todo) => <TodoCard currentTodo={currentTodo} getAllTodosFromBackend={getAllTodosFromBackend}></TodoCard>)}
            <h2>Done:</h2>
            {filterTodosDone().map((currentTodo:Todo) => <TodoCard currentTodo={currentTodo} getAllTodosFromBackend={getAllTodosFromBackend}></TodoCard>)}
        </div>
    );
}

export default TodoGallery;