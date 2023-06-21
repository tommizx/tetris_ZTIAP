var tick=0;
var delayBetweenBlocks = 200;
var mapImg = new Image()
mapImg.src = 'Images/mapa6.png';
var keyboardBlock = 1;

function refreshGame(){
    game.draw();
    mapa.draw();
    score.draw();
    gameButtons.map((e)=>e.draw());
    polozeneBloky.map((e)=>e.draw());
    fallingBlock.draw();
    if(tick%delayBetweenBlocks == 0 && tick != 0){
        fallingBlock.moveDown();
        tick = 0;
        keyboardBlock = 0;
    }
    if(music.musicPlaying == 1){
        music.play();
    }
    else{
        music.stop();
    }
    tick = tick + 1;
}
class Game{
    constructor(ctx){
        this.ctx = ctx;
    }
    draw(){
        this.ctx.fillStyle = "lightblue";
        this.ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}
class Mapa{
    constructor(ctx){
        this.ctx = ctx;
    }
    draw(){
        this.ctx.drawImage(mapImg, 325,6);
    }
}