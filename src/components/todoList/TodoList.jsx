import React, { useState } from 'react';

function toListInfo () {
    const toDoListText = [];
    for (let i=0; i < 30; i++) {
         toDoListText.push({ 
        id: i,
        text: 'Item:' + (i + 1),
    });
    }
   return toDoListText;

}

const TodoList = () => {
    const [todoList, setTodoList] = useState(toListInfo);
    const [text, setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value);
    };
  return (
    <div style={{display:'grid', paddingLeft:'100px'}}>
        <div style={{display:'flex'}}>
            <input type="text" value={text} onChange={handleChange}/>
            <button 
                onClick={() => {
                setText("");
                setTodoList([{
                    id:todoList.length,
                    text: text,
                }, 
                ...todoList
            ]);
            }}>SAVE</button>
        </div>
        <p>{todoList.map((item) => (
            <li key={item.id}>{item.text}</li>
        ))}
        </p>
    </div>
  );
};

export default TodoList;