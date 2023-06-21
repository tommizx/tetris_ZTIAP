function refreshSettings(){
    settings.draw();
    settingsButtons.map((e)=>e.draw());
    if(music.musicPlaying == 1){
        music.play();
    }
    else{
        music.stop();
    }
}
class Settings{
    constructor(ctx){
        this.ctx = ctx;
    }
    draw(){
        this.ctx.fillStyle = "lightblue";
        this.ctx.fillRect(0, 0, canvas.width, canvas.height);
        this.ctx.fillStyle = "black";
        this.ctx.font = '55px Courier bold'; 
        this.ctx.fillText("MUSIC",350,250);
        this.ctx.fillText("SOUND",350,350);
    }
}