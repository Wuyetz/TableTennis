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
    if($( "a1" ).vwindow.onload = function(){
    
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

document.getElementById("submitMatch").disabled = true;

function setResult (a,b,p) {
    if(((a-b)>1||(b-a)>1)&&(a||b>10)){
        if(a>b){
            $( "#selectA" ).val().wins+1;
            $( "#selectB" ).val().losses+1;
        }else{
            $( "#selectB" ).val().wins+1;
            $( "#selectA" ).val().losses+1;
        }
    }else{
        p="Please enter correct result for this set!";
    }
}




/*
('#matchResult').submit(function(e) {
    e.preventDefault();
    var plA = $( "#selectA" ).val();
    var plB = $( "#selectB" ).val();
    var aPoints = 0;
    var bPoints = 0;
    $.validator.addMethod(
    "set",
    function (value, element, params) {
        var sumOfVals = 0;
        var parent = $(element).parent(".parentDiv");
        $(parent).find("input").each(function () {
            sumOfVals = sumOfVals + parseInt($(this).val(), 10);
        });
        if (sumOfVals == params) return true;
        return false;
    },
    jQuery.format("Sum must be {0}")
);
}).validate({
    rules: {
    a1: {
      required: true,
      range: [0, Infinity]
    },
    a2: {
      required: true,
      range: [0, Infinity]
    },
    a3: {
      required: true,
      range: [0, Infinity]
    },
    a4: {
      required: true,
      range: [0, Infinity]
    },
    a5: {
      required: true,
      range: [0, Infinity]
    },
    b1: {
      required: true,
      range: [0, Infinity]
    },
    b2: {
      required: true,
      range: [0, Infinity]
    },
    b3: {
      required: true,
      range: [0, Infinity]
    },
    b4: {
      required: true,
      range: [0, Infinity]
    },
    b5: {
      required: true,
      range: [0, Infinity]
    },
    selectA: "required",
    selectB: "required",
    
    
    
/*
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
    if(bPoints>aPoints)*/
//    $(".error").remove();
//    document.getElementById("matchResults").reset();
//}});




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
