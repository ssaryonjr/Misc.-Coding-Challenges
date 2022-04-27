function sqr(arr){
    return arr.map(num => num * num)
  }
  
  
  console.log(sqr([1,2,3,4,5]))


  function reverse(str){
    return str
    .split('')
    .reverse()
    .join('')
  }
  
  console.log(reverse('hello'))