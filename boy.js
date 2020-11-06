class Boy{

    constructor(x,y,width,height){

        var op={
            isStatic:true
        }

        this.body=Bodies.rectangle(x,y,width,height,op);
        this.height=height;
        this.width=width;

        this.image=loadImage("sprites/boy.png");

        World.add(world,this.body);

       

    }

    display(){
        var mangoPos=this.body.position;	
		push()
		translate(mangoPos.x, mangoPos.y);
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,this.width, this.height)
		pop()


    }


}