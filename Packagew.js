class Packagew{
    constructor(x,y,width,height){
    var    pptions={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,pptions);

        this.x=x
        this.y=y
        this.width=width
        this.height=height
        World.add(World,this.body);
 }
 display(){
        rectMode(CENTER);
        fill("white");
         rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
};