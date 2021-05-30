export default class Score{
    constructor(width, height, gameState, level){
        this.gameWidth = width,
        this.gameHeight = height,
        this.gamestate = gameState
        this.level = level
    }

    draw(ctx){
        ctx.font = "25px Courier New"
        ctx.fillStyle = "white"
        ctx.textAlign = "center"
        ctx.fillText("High Score : ", 1000, 95)
        ctx.fillText("     Score : ", 1000, 150)
        ctx.fillText("Combo : ", 150, 730)
    }
}
