class Bird {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0

      }
      
      this.body = Bodies.rectangle(x, y, 20, 20, options);
      this.width = 20;
      this.height = 20;
      
      World.add(world, this.body);
    }
    display(){

      var pos =this.body.position;
     // pos.x=mouseX
      //pos.y=mouseY
      
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
        fill("red");
      rect(0, 0, this.width, this.height);
      pop();
    }
  }
  