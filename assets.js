//-----------Floor Assets---------------
var floorIMG = new Image();
floorIMG.src = './Assets/grass.jpg';
var pathIMG = new Image();
pathIMG.src = './Assets/dirt.png';

//----------Player Assets----------------
var unitIMG = new Array();

unitIMG[0] = new Array();  //Down
unitIMG[0][0] = new Image();
unitIMG[0][0].src = './Assets/slimeIMGF1.png';
unitIMG[0][1] = new Image();
unitIMG[0][1].src = './Assets/slimeIMGF2.png';
unitIMG[0][2] = new Image();
unitIMG[0][2].src = './Assets/slimeIMGF3.png';

unitIMG[1] = new Array();  //Up
unitIMG[1][0] = new Image();
unitIMG[1][0].src = './Assets/slimeIMGB1.png';
unitIMG[1][1] = new Image();
unitIMG[1][1].src = './Assets/slimeIMGB2.png';
unitIMG[1][2] = new Image();
unitIMG[1][2].src = './Assets/slimeIMGB3.png';

unitIMG[2] = new Array();  //Left
unitIMG[2][0] = new Image();
unitIMG[2][0].src = './Assets/slimeIMGL1.png';
unitIMG[2][1] = new Image();
unitIMG[2][1].src = './Assets/slimeIMGL2.png';
unitIMG[2][2] = new Image();
unitIMG[2][2].src = './Assets/slimeIMGL3.png';

unitIMG[3] = new Array();  //Right
unitIMG[3][0] = new Image();
unitIMG[3][0].src = './Assets/slimeIMGR1.png';
unitIMG[3][1] = new Image();
unitIMG[3][1].src = './Assets/slimeIMGR2.png';
unitIMG[3][2] = new Image();
unitIMG[3][2].src = './Assets/slimeIMGR3.png';

//----------Background Assets------------
var backgroundIMG = new Array();
backgroundIMG[0] = new Image();
backgroundIMG[0].src = './Assets/background1.png';
backgroundIMG[1] = new Image();
backgroundIMG[1].src = './Assets/background2.png';
backgroundIMG[2] = new Image();
backgroundIMG[2].src = './Assets/background3.png';
backgroundIMG[3] = new Image();
backgroundIMG[3].src = './Assets/background4.png';
backgroundIMG[4] = new Image();
backgroundIMG[4].src = './Assets/background5.png';

//----------Heart Assets----------------

var heartIMG = new Image();
heartIMG.src = './Assets/heartIMG.png'

//FireBall Assets-------------------------------
var fireballIMG = new Array();
fireballIMG[1] = new Image();
fireballIMG[1].src = './Assets/Fireball1.png';
fireballIMG[2] = new Image();
fireballIMG[2].src = './Assets/Explosion2.png';
fireballIMG[3] = new Image();
fireballIMG[3].src = './Assets/Explosion1.png';

//Sound Assets-----------------------------------

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(volume, menu){
        this.sound.volume=volume;
        if(menu!=0){
            this.sound.play();
        }else if(menu == 0){
            this.sound.pause();
        }
    }
    this.replay = function(volume){
        this.sound.volume=volume;
        this.sound.currentTime=0;
        this.sound.play();
    }
    this.restart = function(){
        this.sound.currentTime=0;
    }
}

explodeSound = new sound("./Assets/explodeSound.mp3");

gameTheme = new Array();
gameTheme[0] = new sound("./Assets/gameTheme.mp3");
gameTheme[1] = new sound("./Assets/gameTheme1.mp3");
gameTheme[2] = new sound("./Assets/gameTheme2.mp3");
gameTheme[3] = new sound("./Assets/gameTheme3.mp3");
themeCount = 4;

oraSound = new Array();
oraSound[0] = new sound("./Assets/ORA1.mp3");
oraSound[1] = new sound("./Assets/ORA2.mp3");
oraSound[2] = new sound("./Assets/ORA4.mp3");
oraSound[3] = new sound("./Assets/ORA5.mp3");
oraSound[4] = new sound("./Assets/ORA6.mp3");
oraSound[5] = new sound("./Assets/ORA6.mp3");
oraCount = 6;


painSound = new Array();
painSound[0] = new sound("./Assets/damageSound1.mp3");
painSound[1] = new sound("./Assets/damageSound2.mp3");
painSound[2] = new sound("./Assets/damageSound3.mp3");
painSound[3] = new sound("./Assets/damageSound4.mp3");
painSound[4] = new sound("./Assets/damageSound5.mp3");
painSound[5] = new sound("./Assets/damageSound6.mp3");
painCount = 6;