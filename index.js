import Unit from '/unit.js';
import Levels from '/level.js';
import Health from '/health.js';
import Background from '/background.js';
import Theme from '/theme.js';

const elem = document.querySelector("#game");
const canvas = elem.getContext("2d");

//----------- Canvas Elements --------------------

const canvasXSize = 1400, canvasYSize = 800;

//----------- Game Elements-------------------
var currentLevel = 5; //The Level the Player is currently Playing (Level 1 to N)

//Map Design Variables
var mapSpeed = 3 + (3 * currentLevel); //Map Speed is automatically adjusted according to current Level

//Map Lanes Settings Variables
var mapXStartingPosition = canvasXSize; //Starting X Position of Map/Walls
var wallSize = 100, wallGap = 10*mapSpeed; //Wall Variables
var topLane = 400, laneGap = 20;
var botLane = topLane + laneGap;

//Unit Configuration Variables
var unitXPosition = wallSize * 2, unitSize = wallSize, unitSpeed = wallSize + laneGap;
const unitStartLane = botLane + wallSize;

var xTravel = 0, yTravel = 0, slash = 0; //Player Command Variables
var frame = 0;
const slashDuration = 300/(mapSpeed*2);
var dmgTaken = 0;
var unitHP = 3, heartSize = wallSize - 20;

//-------------- Class Variables ----------------
let level = new Levels(canvasXSize, canvasYSize, mapXStartingPosition, topLane, botLane, wallSize, wallGap);
let unit = new Unit(unitSize, unitXPosition, unitStartLane, slashDuration);
let health = new Health(unitHP, heartSize);
let bg = new Background(canvasXSize, canvasYSize, 0, 0, backgroundIMG[currentLevel-1]);
let theme = new Theme();

//-------------Functions--------------------
function gameLoop(deltatime)
{;
    if(xTravel>0){
        if(frame < 29){
            frame++;
        }else{
            frame = 0;
        }
    }

    if(frame % 1 == 0){
        document.onkeydown = playerCommand;
        if(yTravel != 0 || slash != 0){
            unit.travelMap(yTravel, topLane, botLane, xTravel);
            canvas.clearRect(0,0,1200,800)
            bg.drawBG(canvas);
            level.setPlaying(level.drawMap(canvas, xTravel,currentLevel, health));
            level.getMap(currentLevel).slashCollision(unit, health);
            unit.draw(canvas, frame, yTravel, xTravel);   
            health.drawHealth(canvas);
            resetCommands();
        }else{
            canvas.clearRect(0,0,1200,800);
            bg.drawBG(canvas);
            level.setPlaying(level.drawMap(canvas, xTravel,currentLevel, health));
            level.getMap(currentLevel).slashCollision(unit, health);
            unit.draw(canvas, frame, 0, xTravel);
            health.drawHealth(canvas);
            resetCommands();
        } 
    }
    requestAnimationFrame(gameLoop);
}

var menu = 0;

function playerCommand(e){
    if(e.keyCode == 87 || e.keyCode == 38){ //W or Up 
        yTravel = -(unitSpeed);
    }else if(e.keyCode == 83 || e.keyCode == 40){ //S or Down
        yTravel = unitSpeed;
    }else if(e.keyCode == 32 || e.keyCode == 13 || e.keyCode == 27 && health.getHealth() > 0){ // Space, Enter or Esc (Start/Pause Game)
        xTravel += mapSpeed - (xTravel * 2);
        menu = (menu+1)%2;
        theme.setTheme(currentLevel);
        gameTheme[theme.getCurrentTheme()].play(theme.getVolume(), menu);
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
            level.restartLevel(currentLevel);
            health.refreshHealth();
            unit.refreshUnitPos();
            menu = 0;
            theme.setTheme(currentLevel);
            gameTheme[theme.getCurrentTheme()].restart();
            gameTheme[theme.getCurrentTheme()].play(theme.getVolume(), menu);
    }
}

gameLoop();