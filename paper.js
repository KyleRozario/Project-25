class Paper {
    constructor(x,y,radius) {
    var options = {
    isStatic:false,
    restitution : 0.3,
    friction:0.5,
    density:1.2
}
    this.body = Bodies.circle(x,y,radius,options);
    this.diameter = radius*2;
    this.image = loadImage("sprites/paper.png");
    World.add(world, this.body,this.image);
}
    display() {
    var pos = this.body.position;
    push();
    ellipseMode(RADIUS);
    ellipse(pos.x,pos.y, this.diameter, this.diameter);
    pop();
    image(this.image,0,0);
}

}