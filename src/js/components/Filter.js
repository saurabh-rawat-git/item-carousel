import React from 'react';
import CustomDropdown from './CustomDropdown';

const Filter = (props) => {
    const { data, onSelectionChange } = props;
    let newArr = [];

    data.forEach(value => {
        newArr.push(value);
    })
    return (
        <div>
            <CustomDropdown optionList={newArr} onchange={onSelectionChange} class={props.class || ''}/>
        </div>
    )

}


export default Filter;