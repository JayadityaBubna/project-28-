class Tree{

    constructor(x,y){
    
        var op={
            isStatic:true,
            restitution:0,
            friction:1
        }
    
        this.body=Bodies.rectangle(x,y,230,380,op);
        this.height=380;
        this.width=230;

        this.image=loadImage("sprites/tree.png");
    
        World.add(world,this.body);
    
    }
    
    display(){
            
        var stonePos=this.body.position;	
        push()
        translate(stonePos.x, stonePos.y);
        fill(255,0,255)
        imageMode(CENTER);
        rectMode(CENTER);
        image(this.image, 800,450,this.width, this.height)
        pop()
    
    }
    
}
    
    















