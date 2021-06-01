export default class Theme
{
    constructor()
    {
        this.currentTheme = 0;
        this.volume = 0;
    }

    //---------------------Getter----------------------------

    getCurrentTheme(){
        return this.currentTheme;
    }

    getVolume(){
        return this.volume;
    }

    //---------------------Setter----------------------------

    setTheme(currentLevel){
        
        switch(currentLevel){
            case 1:
            case 2:
                this.volume = 0.5;
                this.currentTheme = 0;
                break;
            case 3:
            case 4:
                this.volume = 0.9;
                this.currentTheme = 3;
                break;
            case 5:
                this.volume = 0.5;
                this.currentTheme = 0;
        }
    }

    //------------------- Methods ---------------------------
}