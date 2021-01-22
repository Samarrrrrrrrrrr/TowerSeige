class Polygon {

    constructor(x,y,width,height){
    
    
    var options={
        restitution:0.4,
        isStatic:false,
    }
this.body=Bodies.rectangle(x,y,width/2,height/2,options);
World.add(world,this.body);

this.image=loadImage("polygon.png");
this.width=width;
this.height=height;

}

display(){

push ();
translate(this.body.position.x,this.body.position.y);
rotate (this.body.angle);
image (this.image,0,0,this.width,this.height);
pop ();

}

}