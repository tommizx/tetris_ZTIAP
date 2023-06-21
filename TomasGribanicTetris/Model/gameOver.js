function refreshGameOver(){
    gameOver.draw();
    gameOverButtons.map((e)=>e.draw());
    if(music.musicPlaying == 1){
        music.play();
    }
    else{
        music.stop();
    }
}
class GameOver{
    constructor(ctx){
        this.ctx = ctx;
    }
    draw(){
        this.ctx.fillStyle = "lightblue";
        this.ctx.fillRect(0, 0, canvas.width, canvas.height);
        this.ctx.fillStyle = "black";
        this.ctx.font = '45px Courier bold'; 
        this.ctx.fillText("YOU LOST",305,240);
        this.ctx.fillText("PLAY AGAIN?",280,350);
    }
}