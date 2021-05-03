// Add your Circle class here
class Circle {
  constructor(radius){
    this.radius = radius;
    this.pi = Math.PI;
  }
  
  get diameter(){
    return this.radius * 2
  }
  get circumference(){
    return this.pi * this.radius*2
  }
  get area(){
    return this.pi * Math.pow(this.radius,2)
  }
  
  set diameter(dia){
    return this.radius = dia / 2
  }
  set circumference(circ){
    return this.radius = (circ/this.pi)/2
  }

}

let circle = new Circle(6)
circle.diameter;
circle.circumference;
circle.area
circle.diameter = 18;
circle.circumference =15;



