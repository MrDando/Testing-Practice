function arrayAnalysis(arr) {
    const average = (arr.reduce((a, b) => a + b, 0)) / arr.length
    const min = Math.min(...arr)
    const max = Math.max(...arr)
    const length = arr.length

    const analysis = {
        average: average,
        min: min,
        max: max,
        length: length,
    }

    return analysis

}

export default arrayAnalysis