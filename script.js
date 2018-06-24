window.onload = function(){


const playerName = document.getElementById("playerName");
const submitPlayer = document.getElementById("submitPlayer");
const submitMatch = document.getElementById("submitMatch");
var selectA = document.getElementById("selectA");
var selectB = document.getElementById("selectB");
var rankings = document.getElementById("rankings");
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");
var p4 = document.getElementById("p4");
var p5 = document.getElementById("p5");

var aPointsFinal = 0;
var bPointsFinal = 0;

    




var players = [];
var matches = [];

document.getElementById("submitMatch").disabled = true;


function Player (n, w, l) {
      this.name = n;
      this.wins = w;
      this.losses = l;
}


submitPlayer.addEventListener("click", function() {
  const player = new Player(playerName.value, 0, 0);
  players.push(player);
  document.getElementById("playerName").value = '';
  if(players.length>1){
      document.getElementById("morePlayers").innerHTML = "";
  }
});

/*
$(document).ready(function(){

    $("#selectA").change(function(e){
    });
    $("#selectA").trigger("change");
});

$(document).ready(function(){

    $("#selectB").change(function(e){
    });
    $("#selectB").trigger("change");
});*/

window.onload = function(){


const playerName = document.getElementById("playerName");
const submitPlayer = document.getElementById("submitPlayer");
const submitMatch = document.getElementById("submitMatch");
var selectA = document.getElementById("selectA");
var selectB = document.getElementById("selectB");
var rankings = document.getElementById("rankings");
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");
var p4 = document.getElementById("p4");
var p5 = document.getElementById("p5");

var aPointsFinal = 0;
var bPointsFinal = 0;

    




var players = [];
var matches = [];

document.getElementById("submitMatch").disabled = true;


function Player (n, w, l) {
      this.name = n;
      this.wins = w;
      this.losses = l;
}


submitPlayer.addEventListener("click", function() {
  const player = new Player(playerName.value, 0, 0);
  players.push(player);
  document.getElementById("playerName").value = '';
  if(players.length>1){
      document.getElementById("morePlayers").innerHTML = "";
  }
});

/*
$(document).ready(function(){

    $("#selectA").change(function(e){
    });
    $("#selectA").trigger("change");
});

$(document).ready(function(){

    $("#selectB").change(function(e){
    });
    $("#selectB").trigger("change");
});*/







$(document).on("change" , ".sets" , function(){

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
    
    var selA = $("#selectA option:selected").text();
    var selB = $("#selectB option:selected").text();
    
    var p1 = document.getElementById("p1");
    var p2 = document.getElementById("p2");
    var p3 = document.getElementById("p3");
    var p4 = document.getElementById("p4");
    var p5 = document.getElementById("p5");
    var winner = document.getElementById("winner");
    
    var ws = " wins this set!";
    
    var aPoints = 0;
    var bPoints = 0;
    
    
    

if(/*selectA.value!==""&&selectB.value!==""*/selA!==selB)
    {
    if((((a1-b1)>1||(b1-a1)>1)&&((a1===11||b1===11)))||(((a1-b1)===2||(b1-a1)===2)&&(a1>11||b1>11))){
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
    
    if((((a2-b2)>1||(b2-a2)>1)&&((a2===11||b2===11)))||(((a2-b2)===2||(b2-a2)===2)&&(a2>11||b2>11))){
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
    
    if((((a3-b3)>1||(b3-a3)>1)&&((a3===11||b3===11)))||(((a3-b3)===2||(b3-a3)===2)&&(a3>11||b3>11))){
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
    
    if((((a4-b4)>1||(b4-a4)>1)&&((a4===11||b4===11)))||(((a4-b4)===2||(b4-a4)===2)&&(a4>11||b4>11))){
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
    
    if((((a5-b5)>1||(b5-a5)>1)&&((a5===11||b5===11)))||(((a5-b5)===2||(b5-a5)===2)&&(a5>11||b5>11))){
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
    }    
if((aPoints>2||bPoints>2)&&(((aPoints-bPoints)<4)&&((bPoints-aPoints)<4))&&(/*selectA.value!==selectB.value*/
selA!==selB
)){
    
    if(aPoints>bPoints){
        winner.innerHTML = selectA.value+" wins this match! Submit it and add another one.";
    }else{
        winner.innerHTML = selectB.value+" wins this match! Submit it and add another one.";
    }
    document.getElementById("submitMatch").disabled = false;
    aPointsFinal += aPoints;
    bPointsFinal += bPoints;
}else{
    winner.innerHTML ="";
    document.getElementById("submitMatch").disabled = true;

}});




$("#submitMatch").click(function(e) {
    
    
    /*
    var a1 = String(matchResult.a1.value);
    var a2 = String(matchResult.a2.value);
    var a3 = String(matchResult.a3.value);
    var a4 = String(matchResult.a4.value);
    var a5 = String(matchResult.a5.value);
    
    var b1 = String(matchResult.b1.value);
    var b2 = String(matchResult.b2.value);
    var b3 = String(matchResult.b3.value);
    var b4 = String(matchResult.b4.value);
    var b5 = String(matchResult.b5.value);
    
    var sFinal;
    var s1 = "";
    var s2 = "";
    var s3 = "";
    var s4 = "";
    var s5 = "";
    */
    /*
    if(p1.length>0){
        s1=" "+a1+"-"+b1+" "
    }
    if(p2.length>0){
        s2=" "+a2+"-"+b2+" "
    }
    if(p3.length>0){
        s3=" "+a3+"-"+b3+" "
    }
    if(p4.length>0){
        s4=" "+a4+"-"+b4+" "
    }
    if(p5.length>0){
        s5=" "+a5+"-"+b5+" "
    }
    */
    
    
    sFinal = selectA.value+" vs. "+selectB.value+": "+aPointsFinal+"-"+bPointsFinal/*+" ("+s1+s2+s3+s4+s5+")"*/;
        alert(sFinal);
        matches.push(sFinal);

    
    
    
    
    for(i=0;i<players.length;i++){
        if(selectA.value===players[i].name){
            if(aPointsFinal>bPointsFinal){
                players[i].wins+=1;
            }else{
                players[i].losses+=1;
            }
        if(selectB.value===players[i].name){
            if(bPointsFinal>aPointsFinal){
                players[i].wins+=1;
            }else{
                players[i].losses+=1;
            }
            
        }
    
    aPointsFinal = 0;
    bPointsFinal = 0;
    $("#matchResult")[0].reset();
    document.getElementById("submitMatch").disabled = true;
    
}
}
});


$("#selectA").on("focus", function (e) {
    $('#selectA')
    .empty();
    if(players.length<2){
        document.getElementById("morePlayers").innerHTML = "Add at least two players!";
    }
    players.forEach(function(item){
var option = document.createElement("option");
option.value = item.name;
option.innerHTML = item.name;
selectA.appendChild(option);
});
});




$("#selectB").on("focus", function (e) {
    $('#selectB')
    .empty();
    players.forEach(function(item){
var option = document.createElement("option");
option.value = item.name;
option.innerHTML = item.name;
selectB.appendChild(option);
});
});


$("#playerList").on("click", function (e) {
    if(rankings.innerHTML === ""){
        var str = "";
    for(i=0;i<players.length;i++){
        str+="Rank: "+(i+1)+"  Name: "+players[i].name+"  Wins: "+players[i].wins+"  Losses: "+players[i].losses+"<hr>";
        rankings.innerHTML = str;}
    }else{
        rankings.innerHTML = "";
    }
});

$("#playerRankings").on("click", function (e) {
    if(rankings.innerHTML === ""){
        var str = "";
    for(i=0;i<players.length;i++){
        str+="Rank: "+(i+1)+"  Name: "+players[i].name+"  Wins: "+players[i].wins+"  Losses: "+players[i].losses+"<hr>";
        rankings.innerHTML = str;}
    }else{
        rankings.innerHTML = "";
    }
});
/*
$("#matchHistory").on("click", function (e) {
   
});
*/
$("#test").on("click", function (e) {
    alert(typeof(selectA.value));
    alert(selectA.value);
});











$(document).on("change" , ".sets" , function(){

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
    
    var selA = $("#selectA option:selected").text();
    var selB = $("#selectB option:selected").text();
    
    var p1 = document.getElementById("p1");
    var p2 = document.getElementById("p2");
    var p3 = document.getElementById("p3");
    var p4 = document.getElementById("p4");
    var p5 = document.getElementById("p5");
    var winner = document.getElementById("winner");
    
    var ws = " wins this set!";
    
    var aPoints = 0;
    var bPoints = 0;
    
    
    

if(/*selectA.value!==""&&selectB.value!==""*/selA!==selB)
    {
    if((((a1-b1)>1||(b1-a1)>1)&&((a1===11||b1===11)))||(((a1-b1)===2||(b1-a1)===2)&&(a1>11||b1>11))){
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
    
    if((((a2-b2)>1||(b2-a2)>1)&&((a2===11||b2===11)))||(((a2-b2)===2||(b2-a2)===2)&&(a2>11||b2>11))){
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
    
    if((((a3-b3)>1||(b3-a3)>1)&&((a3===11||b3===11)))||(((a3-b3)===2||(b3-a3)===2)&&(a3>11||b3>11))){
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
    
    if((((a4-b4)>1||(b4-a4)>1)&&((a4===11||b4===11)))||(((a4-b4)===2||(b4-a4)===2)&&(a4>11||b4>11))){
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
    
    if((((a5-b5)>1||(b5-a5)>1)&&((a5===11||b5===11)))||(((a5-b5)===2||(b5-a5)===2)&&(a5>11||b5>11))){
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
    }    
if((aPoints>2||bPoints>2)&&(((aPoints-bPoints)<4)&&((bPoints-aPoints)<4))&&(/*selectA.value!==selectB.value*/
selA!==selB
)){
    
    if(aPoints>bPoints){
        winner.innerHTML = selectA.value+" wins this match! Submit it and add another one.";
    }else{
        winner.innerHTML = selectB.value+" wins this match! Submit it and add another one.";
    }
    document.getElementById("submitMatch").disabled = false;
    aPointsFinal += aPoints;
    bPointsFinal += bPoints;
}else{
    winner.innerHTML ="";
    document.getElementById("submitMatch").disabled = true;

}});




$("#submitMatch").click(function(e) {
    
    
    /*
    var a1 = String(matchResult.a1.value);
    var a2 = String(matchResult.a2.value);
    var a3 = String(matchResult.a3.value);
    var a4 = String(matchResult.a4.value);
    var a5 = String(matchResult.a5.value);
    
    var b1 = String(matchResult.b1.value);
    var b2 = String(matchResult.b2.value);
    var b3 = String(matchResult.b3.value);
    var b4 = String(matchResult.b4.value);
    var b5 = String(matchResult.b5.value);
    
    var sFinal;
    var s1 = "";
    var s2 = "";
    var s3 = "";
    var s4 = "";
    var s5 = "";
    */
    /*
    if(p1.length>0){
        s1=" "+a1+"-"+b1+" "
    }
    if(p2.length>0){
        s2=" "+a2+"-"+b2+" "
    }
    if(p3.length>0){
        s3=" "+a3+"-"+b3+" "
    }
    if(p4.length>0){
        s4=" "+a4+"-"+b4+" "
    }
    if(p5.length>0){
        s5=" "+a5+"-"+b5+" "
    }
    */
    
    
    sFinal = selectA.value+" vs. "+selectB.value+": "+aPointsFinal+"-"+bPointsFinal/*+" ("+s1+s2+s3+s4+s5+")"*/;
        alert(sFinal);
        matches.push(sFinal);

    
    
    
    
    for(i=0;i<players.length;i++){
        if(selectA.value===players[i].name){
            if(aPointsFinal>bPointsFinal){
                players[i].wins+=1;
            }else{
                players[i].losses+=1;
            }
        if(selectB.value===players[i].name){
            if(bPointsFinal>aPointsFinal){
                players[i].wins+=1;
            }else{
                players[i].losses+=1;
            }
            
        }
    
    aPointsFinal = 0;
    bPointsFinal = 0;
    $("#matchResult")[0].reset();
    document.getElementById("submitMatch").disabled = true;
    
}
}
});


$("#selectA").on("focus", function (e) {
    $('#selectA')
    .empty();
    if(players.length<2){
        document.getElementById("morePlayers").innerHTML = "Add at least two players!";
    }
    players.forEach(function(item){
var option = document.createElement("option");
option.value = item.name;
option.innerHTML = item.name;
selectA.appendChild(option);
});
});




$("#selectB").on("focus", function (e) {
    $('#selectB')
    .empty();
    players.forEach(function(item){
var option = document.createElement("option");
option.value = item.name;
option.innerHTML = item.name;
selectB.appendChild(option);
});
});


$("#playerList").on("click", function (e) {
    if(rankings.innerHTML === ""){
        var str = "";
    for(i=0;i<players.length;i++){
        str+="Rank: "+(i+1)+"  Name: "+players[i].name+"  Wins: "+players[i].wins+"  Losses: "+players[i].losses+"<hr>";
        rankings.innerHTML = str;}
    }else{
        rankings.innerHTML = "";
    }
});

$("#playerRankings").on("click", function (e) {
    if(rankings.innerHTML === ""){
        var str = "";
    for(i=0;i<players.length;i++){
        str+="Rank: "+(i+1)+"  Name: "+players[i].name+"  Wins: "+players[i].wins+"  Losses: "+players[i].losses+"<hr>";
        rankings.innerHTML = str;}
    }else{
        rankings.innerHTML = "";
    }
});
/*
$("#matchHistory").on("click", function (e) {
   
});
*/
$("#test").on("click", function (e) {
    alert(typeof(selectA.value));
    alert(selectA.value);
});





};
