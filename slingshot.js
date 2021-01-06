class Slingshot {
    constructor(bodyA, pointB){
        var option = {
            bodyA: bodyA,
            pointB: pointB,
            stifness: 0.04,
            length:10,
        }
        this.slingshot= Constraint.create(option);
        World.add(world, this.slingshot);
        this.pointB=pointB;
    }
    fly(){
        this.slingshot.bodyA = null;
    }

    display(){
        if(this.slingshot.bodyA){
            var pointA = this.slingshot.bodyA.position;
            var pointB = this.pointB;
            push();
        
        var pointA = this.slingshot.bodyA.position;
        strokeWeight(4);
        line (pointA.x, pointA.y, this.pointB.x, this.pointB.y);
        }
    }
}