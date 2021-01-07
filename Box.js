class Box {
constructor() {
    var options = {
        restitution: 1 
    }
    this.body = bodies.rectangle 200,100,50,50, options); 
    World.add(world,this.body)
}
display()
}