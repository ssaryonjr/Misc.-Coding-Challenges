function camelize(str){
    return str
    .split('-') //Split the sentence by each word with a dash.
    .map((word,i) => i === 0 ? word : word[0].toUpperCase() + word.slice(1)) //Map iterate over each word and if the first iteration is the first word in the first index keep it the same, else grab the first letter in every other word index and make it upper case. Then concatenate the rest of the word with slice.
    .join('') // Join them back together
}

console.log(camelize('we-making-money'))