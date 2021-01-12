class ball
{
    constructor(x,y,w)
    {
        var options=
        {
            isStatic:false,
            restitution:0.3,
            friction:0.2,
             density:1.2
        }

        this.ing=loadImage("paper.png");
        this.width=w;
        this.body=Matter.Bodies.circle(x,y,this.width,options);
        Matter.World.add(world,this.body);
    }
    display()
    {
        imageMode(CENTER);
        image(this.ing,this.body.position.x,this.body.position.y,this.width*2,this.width*2);
       
    }
}