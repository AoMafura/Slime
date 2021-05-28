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
                this.volume = 0.8;
                this.currentTheme = 0;
                break;
            case 3:
            case 4:
                this.volume = 1;
                this.currentTheme = 2;
                break;
            case 5:
                this.volume = 1;
                this.currentTheme = 0;
        }
    }

    //------------------- Methods ---------------------------
}