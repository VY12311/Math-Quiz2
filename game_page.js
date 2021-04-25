var player1_name = localStorage.getItem("Username1");
var player2_name = localStorage.getItem("Username2");

var player1_score = 0;
var player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name;
document.getElementById("player2_name").innerHTML = player2_name;

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question turn" + player1_name;
document.getElementById("player_answer").innerHTML = "Answer turn" + player2_name;

function send() {
    
   var number1 = document.getElementById("Number_1").value;
   var number2 = document.getElementById("Number_2").value;
   localStorage.setItem("number 1",number1);
   localStorage.setItem("number 2",number2);
   var actual_answer = parseInt(number1) * parseInt(number2);
   console.log(actual_answer);
   question_word = "<h4 id='word_display'>" + number1 + " X " + number2 +"</h4>";
   input_box = "<br>Answer : <input type='text' id='input_check_box'>";
   check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
   row =  question_word + input_box + check_button ; 
   document.getElementById("output").innerHTML = row;
document.getElementById("Number_1").value = "";
document.getElementById("Number_2").value = "";
}

var question_turn = "player1";
var answer_turn = "player2";

function check()
{
   var number1 = localStorage.getItem("number 1");
   var number2 = localStorage.getItem("number 2")
   var actual_answer = parseInt(number1) * parseInt(number2);
	var get_answer = document.getElementById("input_check_box").value;
	console.log("answer in lower case - " + get_answer);
	if(actual_answer == get_answer)	
	{
		if(answer_turn == "player1")
		{
			player1_score = player1_score +1;
		    document.getElementById("player1_score").innerHTML = player1_score;
		}else {
		
			player2_score = player2_score +1;
		    document.getElementById("player2_score").innerHTML = player2_score;
		}
	}else{
		if(question_turn == "player1")
		{
			player1_score = player1_score +1;
		    document.getElementById("player1_score").innerHTML = player1_score;
		}else {
		
			player2_score = player2_score +1;
		    document.getElementById("player2_score").innerHTML = player2_score;
		}
	}
	if(question_turn == "player1")
	{
		question_turn = "player2"
		document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name ;
	}
	else 
	{
		question_turn = "player1"
		document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
	}

	if(answer_turn == "player1")
	{
		answer_turn = "player2"
		document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;
	}
	else 
	{
		answer_turn = "player1"
		document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name ;
	}

    document.getElementById("output").innerHTML = "";
    localStorage.removeItem("number 1");
    localStorage.removeItem("number 2")
}

