import Unit from '/unit.js';
import Levels from '/level.js';
import Health from '/health.js';
import Background from '/background.js';
import Theme from '/theme.js';
import Menu from '/menu.js'

const elem = document.querySelector("#game");
const canvas = elem.getContext("2d");

//----------- Canvas Elements --------------------

const canvasXSize = 1400, canvasYSize = 800;

//----------- Game Elements-------------------
const GAMESTATE = {
    PAUSED: 0,
    INTRO: 2,
    MENU: 4,
    CONTROLS: 6,
    INSTRUCTIONS: 8,
    LEVELS: 10
}

var currentLevel = 1; //The Level the Player is currently Playing (Level 1 to N)

//Map Design Variables
var mapSpeed = 3 + (3 * currentLevel); //Map Speed is automatically adjusted according to current Level

//Map Lanes Settings Variables
var mapXStartingPosition = canvasXSize; //Starting X Position of Map/Walls
var wallSize = 100, wallGap = 10 * mapSpeed; //Wall Variables
var topLane = 400, laneGap = 20;
var botLane = topLane + laneGap;

//Unit Configuration Variables
var unitXPosition = wallSize * 2, unitSize = wallSize, unitSpeed = wallSize + laneGap;
const unitStartLane = botLane + wallSize;

var xTravel = 0, yTravel = 0, slash = 0; //Player Command Variables
var frame = 0;
var slashDuration = (150 + (40*currentLevel))/(mapSpeed*2);
var dmgTaken = 0;
var unitHP = 3, heartSize = wallSize - 20;

//-------------- Class Variables ----------------
let level = new Levels(canvasXSize, canvasYSize, mapXStartingPosition, topLane, botLane, wallSize, wallGap);
let unit = new Unit(unitSize, unitXPosition, unitStartLane, slashDuration);
let health = new Health(unitHP, heartSize);
let theme = new Theme();
let menu = new Menu(canvasXSize, canvasYSize, GAMESTATE.INTRO, level.getCurrentLevel())

//-------------Functions--------------------
function gameLoop(deltatime)
{
    document.onkeydown = playerCommand;

    if(yTravel != 0 || slash != 0){
        unit.travelMap(yTravel, topLane, botLane, xTravel);
        canvas.clearRect(0,0,1200,800)
        level.setPlaying(level.drawMap(canvas, xTravel, health));
        level.getMap(level.getCurrentLevel()).slashCollision(unit, health);
        unit.draw(canvas, frame, yTravel, xTravel);
        health.drawHealth(canvas);

        menu.draw(canvas)

        resetCommands();
    }else{
        canvas.clearRect(0,0,1200,800);
        level.setPlaying(level.drawMap(canvas, xTravel, health));
        level.getMap(level.getCurrentLevel()).slashCollision(unit, health);
        unit.draw(canvas, frame, 0, xTravel);
        health.drawHealth(canvas);

        menu.draw(canvas)

        resetCommands();
    }
    requestAnimationFrame(gameLoop);
}

