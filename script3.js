//breathing animation of the boy
var boy = document.getElementById("boy");
idleImageNumber = 1;
idleAnimationNumber = 0;

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




walkImageNumber= 1;
walkAnimationNumber =0;

function walkAnimation(){

    walkImageNumber = walkImageNumber +1;

    if (walkImageNumber ==11){
        walkImageNumber=1;
    }


    boy.src="D:/game/TreasureHunt/resources/Walk ("+walkImageNumber+").png";
}

function walkAnimationStart(){
    walkAnimationNumber = setInterval(walkAnimation,250);
    clearInterval(idleAnimationNumber);
}

function keyCheck(event){
    //alert(event.which);
    var keyCode = event.which;

    if (event.keyCode === 13) {
        if (walkAnimationNumber === 0) {
          walkAnimationStart();
        }
    
        if (movebackgroundanimationid === 0) {
          movebackgroundanimationid = setInterval(movebackground, 100);
        }
      }

         // Check if the key pressed is "0"
     if (event.key === "0") {
        // Call the redirect function to go to scene3.html
        redirectToScene4();
    }
    }

var backgroundimagepositionX = 0;
var movebackgroundanimationid = 0;

function movebackground() {
    backgroundimagepositionX = backgroundimagepositionX - 20;
    document.getElementById("background").style.backgroundPositionX = backgroundimagepositionX + "px";
  
    if (frogReached && walkAnimationNumber === 0 && frogPositionX <= boyPositionX + boyStopDistance && backgroundimagepositionX <= -2000) {
      clearInterval(movebackgroundanimationid);
    }
  }
    // Meeting the frog
var frog = document.getElementById("frog");
var boyStopDistance = 200; // Distance to stop the frog from the boy
var frogPositionX = parseInt(window.getComputedStyle(frog).getPropertyValue("margin-left"));
var boyPositionX = parseInt(window.getComputedStyle(boy).getPropertyValue("margin-left"));
var frogReached = false;
frogMoveInterval = 0; // Add this line to define the frogMoveInterval variable

function moveFrog() {
  var frogStep = 10; // Distance the frog moves in each step

  frogPositionX = parseInt(window.getComputedStyle(frog).getPropertyValue("margin-left"));
  boyPositionX = parseInt(window.getComputedStyle(boy).getPropertyValue("margin-left"));

  if (frogPositionX > boyPositionX + boyStopDistance) {
    frogPositionX -= frogStep;
    frog.style.marginLeft = frogPositionX + "px";
  } else {
    clearInterval(frogMoveInterval);
    stopBackgroundAnimation();
    chatAnimationStart();
  }
}
  
  
  

function stopBackgroundAnimation() {
  clearInterval(movebackgroundanimationid);
}

frog.addEventListener("click", function() {
    if (!frogReached) {
      clearInterval(walkAnimationNumber); // Stop the walking animation
      frogReached = true;
      frogMoveInterval = setInterval(moveFrog, 100); // Assign the interval to frogMoveInterval
    }
  });

  var chat = document.getElementById("chat");

  chatImageNumber = 0;
  chatAnimationNumber = 0;
  var maxChatImages = 4; // The total number of chat bubble images
  
  function chatAnimation() {
    chatImageNumber = chatImageNumber + 1;
  
    if (chatImageNumber > maxChatImages) {
      clearInterval(chatAnimationNumber);
      frogchatAnimationStart(); // Start the frog chat animation after chat animation is finished
      return;
    }
  
    chat.src = "resources/chat (" + chatImageNumber + ").png";
  }
  
  function chatAnimationStart() {
    clearInterval(frogchatAnimationNumber); // Clear the frog chat animation interval
    chatAnimationNumber = setInterval(chatAnimation, 1000);
  }
  

//frog convo

var frogchat = document.getElementById("frogchat");

frogchatImageNumber = 0;
frogchatAnimationNumber = 0;
var frogmaxChatImages = 5; // The total number of chat bubble images

function frogchatAnimation() {
    frogchatImageNumber = frogchatImageNumber + 1;

    if (frogchatImageNumber > frogmaxChatImages) {
        clearInterval(frogchatAnimationNumber);
        return;
    }
    frogchat.src="resources/S3chat ("+frogchatImageNumber+").png";

}

function frogchatAnimationStart() {
    setTimeout(function() {
      frogchatAnimationNumber = setInterval(frogchatAnimation, 1500);
    }, (maxChatImages + 1) * 100); // Add 1 to include the last chat image delay
  }



// Function to redirect to scene2.html
function redirectToScene4() {
    window.location.href = "scene4.html";
}

// Function to handle key press events
function handleKeyPress(event) {
   
}

// Attach key press event listener
document.addEventListener("keydown", handleKeyPress);







