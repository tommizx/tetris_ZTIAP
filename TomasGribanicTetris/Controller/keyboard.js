var keys = {};

window.onkeydown = function(event) {
    keys[event.keyCode] = true;
    if(keyboardBlock == 0){
        if(event.keyCode == 37){
            fallingBlock.moveLeft();
        }
        if(event.keyCode == 39){
            fallingBlock.moveRight();
        }
        if(event.keyCode == 38){
            fallingBlock.rotateBlock();
        }
        if(event.keyCode == 40){
            fallingBlock.moveDown();
        }
    }
}