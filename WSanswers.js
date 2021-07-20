/* Write a program that prints the numbers from 1 to 100. But for multiples of three print “Tec” instead of the number and for the multiples of five print “tona”.
For numbers which are multiples of both three and five print “Tectona”. */

const check3and5 = (int) => {
    if (int % 3 === 0 && int % 5 === 0) {
        return true
    }
}

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        if (check3and5(i)) {
            console.log('Tectona')
        } else console.log('Tec')
    } else if (i % 5 === 0) {
        console.log('tona')
    } else console.log(i)
}


/* Extend the "Array" class in Javascript with a new method that calculates and returns the
sum of the Array's items (you can assume all of the items are numbers). */

const arr1 = [1, 2, 3, 4, 5]
const arr2 = [3, 4, 5]

Array.prototype.mySumCalculator = function () {
    let sum = 0
    for (let i = 0; i < this.length; i++) {
        sum += this[i]
    }
    return sum
}

console.log(arr1.mySumCalculator());
console.log(arr2.mySumCalculator());