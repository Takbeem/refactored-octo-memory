class Game {
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState')
        gameStateRef.on('value',(data)=>{
            gameState = data.val()
        })
        
    }
    update(state) {
        database.ref('/').update({
            gameState: state
        })
    }
    
async start() {
    if(gameState === 0) {
        player = new Player()
        var PlayerCountRef = await database.ref('playerCount').once('value')
        if(PlayerCountRef.exists()) {
playerCount = playerCountRef.val()
player.getCount()
        }
        form = new Form()
        form.display()
    }
    
}
}