function playerCommand(e){
    if(e.keyCode == 87 || e.keyCode == 38){ //W or Up 
        yTravel = -(unitSpeed);

    }else if(e.keyCode == 83 || e.keyCode == 40){ //S or Down
        yTravel = unitSpeed;

    }else if(e.keyCode == 32 && health.getHealth() > 0){ // Space, Enter or Esc (Start/Pause Game)
        mapSpeed = 3 + (3 * level.getCurrentLevel());
        xTravel += mapSpeed - (xTravel * 2);
        
        menu.setState((menu.getState()+1)%2);

        theme.setTheme(level.getCurrentLevel());
        gameTheme[theme.getCurrentTheme()].play(theme.getVolume(), menu.getState());

    }else if(e.keyCode == 77){ //MENU
        xTravel = 0;

        menu.setState(GAMESTATE.MENU);

    }else if(e.keyCode == 67 && menu.getState() == GAMESTATE.MENU){ //CONTROLS MENU
        menu.setState(GAMESTATE.CONTROLS)
     
    }else if(e.keyCode == 16 && menu.getState() == GAMESTATE.MENU){ //CHOOSE A LEVEL MENU
        menu.setState(GAMESTATE.LEVELS)

    }else if(e.keyCode == 86 && menu.getState() == GAMESTATE.MENU){ //HOW TO PLAY MENU
        menu.setState(GAMESTATE.INSTRUCTIONS)
        console.log("HOW TO PLAY")

    }else if(e.keyCode == 49 && menu.getState() == GAMESTATE.LEVELS){ //CHOSE LEVEL 1
        currentLevel = 1;
        mapSpeed = 3 + (3 * currentLevel);
        gameTheme[theme.getCurrentTheme()].stop();
        level.setCurrentLevel(currentLevel)
        level.getBG().setBG(currentLevel)
        level.restartLevel();
        level.getMap(currentLevel).setWallGap(mapSpeed);
        unit.setSlashDuration(currentLevel, mapSpeed);
        health.refreshHealth();

        menu.setLevel(currentLevel)
        menu.setState(GAMESTATE.INTRO)

    }else if(e.keyCode == 50 && menu.getState() == GAMESTATE.LEVELS){ //CHOSE LEVEL 2
        currentLevel = 2;
        mapSpeed = 3 + (3 * currentLevel);
        gameTheme[theme.getCurrentTheme()].stop();
        level.setCurrentLevel(currentLevel)
        level.getBG().setBG(currentLevel)
        level.restartLevel();
        level.getMap(currentLevel).setWallGap(mapSpeed);
        unit.setSlashDuration(currentLevel, mapSpeed);
        health.refreshHealth();

        menu.setLevel(currentLevel)
        menu.setState(GAMESTATE.INTRO)

    }else if(e.keyCode == 51 && menu.getState() == GAMESTATE.LEVELS){ //CHOSE LEVEL 3
        currentLevel = 3;
        mapSpeed = 3 + (3 * currentLevel);
        gameTheme[theme.getCurrentTheme()].stop();
        level.setCurrentLevel(currentLevel)
        level.getBG().setBG(currentLevel)
        level.restartLevel();
        level.getMap(currentLevel).setWallGap(mapSpeed);
        unit.setSlashDuration(currentLevel, mapSpeed);
        health.refreshHealth();

        menu.setLevel(currentLevel)
        menu.setState(GAMESTATE.INTRO)

    }else if(e.keyCode == 52 && menu.getState() == GAMESTATE.LEVELS){ //CHOSE LEVEL 4
        currentLevel = 4;
        mapSpeed = 3 + (3 * currentLevel);
        gameTheme[theme.getCurrentTheme()].stop();
        level.setCurrentLevel(currentLevel)
        level.getBG().setBG(currentLevel)
        level.restartLevel();
        level.getMap(currentLevel).setWallGap(mapSpeed);
        mapSpeed = 3 + (3 * level.getCurrentLevel());
        health.refreshHealth();

        menu.setLevel(currentLevel)
        menu.setState(GAMESTATE.INTRO)

    }else if(e.keyCode == 53 && menu.getState() == GAMESTATE.LEVELS){ //CHOSE LEVEL 5
        currentLevel = 5;   
        mapSpeed = 3 + (3 * currentLevel);
        gameTheme[theme.getCurrentTheme()].stop();
        level.setCurrentLevel(currentLevel)
        level.getBG().setBG(currentLevel)
        level.restartLevel();
        level.getMap(currentLevel).setWallGap(mapSpeed);
        unit.setSlashDuration(currentLevel, mapSpeed);
        health.refreshHealth();   
        
        menu.setLevel(currentLevel)
        menu.setState(GAMESTATE.INTRO)

    }else if(e.keyCode == 68 || e.keyCode == 75 || e.keyCode == 76){ // D or K or L (Slash/Attack)
        if(unit.getSlash() <= 0 && xTravel != 0){
            unit.slashCommand();
        }
    }
}

function resetCommands(){
    yTravel = 0;
    if(unit.getSlash() > 0){
        unit.slashDecrement();
    }else{
        unit.setSlashZero();
    }

    if(health.getHealth() <= 0 || level.getPlaying() == 0){
        xTravel = 0;
            level.restartLevel(level.getCurrentLevel());
            health.refreshHealth();
            unit.refreshUnitPos();
            menu.setState(GAMESTATE.INTRO);
            theme.setTheme(level.getCurrentLevel());
            gameTheme[theme.getCurrentTheme()].stop();
    }
}

gameLoop();