class Score{
    constructor(ctx){
        this.ctx = ctx;
        this.value = 0;
        this.level = 1;
        this.counter = 0;
    }
    draw(){        
        this.ctx.fillStyle = "antiquewhite";
        this.ctx.fillRect(45,215,137,35);
        this.ctx.strokeStyle = "darkblue";
        this.ctx.strokeRect(45,215,137,35);
        this.ctx.fillStyle = "black";
        this.ctx.font = '30px Courier bold';        
        this.ctx.fillText(this.value, 55, 243);
        this.ctx.font = '45px Courier bold';
        this.ctx.fillText("SKORE",40,200);
        this.ctx.fillStyle = "antiquewhite";
        this.ctx.fillRect(45,315,137,35);
        this.ctx.strokeStyle = "darkblue";
        this.ctx.strokeRect(45,315,137,35);
        this.ctx.fillStyle = "black";
        this.ctx.font = '30px Courier bold';        
        this.ctx.fillText(this.level, 55, 343);        
        this.ctx.font = '45px Courier bold';
        this.ctx.fillText("LEVEL",40,300);
    }
    priratajScore(){
        this.value = this.value + 1000;
        this.counter = this.counter + 1000;
        if(this.counter==5000){
            delayBetweenBlocks = delayBetweenBlocks - 30;
            this.level = this.level + 1;
            this.counter = 0;
        }
    }
}