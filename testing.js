function matchWord(arr){
    sentence = ''; //Created an empty sentence varaible that will concat to a string.
    for(let i = 0; i < arr.length; i++){ //Created a double for loop to grab the rows and cols.
        for (let j = 0; j < arr[i].length; j++){
            sentence += arr[j][i] //Grab the first letters in each of the array's row and concatenate it into a sentence/word
        }
        sentence += " " //After the first loop is iterated by grabbing the first word we use this variable so it adds a space between the next word when it gets re-iterated again. 
    }
    return sentence;
}


console.table(matchWord([
    ['J','L','L','M'],
    ['u','i','i','a'],
    ['s','v','f','n'],
    ['t','e','e','']
    ]))