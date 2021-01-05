class Paper
{
    constructor(x,y,r)
    {
        var options={
            // isStatic:false,
            restitution:0.3,
            friction:10,
            density:0.21
        }

        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(x, y, r/2, options);
        this.image = loadImage("paper.png");
        World.add(world, this.body);

    }

    display(){
    
    var paperpos = this.body.position;
    push();
    translate(paperpos.x, paperpos.y);
    rectMode(CENTER);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    // ellipse(0, 0, this.r, this.r);
    pop();
    }
}