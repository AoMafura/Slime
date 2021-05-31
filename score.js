export default class Score{
    constructor(score, highscore, combo){
        this.score = score,
        this.highscore = highscore,
        this.combo = combo
    }

    //setter------------------------
    
    setHighScore(){
        if(this.highscore < this.score){
            this.highscore = this.score;
        }
        this.resetScore()
    }

    incrementScore(score){
        this.score = this.score + (score * (1+this.combo*0.01))
    }

    resetScore(){
        this.score = 0;
    }

    incrementCombo(combo){
        this.combo+=combo%2;
    }

    resetCombo(){
        this.combo = 0;
    }

    //Getter------------------------------

    getScore(){
        return this.score
    }

    getHighscore(){
        return this.highscore
    }

    getCombo(){
        return this.combo
    }

    //Methods------------------------------

    draw(ctx){
        ctx.font = "25px Courier New"
        ctx.fillStyle = "white"
        ctx.textAlign = "center"
        ctx.fillText("High Score : " + this.highscore, 1160, 95)
        ctx.fillText("     Score : " + this.score, 1160, 150)
        ctx.fillText("Combo : " + this.combo, 150, 730)
    }
}
