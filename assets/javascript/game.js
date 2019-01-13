$(document).ready(function() {
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
      });
      
    $(".one")
          .css('display', 'block')
          .animate({opacity: 1.0, left: '120px'}, 600);
    $(".two")
          .css('display', 'block')
          .delay(150).animate({opacity: 1.0, left: '120px'}, 600);
    $(".three")
          .css('display', 'block')
          .delay(300).animate({opacity: 1.0, left: '120px'}, 600);
    $(".four")
          .css('display', 'block')
          .delay(450).animate({opacity: 1.0, left: '120px'}, 600);

    
    
    
    var Random = Math.floor(Math.random()*120) + 20;

    $(".randomNumber").text(Random);

    var num1 = Math.floor(Math.random()*12) + 1;
    var num2 = Math.floor(Math.random()*12) + 1;
    var num3 = Math.floor(Math.random()*12) + 1;
    var num4 = Math.floor(Math.random()*12) + 1;

    var userTotal = 0;
    var wins = 0;
    var loses = 0;

$("#numberWins").text(wins);
$("#numberLoses").text(loses);

function reset() {
    Random=Math.floor(Math.random()*120) + 20;
    console.log(Random)
    $(".randomNumber").text(Random);
    num1 = Math.floor(Math.random()*12) + 1;
    num2 = Math.floor(Math.random()*12) + 1;
    num3 = Math.floor(Math.random()*12) + 1;
    num4 = Math.floor(Math.random()*12) + 1;
    userTotal = 0;
    $("#finalTotal").text(userTotal);
    }

function yah() {
alert("You won!");
    wins++;
    $("#numberWins").text(wins);
    reset();
}

function loser() {
alert ("You lose!");
    loses++;
    $("#numberLoses").text(loses);
    reset();
}

    $("#one").on("click", function() {
        userTotal = userTotal + num1;
        console.log("New userTotal= " + userTotal);
        $("#finalTotal").text(userTotal); 
        //document.getElementById("finalTotal").textContent=userTotal;
            if(userTotal == document.getElementById("randomNumber").textContent) {
                yah();

            }
            else if(userTotal > Random) {
                loser();
            }
    })

    $("#two").on("click", function() {
        userTotal = userTotal + num2;
        console.log("New userTotal= " + userTotal);
        $("#finalTotal").text(userTotal);

            if(userTotal == document.getElementById("randomNumber").textContent) {
                yah();
            }
            else if(userTotal > Random) {
                loser();
            }
    })

    $("#three").on("click", function() {
        userTotal = userTotal + num3;
        console.log("New userTotal= " + userTotal);
        $("#finalTotal").text(userTotal);

            if(userTotal == document.getElementById("randomNumber").textContent) {
                yah();
            }
            else if(userTotal > Random) {
                loser();
            }
    })

    $("#four").on("click", function() {
        userTotal = userTotal + num4;
        console.log("New userTotal= " + userTotal);
        $("#finalTotal").text(userTotal);

            if(userTotal == document.getElementById("randomNumber").textContent) {
                yah();
            }
            else if(userTotal > Random) {
                loser();
            }
    });
})

