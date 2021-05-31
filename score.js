export default class Score{
    constructor(score, highscore, combo){
        this.score = score,
        this.highscore = highscore,
        this.combo = combo
    }

    setScore(score){
        this.score = score
    }

    setHighscore(highscore){
        this.highscore = highscore 
    }

    setCombo(combo){
        this.combo = combo
    }

    getScore(){
        return this.score
    }

    getHighscore(){
        return this.highscore
    }

    getCombo(){
        return this.combo
    }

    draw(ctx){
        ctx.font = "25px Courier New"
        ctx.fillStyle = "white"
        ctx.textAlign = "center"
        ctx.fillText("High Score : " + this.highscore, 1160, 95)
        ctx.fillText("     Score : " + this.score, 1160, 150)
        ctx.fillText("Combo : " + this.combo, 150, 730)
    }
}
