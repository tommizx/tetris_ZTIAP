var arrowLeft = new Image()
arrowLeft.src = 'Images/arrowLeft.png';

var arrowRight = new Image()
arrowRight.src = 'Images/arrowRight.png';

var arrowUp = new Image()
arrowUp.src = 'Images/arrowUp.png';

var arrowDown = new Image()
arrowDown.src = 'Images/arrowDown.png';

function refreshHowToPlay(){
    howToPlay.draw();
    howToPlayButtons.map((e)=>e.draw());
    if(music.musicPlaying == 1){
        music.play();
    }
    else{
        music.stop();
    }
}
class HowToPlay{
    constructor(ctx){
        this.ctx = ctx;
    }
    draw(){
        this.ctx.fillStyle = "lightblue";
        this.ctx.fillRect(0, 0, canvas.width, canvas.height);
        this.ctx.fillStyle = "black";
        this.ctx.font = '25px Courier bold'; 
        this.ctx.fillText("V hre TETRIS navigujete padajúce bloky tak, aby ste zaplnili celý riadok.",120,50);
        this.ctx.fillText("V takom prípade sa naplneného riadka zbavíte, a všetky bloky nad ním sa",120,100);
        this.ctx.fillText("posunú o riadok nižšie.",120,150);
        this.ctx.fillText("OVLÁDANIE :",120,270);
        this.ctx.drawImage(arrowLeft,120,320);
        this.ctx.drawImage(arrowRight,120,470);
        this.ctx.drawImage(arrowUp,620,320);
        this.ctx.drawImage(arrowDown,620,470);
        this.ctx.fillText("- posunie padajúci blok doľava",180,350);
        this.ctx.fillText("- posunie padajúci blok doprava",180,500);
        this.ctx.fillText("- otočí padajúci blok",680,350);
        this.ctx.fillText("- zrýchli padanie bloku",680,500);
    }
}