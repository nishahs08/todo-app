import Todo from "./Todo"
import '../styles/listTodo.css'
import { useEffect, useState } from "react";


function ListTodo(props) {
  const { todos, setTodos,editTodo,deleteTodo } = props;

  const sortedTodosWith = (todos, todo) => {
    const sorted = [...todos, todo];
    sorted.sort((t1, t2) => {
      if (t1.status === 'done' && t2.status === 'undone') {
        return 1;
      } else if (t1.status === t2.status) {
        return 0;
      } else {
        return -1;
      }
    });
    return sorted;
  }

  const todoByDate = todos.reduce((acc, todo) => ({
    ...acc,
    [todo.date]: sortedTodosWith(acc[todo.date] || [], todo)
  }), {});

  const sortedTodoDates = Object.keys(todoByDate)
    .sort((d1, d2) => (new Date(d2)).getTime() - (new Date(d1)).getTime())

  console.log(todoByDate);

  function handleStatusChange(status, todoId) {
    const updatedTodos = todos.map(t => {
      if (t.id === todoId) {
        t.status = status
      }
      return t
    })
    setTodos([...updatedTodos]);
  }

  function dateFormat(dateToFormat) {
    let date = new Date(dateToFormat);
    return date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear()
  }

  return (
    <div style={{ width: '98%' }}>
      { sortedTodoDates.map((date, i) => {
        return (
          <>
            <div className='listTodo-dateContainer'>
              <div className='listTodo-date'><span>{dateFormat(date)}</span></div>
            </div>
            { todoByDate[date].map(todo =>

              <Todo
                description={todo.description}
                category={todo.category}
                status={todo.status}
                setStatus={(status) => handleStatusChange(status, todo.id)}
                id={todo.id} 
                editTodo={editTodo}
                deleteTodo={deleteTodo}/>
            )}
          </>
        )

      })}
    </div>
  )
}



export default ListTodo;



