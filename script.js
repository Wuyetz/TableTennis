window.onload = function(){
    
//    $("#matchResults").toggle();




const playerName = document.getElementById("playerName");
const submitPlayer = document.getElementById("submitPlayer");
const selectA = document.getElementById('selectA');
const selectB = document.getElementById('selectB');
const submitMatch = document.getElementById("submitMatch");

const players = [];
const matches = [];

document.getElementById("matches").innerHTML = matches.join("<br>");

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
/*
match.onclick = function(){
    $("#matchResults").toggle();
};
*/
$("submitMatch").on("click", function (e) {
    var plA = $( "#selectA" ).val();
    var plB = $( "#selectB" ).val();
    var aPoints = 0;
    var bPoints = 0;
    if($( "a1" ).val()>$( "#b1" ).val()){aPoints+1}
    if($( "a2" ).val()>$( "#b2" ).val()){aPoints+1}
    if($( "a3" ).val()>$( "#b3" ).val()){aPoints+1}
    if($( "a4" ).val()>$( "#b4" ).val()){aPoints+1}
    if($( "a5" ).val()>$( "#b5" ).val()){aPoints+1}
    if($( "b1" ).val()>$( "#a1" ).val()){bPoints+1}
    if($( "b2" ).val()>$( "#a2" ).val()){bPoints+1}
    if($( "b3" ).val()>$( "#a3" ).val()){bPoints+1}
    if($( "b4" ).val()>$( "#a4" ).val()){bPoints+1}
    if($( "b5" ).val()>$( "#a5" ).val()){bPoints+1}
    if(aPoints>bPoints){
        plA.wins+1;
    }
    if(bPoints>aPoints){
        plB.wins+1;
    }
});
  



//$(document).ready(function() { 
$("#selectA").on("mouseenter", function (e) {
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

$("#selectB").on("mouseenter", function (e) {
    $('#selectB')
    .empty();
    players.forEach(function(item){
var option = document.createElement('option');
option.value = item.name;
option.innerHTML = item.name;
selectB.appendChild(option);
});
});



    
};
