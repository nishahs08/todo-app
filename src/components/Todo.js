import '../styles/todo.css';
import pen from '../icons/pen.svg';
import del from '../icons/del.svg'
import { useState } from 'react';
function Todo(props) {
    const { description, status, category, setStatus, id, editTodo, deleteTodo ,edit} = props;
  
    console.log(category, category)

    function handleChecked(e) {
        if (e.target.checked === true) {
            setStatus('done', id)
        } if (e.target.checked === false) {
            setStatus('undone', id)
        }
    }

    return (
        <div className='todo-container'>
            <div className='todo-description'>
                <input type='checkbox' id={'todo' + id} checked={status == 'done'} onChange={handleChecked} />
                <div htmlFor={'todo' + id} className='todo-content' style={{ backgroundColor: `${status == 'done' ? '#9DB68C' : '#fff'} ` }}>
                    <div style={{ display: 'flex', maxWidth: '100%' }}>
                        <div style={{ flex: 2 }}>
                          <p>  {description} </p>
                        </div>
                        <div className='todo-update'>
                            <div
                                style={{ width: '20px', height: '20px', display: 'flex', padding: '3px' }}
                                onclick={() =>  deleteTodo(id) }>
                                <img src={pen} />
                            </div>
                            <div
                                style={{ width: '25px', height: '25px', display: 'flex', padding: '3px' }}
                                onClick={() =>  editTodo(id) }>
                                <img src={del} />
                            </div>
                        </div>
                    </div>

                    <div className='todo-categories' >
                        {category.map(c => (<div className='todo-category' >
                            <span>{c}</span>
                        </div>))}

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Todo;