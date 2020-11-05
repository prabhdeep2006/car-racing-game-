class Game {
    constructor(){

    }
    getState(){
       var  gameStateRef=database.ref('gameState');
       gameStateRef.on("value", function(data){
           gameState=data.val(); 
       })
    }
    update(state){
        database.ref('/').update({
            gameState:state
        }); 
       
    }
  async  start(){
      if(gameState===0){
          player = new Player(); 
        var playerCountRef = await database.ref('playerCount').once("value"); 
    if(playerCountRef.exists()){
        playerCount=playerCountRef.val(); 
        player.getCount(); 
    }
       form = new Form(); 
       form.display(); 
      }
     car1 = createSprite(100,300); 
     car2 = createSprite(300,300); 
     car3 = createSprite(500,300); 
     car4 = createSprite(700,300);
     cars = [car1,car2,car3,car4]; 


     car1.addImage(c1); 
     car2.addImage(c2); 
     car3.addImage(c3); 
     car4.addImage(c4); 
  }
  play(){
      form.hide(); 
    Player.getPlayerInfo();
    player.getCarsAtEnd();

    if(allPlayers !=undefined){
        background(ground); 
        image(track,0,-displayHeight*4,displayWidth,displayHeight*5);
        var index = 0; 
        var x = 200; 
        var y ;

        for(var plr in allPlayers){
            index=index+1; 
            x = x+225; 
            y = displayHeight-allPlayers[plr].distance; 
            cars[index-1].x=x; 
            cars[index-1].y=y; 

            if(index===player.index){
                camera.position.x = displayWidth/2; 
                camera.position.y = cars[index-1].y; 
            }
        }
    }
    if(keyDown(UP_ARROW) && player.index!=null){
        player.distance = player.distance+10; 
        console.log(player.distance); 
                player.update(); 
    }
    if(player.distance===4120){
        //gameState = 2; 
        //game.update(2); 
        player.rank = player.rank+1; 
        Player.updateCarsAtEnd(player.rank); 
    }
    if(player.distance>=4120){
        gameState = 2; 
        textSize(30); 
        stroke("black"); 
        text("Your rank is "+player.rank,displayWidth/2,y-100); 

    }
    
      drawSprites(); 
  }
  end(){ 
      game.update(2); 
  }
}