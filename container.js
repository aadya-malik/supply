class Container{

    constructor(x,y,width,height){
var opitions={
    isStatic: true,
}
this.height = height
this.width = width
this.body = Bodies.rectangle(x,y,width,height,opitions);
World.add(world, this.body);

    
}
display(){
    push()
fill("blue")
rect(this.body.position.x,this.body.position.y,this.width,this.height);
pop()
}
}