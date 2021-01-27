class ground{
    constructor(x,y,width,height){
       var opt={
           isStatic:true
           
       }
        this.body=Bodies.rectangle(x,y,width,height,opt)
        World.add(world,this.body)
        this.width=width
        this.height=height
        
    }

    display(){
        rectMode(CENTER)
        fill("yellow")
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
       
    }
}