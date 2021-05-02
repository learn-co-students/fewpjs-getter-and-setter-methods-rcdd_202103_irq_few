
// Add your Circle class here
class Circle{
  constructor(radius){
    this.radius=radius;
    this.pi = 3.14;
  }
  set diameter(radius){
    this.radius = radius/2;
  }
  get diameter(){
    return 2 * this.radius;
  }
  set circumference(circumference){
    this.radius = circumference/(2*this.pi);
  }
  get circumference(){
    return 2 * this.pi * this.radius;
  }
  set area(radius){
    this.radius=radius;
  }
  get area(){
    return this.pi * this.radius * this.radius;
  }
}

const circle= new Circle(6);
circle.diameter();

const circle1= new Circle(9);
circle1.diameter();

circle.circumference();

circle.area();
