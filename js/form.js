class Form {
    constructor(){
        this.title = createElement("h2");
        this.name = createInput("Name");
        this.play = createButton("Play"); 
        this.greeting = createElement("h3"); 
        this.reset = createButton("Reset"); 
    }
    hide(){
        this.title.hide(); 
        this.name.hide(); 
        this.greeting.hide(); 
        this.play.hide(); 
    }
    display(){
        this.title.html("Car Racing Game")
        this.title.position(displayWidth/2-100,50);
        
        this.name.position(displayWidth/2-50,displayHeight/2-100); 

        this.play.position(displayWidth/2,displayHeight/2-50);
        this.play.mousePressed(()=>{
            this.name.hide();
            this.play.hide();
            player.name=this.name.value();
            playerCount=playerCount+1;
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);
            
            this.greeting.html("Welcome to the game "+player.name); 
            this.greeting.position(displayWidth/2-100,displayHeight/2);
        
        })
        this.reset.position(displayWidth-200,100); 
        this.reset.mousePressed(()=>{
            game.update(0); 
            player.updateCount(0); 
            Player.updateCarsAtEnd(0); 
        })
    }
}