import React, {useState} from 'react';

function InputForm(props) {
    const {input, setInput} = useState('');

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
       });

       setInput('')
    };


  return (
    <form className='input-form' onsubmit={handleSubmit}>
        <input 
        type='text' 
        placeholder='Add a todo'
        value={input}
        name='text'
        className='todo-input'
        onChange={handleChange}
         />
         <button className="input-button">Add todo</button>

    </form>

  )
}

export default InputForm
