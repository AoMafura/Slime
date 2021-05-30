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
            ctx.fillText("          [V] : HOW TO PLAY", this.gameWidth/2, 650)
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
            ctx.fillText("[w] [S] / [↑] [↓]    : CHANGE LANE", this.gameWidth/2, 400)
            ctx.fillText("[D] / [K] / [L] : ATTACK", this.gameWidth/2, 450)
        }
        
        if(this.gamestate == GAMESTATE.LEVELS){
            ctx.rect(0, 0, this.gameWidth, this.gameHeight)
            ctx.fillStyle = "rgba(0, 0, 0, 0.8)"
            ctx.fill()

            ctx.font = "bold 100px Courier New"
            ctx.fillStyle = "#3DC0EA"
            ctx.textAlign = "center"
            ctx.fillText("CHOOSE A LEVEL", this.gameWidth/2, 200)

            ctx.font = "30px Courier New"
            ctx.fillStyle = "white"
            ctx.textAlign = "center"
            ctx.fillText("[1] : LEVEL 1", this.gameWidth/2, 400)
            ctx.fillText("[2] : LEVEL 2", this.gameWidth/2, 450)
            ctx.fillText("[3] : LEVEL 3", this.gameWidth/2, 500)
            ctx.fillText("[4] : LEVEL 4", this.gameWidth/2, 550)
            ctx.fillText("[5] : LEVEL 5", this.gameWidth/2, 600)
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
            ctx.fillText("Pajama Blue Slime: ", 210, 170)
            ctx.fillText("Blue Hearts: ", 170, 250)
            ctx.fillText("Blue Flame Fireballs: ", 233, 330)
            ctx.fillText("Pink Slime Friends: ", 220, 410)
            ctx.fillText("Blue Slime Potion: ", 215, 490)
            ctx.fillText("Combo: ", 120, 570)
            ctx.fillText("Score: ", 120, 650)
            ctx.fillText("High Score: ", 160, 730)

            ctx.font = "20px Courier New"
            ctx.fillText("Your character. Reach the end of the map without losing all health and dying.", 870, 170)

            ctx.fillText("Your vitality. If you lose all health. You will die and must start again.", 850, 250)
            ctx.fillText(" You may only have a maximum 3 health at a time.", 690, 280)

            ctx.fillText("Destroy the fireballs and prevent them from burning the environment.", 820, 330)
            ctx.fillText("You will lose 1 health if a fireball.", 635, 360)

            ctx.fillText("Avoid the Pink Slimes. They may be a cute friend but they're pink and violent!", 880, 410)

            ctx.fillText("A Potion of Blue Slimy Substance. Break the potion to recover Health.", 825, 490)

            ctx.fillText("The current number of Blue Flame Fireballs destroyed without losing health.", 860, 570)
            ctx.fillText("Score gain becomes higher with higher Combo.", 675, 600)
            ctx.fillText("Your score", 475, 650)
            ctx.fillText("The Highest Score made on this Level.", 635, 730)
        }
    }
}
