var win = 0;
var lose = 0;

$(document).ready(function(){
    $('table').fadeIn('fast');
    $('th').click(function(){
        $(this).effect('explode');
    });
    $('#reset').click(function(){
        reset();
    });
    $('td').click(function(){
        var j = parseInt($(this).text());
        upick(j);
    });
  document.getElementById("win").innerHTML = win;
  document.getElementById("lose").innerHTML = lose;
  
});


var bg1 = 'lightpink';
var bg2 = 'lightblue';

var randompick = function(){
    var random = Math.floor((Math.random()*9)+1);
    if (board[random-1] === (random)){
        document.getElementById(random).innerHTML= "O";
        $('#'+random).css('background-color',bg2);
        board[random-1] = "O";
        check("O");
    } else {
         randompick();
    }
};

var pcturn = function(){
    if (board[2] === 3){
        if ((board[0] === "X") & (board[1] === "X")){
            board[2] = "O";
            $('#3').css('background-color',bg2);
            document.getElementById(3).innerHTML= "O";
            check("O");
        } else if ((board[4]==="X") & (board[6] === "X")){
            board[2] = "O";
            $('#3').css('background-color',bg2);
            document.getElementById(3).innerHTML= "O";
            check("O");
        } else if ((board[5]==="X") & (board[8] === "X")){
            board[2] = "O";
            $('#3').css('background-color',bg2);
            document.getElementById(3).innerHTML= "O";
            check("O");
        } else {
            randompick();
        }
    } else {
        randompick();
    }
};

var reset = function(){
	board = [1,2,3,4,5,6,7,8,9];
	for (var i = 1;i <= 9;i++){
		document.getElementById(i).innerHTML= i;
	}
    
            var bg1 = 'lightpink';
			var bg2 = 'lightblue';
            $('td').css('background-color','white');
            $('td').css('color','black');
};

var board = [1,2,3,4,5,6,7,8,9];

var upick = function(num){
	if (board[(num - 1)] === num){
		document.getElementById(num).innerHTML= "X";
		$('#'+num).css('background-color',bg1);
        board[num-1] = "X";
		check("X");			
	}
};

var delay=1000; //1 seconds

setTimeout(function(){
	reset(); }, delay); 
var check = function(x) {
	if ((board[0] === x) & (board[1] === x) & (board[2] === x)) {
		if (x === "X") {
			alert("You win!");
          	win++;
			setTimeout(function(){
	reset(); }, delay); 
		} else {
			alert("You lose!");
           	lose++;
			setTimeout(function(){
	reset(); }, delay); 
		}
	} else if ((board[3] === x) & (board[4] === x) & (board[5] === x)) {
		if (x === "X") {
			alert("You win!");
          	win++;
			setTimeout(function(){
	reset(); }, delay); 
		} else {
			alert("You lose!");
           	lose++;
			setTimeout(function(){
	reset(); }, delay); 
		}
	} else if ((board[6] === x) & (board[7] === x) & (board[8] === x)) {
		if (x === "X") {
			alert("You win!");
           	win++;
			setTimeout(function(){
	reset(); }, delay); 
		} else {
			alert("You lose!");
           	lose++;
			setTimeout(function(){
	reset(); }, delay); 
		}
	} else if ((board[0] === x) & (board[3] === x) & (board[6] === x)) {
		if (x === "X") {
			alert("You win!");
           	win++;
			setTimeout(function(){
	reset(); }, delay); 
		} else {
			alert("You lose!");
           	lose++;
			setTimeout(function(){
	reset(); }, delay); 
		}
	} else if ((board[1] === x) & (board[4] === x) & (board[7] === x)) {
		if (x === "X") {
			alert("You win!");
           	win++;
			setTimeout(function(){
	reset(); }, delay); 
		} else {
			alert("You lose!");
           	lose++;
			setTimeout(function(){
	reset(); }, delay); 
		}
	} else if ((board[2] === x) & (board[5] === x) & (board[8] === x)) {
		if (x === "X") {
			alert("You win!");
           	win++;
			setTimeout(function(){
	reset(); }, delay); 
		} else {
			alert("You lose!");
           	lose++;
			setTimeout(function(){
	reset(); }, delay); 
					}
	} else if ((board[0] === x) & (board[4] === x) & (board[8] === x)) {
		if (x === "X") {
			alert("You win!");
           	win++;
			setTimeout(function(){
	reset(); }, delay); 
		} else {
			alert("You lose!");
           	lose++;
			setTimeout(function(){
	reset(); }, delay); 
		}
	} else if ((board[2] === x) & (board[4] === x) & (board[6] === x)) {
		if (x === "X") {
			alert("You win!");
           	win++;
			setTimeout(function(){
	reset(); }, delay); 
		} else {
			alert("You lose!");
           	lose++;
			setTimeout(function(){
	reset(); }, delay); 
		}
	} else if ((board[0] != 1) & (board[1] != 2) & (board[2] != 3) & (board[3] != 4) & (board[4] != 5) & (board[5] != 6) & (board[6] != 7) & (board[7] != 8) & (board[8] != 9)) {
		alert("Tie!");
		setTimeout(function(){
	reset(); }, delay); 
	} else if (x === "X"){
		pcturn();
	}
};
