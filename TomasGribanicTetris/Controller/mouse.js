function mouseClick(event) {
    var x = event.pageX - canvas.offsetLeft;
    var y = event.pageY - canvas.offsetTop;
    if(scena == 1){
        for(var i in menuButtons) {
            var objekt= menuButtons[i];
            objPosX = objekt.getPoziciaX();
            objPosY = objekt.getPoziciaY();
            objKonX = objekt.getKoniecX();
            objKonY = objekt.getKoniecY();
            objName = objekt.getName();
            if((x >= objPosX) && (x <= objKonX) && (y <= objPosY) && (y >= objKonY)){
                objekt.clickedAction(objName);
            }
        }        
    }
    else if(scena == 2){
        for(var i in settingsButtons) {
            var objekt= settingsButtons[i];
            objPosX = objekt.getPoziciaX();
            objPosY = objekt.getPoziciaY();
            objKonX = objekt.getKoniecX();
            objKonY = objekt.getKoniecY();
            objName = objekt.getName();
            if(objekt.type == "text"){
                if((x >= objPosX) && (x <= objKonX) && (y <= objPosY) && (y >= objKonY)){
                    objekt.clickedAction(objName);
                }            
            }
            else if(objekt.type == "img"){
                if((x >= objPosX) && (x <= objKonX) && (y >= objPosY) && (y <= objKonY)){
                    objekt.clickedAction(objName);
                }       
            }

        }
    }
    else if(scena == 3){
        for(var i in gameButtons) {
            var objekt= gameButtons[i];
            objPosX = objekt.getPoziciaX();
            objPosY = objekt.getPoziciaY();
            objKonX = objekt.getKoniecX();
            objKonY = objekt.getKoniecY();
            objName = objekt.getName();
            if(objekt.type == "text"){
                if((x >= objPosX) && (x <= objKonX) && (y <= objPosY) && (y >= objKonY)){
                    objekt.clickedAction(objName);
                }            
            }
            else if(objekt.type == "img"){
                if((x >= objPosX) && (x <= objKonX) && (y >= objPosY) && (y <= objKonY)){
                    objekt.clickedAction(objName);
                }       
            }
        }
    }
    else if(scena == 4){
        for(var i in howToPlayButtons) {
            var objekt= howToPlayButtons[i];
            objPosX = objekt.getPoziciaX();
            objPosY = objekt.getPoziciaY();
            objKonX = objekt.getKoniecX();
            objKonY = objekt.getKoniecY();
            objName = objekt.getName();
            if(objekt.type == "text"){
                if((x >= objPosX) && (x <= objKonX) && (y <= objPosY) && (y >= objKonY)){
                    objekt.clickedAction(objName);
                }            
            }
            else if(objekt.type == "img"){
                if((x >= objPosX) && (x <= objKonX) && (y >= objPosY) && (y <= objKonY)){
                    objekt.clickedAction(objName);
                }       
            }
        }
    }
    else if(scena == 5){
        for(var i in gameOverButtons) {
            var objekt= gameOverButtons[i];
            objPosX = objekt.getPoziciaX();
            objPosY = objekt.getPoziciaY();
            objKonX = objekt.getKoniecX();
            objKonY = objekt.getKoniecY();
            objName = objekt.getName();
            if(objekt.type == "text"){
                if((x >= objPosX) && (x <= objKonX) && (y <= objPosY) && (y >= objKonY)){
                    objekt.clickedAction(objName);
                }            
            }
            else if(objekt.type == "img"){
                if((x >= objPosX) && (x <= objKonX) && (y >= objPosY) && (y <= objKonY)){
                    objekt.clickedAction(objName);
                }       
            }
        }
    }
}

