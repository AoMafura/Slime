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

    //----------------------------Methods------------------------------

    drawBG(canvas){
        canvas.drawImage(this.image, this.position.x, this.position.y, this.xSize, this.ySize);
    }
}