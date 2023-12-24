//breathing animation of the boy
var boy = document.getElementById("boy");
idleImageNumber = 1;
idleAnimationNumber = 0;

dialogueimagenumber =0;
dialogueanimationnumber = 0;

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


//convo bubble

  var chat = document.getElementById("chat");

  chatImageNumber = 0;
  chatAnimationNumber = 0;
  var maxChatImages = 2; // The total number of chat bubble images
  
  function chatAnimation() {
    chatImageNumber = chatImageNumber + 1;
  
    if (chatImageNumber > maxChatImages) {
      clearInterval(chatAnimationNumber);
      frogchatAnimationStart(); // Start the frog chat animation after chat animation is finished
      return;
    }
  
    chat.src = "resources/chat (" + chatImageNumber + ").png";
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
function blockanimation() {
    for (var i = 0; i < 5; i++) {
      var block = document.getElementById("block" + i);
      var currentmarginleft = getComputedStyle(block).marginLeft;
      var newmarginleft = parseInt(currentmarginleft) - 55;
      block.style.marginLeft = newmarginleft + "px";
  
      if (newmarginleft >= -110 && newmarginleft <= 100) {
        if (boyMarginTop > 300) {
          clearInterval(blockanimationid);
          clearInterval(runAnimationNumber);
          walkAnimationNumber = -1;
          clearInterval(jumpanimationnumber);
          jumpanimationnumber = -1;
          clearInterval(movebackgroundanimationid);
          movebackgroundanimationid = -1;
  
          deadanimationnumber = setInterval(deadanimation, 100);
        } else if (i === 4) {
          showTreasureImage(); // Show the treasure image when the last block is reached
        }
      }
    }
  }
  
  // Function to show the treasure image
  function showTreasureImage() {
    var treasure = document.getElementById("Treasure");
    treasure.style.display = "block";
    showChatImage();
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


// ...

var treasure = document.getElementById("Treasure");
var chat = document.getElementById("S4chat");

// Function to check collision between the boy and the treasure
function checkCollision() {
  var boyRect = boy.getBoundingClientRect();
  var treasureRect = treasure.getBoundingClientRect();

  if (
    boyRect.left < treasureRect.right &&
    boyRect.right > treasureRect.left &&
    boyRect.top < treasureRect.bottom &&
    boyRect.bottom > treasureRect.top
  ) {
    // Boy and treasure have collided
    showTreasureImage();
  }
}

// Function to show the treasure image
function showTreasureImage() {
  treasure.style.display = "block";
  showChatImage();
}

// Function to show the chat image
function showChatImage() {
  chat.src = "resources/S4chat (2).png";
}

// Update function to check collision and perform necessary actions
function update() {
  checkCollision();

  // ...

  // Call the update function recursively
  requestAnimationFrame(update);
}

// Call the update function to start the game loop
update();



