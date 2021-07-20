class Brick{
    constructor(x,y,w,h){
       
        this.brick = Bodies.rectangle(x,y,w,h,{isStatic:true});
        World.add(world,this.brick);
        this.w = w;
        this.h=h;


    }

    display(){
        fill("skyblue")
        rectMode(CENTER);
        rect(this.brick.position.x,this.brick.position.y,this.w,this.h);
    }
}