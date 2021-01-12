class ground
{
    constructor(x,y,w,h)
    {
        var options=
        {
            isStatic:true
        }
        this.width=w;
        this.height=h;
        this.body=Matter.Bodies.rectangle(x,y,this.width,this.height,options);
        Matter.World.add(world,this.body);
    }
    display()
    {
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}