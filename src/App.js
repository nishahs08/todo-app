import { useState } from "react";


function App() {
  const [enteredTodo, setEnteredTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  

  function addTodo() {
    setTodoList([...todoList, { name: enteredTodo, id: todoList.length + 1, done: false }])
    setEnteredTodo('')
  }

  function done(t) {
    setTodoList(todoList.map((todo) => {
      if (todo.id === t.id) {
        todo.done = true;
      }
      return todo;
    }))
  }

  function unDone(t) {
    setTodoList(todoList.map((todo) => {
      if (todo.id === t.id) {
        todo.done = false;
      }
      return todo;
    }))
  }

  

  let list = todoList.filter(todo => !todo.done).map((todo) => <li key={todo.id}>
    <input type='checkbox' id={todo.id} checked={todo.done} onChange={(e) => done(todo)}></input>
    <label htmlFor={todo.id}>{todo.name}</label>
  </li>)

  let completedList = todoList.filter(todod => todod.done).map((item, index) =>
    <li key={item.id}>
      <input type='checkbox' id={item.id} checked={item.done} onChange={(e) => unDone(item)}></input>
      <label htmlFor={item.id}>{item.name}</label>
    </li>
  )

  return <div>
    <div>
      <input type='text' placeholder="What's on your mind" value={enteredTodo} onChange={(e) => setEnteredTodo(e.target.value)} />
      <button onClick={addTodo}> Add a todo</button>
    </div>
    <ul style={{ backgroundColor: 'yellow', listStyle: 'none' }}>
      {list}
    </ul>
    <ul style={{ backgroundColor: 'green' }}>
      {completedList}
    </ul>
  </div>


}

export default App;
