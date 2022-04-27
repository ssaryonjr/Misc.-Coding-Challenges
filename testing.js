function findX(arr){
  let coordinates = [];

  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
      if (arr[i][j] == 'x'){
        coordinates.push([i,j])
      }
    }
  }
  return coordinates.length == 1 ? coordinates[0] : []
}


console.log(findX([
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'x', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o']
]))
