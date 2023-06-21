var mapGrid = setupGrid();
var cisloPlnehoRiadku;
var fallingBlockGhost;


function setupGrid(){
    var mapGrid = [];

    for(let i = 0; i<24; i++){
        for(let j = 0; j<12; j++){
            mapGrid[i] = [];
        }
    }


    for(let i = 0; i<24; i++){
        for(let j = 0; j<12; j++){
            if(i == 1 || j == 0 || i==22 || j == 11){
                mapGrid[i][j] = 1;
            }
            else{
                mapGrid[i][j] = 0;            
            }
        }
    } 
    return mapGrid;
}

function getFallingBlockX(){
    let pX = (fallingBlock.positionX - 352) / 27 + 1;
    return pX;
}

function getFallingBlockY(){
    let pY = (fallingBlock.positionY - 32) / 27 + 2;
    return pY;
}

function setInactiveGrid(){
    var riadky = fallingBlock.getPocetRiadkov();
    var stlpce = fallingBlock.getPocetStlpcov();

    var fallingBlockStartX = getFallingBlockX();
    var fallingBlockStartY = getFallingBlockY();

    for(let i = fallingBlockStartY; i<(riadky+fallingBlockStartY); i++){
        for(let j = fallingBlockStartX; j<(stlpce+fallingBlockStartX); j++){
            if(fallingBlock.drawMatrix[i-fallingBlockStartY][j-fallingBlockStartX] == 1){
                mapGrid[i][j] = mapGrid[i][j] - 1;
            }
        }
    }
}

function setActiveGrid(){
    var riadky = fallingBlock.getPocetRiadkov();
    var stlpce = fallingBlock.getPocetStlpcov();

    var fallingBlockStartX = getFallingBlockX();
    var fallingBlockStartY = getFallingBlockY();

    for(let i = fallingBlockStartY; i<(riadky+fallingBlockStartY); i++){
        for(let j = fallingBlockStartX; j<(stlpce+fallingBlockStartX); j++){
            if(fallingBlock.drawMatrix[i-fallingBlockStartY][j-fallingBlockStartX] == 1){
                mapGrid[i][j] = mapGrid[i][j] + 1;
            }
        }
    }
}

function jeRiadokPlny(){
    let plnyRiadok = 2;
    for(let i = 23; i>0; i--){
        for(let j = 0; j<12; j++){
            if(mapGrid[i][j] == 0){
                plnyRiadok = 0;
            }
        }
        if(plnyRiadok == 2 && i!=1 && i!=22){
            plnyRiadok = 1;
            cisloPlnehoRiadku = i;
            return plnyRiadok;
        }
        else{
            plnyRiadok = 2;
        }
    }
    if(plnyRiadok == 2){
        plnyRiadok = 0;
    }
    return plnyRiadok;
}

function odstranitRiadok(){

    var polozeneBlokyPoziciaY = 5 + (cisloPlnehoRiadku-1)*27;
    for(let i=cisloPlnehoRiadku; i>2; i--){
        for(let j=1; j<11; j++){
            mapGrid[i][j] = mapGrid[i-1][j];
        }
    }

    for(let i=0; i<polozeneBloky.length; i++){
        console.log(polozeneBloky[i].positionY, polozeneBloky[i].getSpodokBloku(), polozeneBlokyPoziciaY);

        if(polozeneBloky[i].positionY <= polozeneBlokyPoziciaY && polozeneBloky[i].getSpodokBloku() >= polozeneBlokyPoziciaY){
            let pomocnyArray = polozeneBloky[i].drawMatrix
            let aktRiadok = (polozeneBlokyPoziciaY - polozeneBloky[i].positionY)/27; //do aktRiadok zistime, o ktore [i] v 
                                                                                // drawMatrix sa jedna v danom bloku

            for(let o = aktRiadok; o < pomocnyArray.length; o++){ //prejdeme cely drawMatrix od daneho riadku
                if(o != (pomocnyArray.length - 1) ){ //ak nieje posledny riadok v drawMatrixe
                    pomocnyArray[o] = pomocnyArray[o + 1]; //posunie vsetky riadky o 1 index menej, okrem last
                }
            }
            pomocnyArray.length = pomocnyArray.length - 1; //ak to bol posledny riadok v drawMatrixe / ak uz ide posledny riadok
                                                            //tak jednoducho zmensi array o 1, cim sa zbavi posledneho riadku

            polozeneBloky[i].drawMatrix = pomocnyArray;

            polozeneBloky[i].positionY = polozeneBloky[i].positionY + 27;
        }
    }
    for(let u=0; u<polozeneBloky.length; u++){
        if(polozeneBloky[u].getSpodokBloku() < polozeneBlokyPoziciaY){ 
            polozeneBloky[u].positionY = polozeneBloky[u].positionY + 27;                    
        }
    }
    score.priratajScore();
    if(soundFullRow.musicPlaying == 1){
        soundFullRow.play();
    }
}


