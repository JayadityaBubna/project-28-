class Mango{

    constructor(x,y){

        var op={
            isStatic:true,
            restitution:0,
            friction:1
        }

        this.body=Bodies.rectangle(x,y,30,30,op);
        this.height=30;
        this.width=30;

        this.image=loadImage("sprites/mango.png")

        World.add(world,this.body);

        

    }

    display(){
    
        var mangoPos=this.body.position;	
		push()
		translate(mangoPos.x, mangoPos.y);
		fill(255,0,255);
		imageMode(CENTER);
		rectMode(CENTER);
		image(this.image, 0,0,this.width, this.height);
		pop()



    }

}

