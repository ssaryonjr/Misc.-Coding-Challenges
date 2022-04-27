function Circle(radius){
  radius, 
  this.draw = function(){
    console.log('draw it')
  }
}


let smallCircle = new Circle(10)

smallCircle = {x: 1};