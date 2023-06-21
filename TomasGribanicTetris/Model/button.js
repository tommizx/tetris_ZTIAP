var pointerImg=new Image();
pointerImg.src= 'Images/pointer2.png';

var musicIcon = new Image();
musicIcon.src= 'Images/hudba.png';

var backIcon = new Image();
backIcon.src = 'Images/sipkaDozadu.png';

var sipkaDopredu = new Image();
sipkaDopredu.src = 'Images/sipkaDopredu.png';

var crossIcon = new Image();
crossIcon.src = 'Images/crossIcon.png';

var settingsIcon = new Image();
settingsIcon.src = 'Images/settingsIcon.png';

var soundIcon = new Image();
soundIcon.src= 'Images/soundIcon.png';

class Button{
    constructor(ctx,poziciaX,poziciaY,name,type){
        this.ctx = ctx;
        this.poziciaX = poziciaX;
        this.poziciaY = poziciaY;       
        this.name = name;
        this.koniecX = this.poziciaX + (31*(this.name.length));
        this.koniecY = this.poziciaY - 35;
        this.color = "grey";
        this.hoveringButton = 0;
        this.type = type;
    }
    
    draw(){
        if(this.type == "text"){
            this.ctx.fillStyle = this.color;
            this.ctx.font = '45px Courier bold';        
            this.ctx.fillText(this.name, this.poziciaX, this.poziciaY);
            if(this.hoveringButton == 1){
                this.ctx.drawImage(pointerImg,this.poziciaX-60, this.poziciaY-42);
            }
        }
        else if(this.type == "img"){            
            this.koniecX = this.poziciaX + 65;
            this.koniecY = this.poziciaY + 65;
            if(this.name == "HUDBA"){
                this.ctx.drawImage(musicIcon,this.poziciaX,this.poziciaY);
            }
            else if(this.name == "BACKICON"){
                this.ctx.drawImage(backIcon,this.poziciaX,this.poziciaY);
            }
            else if(this.name == "PLAY AGAIN"){
                this.ctx.drawImage(sipkaDopredu,this.poziciaX,this.poziciaY);
            }
            else if(this.name == "BACK TO MAIN MENU"){
                this.ctx.drawImage(crossIcon,this.poziciaX,this.poziciaY);
            }
            else if(this.name == "SETTINGS ICON"){
                this.ctx.drawImage(settingsIcon,this.poziciaX,this.poziciaY);
            }
            else if(this.name == "ZVUK"){
                this.ctx.drawImage(soundIcon,this.poziciaX,this.poziciaY);
            }
        }
    }
    getPoziciaX(){
        return this.poziciaX;
    }
    getPoziciaY(){
        return this.poziciaY;
    }
    getKoniecX(){
        return this.koniecX;
    }
    getKoniecY(){
        return this.koniecY;
    }
    getName(){
        return this.name;
    }
    getType(){
        return this.type;
    }
    clickedAction(buttonName){
        if(buttonName == "SETTINGS"){
            this.ctx.clearRect(0,0,canvas.width,canvas.height)
            document.body.style.cursor = "default";
            cancelAnimationFrame(requestForCancelFrameRefresh);
            scena = 2;
            settingLoop();
        }
        else if(buttonName == "BACK"){
            this.ctx.clearRect(0,0,canvas.width,canvas.height)
            document.body.style.cursor = "default";
            cancelAnimationFrame(requestForCancelFrameRefresh);
            scena = 1;
            mainLoop();
        }
        else if(buttonName == "HUDBA"){
            if(music.musicPlaying == 1){
                music.musicPlaying = 0;
            }
            else{
                music.musicPlaying = 1;
            }
        }
        else if(buttonName == "ZVUK"){
            if(soundFullRow.musicPlaying == 1){
                soundFullRow.musicPlaying = 0;
            }
            else{
                soundFullRow.musicPlaying = 1;
            }
            if(soundBlockPlace.musicPlaying == 1){
                soundBlockPlace.musicPlaying = 0;
            }
            else{
                soundBlockPlace.musicPlaying = 1;
            }
            console.log(soundBlockPlace.musicPlaying);
        }
        else if(buttonName == "START GAME"){
            this.ctx.clearRect(0,0,canvas.width,canvas.height)
            document.body.style.cursor = "default";
            cancelAnimationFrame(requestForCancelFrameRefresh);
            scena = 3;
            resetGame();
            gameLoop();
        }
        else if(buttonName == "BACKICON"){
            this.ctx.clearRect(0,0,canvas.width,canvas.height)
            document.body.style.cursor = "default";
            cancelAnimationFrame(requestForCancelFrameRefresh);
            scena = 1;
            mainLoop();
        }
        else if(buttonName == "PLAY AGAIN"){
            this.ctx.clearRect(0,0,canvas.width,canvas.height)
            document.body.style.cursor = "default";
            cancelAnimationFrame(requestForCancelFrameRefresh);
            scena = 3;
            resetGame();
            gameLoop();
        }
        else if(buttonName == "BACK TO MAIN MENU"){
            this.ctx.clearRect(0,0,canvas.width,canvas.height);
            document.body.style.cursor = "default";
            cancelAnimationFrame(requestForCancelFrameRefresh);
            scena = 1;
            mainLoop();
        }
        else if(buttonName == "SETTINGS ICON"){
            this.ctx.clearRect(0,0,canvas.width,canvas.height)
            document.body.style.cursor = "default";
            cancelAnimationFrame(requestForCancelFrameRefresh);
            scena = 2;
            settingLoop();
        }
        else if(buttonName == "HOW TO PLAY"){
            this.ctx.clearRect(0,0,canvas.width,canvas.height)
            document.body.style.cursor = "default";
            cancelAnimationFrame(requestForCancelFrameRefresh);
            scena = 4;
            howToPlayLoop();
        }
    }
    hoverAction(){
        this.hoveringButton = 1;
        document.body.style.cursor = "pointer";
        this.color = "black";
    }
}