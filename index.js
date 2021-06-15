// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius=radius;
    this.pi= 3.14;
                    }
    set diameter(radius){
      this.radius = radius/2;
                  }
    get diameter(){
      return  2 * this.radius;
                }
    set circumference(circumference){
     this.radius= circumference / (2 * this.pi)
                    }
      get circumference(){
      return ( 2  * this.radius)* this.pi ;
                       }
      set area(area){
      this.radius = Math.sqrt(area/this.pi)
                           }
      get area(){
        return this.pi * this.radius * this.radius;
                  }
            }
 