function keyCheck(str, arr) {
    let index = 1
    for (const s of arr) {
        if (str.includes(s)) {
            return index
        }
        index++
    }
    return 0
}

module.exports = keyCheck
