function resetGame(){
    score.value = 0;
    score.level = 1;
    tick = 0;
    polozeneBloky = [];
    mapGrid = setupGrid();
    getBlock();
    delayBetweenBlocks = 200;
}

var fallingBlockGhost;

function getBlock(){
    let i = Math.floor(Math.random()*7);
    var allBlocks= [new Blok(ctx,blokL,[[1,1,1],
                                        [1,0,0]]),
                    new Blok(ctx,blokJ,[[1,1,1],
                                        [0,0,1]]),
                    new Blok(ctx,blokI,[[0,0,0,0],[1,1,1,1],[0,0,0,0],[0,0,0,0]]),

                    new Blok(ctx,blokT,[[1,1,1],
                                        [0,1,0]]),
                    new Blok(ctx,blokO,[[1,1],
                                        [1,1]]),
                    new Blok(ctx,blokS,[[0,1,1],
                                        [1,1,0]]),
                    new Blok(ctx,blokZ,[[1,1,0],
                                        [0,1,1]])
                    ];
    fallingBlock = allBlocks[i];
    fallingBlockGhost = new Blok(fallingBlock.ctx, fallingBlock.name, fallingBlock.originalMatrix);
    if(fallingBlock.name == blokI){
        fallingBlock.positionY = fallingBlock.positionY - 27;
    }    
    setActiveGrid();
    keyboardBlock = 1;
    tick = 0;
}