const GAMESTATE = {
    PAUSED: 0,
    INTRO: 2,
    MENU: 4,
    CONTROLS: 6,
    INSTRUCTIONS: 8,
    LEVELS: 10
}

export default class Menu{
    constructor(width, height, gameState, level){
        this.gameWidth = width,
        this.gameHeight = height,
        this.gamestate = gameState
        this.level = level
    }

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
            ctx.fillText("CONTROLS", this.gameWidth/2, 200)

            ctx.font = "30px Courier New"
            ctx.fillStyle = "white"
            ctx.textAlign = "center"
            ctx.fillText("[w] [S] / [↑] [↓]    : CHANGE LANE", this.gameWidth/2, 400)
            ctx.fillText("[D] / [K] / [L] : ATTACK", this.gameWidth/2, 450)

            ctx.fillText("Game Objectives: ", 300, 550)
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
            ctx.fillStyle = "rgba(0, 0, 0, 0.8)"
            ctx.fill()

            ctx.font = "bold 100px Courier New"
            ctx.fillStyle = "#3DC0EA"
            ctx.textAlign = "center"
            ctx.fillText("HOW TO PLAY", this.gameWidth/2, 200)

            ctx.font = "30px Courier New"
            ctx.fillStyle = "white"
            ctx.textAlign = "center"
        }
    }
}
