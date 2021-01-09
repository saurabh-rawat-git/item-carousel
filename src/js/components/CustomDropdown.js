import React, { useRef, useState } from 'react';
import '../css/CustomDropdown.css';

const CustomDropdown = (props) => {
    const optionContainerRef = useRef();
    const [selectedItem, setSelectedItem] = useState('Select a Category');
    const openDropDown = () => {
        optionContainerRef.current.classList.toggle("active");
    }

    const selectedOption = (e) => {
        setSelectedItem(e.target.querySelector('span').innerHTML);
        if (props.onchange)
            props.onchange(e.target.querySelector('span').innerHTML);
    }

    return (
        <div className={props.class || 'dropdownContainer'}>
            <div className={'select-box'} onClick={openDropDown} >
                <div className={'options-container'} ref={optionContainerRef} >
                    {
                        props.optionList.map((list, index) => {
                            return (<div class="option" key={index} onClick={selectedOption}>
                                <input
                                    type='radio'
                                    className='radio'
                                    name='category' />
                                <span>{list}</span>
                            </div>)
                        })
                    }
                </div>
                <div className={'selected'}>
                    {selectedItem}
                </div>
            </div>
        </div>
    )
}

export default CustomDropdown;