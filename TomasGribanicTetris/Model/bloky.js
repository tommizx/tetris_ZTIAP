var blokL = new Image()
blokL.src = 'Images/orangeBlok.png';

var blokJ = new Image()
blokJ.src = 'Images/darkblueBlok.png';

var blokI = new Image()
blokI.src = 'Images/blueBlok.png';

var blokO = new Image()
blokO.src = 'Images/yellowBlok.png';

var blokS = new Image()
blokS.src = 'Images/greenBlok.png';

var blokZ = new Image()
blokZ.src = 'Images/redBlok.png';

var blokT = new Image()
blokT.src = 'Images/purpleBlok.png';



class Blok{
    constructor(ctx,name,originalMatrix){
        this.ctx = ctx;
        this.name = name;
        this.positionX = 352+(4*27);
        this.positionY = 32;
        this.originalMatrix= originalMatrix;  
        this.drawMatrix = originalMatrix;
        this.transposedMatrix = [];
        this.spodokBloku = this.getSpodokBloku();
        this.koniecX = 0;
    }      
    draw(){
        for(let i = 0; i < this.drawMatrix.length; i++) {
  
            for(let j = 0; j < this.drawMatrix[i].length; j++) {

                if(this.drawMatrix[i][j] == 1){
                    this.ctx.drawImage(this.name, this.positionX + (j * 27), this.positionY + (i * 27));
                }
            }
         }
    }
    rotateBlock(){
        this.originalMatrix = this.drawMatrix;
        setInactiveGrid();
        this.transpose(this.drawMatrix);
        this.vymenPoradieStlpcov(this.drawMatrix);
        setActiveGrid();
        for(let i = getFallingBlockY(); i<(getFallingBlockY()+this.getPocetRiadkov()); i++){
            for(let j = getFallingBlockX(); j<(getFallingBlockX()+this.getPocetStlpcov()); j++){
                if(mapGrid[i][j] > 1){
                    setInactiveGrid();
                    this.drawMatrix = this.originalMatrix;
                    setActiveGrid();
                }
            }
        }
    }

    vymenPoradieStlpcov(transposedMatrix) {                
        let grid = [];
        const pocetRiadkov = transposedMatrix.length, pocetStlpcov = transposedMatrix[0].length;

        for (let i = 0; i < pocetRiadkov; i++) {
            grid[i] = [];
          }


        for(let i = 0; i < pocetRiadkov; i++) {
            for(let j = 0; j < pocetStlpcov; j++) {
                grid[i][j] = transposedMatrix[i][pocetStlpcov - j - 1];
            }
         }
         this.drawMatrix = grid;
    }
    transpose(matrix) {
        const rows = matrix.length, cols = matrix[0].length;
        const grid = [];
        for (let j = 0; j < cols; j++) {
            grid[j] = Array(rows);
        }
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
            grid[j][i] = matrix[i][j];
            }
        }
        this.drawMatrix = grid;
    }
    getPocetRiadkov() {
        return this.drawMatrix.length;
    }
    getPocetStlpcov() {
        if(this.drawMatrix.length > 0){
            return this.drawMatrix[0].length;            
        }
        else{
            return 0;
        }
    }
    getSpodokBloku(){
        return this.positionY + (this.getPocetRiadkov()-1)*27;
    }
    moveRight(){
        setInactiveGrid();
        this.positionX = this.positionX + 27;
        setActiveGrid();
        for(let i = getFallingBlockY(); i<(getFallingBlockY()+this.getPocetRiadkov()); i++){
            for(let j = getFallingBlockX(); j<(getFallingBlockX()+this.getPocetStlpcov()); j++){
                if(mapGrid[i][j] > 1){
                    this.moveLeft();
                }
            }
        }
    }
    moveLeft(){
        setInactiveGrid();
        this.positionX = this.positionX - 27;
        setActiveGrid();
        for(let i = getFallingBlockY(); i<(getFallingBlockY()+this.getPocetRiadkov()); i++){
            for(let j = getFallingBlockX(); j<(getFallingBlockX()+this.getPocetStlpcov()); j++){
                if(mapGrid[i][j] > 1){
                    this.moveRight();
                }
            }
        }
    }
    moveDown(){
        setInactiveGrid();
        fallingBlock.positionY = fallingBlock.positionY + 27;
        setActiveGrid();
        if(fallingBlock.drawMatrix.length > 1){
            for(let i = getFallingBlockY(); i<(getFallingBlockY()+this.getPocetRiadkov()); i++){
                for(let j = getFallingBlockX(); j<(getFallingBlockX()+this.getPocetStlpcov()); j++){
                    if(mapGrid[i][j] > 1){
                        this.moveUp();
                    }
                }
            }            
        }
    }
    moveUp(){
        if(soundBlockPlace.musicPlaying == 1){
            soundBlockPlace.play();
        }
        setInactiveGrid();
        fallingBlock.positionY = fallingBlock.positionY - 27;
        setActiveGrid();
        vycistiFallingBlock();
        polozeneBloky.push(fallingBlock);        
        vycistiStareBloky();
        do{
            var pomJeRiadokPlny = jeRiadokPlny();
            if(pomJeRiadokPlny == 1){
                odstranitRiadok();
                vycistiStareBloky();
            }
        }while(pomJeRiadokPlny == 1);
        vycistiStareBloky();
        getBlock();
        zistiGameOver();
    }
}