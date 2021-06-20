function EditTodo(props){
    const { editTodo, categories, setCategories,id } = props;
    const [todo, setTodo] = useState({});

    function selectCategoryHandler(value) {
        let selectedCategories = value.map((v, i) => v.value);
        setTodo({ ...todo, category: [...selectedCategories] })
    }

    function inputNewCategory(input, action) {
        setOption(input);
    }

    function editTodoHandler() {
        editTodo(id,{...todo, id: id});
    }
    return <div className='addtodo-container'>
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
        <button onClick={editTodoHandler} style={{ padding: '12px' }} >Edit</button>
    </div>
</div>
}