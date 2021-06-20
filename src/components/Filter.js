import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calender from '../icons/calender.svg';
import { useEffect, useState } from 'react'
import '../styles/addtodo.css';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import CreatableSelect from 'react-select/creatable';
function Filter(props) {
    const categories = ['Home', 'Office', 'this'];
    return <>
        <div className='addtodo-container'>
            <div className='addtodo-input-container'>
                <label>Date</label>
                <div style={{ display: "flex" }}>
                    <DatePicker
                        className='addtodo-input-date'
                        selected={new Date()}
                    >
                    </DatePicker>
                    <div>
                        <img src={calender} ></img>
                    </div>
                </div>
            </div>

            <div className='addtodo-input-container'>
                <label>Categories</label>
                <div >
                    <Select
                        isMulti={true}
                        closeMenuOnSelect={false}
                        components={makeAnimated()}
                        options={categories}
                        value={categories.label}
                    />

                </div>
            </div>

            <div className={'addtodo-input-container' + ' ' + 'addtodo-input-btn'}>
                <button style={{ padding: '12px' }} >SAVE</button>
            </div>
        </div>
    </>
}

export default Filter;