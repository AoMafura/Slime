const GAMESTATE = {
    PAUSED: 0,
    INTRO: 2,
    MENU: 4,
    CONTROLS: 6,
    INSTRUCTIONS: 8,
    LEVELS: 10
}

export default class Menu{
    constructor(width, height, gamestate, level){
        this.gameWidth = width,
        this.gameHeight = height,
        this.gamestate = gamestate,
        this.level = level
    }

    //----------------------Getters------------------
    getState(){
        return this.gamestate;
    }

    //------------------------Setters---------------------

    setState(state){
        this.gamestate = state;
    }

    setLevel(level){
        this.level = level;
    }

    //-------------------------Methods--------------------

    draw(ctx){
        console.log(this.gamestate)

        if(this.gamestate == GAMESTATE.INTRO){
            ctx.rect(0, 0, this.gameWidth, this.gameHeight)
            ctx.fillStyle = "rgba(0, 0, 0, 0.8)"
            ctx.fill()

            ctx.font = "bold 100px Courier New"
            ctx.fillStyle = "#3DC0EA"
            ctx.textAlign = "center"
            ctx.fillText("SLIME PEKO", this.gameWidth/2, this.gameHeight/2)

            ctx.font = "bold 50px Courier New"
            ctx.fillStyle = "#3DC0EA"
            ctx.textAlign = "center"
            ctx.fillText("LEVEL " + this.level, this.gameWidth/2, 300)

            ctx.font = "30px Courier New"
            ctx.fillStyle = "white"
            ctx.textAlign = "center"
            ctx.fillText("[SPACE] : START", this.gameWidth/2, 600)
            ctx.fillText("[M]    : MENU", this.gameWidth/2, 650)
        }

        if(this.gamestate == GAMESTATE.MENU){
            ctx.rect(0, 0, this.gameWidth, this.gameHeight)
            ctx.fillStyle = "rgba(0, 0, 0, 0.8)"
            ctx.fill()

            ctx.font = "bold 100px Courier New"
            ctx.fillStyle = "#3DC0EA"
            ctx.textAlign = "center"
            ctx.fillText("MENU", this.gameWidth/2, 300)

            ctx.font = "30px Courier New"
            ctx.fillStyle = "white"
            ctx.textAlign = "center"
            ctx.fillText("[SPACE] : START", this.gameWidth/2, 500)
            ctx.fillText("         [SHIFT] : CHOOSE A LEVEL", this.gameWidth/2, 550)
            ctx.fillText("       [C] : CONTROLS", this.gameWidth/2, 600)
            ctx.fillText("          [H] : HOW TO PLAY", this.gameWidth/2, 650)
        }

        if(this.gamestate == GAMESTATE.PAUSED){
            ctx.rect(0, 0, this.gameWidth, this.gameHeight)
            ctx.fillStyle = "rgba(0, 0, 0, 0.8)"
            ctx.fill()

            ctx.font = "bold 100px Courier New"
            ctx.fillStyle = "#3DC0EA"
            ctx.textAlign = "center"
            ctx.fillText("PAUSED", this.gameWidth/2, this.gameHeight/2)

            ctx.font = "30px Courier New"
            ctx.fillStyle = "white"
            ctx.textAlign = "center"
            ctx.fillText("[SPACE] : RESUME", this.gameWidth/2, 600)
            ctx.fillText("[M]   : MENU", this.gameWidth/2, 650)
        }

        if(this.gamestate == GAMESTATE.CONTROLS){
            ctx.rect(0, 0, this.gameWidth, this.gameHeight)
            ctx.fillStyle = "rgba(0, 0, 0, 0.8)"
            ctx.fill()

            ctx.font = "bold 100px Courier New"
            ctx.fillStyle = "#3DC0EA"
            ctx.textAlign = "center"
            ctx.fillText("CONTROLS", this.gameWidth/2, 300)

            ctx.font = "30px Courier New"
            ctx.fillStyle = "white"
            ctx.textAlign = "center"
            ctx.fillText("MOVE UP : [W] / [↑]    ", this.gameWidth/2, 400)
            ctx.fillText("MOVE DOWN : [S] / [↓]      ", this.gameWidth/2, 450)
            ctx.fillText("         ATTACK : [D] / [F] / [K] / [L]", this.gameWidth/2, 500)
            ctx.fillText("PAUSE : [SPACE]    ", this.gameWidth/2, 550)
            ctx.fillText("MENU : [M]       ", this.gameWidth/2, 600)
        }
        
        if(this.gamestate == GAMESTATE.LEVELS){
            ctx.rect(0, 0, this.gameWidth, this.gameHeight)
            ctx.fillStyle = "rgba(0, 0, 0, 0.8)"
            ctx.fill()

            ctx.font = "bold 100px Courier New"
            ctx.fillStyle = "#3DC0EA"
            ctx.textAlign = "center"
            ctx.fillText("CHOOSE A LEVEL", this.gameWidth/2, 300)

            ctx.font = "30px Courier New"
            ctx.fillStyle = "white"
            ctx.textAlign = "center"
            ctx.fillText("[1] : LEVEL 1  ", this.gameWidth/2, 400)
            ctx.fillText("[2] : LEVEL 2  ", this.gameWidth/2, 450)
            ctx.fillText("[3] : LEVEL 3  ", this.gameWidth/2, 500)
            ctx.fillText("[4] : LEVEL 4  ", this.gameWidth/2, 550)
            ctx.fillText("[5] : LEVEL 5  ", this.gameWidth/2, 600)
            ctx.fillText("     [M] : RETURN TO MENU", this.gameWidth/2, 650)
        }

        if(this.gamestate == GAMESTATE.INSTRUCTIONS){
            ctx.rect(0, 0, this.gameWidth, this.gameHeight)
            ctx.fillStyle = "rgba(0, 0, 0, 0.9)"
            ctx.fill()

            ctx.font = "bold 60px Courier New"
            ctx.fillStyle = "#3DC0EA"
            ctx.textAlign = "center"
            ctx.fillText("HOW TO PLAY", this.gameWidth/2, 100)

            ctx.font = "bold 25px Courier New"
            ctx.fillStyle = "white"
            ctx.textAlign = "center"

            ctx.fillText("Blue Pajama Slime: ", 280, 170)
            ctx.drawImage(unitIMG[0][0], 45, 130, 50, 50);

            ctx.fillText("Blue Hearts: ", 237, 250)
            ctx.drawImage(heartIMG, 45, 210, 55, 55);

            ctx.fillText("Blue Flame Fireballs: ", 307, 330)
            ctx.drawImage(fireballIMG[1], 45, 295, 57, 57)

            ctx.fillText("Pink Slime Friends: ", 292, 410)
            ctx.drawImage(enemiIMG, 45, 370, 60, 60)

            ctx.fillText("Blue Slime Potion: ", 285, 490)
            ctx.drawImage(healIMG, 45, 450, 60, 60)

            ctx.fillText("Combo: ", 195, 570)
            
            ctx.fillText("Score: ", 195, 650)
            
            ctx.fillText("High Score: ", 230, 730)

            ctx.font = "20px Courier New"
            ctx.fillText("Your character. Reach the end of the map without losing all health to win.", 920, 170)

            ctx.fillText("Your vitality. Losing all hearts will result in your death!", 832, 250)
            ctx.fillText("You may only have a maximum of 3 health at a time.", 778, 280)

            ctx.fillText("Destroy the fireballs and prevent them from burning the environment.", 885, 330)
            ctx.fillText("You will lose 1 health if a fireball reaches the edge of the map.", 868, 360)

            ctx.fillText("Avoid the Pink Slimes. They may be cute but they're pink and violent!", 890, 410)

            ctx.fillText("A Concoction of Blue Slimy Substances. Break the potion to recover Health.", 925, 490)

            ctx.fillText("The current number of Blue Flame Fireballs destroyed without losing health.", 930, 570)
            ctx.fillText("Increase your score gain with higher with higher Combo!", 809, 600)

            ctx.fillText("Your current score. Increase your score by destroying Blue Flame Fireballs.", 930, 650)

            ctx.fillText("The Highest Score made on this Level.", 705, 730)

            ctx.fillText("     [M] : RETURN TO MENU", (this.gameWidth/7)*6, 770)
        }
    }
}
