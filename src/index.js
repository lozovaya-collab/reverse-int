module.exports = function reverse(n) {
    let N = Math.abs(n)
    let arrayN = String(N).split('').reverse().join('')
    return Number(arrayN)
}
