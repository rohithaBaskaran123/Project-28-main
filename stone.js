class Stone {
    constructor(x,y,width,height){
      this.image = loadImage("stone.png");
      var options = {
          isStatic:false,
          restituition: 0,
          friction: 1,
          densty: 1.2,
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
        var ps =this.body.position;
        //imageMode (CENTER);
        image(this.image, ps.x, ps.y,30,30 );
        //this.image = loadImage("stone.png");
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    }
  }