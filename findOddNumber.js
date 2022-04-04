function findOdd(num){
    return num.find(number => num.filter(num => number == num).length % 2)
}
console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]))