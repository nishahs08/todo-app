import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calender from '../icons/calender.svg';
import {  useState } from 'react'
import '../styles/addtodo.css';
import makeAnimated from 'react-select/animated';
import CreatableSelect from 'react-select/creatable';
function AddTodo(props) {

    //category options in {label: , id:} format
    const { addTodo, categories, setCategories } = props;

    const [newOption, setOption] = useState('')

    //newly added todo
    const [todo, setTodo] = useState({
        description: '',
        date: new Date(),
        category: [],
        id: Date.now()
    });

    function addTodoHandler() {
        addTodo(todo);
    }

    function selectCategoryHandler(value) {
        let selectedCategories = value.map((v, i) => v.value);
        setTodo({ ...todo, category: [...selectedCategories] })
    }

    function inputNewCategory(input, action) {
        setOption(input);
    }
    return <>
        <div className='addtodo-container'>
            <div className='addtodo-input-container'>
                <label>Description</label>
                <textarea
                    className='textArea'
                    rows={5}
                    value={todo.description}
                    onChange={e => setTodo({ ...todo, description: e.target.value, status: 'undone' })}>
                    {todo.description}
                </textarea>
            </div>

            <div className='addtodo-input-container'>
                <label>Date</label>
                <div style={{ display: "flex" }}>
                    <DatePicker
                        className='addtodo-input-date'
                        selected={todo.date}
                        onChange={(date) => setTodo({ ...todo, date: date })} >
                    </DatePicker>
                    <div>
                        <img src={calender} ></img>
                    </div>
                </div>
            </div>

            <div className='addtodo-input-container'>
                <label>Categories</label>
                <div>
                    <CreatableSelect
                        isMulti={true}
                        closeMenuOnSelect={false}
                        components={makeAnimated()}
                        options={categories}
                        value={categories.label}
                        onChange={selectCategoryHandler}
                        onInputChange={inputNewCategory} />
                </div>
            </div>

            <div className={'addtodo-input-container' + ' ' + 'addtodo-input-btn'}>
                <button onClick={addTodoHandler} className='save-todo'>SAVE</button>
            </div>
        </div>
    </>
}

export default AddTodo;