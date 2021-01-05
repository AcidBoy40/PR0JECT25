class dustbin
{
    constructor(x,y,width,height)
    {
        var options={
            isStatic:true,
        }

        this.x = x,
        this.y = y;
        this.height = height;
        this.width = width;
        this.body = Bodies.rectangle(this.x, this.y, this.height, this.width, options);
        this.image = loadImage("dustbin.png");
        World.add(world, this.body);
    }

    display()
    {
        var dustbinpos = this.body.position;

        push();
        rectMode(CENTER);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        // rect(this.x,this.y,this.width, this.height);
        // fill("black");
        pop();

    }
}