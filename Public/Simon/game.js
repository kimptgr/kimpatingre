var gamePattern = [];
var userClickedPattern = [] ;
function playSound(name) {
    var son = new Audio("./sounds/"+ name +".mp3");
    son.play(); 
};
function gameOver() {
    $("h1").text("Game Over au niveau " + (level-1) + ", appuyer sur une touche pour recommencer") ;
    started = false ;
    playSound("wrong");
    gamePattern = [];
    level = 1 ;
    $("body").addClass("game-over");
    setTimeout(()=> {$("body").removeClass("game-over")}, 200);
    
}

function animatePress (currentcolor) { 
    $("#"+currentcolor).addClass("pressed");
    setTimeout(()=>{$("#"+currentcolor).removeClass("pressed")}, 100);
};

function replay(i) {
    playSound(gamePattern[i]);
    $("#"+gamePattern[i]).fadeOut(100).fadeIn(100);
};

var buttonColors = ["green", "red", "yellow", "blue"];
var level = 1 ;
function nextSequence(){ //choisit une couleur l'ajoute et la joue augmente le niveau
    var randomNumber = Math.floor(Math.random()*4) ; 
    var randomChosenColor = buttonColors[randomNumber] ;
    gamePattern.push(randomChosenColor) ;

   var  i = 0; 
   var delay = setInterval (() => { 
     replay(i);
     i++;
     if ( i > gamePattern.length) {
         clearInterval(delay) ;
     }  
 }, 400);

    $("h1").text("Niveau "+level);
    level ++ ;
    userClickedPattern = [] ;
};



var started = false ;
$(document).on("keypress", function(){ // fait une première séquence utilisateur
    if (gamePattern.length < 1 ) {
        nextSequence();
        started = true;
    }
    else {}
    
});

$(".btn").click(function(event){ 
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor) ;
    animatePress(userChosenColor);
    if (started = true) { 
        if (userClickedPattern.length === gamePattern.length) {
            if (userClickedPattern.toString() == gamePattern.toString() ) {
                playSound(userChosenColor);
                
                setTimeout(()=>{nextSequence ()}, 1000);
    
            }
            else {gameOver();}
        }
        else {
            if (userClickedPattern[userClickedPattern.length - 1] == gamePattern[userClickedPattern.length - 1]) {
                playSound(userChosenColor);
            }

            else {gameOver();}
        }
    }});