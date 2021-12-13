const cutString = (text, numberLength) => {
    if (text.length > numberLength) {
        return `${text.trim().slice(0, numberLength - 3)}...`
    }
    return text
}
console.log(cutString('Hellooo', 5))
