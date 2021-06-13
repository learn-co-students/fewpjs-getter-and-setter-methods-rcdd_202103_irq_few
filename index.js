// Add your Circle class here

const PI = Math.PI

class Circle {
  constructor( radius ) {
    this.radius = radius;
  }

  set diameter( diameter ) {
    this.radius = diameter / 2
  }
  
  get diameter() {
    return this.radius * 2
  }
  
  set circumference( circumference ) {
      this.radius = circumference / ( PI * 2 )
  }
  
  get circumference() {
    return ( this.radius * 2 ) * PI
  }
  
  set area( area ) {
      this.radius = Math.sqrt( area / PI )
  }
  
  get area() {
    return PI * ( this.radius * this.radius )
  }
}