class Stone{

    constructor(x,y){

        var op={

            isStatic:false,
            restitution:0,
            friction:1

        }

        this.body=Bodies.rectangle(x,y,60,60,op);
        this.width=60;
        this.height=60;

        this.image=loadImage("sprites/stone.png")
        
        World.add(world,this.body);

    }

    display(){

        var stonePos=this.body.position;	
		push()
		translate(stonePos.x, stonePos.y);
		fill(255,0,255)
		imageMode(CENTER);
		rectMode(CENTER);
		image(this.image, 0,0,this.width, this.height)
		pop()




    }















}