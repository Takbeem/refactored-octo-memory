class Form {
    constructor() {
        this.input = createInput('Name')
        this.button = createButton('Play')
        this.greeting = createElement('h2')
        this.title = createElement('h3')
        this.reset = createButton('Reset')
    } 
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    } 
    display() {
        this.title.html('RAINING COWS');
        this.title.position(500,100);
        this.title.style('font-size','80px');
        this.input.position(600,200);
        this.input.style('width','200px');
        this.input.style('height','20px');
        this.button.position(600,200);
        this.button.style('background','black');
        this.reset.position(200,400);
        this.reset.style('width','100px');
        this.reset.style('height','10px');

        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name = this.input.value()
                playerCount += 1
                player.index = playerCount
                player.update()
                    player.updateCount(playerCount)
                    this.greeting.html('welcome'+player.name)
                    this.greeting.position(400,250)
                    this.greeting.style('font-size','100px')
                
            
        })
        this.reset.mousePressed(()=>{
            player.updateCount(0)
            game.update(0)
            var playerInfoRef = database.ref('players')
            playerInfoRef.remove()
        })
    }
}