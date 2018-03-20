export default () => ({
    for (n) {
        const divisors = []
        let divisor = 2
        while (n > 1) {
            if (n % divisor === 0) {
                divisors.push(divisor)
                n = parseInt(n / divisor)
            } else {
                divisor += 1
            }
        }
        return divisors
    }
})

/**
 * @param {Number} n
 */
// WOULD WORK WITH TCO :(
// function primeFactors(n, divisor = 2) {
//     if(n === 1) {
//         return [];
//     }
//     if (n % divisor  === 0){
//         return [divisor, ...primeFactors(parseInt(n / divisor), divisor)]
//     }
//     return primeFactors(n, divisor+1);
// }