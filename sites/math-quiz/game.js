var num01;
var num02;
var answer;
var currentUser = 0;

var player01score = 0;
var player02score = 0;
localStorage.setItem('score01', player01score);
localStorage.setItem('score02', player02score);
localStorage.setItem('user', currentUser);

updateNames();
function updateNames() {
    document.getElementById('player01name').innerHTML = localStorage.getItem('player01') + ": " + localStorage.getItem('score01');
    document.getElementById('player02name').innerHTML = localStorage.getItem('player02') + ": " + localStorage.getItem('score02');
    if(localStorage.getItem('user') == 0) {
        document.getElementById('questioner').innerHTML = "Question - " + localStorage.getItem('player02');
        document.getElementById('answerer').innerHTML = "Answer - " + localStorage.getItem('player01');
    } else {
        document.getElementById('questioner').innerHTML = "Question - " + localStorage.getItem('player01');
        document.getElementById('answerer').innerHTML = "Answer - " + localStorage.getItem('player02');
    }
    
}
function sendWord() {
    num01 = document.getElementById('n1i').value;
    num02 = document.getElementById('n2i').value;
    answer = num01 * num02;
    document.getElementById('output').innerHTML = "<h3 id='equation'>Q) " + num01 + " * " + num02 + "</h3><h4>Answer:</h4>&nbsp;<input id='answerTxt' class='form-control' type='number'><br><button id='check' onclick='check()'>Check</button>";
    document.getElementById('input').innerHTML = "";
}
function check() {
    if(document.getElementById('answerTxt').value == answer) {
        console.log("correct");
        if(currentUser == 0) {
            currentUser++;
            player01score++;
            localStorage.setItem('score01', player01score);
            document.getElementById('player01name').innerHTML = localStorage.getItem('name01') + ": " + localStorage.getItem('score01');
        } else {
            currentUser--;
            player02score++;
            localStorage.setItem('score02', player02score);
            document.getElementById('player02name').innerHTML = localStorage.getItem('name02') + ": " + localStorage.getItem('score02');
        }
        localStorage.setItem('user', currentUser);
        updateNames();
        document.getElementById('output').innerHTML = "";
        document.getElementById('input').innerHTML = "<h4>Number 01</h4><input id='n1i' class='form-control' type='number'><h4>Number 02</h4><input id='n2i' class='form-control' type='number'><button id='send' onclick='sendWord()'>Send</button>";
    }
}