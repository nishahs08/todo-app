
import AddTodo from './components/AddTodo';
import ListTodo from './components/ListTodo';
import Nav from './components/Nav';
import './App.css';
import { useState } from 'react';


function App() {
    const [todos, setTodos] = useState([]);
    const [categories, setCategories] = useState([
        { label: 'Home', value: 'Home' },
        { label: 'Office', value: 'Office' },
        { label: 'School', value: 'School' }
    ]);
    const [selectedMenu, setSelectedMenu] = useState('list');
    const [editState,setEditState] =useState()
    function deleteTodo(id) {
        console.log("DELETED")
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos([...updatedTodos]);
    }
    // function editTodo(id,todo) {
    //     const updatedTodos = todos.filter(todo => todo.id !== id);
    //     setTodos([...updatedTodos,todo]);
    // }

    function editTodo(id){
        if(id){
            setEditState(true)
        }
    }
    return (
        <>
            <div className='wrapper'>
                <Nav
                    selectedMenu={selectedMenu}
                    setSelectedMenu={setSelectedMenu}
                />

                {(selectedMenu === 'addTodo') &&
                    <AddTodo
                        addTodo={todo => setTodos([...todos, todo])}
                        categories={categories}
                        setCategories={setCategories} />
                }
                {(selectedMenu === 'list') &&
                    <ListTodo
                        todos={todos}
                        setTodos={setTodos}
                        deleteTodo = {(id)=>deleteTodo(id)}
                        editTodo = {(id)=>editTodo()}
                    />
                }
            </div>
        </>
    )
}
export default App;