//breathing animation of the boy
var boy = document.getElementById("boy");
idleImageNumber = 1;
idleAnimationNumber = 0;

function idleAnimation(){
 
    idleImageNumber = idleImageNumber + 1;

    if(idleImageNumber == 11){
        idleImageNumber=1;

    }
    boy.src="resources/Idle ("+idleImageNumber+").png";
    //boy.src=" resources/Idle (1).png";
}

// walk animation of the boy
function idleAnimationStart(){
    idleAnimationNumber = setInterval(idleAnimation,200); 
}

walkImageNumber= 1;
walkAnimationNumber =0;

function walkAnimation(){

    walkImageNumber = walkImageNumber +1;

    if (walkImageNumber ==11){
        walkImageNumber=1;
    }

    //boy.src = "resources/Run"/ "+("+runImageNumber+").png";
    boy.src="D:/game/TreasureHunt/resources/Walk ("+walkImageNumber+").png";
}

function walkAnimationStart(){
    walkAnimationNumber = setInterval(walkAnimation,250);
    clearInterval(idleAnimationNumber);
}

// jump animation
jumpanimationnumber = 0;
jumpimagenumber = 1; 
boyMarginTop = 360;

function jumpanimation(){

jumpimagenumber= jumpimagenumber + 1;

if(jumpimagenumber <= 6){
boyMarginTop = boyMarginTop - 35;
boy.style.marginTop = boyMarginTop + "px";
}

if(jumpimagenumber >= 7){
    boyMarginTop = boyMarginTop + 35;
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
clearInterval(walkAnimationNumber);
jumpanimationnumber= setInterval(jumpanimation,100);

}


// walk when we press enter
function keyCheck(event){
    //alert(event.which);
    var keyCode = event.which;

    if(keyCode == 13){
        if (walkAnimationNumber == 0){
            walkAnimationStart();
        }
        // screen moves forward when the boy walk
        if(movebackgroundanimationid == 0){
            movebackgroundanimationid = setInterval(movebackground,100);
        }

        if(boxanimationid == 0){
            boxanimationid = setInterval(boxanimation,500);
        }
    }

    if(keyCode == 32){
        if(runAnimationNumber == 0){
            runAnimationStart();

        }

        if(movebackgroundanimationid == 0){
            movebackgroundanimationid = setInterval(movebackground,100);
        }

        if(boxanimationid == 0){
            boxanimationid = setInterval(boxanimation,100);
        }

        if (boyrunanimationid == 0){
            boyrunanimationid=setInterval(runAnimation,100);
        }

    }
    
}

var backgroundimagepositionX = 0;
var movebackgroundanimationid = 0 ;

//moving background
function movebackground (){

    backgroundimagepositionX = backgroundimagepositionX - 10;
    document.getElementById("background").style.backgroundPositionX = backgroundimagepositionX + "px";
}

//map moving towards

boxmarginleft = 900;

function createBoxes(){

    for (var i=0; i<=1; i++) {

    var box = document.createElement("div");
    box.className = "box";
    document.getElementById("background").appendChild(box);
    box.style.marginLeft = boxmarginleft + "px";
    //box.id = "box" + i;
    box.id="box0";
    }
} 
var boxanimationid =0;
function boxanimation(){
    for (var i =0; i<1; i++)
    // var box = document.getElementById("box" +i);
    var box = document.getElementById("box0");
    var currentmarginleft = getComputedStyle(box). marginLeft;
    var newmarginleft = parseInt(currentmarginleft) - 50;
    box.style.marginLeft = newmarginleft + "px";
    
    if (newmarginleft>= -110 & newmarginleft <= 100){
        if(boyMarginTop>300){
            clearInterval(boxanimationid);
    
            clearInterval(walkAnimationNumber);
            walkAnimationNumber = -1;
    
            clearInterval(jumpanimationnumber);
            jumpanimationnumber = -1;
    
            clearInterval(movebackgroundanimationid);
            movebackgroundanimationid=-1;

           dialogueanimationnumber = setInterval(dialogueanimation,1000);
        }
    }
}

dialogueimagenumber =0;
dialogueanimationnumber = 0;
var Dialogue = document.getElementById("dlg");

function dialogueanimation(){


    dialogueimagenumber = dialogueimagenumber+1;

    if (dialogueimagenumber == 3){
        dialogueimagenumber = 1
        return;
    }
    

    //boy.src = "resources/Run"/ "+("+runImageNumber+").png";
    dlg.src="D:/game/TreasureHunt/resources/Dialogue ("+dialogueimagenumber+").png";


}

//run animation
runImageNumber= 1;
runAnimationNumber =0;
boyrunanimationid =0;

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


// Function to redirect to scene2.html
function redirectToScene2() {
    window.location.href = "scene2.html";
}

// Example animation completion callback
function animationComplete() {
    // Call the redirect function after the animation is finished
    redirectToScene2();
}

// Call the animationComplete function when the animation is finished
// Replace this with your actual animation completion event
setTimeout(animationComplete, 15000); // Replace 5000 with the duration of your animation in milliseconds
