window.onload = function(){


const playerName = document.getElementById("playerName");
const submitPlayer = document.getElementById("submitPlayer");
const selectA = document.getElementById('selectA');
const selectB = document.getElementById('selectB');
const submitMatch = document.getElementById("submitMatch");
//const matchResult = document.getElementById("matchResult");
const a1 = document.getElementById("a1");



const players = [];

document.getElementById("submitMatch").disabled = true;


class Player {
    constructor(n, w, l) {
      this.name = n;
      this.wins = w;
      this.losses = l;
    }
}

submitPlayer.addEventListener('click', function() {
  const player = new Player(playerName.value, 0, 0);
  players.push(player);
  document.getElementById("playerName").value = '';
  if(players.length>1){
      document.getElementById("morePlayers").innerHTML = "";
  }
});







$(document).on('change' , '.sets' , '.playerSelect', function(){

    var a1 = Number(matchResult.a1.value);
    var a2 = Number(matchResult.a2.value);
    var a3 = Number(matchResult.a3.value);
    var a4 = Number(matchResult.a4.value);
    var a5 = Number(matchResult.a5.value);
    
    var b1 = Number(matchResult.b1.value);
    var b2 = Number(matchResult.b2.value);
    var b3 = Number(matchResult.b3.value);
    var b4 = Number(matchResult.b4.value);
    var b5 = Number(matchResult.b5.value);
    
    var p1 = document.getElementById("p1");
    var p2 = document.getElementById("p2");
    var p3 = document.getElementById("p3");
    var p4 = document.getElementById("p4");
    var p5 = document.getElementById("p5");
    var winner = document.getElementById("winner");
    
    var ws = " wins this set!";
    
    var aPoints = 0;
    var bPoints = 0;
    
    

if(selectA.value!==""&&selectB.value!=="")
    {
    if((((a1-b1)>1||(b1-a1)>1)&&((a1==11||b1==11)))||(((a1-b1)==2||(b1-a1)==2)&&(a1>11||b1>11))){
        if(a1>b1){
            p1.innerHTML = selectA.value+ws;
            aPoints+=1;
        }else{
            p1.innerHTML = selectB.value+ws;
            bPoints+=1;
        }
    }else{
        p1.innerHTML ="";
    }
    
    if((((a2-b2)>1||(b2-a2)>1)&&((a2==11||b2==11)))||(((a2-b2)==2||(b2-a2)==2)&&(a2>11||b2>11))){
        if(a2>b2){
            p2.innerHTML = selectA.value+ws;
            aPoints+=1;
        }else{
            p2.innerHTML = selectB.value+ws;
            bPoints+=1;
        }
    }else{
        p2.innerHTML ="";    
    }
    
    if((((a3-b3)>1||(b3-a3)>1)&&((a3==11||b3==11)))||(((a3-b3)==2||(b3-a3)==2)&&(a3>11||b3>11))){
        if(a3>b3){
            p3.innerHTML = selectA.value+ws;
            aPoints+=1;
        }else{
            p3.innerHTML = selectB.value+ws;
            bPoints+=1;
        }
    }else{
        p3.innerHTML ="";    
    }
    
    if((((a4-b4)>1||(b4-a4)>1)&&((a4==11||b4==11)))||(((a4-b4)==2||(b4-a4)==2)&&(a4>11||b4>11))){
        if(a4>b4){
            p4.innerHTML = selectA.value+ws;
            aPoints+=1;
        }else{
            p4.innerHTML = selectB.value+ws;
            bPoints+=1;
        }
    }else{
        p4.innerHTML ="";    
    }
    
    if((((a5-b5)>1||(b5-a5)>1)&&((a5==11||b5==11)))||(((a5-b5)==2||(b5-a5)==2)&&(a5>11||b5>11))){
        if(a5>b5){
            p5.innerHTML = selectA.value+ws;
            aPoints+=1;
        }else{
            p5.innerHTML = selectB.value+ws;
            bPoints+=1;
        }
    }else{
        p5.innerHTML ="";    
    }
    
if((aPoints>2||bPoints>2)&&(((aPoints-bPoints)<4)||((bPoints-aPoints)<4))&&(selectA.value!==selectB.value)){
    document.getElementById("submitMatch").disabled = false;
    if(aPoints>bPoints){
        winner.innerHTML = selectA.value+" wins this match! Submit it and add another one.";
    }else{
        winner.innerHTML = selectB.value+" wins this match! Submit it and add another one.";
    }
}else{
    winner.innerHTML ="";  
}
}});


/*

('#matchResult').submit(function(e) {
    e.preventDefault();
    }).validate({
    rules: {
    
          selectA:
          {
            required: true
          },
          selectB:
          {
            required: true  
          },
          p1:
          {
            minlength: 10
          },
          p2:
          {
            minlength: 10  
          },
          p3:
          {
            minlength: 10  
          },
          p4:
          {
            minlength: 10  
          },
          p5:
          {
            minlength: 10  
          }
        },
    messages: {
    selectA: 'This field is required',
    selectB: 'This field is required',
    p1: { minlength: 'Enter a valid score for set 1'},
    p2: { minlength: 'Enter a valid score for set 2'},
    p3: { minlength: 'Enter a valid score for set 3'},
    p4: { minlength: 'Enter a valid score for set 4'},
    p5: { minlength: 'Enter a valid score for set 5'}
    
}});
*/    




$("#selectA").on("focus", function (e) {
    $('#selectA')
    .empty();
    if(players.length<2){
        document.getElementById("morePlayers").innerHTML = "Add at least two players!";
    }
    players.forEach(function(item){
var option = document.createElement('option');
option.value = item.name;
option.innerHTML = item.name;
selectA.appendChild(option);
});
});




$("#selectB").on("focus", function (e) {
    $('#selectB')
    .empty();
    players.forEach(function(item){
var option = document.createElement('option');
option.value = item.name;
option.innerHTML = item.name;
selectB.appendChild(option);
});
});


$("#playerList").on("click", function (e) {
    var str = "";
    for(i=0;i<players.length;i++){
        str+="Rank: "+(i+1)+"  Name: "+players[i].name+"  Wins: "+players[i].wins+"  Losses: "+players[i].losses+"<hr>";
        document.getElementById("rankings").innerHTML = str;
    }
});

$("#test").on("click", function (e) {
    alert(typeof(selectA.value));
    alert(selectA.value);
});





};
