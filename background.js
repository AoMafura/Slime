export default class Background
{ 
    constructor(xSize, ySize, xPos, yPos, image)
    {
        this.xSize = xSize;
        this.ySize = ySize;
        this.position = {
            x: 0, 
            y: 0,
        }
        this.image = image;
    }

    getBG(){
        this.image = image;
    }

    //-----------------------Setter-------------------
    setBG(level){
        this.image = backgroundIMG[level-1]
    }

    //----------------------------Methods------------------------------

    drawBG(canvas){
        canvas.drawImage(this.image, this.position.x, this.position.y, this.xSize, this.ySize);
    }
}