class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.001,
            length: 10
        }
        this.chain = Matter.Constraint.create(options);
        World.add(world, this.chain);
        console.log("stiffness")
    }
    
    
    display(){
        if(this.chain.bodyA)
        {
            var pointA = this.chain.bodyA.position;
            var pointB = this.chain.pointB;
    
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        
    }
    
}