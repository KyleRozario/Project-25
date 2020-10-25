class Dustbin {
        constructor(x,y,width,height) {
        var options = {
        isStatic: true
}
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/dustbin.png");
        World.add(world, this.body);
}
      display(){
        var pos =this.body.position;
        push();
        rectMode(CENTER);
        strokeWeight(4);
        fill(255);
        rect(pos.x,pos.y ,this.width, this.height);
        pop();
        image(this.image,958,125,235,210);
}

}



