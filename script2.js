//breathing animation of the boy
var boy = document.getElementById("boy");
idleImageNumber = 1;
idleAnimationNumber = 0;

dialogueimagenumber =0;
dialogueanimationnumber = 0;
var Dialogue = document.getElementById("scene2d");



scene2d.src="D:/game/TreasureHunt/resources/scene2d.png";







function idleAnimation(){
 
    idleImageNumber = idleImageNumber + 1;

    if(idleImageNumber == 16){
        idleImageNumber=1;

    }
    boy.src="resources/Idle ("+idleImageNumber+").png";

}

function idleAnimationStart(){
    idleAnimationNumber = setInterval(idleAnimation,200); 
}

//run animation
runImageNumber= 1;
runAnimationNumber =0;

function runAnimation(){

    runImageNumber = runImageNumber +1;

    if (runImageNumber ==16){
        runImageNumber=1;
    }

    //boy.src = "resources/Run"/ "+("+runImageNumber+").png";
    boy.src="D:/game/TreasureHunt/resources/Run ("+runImageNumber+").png";
}

function runAnimationStart(){
    runAnimationNumber = setInterval(runAnimation,250);
    clearInterval(idleAnimationNumber);
}

jumpanimationnumber = 0;
jumpimagenumber = 1; 
boyMarginTop = 330;

function jumpanimation(){

jumpimagenumber= jumpimagenumber + 1;

if(jumpimagenumber <= 7){
boyMarginTop = boyMarginTop - 45;
boy.style.marginTop = boyMarginTop + "px";
}

if(jumpimagenumber >= 7){
    boyMarginTop = boyMarginTop + 45;
    boy.style.marginTop = boyMarginTop + "px";
}

if(jumpimagenumber == 12){

    jumpimagenumber = 1;
    clearInterval(jumpanimationnumber);
    jumpanimationnumber =0;
    runImageNumber = 0;
    runAnimationStart();
}

    boy.src="D:/game/TreasureHunt/resources/Jump ("+jumpimagenumber+").png";

    //boy.src = "resources/Jump (1).png";
}

function jumpanimationstart(){

clearInterval(idleAnimationNumber);
walkImageNumber = 0;
clearInterval(runAnimationNumber);
jumpanimationnumber= setInterval(jumpanimation,100);
}


var backgroundimagepositionX = 0;
var movebackgroundanimationid = 0 ;

//moving background
function movebackground (){

    backgroundimagepositionX = backgroundimagepositionX - 10;
    document.getElementById("background").style.backgroundPositionX = backgroundimagepositionX + "px";
}

// check which code is the button
function keyCheck(event){
    //alert(event.which);
    var keyCode = event.which;


    
//run when we press space
    if(keyCode == 32){
        if(runAnimationNumber == 0){
            runAnimationStart();

        }

        if(blockanimationid == 0){
            blockanimationid = setInterval(blockanimation,100);
        }

                // screen moves forward when the boy walk
                if(movebackgroundanimationid == 0){
                    movebackgroundanimationid = setInterval(movebackground,100);
                }
    }
    if(keyCode == 13){
        if (jumpanimationnumber == 0){
            jumpanimationstart();
        }

    }

     // Check if the key pressed is "0"
     if (event.key === "0") {
        // Call the redirect function to go to scene3.html
        redirectToScene3();
    }
}
// bush barriers code

blockmarginleft = 1260;

function createBlock(){

    for (var i=0; i<=4; i++) {

    var block = document.createElement("div");
    block.className = "block";
    document.getElementById("background").appendChild(block);
    block.style.marginLeft = blockmarginleft + "px";
    block.id = "block" + i;
    blockmarginleft = blockmarginleft + 800;
}
}

var blockanimationid = 0;

function blockanimation(){
    for(var i =0; i<5; i++){
        var block = document.getElementById("block" + i);
        var currentmarginleft = getComputedStyle(block).marginLeft;
        var newmarginleft = parseInt(currentmarginleft) - 55;
        block.style.marginLeft = newmarginleft + "px";

        if (newmarginleft>= -110 & newmarginleft <= 100){
            if(boyMarginTop>300){
                clearInterval(blockanimationid);
        
                clearInterval(runAnimationNumber);
                walkAnimationNumber = -1;
        
                clearInterval(jumpanimationnumber);
                jumpanimationnumber = -1;
        
                clearInterval(movebackgroundanimationid);
                movebackgroundanimationid=-1;
                
                deadanimationnumber = setInterval(deadanimation,100);
        

    
              
            }

            }
        
        }
    }

deadimagenumber =0 ;
deadanimationnumber = 0;

function deadanimation(){


    deadimagenumber = deadimagenumber +1;

    if(deadimagenumber == 16){
        deadimagenumber = 7
    }

    boy.src = "resources/Dead ("+deadimagenumber+").png";
}


// Function to redirect to scene2.html
function redirectToScene3() {
    window.location.href = "scene3.html";
}

// Function to handle key press events
function handleKeyPress(event) {
   
}

// Attach key press event listener
document.addEventListener("keydown", handleKeyPress);
