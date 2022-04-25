function isogram(str){
    str = str.toLowerCase();
  
    for (var i = 0; i < str.length; i++){
      if (str.indexOf(str.charAt(i), i + 1) >= 0){
        return false
      }
    }
    return true
  }