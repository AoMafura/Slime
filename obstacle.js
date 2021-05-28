export default class Obstacle
{ 
    constructor(xSize, ySize, xPos, yPos, canvasXSize)
    {
        this.xSize = xSize;
        this.ySize = ySize - (ySize % 10);
        this.position = {
            x: xPos, 
            y: yPos - (yPos % 10),
        }
        this.canvasXSize = canvasXSize;
    }

    //----------------------------Methods------------------------------

    draw(canvas)
    {
        canvas.fillStyle = "#FFFFFF";
        
        if(this.position.x >= 0-this.xSize && this.position.x <= this.canvasXSize){
            canvas.fillRect(this.position.x, this.position.y, this.xSize, this.ySize);
        }
    }
}