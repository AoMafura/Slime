export default class Unit
{
    constructor(size, xPos, startingYPos, slashDuration)
    {
        this.size = size - (size % 5);
        this.startingYPos = startingYPos;
        this.position = {
            x: xPos, 
            y: startingYPos,
        }
        this.slashDuration = slashDuration;
        this.slash = 0;
        this.sound = 0;
        this.volume = 0.7;
    }

    //---------------Getters---------------------

    getXPos(){
        return this.position.x;
    }
    
    getYPos(){
        return this.position.y;
    }

    getSize(){
        return this.size;
    }

    getSlash(){
        return this.slash;
    }

    getSlashDuration(){
        return this.slashDuration;
    }

    setSlashZero(){
        this.slash = 0;
    }

    //---------------Methods---------------------

    draw(canvas, frame, yTravel, xTravel)
    {
        var yAdjust = 0;
        var ySlashAdj = 50; //The Temporary Unit Size change during slash, to be replaced by Animation.
        frame = (frame - frame % 10) / 10;
        
        if(xTravel > 0 && this.slash > 0 && this.slash <= this.slashDuration - 2){ //Slash Animation Frames
            yAdjust = ySlashAdj;
        }
        canvas.drawImage(unitIMG[3][frame], this.position.x, this.position.y + (yAdjust/2), this.size, this.size - yAdjust);
    }

    //------------------------- Map Travelling ---------------------------

    refreshUnitPos(){
        this.position.y = this.startingYPos;
    }

    travelMap(yTravel, topLane, botLane, xTravel)
    {
       if(xTravel > 0 && yTravel > 0 && this.position.y == topLane){
            this.position.y = this.position.y + yTravel;
       }else if(xTravel > 0 && yTravel < 0 && this.position.y == botLane + this.size){
           this.position.y = this.position.y + yTravel;
       }
    }

    slashCommand(){
        oraSound[this.sound % oraCount].replay(this.volume);
        this.sound++;
        this.slash = this.slashDuration;
    }

    slashDecrement(){
        this.slash--;
    }
}