function cursorMove(event){
    var x = event.pageX - canvas.offsetLeft;
    var y = event.pageY - canvas.offsetTop;
  
    var element = document.getElementById("cursorMove");
    element.innerHTML = "X: " + x + " Y:" + y;

    if(scena == 1){
        for(var i in menuButtons) {
            var objekt= menuButtons[i];
            objPosX = objekt.getPoziciaX();
            objPosY = objekt.getPoziciaY();
            objKonX = objekt.getKoniecX();
            objKonY = objekt.getKoniecY();


            if((x >= objPosX) && (x <= objKonX) && (y <= objPosY) && (y >= objKonY)){
                objekt.hoverAction();
            }
            else{
                let check = menuButtons.filter((e)=>e.hoveringButton == 1);
                if(check.length == 0){
                    document.body.style.cursor = "default";
                }
                objekt.hoveringButton = 0;
                objekt.color= "grey";
            }
        }           
    }
    else if(scena == 2){
        for(var i in settingsButtons) {
            var objekt= settingsButtons[i];
            objPosX = objekt.getPoziciaX();
            objPosY = objekt.getPoziciaY();
            objKonX = objekt.getKoniecX();
            objKonY = objekt.getKoniecY();

            if(objekt.type == "text"){
                if((x >= objPosX) && (x <= objKonX) && (y <= objPosY) && (y >= objKonY)){
                    objekt.hoverAction();
                }
                else{
                    let check = settingsButtons.filter((e)=>e.hoveringButton == 1);
                    if(check.length == 0){
                        document.body.style.cursor = "default";
                    }
                    objekt.hoveringButton = 0;
                    objekt.color= "grey";
                }            
            }
            else if(objekt.type == "img"){
                if((x >= objPosX) && (x <= objKonX) && (y >= objPosY) && (y <= objKonY)){
                    objekt.hoverAction();
                }
                else{
                    let check = settingsButtons.filter((e)=>e.hoveringButton == 1);
                    if(check.length == 0){
                        document.body.style.cursor = "default";
                    }
                    objekt.hoveringButton = 0;
                    objekt.color= "grey";
                }            
            }
        }        
    }
    else if(scena == 3){
        for(var i in gameButtons) {
            var objekt= gameButtons[i];
            objPosX = objekt.getPoziciaX();
            objPosY = objekt.getPoziciaY();
            objKonX = objekt.getKoniecX();
            objKonY = objekt.getKoniecY();

            if(objekt.type == "text"){
                if((x >= objPosX) && (x <= objKonX) && (y <= objPosY) && (y >= objKonY)){
                    objekt.hoverAction();
                }
                else{
                    let check = gameButtons.filter((e)=>e.hoveringButton == 1);
                    if(check.length == 0){
                        document.body.style.cursor = "default";
                    }
                    objekt.hoveringButton = 0;
                    objekt.color= "grey";
                }            
            }
            else if(objekt.type == "img"){
                if((x >= objPosX) && (x <= objKonX) && (y >= objPosY) && (y <= objKonY)){
                    objekt.hoverAction();
                }
                else{
                    let check = gameButtons.filter((e)=>e.hoveringButton == 1);
                    if(check.length == 0){
                        document.body.style.cursor = "default";
                    }
                    objekt.hoveringButton = 0;
                    objekt.color= "grey";
                }            
            }
        }
    }
    else if(scena == 4){
        for(var i in howToPlayButtons) {
            var objekt= howToPlayButtons[i];
            objPosX = objekt.getPoziciaX();
            objPosY = objekt.getPoziciaY();
            objKonX = objekt.getKoniecX();
            objKonY = objekt.getKoniecY();

            if(objekt.type == "text"){
                if((x >= objPosX) && (x <= objKonX) && (y <= objPosY) && (y >= objKonY)){
                    objekt.hoverAction();
                }
                else{
                    let check = howToPlayButtons.filter((e)=>e.hoveringButton == 1);
                    if(check.length == 0){
                        document.body.style.cursor = "default";
                    }
                    objekt.hoveringButton = 0;
                    objekt.color= "grey";
                }            
            }
            else if(objekt.type == "img"){
                if((x >= objPosX) && (x <= objKonX) && (y >= objPosY) && (y <= objKonY)){
                    objekt.hoverAction();
                }
                else{
                    let check = howToPlayButtons.filter((e)=>e.hoveringButton == 1);
                    if(check.length == 0){
                        document.body.style.cursor = "default";
                    }
                    objekt.hoveringButton = 0;
                    objekt.color= "grey";
                }            
            }
        }        
    }
    else if(scena == 5){
        for(var i in gameOverButtons) {
            var objekt= gameOverButtons[i];
            objPosX = objekt.getPoziciaX();
            objPosY = objekt.getPoziciaY();
            objKonX = objekt.getKoniecX();
            objKonY = objekt.getKoniecY();

            if(objekt.type == "text"){
                if((x >= objPosX) && (x <= objKonX) && (y <= objPosY) && (y >= objKonY)){
                    objekt.hoverAction();
                }
                else{
                    let check = gameOverButtons.filter((e)=>e.hoveringButton == 1);
                    if(check.length == 0){
                        document.body.style.cursor = "default";
                    }
                    objekt.hoveringButton = 0;
                    objekt.color= "grey";
                }            
            }
            else if(objekt.type == "img"){
                if((x >= objPosX) && (x <= objKonX) && (y >= objPosY) && (y <= objKonY)){
                    objekt.hoverAction();
                }
                else{
                    let check = gameOverButtons.filter((e)=>e.hoveringButton == 1);
                    if(check.length == 0){
                        document.body.style.cursor = "default";
                    }
                    objekt.hoveringButton = 0;
                    objekt.color= "grey";
                }            
            }
        }        
    }
}
