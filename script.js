window.onload = function(){


const playerName = document.getElementById("playerName");
const submitPlayer = document.getElementById("submitPlayer");
const submitMatch = document.getElementById("submitMatch");
var selectA = document.getElementById("selectA");
var selectB = document.getElementById("selectB");
var pastA = document.getElementById("pastA");
var pastB = document.getElementById("pastB");
var player = document.getElementById("player");
var rankings = document.getElementById("rankings");
var allMatches = document.getElementById("allMatches");
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");
var p4 = document.getElementById("p4");
var p5 = document.getElementById("p5");
var duplicateNames = document.getElementById("duplicateNames");

//var aPointsFinal = 0;
//var bPointsFinal = 0;






var players = [];
var matches = [];
//var pastMatches = [];

document.getElementById("submitMatch").disabled = true;
document.getElementById("submitPair").disabled = true;



function Player (n, w, l, s) {
      this.name = n;
      this.wins = w;
      this.losses = l;
      this.sets = s;
}

function Match (pA, pB, r, st) {
      this.nameA = pA;
      this.nameB = pB;
      this.result = r;
      this.sets = st;

}

// all good
submitPlayer.addEventListener("click", function() {
  const player = new Player(playerName.value, 0, 0, 0);
  for(i=0;i<players.length;i++){
   if(players[i].name===playerName.value){
          duplicateNames.innerHTML = "That player already exists! Enter a new one!";
          return;
   }}
  players.push(player);
  document.getElementById("playerName").value = "";
  duplicateNames.innerHTML = "";
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
    
    
if(selA===selB){
    p1.innerHTML ="";
    p2.innerHTML ="";
    p3.innerHTML ="";
    p4.innerHTML ="";
    p5.innerHTML ="";
    document.getElementById("submitMatch").disabled = true;
}    

if(selA!==selB)
    {
    if((((a1-b1)>1||(b1-a1)>1)&&((a1===11||b1===11)))||(((a1-b1)===2||(b1-a1)===2)&&(a1>11||b1>11))){
        if(a1>b1){
            p1.innerHTML = selA+ws;
            aPoints+=1;
        }else{
            p1.innerHTML = selB+ws;
            bPoints+=1;
        }
    }else{
        p1.innerHTML ="";
    }
    
    if((((a2-b2)>1||(b2-a2)>1)&&((a2===11||b2===11)))||(((a2-b2)===2||(b2-a2)===2)&&(a2>11||b2>11))){
        if(a2>b2){
            p2.innerHTML = selA+ws;
            aPoints+=1;
        }else{
            p2.innerHTML = selB+ws;
            bPoints+=1;
        }
    }else{
        p2.innerHTML ="";    
    }
    
    if((((a3-b3)>1||(b3-a3)>1)&&((a3===11||b3===11)))||(((a3-b3)===2||(b3-a3)===2)&&(a3>11||b3>11))){
        if(a3>b3){
            p3.innerHTML = selA+ws;
            aPoints+=1;
        }else{
            p3.innerHTML = selB+ws;
            bPoints+=1;
        }
    }else{
        p3.innerHTML ="";    
    }
    
    if((((a4-b4)>1||(b4-a4)>1)&&((a4===11||b4===11)))||(((a4-b4)===2||(b4-a4)===2)&&(a4>11||b4>11))){
        if(a4>b4){
            p4.innerHTML = selA+ws;
            aPoints+=1;
        }else{
            p4.innerHTML = selB+ws;
            bPoints+=1;
        }
    }else{
        p4.innerHTML ="";    
    }
    
    if((((a5-b5)>1||(b5-a5)>1)&&((a5===11||b5===11)))||(((a5-b5)===2||(b5-a5)===2)&&(a5>11||b5>11))){
        if(a5>b5){
            p5.innerHTML = selA+ws;
            aPoints+=1;
        }else{
            p5.innerHTML = selB+ws;
            bPoints+=1;
        }
    }else{
        p5.innerHTML ="";    
    }
    }    
if((aPoints>2||bPoints>2)&&(((aPoints-bPoints)<4)&&((bPoints-aPoints)<4))&&(selA!==selB)){
    
    if(aPoints>bPoints){
        winner.innerHTML = selA+" wins this match! Submit it and add another one.";
    }else{
        winner.innerHTML = selB+" wins this match! Submit it and add another one.";
    }
    document.getElementById("submitMatch").disabled = false;
//    aPointsFinal += aPoints;
//    bPointsFinal += bPoints;
}else{
    winner.innerHTML ="";
    document.getElementById("submitMatch").disabled = true;

}});




$("#submitMatch").click(function(e) {
    
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
    
    var sa1 = "";
    var sa2 = "";
    var sa3 = "";
    var sa4 = "";
    var sa5 = "";
    
    var sb1 = "";
    var sb2 = "";
    var sb3 = "";
    var sb4 = "";
    var sb5 = "";
    
    
    var aPointsFinal = 0;
    var bPointsFinal = 0;
    
    if(a1>b1){aPointsFinal+=1}
    if(a2>b2){aPointsFinal+=1}
    if(a3>b3){aPointsFinal+=1}
    if(a4>b4){aPointsFinal+=1}
    if(a5>b5){aPointsFinal+=1}
    
    if(b1>a1){bPointsFinal+=1}
    if(b2>a2){bPointsFinal+=1}
    if(b3>a3){bPointsFinal+=1}
    if(b4>a4){bPointsFinal+=1}
    if(b5>a5){bPointsFinal+=1}
    
    if((a1||b1)>10){
        sa1+=String(a1);
        sb1+=String(b1);
    }
    
    if((a2||b2)>10){
        sa2+=String(a2);
        sb2+=String(b2);
    }
    
    if((a3||b3)>10){
        sa3+=String(a3);
        sb3+=String(b3);
    }
    
    if((a4||b4)>10){
        sa4+=String(a4);
        sb4+=String(b4);
    }
    
    if((a5||b5)>10){
        sa5+=String(a5);
        sb5+=String(b5);
    } 
    
    
    
//    matches.push(selectA.value+" vs. "+selectB.value+" : "+aPointsFinal+"-"+bPointsFinal+
//    " ("+sa1+"-"+sb1+"/"+sa2+"-"+sb2+"/"+sa3+"-"+sb3+"/"+sa4+"-"+sb4+"/"+sa5+"-"+sb5+")");
    
    
    
    
    
    for(i=0;i<players.length;i++){
        if(selectA.value===players[i].name){
            if(aPointsFinal>bPointsFinal){
                players[i].wins+=1;
            }
            if(aPointsFinal<bPointsFinal){
                players[i].losses+=1;
            }
        }
        if(selectB.value===players[i].name){
            if(bPointsFinal>aPointsFinal){
                players[i].wins+=1;
            }
            if(aPointsFinal>bPointsFinal){
                players[i].losses+=1;
            }
        }
    }
    
    for(i=0;i<players.length;i++){
        if(selectA.value===players[i].name){
            players[i].sets+=aPointsFinal;
        }
        if(selectB.value===players[i].name){
            players[i].sets+=bPointsFinal;
        }
    }
    

    var selA = $("#selectA option:selected").text();
    var selB = $("#selectB option:selected").text();
    var res = String(aPointsFinal)+"-"+String(bPointsFinal);
    var sets = sa1+"-"+sb1+"/"+sa2+"-"+sb2+"/"+sa3+"-"+sb3+"/"+sa4+"-"+sb4+"/"+sa5+"-"+sb5;

    
    const match = new Match(selA, selB, res, sets);
    matches.push(match);

    
//    alert(pastMatches[0].nameA+" "+pastMatches[0].nameB+" "+pastMatches[0].result+" "+pastMatches[0].sets);
    
    aPointsFinal = 0;
    bPointsFinal = 0;
    $("#matchResult")[0].reset();
    document.getElementById("submitMatch").disabled = true;

});






function Match (pA, pB, r, st) {
      this.nameA = pA;
      this.nameB = pB;
      this.result = r;
      this.sets = st;

}



$("#selectA").on("focus", function (e) {
    $("#selectA").empty();
    if(players.length<2){
        document.getElementById("morePlayers").innerHTML = "Add at least two players!";
    }
    players.sort(function(a, b) {
    var textA = a.name.toUpperCase();
    var textB = b.name.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    
});
    players.forEach(function(item){
var option = document.createElement("option");
option.value = item.name;
option.innerHTML = item.name;
selectA.appendChild(option);
});
});

$("#selectB").on("focus", function (e) {
    $("#selectB").empty();
    if(players.length<2){
        document.getElementById("morePlayers").innerHTML = "Add at least two players!";
    }
    players.sort(function(a, b) {
    var textA = a.name.toUpperCase();
    var textB = b.name.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    
});
    players.forEach(function(item){
var option = document.createElement("option");
option.value = item.name;
option.innerHTML = item.name;
selectB.appendChild(option);
});
});


$("#pastA").on("focus", function (e) {
    
    document.getElementById("pastP").innerHTML = "";
    $("#pastA").empty();
    players.sort(function(a, b) {
    var textA = a.name.toUpperCase();
    var textB = b.name.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    
});
    players.forEach(function(item){
var option = document.createElement("option");
option.value = item.name;
option.innerHTML = item.name;
pastA.appendChild(option);
});
$("#pastA").prepend("<option value='' selected='selected'></option>");
});



$("#pastB").on("focus", function (e) {
    document.getElementById("pastP").innerHTML = "";
    $("#pastB").empty();
    players.sort(function(a, b) {
    var textA = a.name.toUpperCase();
    var textB = b.name.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    
});
    players.forEach(function(item){
var option = document.createElement("option");
option.value = item.name;
option.innerHTML = item.name;
pastB.appendChild(option);
});
$("#pastB").prepend("<option value='' selected='selected'></option>");
});    

$(document).on("change" , ".past" , function(){

    var pstA = $("#pastA option:selected").text();
    var pstB = $("#pastB option:selected").text();
    if((pstA!=="")&&(pstB!=="")&&(pstA!==pstB)){
        document.getElementById("submitPair").disabled = false;
    }else{
        document.getElementById("submitPair").disabled = true;
    }
});


$("#submitPair").click(function(e) {

    var psA = $("#pastA option:selected").text();
    var psB = $("#pastB option:selected").text();
    var objFiltA = matches.filter(function(v) {
//  return ((v.nameA === psA&&v.nameB === psB) || (v.nameA === psB&&v.nameB === psA));
    return (v.nameA === psA || v.nameA === psB)
});
    var objFiltB = objFiltA.filter(function(v) {
//  return ((v.nameA === psA&&v.nameB === psB) || (v.nameA === psB&&v.nameB === psA));
    return (v.nameB === psA || v.nameB === psB)
});
//    alert(JSON.stringify(objFilt[0], null, 4));
//    alert(JSON.stringify(players[0], null, 4));
   
    if(objFiltB.length===0){
        document.getElementById("pastP").innerHTML = "No matches between these two players, pick others!";
        $("#pastMatches")[0].reset();
    document.getElementById("submitPair").disabled = true;
    }else{
        for(b=0;b<objFiltB.length;b++){
            document.getElementById("pastP").innerHTML += objFiltB[b].nameA+" vs. "+objFiltB[b].nameB+": "+objFiltB[b].result+
            " ("+objFiltB[b].sets+")"+"<br>";
        }
     $("#pastMatches")[0].reset();
    document.getElementById("submitPair").disabled = true;
}});

/*
$(document).on("blur" , "#player" , function(){

    var ph = $("#player option:selected").text();
    if(ph!==""){
        document.getElementById("submitPlayerHistory").disabled = false;
    }else{
        document.getElementById("submitPlayerHistory").disabled = true;
    }
});
*/

$("#player").on("focus", function (e) {
    
    document.getElementById("playerHis").innerHTML = "";
    $("#player").empty();
    players.sort(function(a, b) {
    var textA = a.name.toUpperCase();
    var textB = b.name.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    
});
    players.forEach(function(item){
var option = document.createElement("option");
option.value = item.name;
option.innerHTML = item.name;
player.appendChild(option);
});
$("#player").prepend("<option value='' selected='selected'></option>");
});


$(document).on("change" , ".phis" , function(){

    var ph = $("#player option:selected").text();
    if(ph!==""){
        document.getElementById("submitPlayerHistory").disabled = false;
    }else{
        document.getElementById("submitPlayerHistory").disabled = true;
    }
});


$("#submitPlayerHistory").click(function(e) {
    var ph = $("#player option:selected").text();
    var objFilt = matches.filter(function(v) {
//  return ((v.nameA === psA&&v.nameB === psB) || (v.nameA === psB&&v.nameB === psA));
    return (v.nameA === ph || v.nameB === ph)
    });
    if(objFilt.length===0){
        document.getElementById("playerHis").innerHTML = "This player didn´t play yet, pick another!";
        $("#playerHistory")[0].reset();
         document.getElementById("submitPlayerHistory").disabled = true;
    }else{
        for(b=0;b<objFilt.length;b++){
            document.getElementById("playerHis").innerHTML += objFilt[b].nameA+" vs. "+objFilt[b].nameB+": "+
            objFilt[b].result+" ("+objFilt[b].sets+")"+"<br>";
        }
    $("#playerHistory")[0].reset();
     document.getElementById("submitPlayerHistory").disabled = true;
    
}});


function compareWins(p1,p2) {
  if (p1.wins < p2.wins)
     return 3;
  if (p1.wins > p2.wins)
    return -3;
  return 0;
}

function compareDiff(p1,p2) {
    if (p1.wins === p2.wins){
        if (p1.diff < p2.diff)
     return 1;
  if (p1.diff > p2.diff)
    return -1;
  return 0; 
    }
}

function compareSets(p1,p2) {
    if ((p1.wins === p2.wins)&&(p1.diff === p2.dif)){
        if (p1.sets < p2.sets)
     return 1;
  if (p1.sets > p2.sets)
    return -1;
  return 0; 
    }
}




$("#playerRankings").on("click", function (e) {

    
    players.sort(function(a, b) {
    var textA = a.name.toUpperCase();
    var textB = b.name.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    
});
    for(g=0;g<players.length;g++){
        players[g].diff = players[g].wins - players[g].losses
    };

    players.sort(compareWins);
    players.sort(compareDiff);
    players.sort(compareSets);
    
    if(rankings.innerHTML === ""){
        var str = "";
    for(i=0;i<players.length;i++){
        str+="Rank: "+(i+1)+"  Name: "+players[i].name+"  Wins: "+players[i].wins+"  Losses: "+players[i].losses+" Sets: "+players[i].sets+"<hr>";
        rankings.innerHTML = str;}
    }else{
        rankings.innerHTML = "";
    }
});

$("#matchHistory").on("click", function (e) {
    if(allMatches.innerHTML === ""){
        for(a=0;a<matches.length;a++){
            allMatches.innerHTML += matches[a].nameA+" vs. "+matches[a].nameB+"   Score: "+matches[a].result+"   Sets: "
            +matches[a].sets+"<br>";  }
    }else{
        allMatches.innerHTML = ""; 
    }
    
});


function Match (pA, pB, r, st) {
      this.nameA = pA;
      this.nameB = pB;
      this.result = r;
      this.sets = st;

}



};
