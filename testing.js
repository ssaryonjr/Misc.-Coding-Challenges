function test (arr){
    let sentence = '';
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr[i].length; j++){
            sentence += arr[j][i]
        }
        sentence+= ' '
    }
    return sentence.trim()
}

console.table(test(
[['J','L','L','M']
,['u','i','i','a']
,['s','v','f','n']
,['t','e','e','']]))