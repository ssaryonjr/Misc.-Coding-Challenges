function getMiddle(str){
    let middle = Math.floor(str.length / 2)
    return str.length % 2 === 0 
    ? str.slice(middle - 1, middle + 1)
    : str.slice(middle, middle + 1)
}

console.log(getMiddle('bich'))