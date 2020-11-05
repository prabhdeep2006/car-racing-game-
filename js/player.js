class Player{
    constructor(){
        this.name=null;
        this.index=null; 
        this.distance=0;
        this.rank=null;
    }
    update(){
        var playerIndex="players/player"+this.index;
        database.ref(playerIndex).set({name:this.name,distance:this.distance})
    }
    updateCount(count){
        database.ref("/").update({playerCount:count});
    }
    getCount(){
        var playerCountRef=database.ref('playerCount');
        playerCountRef.on("value",(data)=>{
            playerCount=data.val();
        })

    }
   static getPlayerInfo(){
       var playerInfoRef = database.ref('players'); 
       playerInfoRef.on("value",(data)=>{
           allPlayers = data.val(); 
       })
   }
    getCarsAtEnd(){
        var CarsAtEndREf= database.ref('CarsAtEnd'); 
        CarsAtEndREf.on("value",(data)=>{
            this.rank=data.val(); 
        })
    }
    static updateCarsAtEnd(rank){
        database.ref('/').update({CarsAtEnd:rank});
    }
}