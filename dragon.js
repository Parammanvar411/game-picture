class Dragon{
    constructor(x,y,r)
      {
          var options = { 
        density: 1, 
        frictionAir: 1
      };
          this.x=x;
          this.y=y;
          this.r=r;
          this.image=loadImage("dragon1.gif");
          this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
          World.add(world, this.body);
  
      }
      display()
      {
              
              var dragonPos=this.body.position;		
              push()
              translate(dragonPos.x, dragonPos.y-100);
              rectMode(CENTER)
              fill(255,0,255)
              imageMode(CENTER);
              image(this.image, 0,0,this.r+150, this.r)
              pop()
              
      }
  }
  