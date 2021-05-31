import Score from './score.js'

export default class Map
{
    constructor(canvasXSize, canvasYSize, mapXPosition, mapDesign, topLane, botLane, wallSize, wallGap)
    {
        this.canvasXSize = canvasXSize;
        this.canvasYSize = canvasYSize;

        this.mapXStartPosition = mapXPosition;
        this.mapXPosition = mapXPosition;
        this.map = mapDesign;

        this.topLane = topLane;
        this.botLane = botLane;
        
        this.wallSize = wallSize;
        this.wallGap = wallGap;
        this.indexWidth = wallSize + wallGap;

        this.mapLength = {
            x: this.map[0].length,
            y: this.map.length - 1
        }
        this.frame = 0;
        this.enemi = 0;
        this.score = new Score(0, 0, 0)
        this.scoreAdd = 0;
    }

    //------------------- Getters --------------------------

    getTopLane(){
        return this.topLane;
    }

    getBotLane(){
        return this.botLane;
    }

    getUnit(){
        return this.unit;
    }

    getScore(){
        return this.score;
    }

    //------------------- Setters --------------------------

    setWallGap(mapSpeed){
        this.wallGap = 10*mapSpeed;
        this.indexWidth = this.wallSize + this.wallGap;
    }

    //------------------- Methods ---------------------------

    restartMap(mapDesign){
        this.mapXPosition = this.mapXStartPosition;
        this.frame = 0;
        this.map = mapDesign;
    }

    drawMap(canvas, mapSpeed, health)
    {
        var x, y, xPos, yPos, index = 0, lane = 0, playing = 1, wallSize, adjustSize, adjustPos;

        this.score.draw(canvas)

        for(x = 0; x < this.mapLength.x; x++){
            for(y = 0; y < this.mapLength.y; y++){
                xPos = (this.wallSize * x) + this.mapXPosition + (x * this.wallGap);
                adjustSize = (40 * this.map[y][x]) - 40;
                adjustPos = adjustSize/2;
                wallSize = this.wallSize + adjustSize;

                if(this.map[y][x] > 0){
                    if(y == 0){
                        lane = this.topLane;
                    }else{
                        lane = this.botLane;
                    }
                    yPos = (this.wallSize * y) + lane;

                    if(xPos < this.canvasXSize && xPos > -this.wallSize){ //Prevents drawing walls outside the Canvas.
                        if(this.map[y][x]<=3 && this.map[y][x]>0){
                            canvas.drawImage(fireballIMG[this.map[y][x]], xPos - adjustPos, yPos - adjustPos, wallSize, wallSize);
                            if(xPos < 0 && xPos > -10){
                                this.destroyWall(y, x);
                            }else if(xPos < -20 && xPos >= -70){
                                this.destroyWall(y, x);
                                if(this.map[y][x]==0){
                                    health.takeDamage(-1,1);
                                }
                            }else if(this.map[y][x] == 2 && (xPos >= 70 && xPos < 100)){
                                this.destroyWall(y, x);
                            }else if(this.map[y][x] == 3 && xPos >= 0 && xPos < 70){
                                this.destroyWall(y, x);
                            }
                        }else if(this.map[y][x] == 4){
                            canvas.drawImage(healIMG, xPos, yPos, this.wallSize, this.wallSize);
                        }else if(this.map[y][x] == 5){
                            canvas.drawImage(enemiIMG, xPos, yPos, this.wallSize, this.wallSize);
                        }
                    }
                    index = (index + 1) % this.mapLength.x;
                }
            }
        }
        if(xPos < 0){ //Map/Game has Ended.
            playing = 0;
        }
        this.mapXPosition -= mapSpeed;
        // console.log(playing);
        return playing;
    }

    convertYPosToIndex(yPos){
        var y = -1;
        if(yPos == this.topLane){
            y = 0;
        }else if(yPos == this.botLane){
            y = 1;
        }
        return y;
    }
    
    //------------------- Wall Detection -------------------

    destroyWall(yIndex, xIndex){
        var heal = 0;
        if(this.map[yIndex][xIndex] == 1){
            explodeSound.replay(.9);
        }else if(this.map[yIndex][xIndex]==4) {
            glassSound.replay(.9);
            heal += 1;
        }else if(this.map[yIndex][xIndex]==5){
            explodeSound.replay(.9);
            enemiSound[this.enemi].replay(.9);
            this.enemi++;
            this.enemi%=enemiCount;
            heal -= 1;
        }

        if(this.map[yIndex][xIndex] <= 2){
            this.map[yIndex][xIndex] += 1;
        }else if(this.map[yIndex][xIndex] == 5){
            this.map[yIndex][xIndex] = 2;
        }else if(this.map[yIndex][xIndex] >= 3){
            this.map[yIndex][xIndex] = 0;
        }
        return heal;
    }
    
