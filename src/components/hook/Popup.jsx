import React from 'react';
import Popup from 'reactjs-popup';
import '../../index.css';
import { Button } from '../todoList/TodoList2.style';


export default function PopupComp() {
    return(
        <>
            <Popup
                trigger={<Button > Add Task </Button>}
                modal
                nested
            >
                {close => (
                <div className="modal">
                    <button className="close" onClick={close}>
                    &times;
                    </button>
                    <div className="header"> New Task </div>
                    <div className="content">
                    <button>Task</button>
                    <input type="text" placeholder='Description of task' 
                    
                    />
                    
                    </div>

                    <div className="actions">
                    <div>
                        <button className="button" onClick={close}> Close </button>                  
                    
                    </div>
                    <button style={{ background:'rgb(0,0,255)'}}
                        className="button"
                        onClick={() => {
                        console.log('modal closed ');
                        close();
                        }}
                    >
                        Save changes
                    </button>
                    </div>
                </div>
                )}
            </Popup>
        </>
    )
}
  
