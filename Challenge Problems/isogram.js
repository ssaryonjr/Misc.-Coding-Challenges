function isogram(str){
    str = str.toLowerCase(); //grab the passed in string and brought it all down to lower case.
  
    for (let i = 0; i < str.length; i++){ //Iterate through every letter in the string.
      if(str.indexOf(str.charAt([i]), i + 1) >= 0){ //Using indexOf to look for the first letter of the string and then see if any other occurence of that same letter is matched. If it is found it will return 0 or greater. If it's not found it will return -1.
        return console.log('found match') //If there is a matching it will said found.
      }
    }
    return console.log('didnt find') //Will say not found.
  }
  
  
  isogram('helo')