
import Obstacle from '/obstacle.js';

export default class Health
{
    constructor(unitHP, heartSize)
    {
        this.health = unitHP;
        this.maxHP = unitHP;
        this.heartSize = heartSize;
        this.damageSound = 0;
        this.volume = 0.7
    }

    //---------------------Getter----------------------------

    getHealth(){
        return this.health;
    }

    //---------------------Setter----------------------------

    setMaxHP(maxHP){
        this.maxHP = maxHP;
    }

    refreshHealth(){
        this.health = this.maxHP;
    }

    //------------------- Methods ---------------------------

    takeDamage(){
        // this.health--;
        // painSound[this.damageSound % painCount].replay(this.volume);
        this.damageSound++;
        return this.health;
    }

    drawHealth(canvas){
        var x, xPos = 0, yPos = 50, gap = 20, heart;

        for(x = 0; x < this.health; x++){
            xPos = (this.heartSize * (x+1)) + (gap * x);

            heart = new Obstacle(this.heartSize, this.heartSize, xPos, yPos, this.canvasXSize);
            canvas.drawImage(heartIMG, xPos, yPos, this.heartSize, this.heartSize);
        }
    }
}