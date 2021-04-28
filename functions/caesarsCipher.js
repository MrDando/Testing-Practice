function caesarsCipher(plaintext, key) {
    const plainArray = plaintext.split("")

    const cipherArray = plainArray.map(letter => {
        const ASCII = letter.charCodeAt()

        if (ASCII >= 65 && ASCII <= 90) {
            return String.fromCharCode((ASCII + key - 65) % 26 + 65)
        } else if (ASCII >= 97 && ASCII <= 122) {
            return String.fromCharCode((ASCII + key - 97) % 26 + 97)
        } else {
            return String.fromCharCode(ASCII)
        }
    })

    return cipherArray.join("")

}

export default caesarsCipher