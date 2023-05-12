import React, {useState} from 'react';

type GalleryProps = {

}


function TodoGallery(props:GalleryProps) {
    const [inputName,setInputName] = useState("")

    function addTodo() {
        console.log(inputName)
    }

    function useTextInput(event: React.FormEvent<HTMLInputElement>) {
        setInputName(event.currentTarget.value);
    }

    return (
        <div>
            <p>Here you can add a new To-Do:</p>
            <input type="text" value={inputName} onInput={useTextInput}/>
            <button onClick={addTodo}>Add</button>
        </div>
    );
}

export default TodoGallery;