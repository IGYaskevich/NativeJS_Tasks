const text = 'Hello there thanks for trying my Kata'
const stringWithHashtagAndFirstCaps = (text) => {
    Event.preventDefault()
    if (!text || text.length > 140) {
        return false
    }
    const newString = text.trim().split(' ')
        .map(word => `${word[0].toUpperCase()}${word.slice(1)}`).join('')

    return `#${newString}`
}

console.log(stringWithHashtagAndFirstCaps(text))

