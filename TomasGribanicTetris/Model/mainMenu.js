function refreshMainMenu(){
    menu.draw();
    menuButtons.map((e)=>e.draw());
    if(music.musicPlaying == 1){
        music.play();
    }
    else{
        music.stop();
    }
}
class Menu{
    constructor(ctx){
        this.ctx = ctx;
    }
    draw(){
        this.ctx.fillStyle = "lightblue";
        this.ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}