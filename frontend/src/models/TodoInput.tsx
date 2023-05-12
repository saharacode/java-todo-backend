import React from 'react';

type InputProps = {
    setInputName: (searchTerm: string) => void
}

function TodoInput(props:InputProps) {
    function useTextInput(event: React.FormEvent<HTMLInputElement>) {
        props.setInputName(event.currentTarget.value);
    }

    return (
        <div>
            <input type="text" onInput={useTextInput}/>
        </div>
    );
}

export default TodoInput;