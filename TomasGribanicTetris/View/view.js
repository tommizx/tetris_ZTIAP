function mainLoop(){
    canvas.onclick = mouseClick;
    canvas.onmousemove = cursorMove;
    refreshMainMenu();
    requestForCancelFrameRefresh = requestAnimationFrame(mainLoop);
}
function settingLoop(){
    canvas.onclick = mouseClick;
    canvas.onmousemove = cursorMove;
    refreshSettings();
    requestForCancelFrameRefresh = requestAnimationFrame(settingLoop);
}
function gameLoop(){
    canvas.onclick = mouseClick;
    canvas.onmousemove = cursorMove;
    refreshGame();
    requestForCancelFrameRefresh = requestAnimationFrame(gameLoop);
}
function gameOverLoop(){
    canvas.onclick = mouseClick;
    canvas.onmousemove = cursorMove;
    refreshGameOver();
    requestForCancelFrameRefresh = requestAnimationFrame(gameOverLoop);
}
function howToPlayLoop(){
    canvas.onclick = mouseClick;
    canvas.onmousemove = cursorMove;
    refreshHowToPlay();
    requestForCancelFrameRefresh = requestAnimationFrame(howToPlayLoop);
}