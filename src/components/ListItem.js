import React, {useState} from 'react';
import InputForm from './InputForm';
import Todo from './Todo';

function ListItem() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
        //console.log(todo, ...todos);
    };

    const removeTodo = id => {
        constRevoveArr =[...todos].filter(todo =>todo.id !== id)
        
        setTodos(removeArr);
    }

    const completeTodo = id => {
        let updatedTodos = todo.map(todo =>{
         if(todo.id===id){
            toHaveDisplayValue.isComplete = !todo.isComplete
         }
         return todo
        })
        setTodos(updatedTodos);
    }

  return (
    <div>
        <InputForm onSubmit={addTodo}/>
        <Todo 
        todos={todos} completeTodo={completeTodo} removeTodo=
        {removeTodo}
        />
        </div>
  )
}

export default ListItem