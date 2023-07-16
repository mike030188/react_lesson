import React, { useState } from 'react';

function toDoListInfo () {
    const toDoListText = [];
    for (let i = 0; i < 0; i++) {
        toDoListText.push({
            id: i,
            text: 'Item:' + (i + 1),
        });
    }
    return toDoListText;
}

const TodoList1 = () => {
    const [todoList, setTodoList] = useState(toDoListInfo);
    const [text, setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value);
    };

  return (
    <div style={{dilsplay:'grid'}}>
        <div style={{dilsplay:'flex'}}>
            <input type="text" value={text} onChange={handleChange} />
            <button 
                onClick={() => {
                    setText("");
                    setTodoList([{
                        id:todoList.length,
                        text:text,
                    }, ...todoList
                ])
                }}>Add</button>
        </div>
        <p>{todoList.map((item) => (
            <div key={item.id}>{item.text}</div>
        ))}
        </p>
    </div>
  );
};

export default TodoList1;