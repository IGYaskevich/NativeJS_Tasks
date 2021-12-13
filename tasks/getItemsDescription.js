const arrayItems = [1, 'Hello', true]
const getItemsDescription = (listItems) => {
    return listItems.map((item, index) => ({
        ElementValue: item,
        ElementType: typeof item,
        ElementIndex: index
    }))
}

console.log('Task3:', getItemsDescription(arrayItems))