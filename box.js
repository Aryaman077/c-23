class Box{

constructor(x,y,width,height){
    var options ={
        restitution: 0.8,
        friction:1.3,
        density:1.0
    }
this.x = x;
this.y = y;
this.width =width;
this.height = height;
this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
    World.add(world,this.body);
}

display(){
var pos = this.body.position;
var angle = this.body.angle;

push ();
translate(pos.x,pos.y);

rotate(angle);
rectMode (CENTER);
fill(255);
rect(0,0,this.width,this.height);
pop ();
}


}
