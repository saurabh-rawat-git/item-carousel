import React, { useState, useRef, useEffect } from 'react';
import { ItemList } from './data/items';
import Cards from './components/Cards';
import Filter from './components/Filter';
import LeftIcon from './images/leftArrow.png';
// import RightIcon from './images/right.png';
import RightIcon from './images/rightArrow.png';
import Cancel from './images/cancel.svg';

import { getAllUniqueCategories, getFilterItems } from './util';

const ItemCarousel = () => {
    const [currentFilter, setCurrentFilter] = useState();
    const [currentDisplayList, setCurrentDisplayList] = useState([0, 1, 2]);
    const [allItems, setAllItems] = useState(ItemList)
    const itemListLength = allItems.length;
    const categorySet = getAllUniqueCategories(ItemList);
    const itemCont = useRef();

    useEffect(() => {
        const filteredItemList = getFilterItems(ItemList, currentFilter);
        setAllItems(filteredItemList);
        setCurrentDisplayList([0, 1, 2]);
    }, [currentFilter, setCurrentFilter])

    const prevClickHandler = () => {
        let newDisplayList = currentDisplayList;
        newDisplayList.pop();
        let newItem = newDisplayList[0] - 1;
        if (newItem === -1) {
            newItem = itemListLength - 1;
        }
        newDisplayList.splice(0, 0, newItem);
        itemCont.current.style.transition = '0.5s';
        itemCont.current.style.transform = `translate(${15}px)`;

        setTimeout(() => {
            itemCont.current.style.transform = `translate(${0}px)`;
        }, 500)
        setCurrentDisplayList([...newDisplayList]);
    }

    const nextClickHandler = () => {
        let newDisplayList = currentDisplayList.splice(1);
        let newItem = newDisplayList[1] + 1;
        if (newItem === itemListLength) {
            newItem = 0;
        }
        newDisplayList.push(newItem);
        itemCont.current.style.transition = '0.5s';
        itemCont.current.style.transform = `translate(-${15}px)`;

        setTimeout(() => {
            itemCont.current.style.transform = `translate(${0}px)`;
        }, 500)
        setCurrentDisplayList([...newDisplayList]);
    }

    const onCatergoryFilterHandler = (value) => {
        setCurrentFilter(value);
    }

    return (
        <>
            <Filter data={categorySet} onSelectionChange={onCatergoryFilterHandler} class={'filter'} />
            <div>
                <img className={'leftIcon'} src={LeftIcon} alt={'left'} onClick={prevClickHandler} />
            </div>
            <div>
                <img className={'rightIcon'} src={RightIcon} alt={'right'} onClick={nextClickHandler} />
            </div>
            <div className={'itemsContainer'} ref={itemCont}>
                {
                    itemListLength > 0 ? currentDisplayList.map((itemIndex, i) => {
                        let cardFooter = (
                            <div>
                                <div> {allItems[itemIndex].category}</div>
                                <div> Rs.{allItems[itemIndex].price}</div>
                            </div>
                        )
                        return (
                            <Cards key={i} header={allItems[itemIndex].name}
                                content={allItems[itemIndex].image}
                                footer={cardFooter}
                                midItem={i === 1}
                            />
                        )
                    }) : (
                            <div className={'nodata'}>
                                <img src={Cancel} alt={'Cancel'} className={'nodataImg'} />
                                <span>No Data</span>
                            </div>
                        )
                }

            </div>
        </>
    )
}

export default ItemCarousel;