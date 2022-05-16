function isogram(str){
    str = str.toLowerCase()
    for (let i = 0; i < str.length; i++){
        if(str.indexOf(str.charAt(i), i + 1) >= 0){
            return 'characters repeat'
        }
    }
    return 'no repeated characters'
}

console.log(isogram('sam'))