    slashCollision(unit, health){
        var xPos = unit.getXPos(), yPos = unit.getYPos(), unitSize = unit.getSize();
        var xCollision = this.detectCollision(this.mapXPosition, yPos, unitSize, xPos);
        var yIndex;
        var damage;

        if(yPos == this.topLane){
            yIndex = 0;
        }else if(yPos == this.botLane + this.wallSize){
            yIndex = 1;
        }
        this.frame++;

        if(xCollision >= 0 ){ //
            if(unit.getSlash() == unit.getSlashDuration()){
                if(this.map[yIndex][xCollision]==1){
                    this.score.incrementCombo(1);
                    this.score.incrementScore(100);
                }
                damage = health.takeDamage(this.destroyWall(yIndex, xCollision));
                
            }else if(this.map[yIndex][xCollision]==5){
                health.takeDamage(this.destroyWall(yIndex, xCollision));
                this.score.resetCombo();
            }
        }else if(unit.getSlash() == unit.getSlashDuration()){
            this.score.resetCombo();
        }
    }

    detectCollision(xPos, yPos, unitSize, unitPos){
        var xDifferenceF = this.calcPositionDifference(unitPos, unitSize);
        var xDifferenceB = xDifferenceF - unitSize;

        var xFront = this.detectUnitIndexsPosFront(xDifferenceF), xBack = xFront - this.indexWidth;
        var xIndex = this.convertXPosToIndex(xBack), yIndex = (yPos == this.topLane) ? 0 : 1;
        var xWall = this.detectXAxisWall(xIndex, yIndex);

        var collision = -1;
        
        if(xIndex >= 0 && xIndex < this.mapLength.x && xWall > 0){
            collision = this.detectWallorGap(xDifferenceF, xDifferenceB, xFront, xBack);
        }
        
        //Display Front and Back Position of Unit / Display Collision
        // if(this.frame % 1 == 0){
        //     console.log("Collision Position(" + collision + "): " + xDifferenceF + " " + xDifferenceB + " @ " + xFront + " " + xBack + " == " + xIndex + " " + xWall);
        // }

        return (collision == 1) ? xIndex : -1;
    } 
    
    detectUnitIndexsPosFront(xDifferenceF){  
        //Detect the Front Side of X Position's Index. Used for measuring the width of the index.
        var pos = xDifferenceF - (xDifferenceF % this.indexWidth) + this.indexWidth;

        //Display Current Index and it's Starting Position
        // if(this.frame % 30 == 0){
        //     console.log("detectUnitIndexsPosFront [" + xDifferenceF + "]: " + " " + pos);
        // }

        return pos;
    }

    convertXPosToIndex(xBack){ //Converts X Position to an Index in the Map
        var indexB = -1;
        
        if(xBack >= 0){ //xDifference Back
            indexB = xBack / this.indexWidth;
        }
        
        //Display Unit Position's Index
        // if(this.frame % 30 == 0){
        //     console.log("[" + indexB + "]");
        // }
        
        return indexB;
    }
    
    calcPositionDifference(unitPos, unitSize){ 
        //The Distance between Map current position & Unit position.
        //Also transform the Unit Position value into a Positive Value so it is easier to calculate with.
        var retVal = unitPos - this.mapXPosition + unitSize; 
        return retVal; 
    }

    detectWallorGap(unitXPosF, unitXPosB, xFront, xBack){ //Detect if Unit is situated in a wall or a Gap
        var type = -1; //Out of Bounds
        
        if(unitXPosF < xFront && unitXPosF >= 0){
            if(unitXPosF < xFront && unitXPosF > xFront - this.wallGap && unitXPosB < xFront && unitXPosB >= xFront - this.wallGap){
                type = 0; //Gap / No Collision
            }else{
                type = 1; //Wall Collision
                if(unitXPosF <= xFront-this.wallGap){ //Slash Score
                    this.scoreAdd = xFront % unitXPosF;
                }else{
                    this.scoreAdd = xBack % unitXPosB;
                }
            }
        }else{
            // console.log("Error: detectWallorGap() ouput out of Bounds. (" + type + ") " + xFront + " " + xBack + " || " + unitXPosF + " " + unitXPosB);
        }   
        
        //Display Current Index and it's Starting Position
        if(this.frame % 30 == 0){
            console.log("DetectWallorGap(" + type + "): " + xFront + " " + xBack + " || " + unitXPosF + " " + unitXPosB + " Score: " + this.scoreAdd);
        }

        return type;
    }

    detectXAxisWall(xIndex, yIndex){ //Detect if there is a wall inside the Index.
        var wallDetected = 0, x;

        if(xIndex >= 0 && xIndex < this.mapLength.x && yIndex>=0 && yIndex < this.mapLength.y){
            wallDetected = this.map[yIndex][xIndex];
        }

        //Display Wall in Index Information
        // if(this.frame % 30 == 0){
        //     console.log("Wall: " + wallDetected + " " + xIndex + " " + yIndex);
        // }

        return wallDetected;
    }
}