export const getAllUniqueCategories = (ItemList) => {
    let catergoryArr = ItemList.map(item => {
        return item.category;
    })
    catergoryArr.splice(0, 0, "All");
    const categorySet = new Set(catergoryArr);
    return categorySet;
}

export const getFilterItems = (ItemList, currentFilter) => {
    if (!currentFilter || currentFilter.indexOf('All') > -1)
        return ItemList;
    return ItemList.filter(item => item.category === currentFilter);
}