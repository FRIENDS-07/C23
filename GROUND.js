class ground{

    constructor(){

        var opt = {
            isStatic : true
        }

        this.body = Bodies.rectangle(500,480,1010,30,opt);
        this.width = 1010;
        this.height = 30;
        World.add(world,this.body);

    }

    display(){
        rectMode(CENTER);
        fill("brown");
        noStroke();
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }

}