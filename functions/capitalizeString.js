function CapitalizeString (str) {
    if (str.length === 0) return ''
    else if (str.length === 1) return str.toUpperCase()
    else {
        const firstLetter = str[0].toUpperCase()
        const otherLetters = str.slice(1)

        return firstLetter + otherLetters
    }
    

    
}

export default CapitalizeString