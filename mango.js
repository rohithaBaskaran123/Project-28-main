class Mango {
    constructor(x,y,height,width){
     var options = {
       isStatic : true,
         'restituition':0.8,
         'friction':1.0,
         'density':1.0,
     }
        this.image = loadImage("mango.png");
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var ps =this.body.position;
      imageMode (CENTER);
      image(this.image, ps.x, ps.y,30,30 );
      //this.image = loadImage("stone.png");
  //this.body.position.x = mouseX;
  //this.body.position.y = mouseY;
  }
  }