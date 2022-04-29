function isogram (str){
    //Create a for loop that iterates every character in the string.
    //Create an If statement that checks the grabs the first index of the string and iterates through the rest of the string to check if it matches.
    //If a match is made console.log else console.log not existing.

    str = str.toLowerCase()

    for (let i = 0; i < str.length; i++){
        if (str.indexOf(str.charAt(i), i + 1) >= 0){
           return console.log('found it')
        }
    }
    return false
}

console.log(isogram('Mellow'))