function vycistiFallingBlock(){
    var pomocnyArray = fallingBlock.drawMatrix;
    var jePrazdny;
    for(let i = pomocnyArray.length-1; i>0; i--){
        jePrazdny = 1;
        for(let j=0; j<pomocnyArray[i].length; j++){
            if(pomocnyArray[i][j]==1){
                jePrazdny = 0;
            }
        }
        if(jePrazdny == 1){
            pomocnyArray.length = i;
        }
    }
    for(let i = 0; i<pomocnyArray.length; i++){
        jePrazdny = 1;
        for(let j=0; j<pomocnyArray[i].length; j++){
            if(pomocnyArray[i][j]==1){
                jePrazdny = 0;
            }
        }
        if(jePrazdny == 1){
            for(let i=0; i<pomocnyArray.length; i++){
                if(i != pomocnyArray.length-1){
                    pomocnyArray[i] = pomocnyArray[i+1];
                }
                else{
                    pomocnyArray.length = i;
                    fallingBlock.positionY = fallingBlock.positionY + 27;
                }
            }
        }
    }
}
function vycistiStareBloky(){
    for(let i=0; i<polozeneBloky.length; i++){
        if( (polozeneBloky[i].positionY > 545) && (i != (polozeneBloky.length -1) ) ){
            for(let y = i; y<polozeneBloky.length-1; y++){
                polozeneBloky[y] = polozeneBloky[y+1];
            }
            polozeneBloky.length = polozeneBloky.length - 1;
            i = i-1;
        }
        else if( (polozeneBloky[i].positionY > 545) && (i == (polozeneBloky.length - 1) ) ){
            polozeneBloky.length = polozeneBloky.length - 1;
        }
    }        

    for(let i = 0; i<polozeneBloky.length; i++){
        if(polozeneBloky[i].drawMatrix.length == 0){
            for(let y = i; y<polozeneBloky.length-1; y++){
                polozeneBloky[y] = polozeneBloky[y+1];
            }
            polozeneBloky.length = polozeneBloky.length - 1;
            i = i-1;
        }
    }        
}

function zistiGameOver(){
    for(let i = 0; i<polozeneBloky.length; i++){
        if(polozeneBloky[i].positionY <50){
            scena = 5;
            cancelAnimationFrame(requestForCancelFrameRefresh);
            gameOverLoop();
        }
    }
}

/*                              //nedokoncene, malo zobrazovat konecnu polohu padajuceho bloku pomocou observera


var najvyssieY = 0;
function updateFallingBlockGhost(){
    vycistiFallingBlockGhost();
    fallingBlockGhost.koniecX = fallingBlockGhost.positionX + (fallingBlockGhost.drawMatrix[0].length)*27; //zistim koniec padajuceho bloku
    najvyssieY = 572;
    zistiNajvyssieY();
    console.log(fallingBlockGhost);
    fallingBlockGhost.positionY = najvyssieY - (27* fallingBlockGhost.drawMatrix.length);
}
function zistiNajvyssieY(){ //do najvyssieY vlozi positionY najvyssieho bloku, ktory je pod fallingBlockGhost
    for(let i=0; i<polozeneBloky.length; i++){
        let polozenyBlokKoniecX = polozeneBloky[i].positionX + (polozeneBloky[i].drawMatrix[0].length*27); //zistim koniec poloz bloku
        if(fallingBlockGhost.positionX > polozenyBlokKoniecX || fallingBlockGhost.koniecX < polozeneBloky[i].positionX){

        }
        else if(polozeneBloky[i].positionY <= najvyssieY){
            najvyssieY = polozeneBloky[i].positionY;
        }
    }    
}
function vycistiFallingBlockGhost(){
    var pomocnyArray = fallingBlockGhost.drawMatrix;
    var jePrazdny;
    for(let i = pomocnyArray.length-1; i>0; i--){
        jePrazdny = 1;
        for(let j=0; j<pomocnyArray[i].length; j++){
            if(pomocnyArray[i][j]==1){
                jePrazdny = 0;
            }
        }
        if(jePrazdny == 1){
            pomocnyArray.length = i;
        }
    }
    for(let i = 0; i<pomocnyArray.length; i++){
        jePrazdny = 1;
        for(let j=0; j<pomocnyArray[i].length; j++){
            if(pomocnyArray[i][j]==1){
                jePrazdny = 0;
            }
        }
        if(jePrazdny == 1){
            for(let i=0; i<pomocnyArray.length; i++){
                if(i != pomocnyArray.length-1){
                    pomocnyArray[i] = pomocnyArray[i+1];
                }
                else{
                    pomocnyArray.length = i;
                    fallingBlockGhost.positionY = fallingBlockGhost.positionY + 27;
                }
            }
        }
    }
}*/