window.onload = function(){

var matches = JSON.parse(localStorage.getItem("matches") || "[]");
var players = JSON.parse(localStorage.getItem("players") || "[]");

const playerName = document.getElementById("playerName");
const submitPlayer = document.getElementById("submitPlayer");
const submitMatch = document.getElementById("submitMatch");
const selectA = document.getElementById("selectA");
const selectB = document.getElementById("selectB");
const pastA = document.getElementById("pastA");
const pastB = document.getElementById("pastB");
const player = document.getElementById("player");
const game = document.getElementById("game");
const rankings = document.getElementById("rankings");
const allMatches = document.getElementById("allMatches");
const duplicateNames = document.getElementById("duplicateNames");
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");
const p4 = document.getElementById("p4");
const p5 = document.getElementById("p5");

jQuery(function ($) {
$("#selectA").trigger("change");
$("#selectB").trigger("change");
});

document.getElementById("submitMatch").disabled = true;
document.getElementById("submitPair").disabled = true;
document.getElementById("submitPlayerHistory").disabled = true;
document.getElementById("submitGameHistory").disabled = true;

function Player (n, w, l, s) {
      this.name = n;
      this.wins = w;
      this.losses = l;
      this.sets = s;
}

function Match (pA, pB, r, st, or, dt) {
      this.nameA = pA;
      this.nameB = pB;
      this.result = r;
      this.sets = st;
      this.order = or;
      this.date = dt;
}

submitPlayer.addEventListener("click", function() {
    const player = new Player(playerName.value, 0, 0, 0);
    for(i=0;i<players.length;i++){
        if(players[i].name===playerName.value){
            duplicateNames.innerHTML = "That player already exists! Enter a new one!";
            return;
        }
    }
    players.push(player);
    localStorage["players"] = JSON.stringify(players);
    document.getElementById("playerName").value = "";
    duplicateNames.innerHTML = "";
    if(players.length>1){
        document.getElementById("morePlayers").innerHTML = "";
    }
});

$(document).on("change focusout mouseleave" , ".newMatch" , function(){
    var a1 = Number(newMatch.a1.value);
    var a2 = Number(newMatch.a2.value);
    var a3 = Number(newMatch.a3.value);
    var a4 = Number(newMatch.a4.value);
    var a5 = Number(newMatch.a5.value);
    var b1 = Number(newMatch.b1.value);
    var b2 = Number(newMatch.b2.value);
    var b3 = Number(newMatch.b3.value);
    var b4 = Number(newMatch.b4.value);
    var b5 = Number(newMatch.b5.value);
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
    var p1k = document.getElementById("p1k");
    var p2k = document.getElementById("p2k");
    var p3k = document.getElementById("p3k");
    var p4k = document.getElementById("p4k");
    var p5k = document.getElementById("p5k");
    if(selA!==selB){
        if((((a1-b1)>1||(b1-a1)>1)&&((a1===11||b1===11)))||(((a1-b1)===2||(b1-a1)===2)&&(a1>11||b1>11))){
            if(a1>b1){
                p1.innerHTML = selA+ws;
                aPoints+=1;
                p1k.innerHTML ="correct set score";
            }else{
                p1.innerHTML = selB+ws;
                bPoints+=1;
                p1k.innerHTML ="correct set score";
            }
        }else{
            p1.innerHTML ="";
            p1k.innerHTML ="";
        }
        if((((a2-b2)>1||(b2-a2)>1)&&((a2===11||b2===11)))||(((a2-b2)===2||(b2-a2)===2)&&(a2>11||b2>11))){
            if(a2>b2){
                p2.innerHTML = selA+ws;
                aPoints+=1;
                p2k.innerHTML ="correct set score";
            }else{
                p2.innerHTML = selB+ws;
                bPoints+=1;
                p2k.innerHTML ="correct set score";
            }
        }else{
            p2.innerHTML ="";
            p2k.innerHTML ="";
        }
         if((((a3-b3)>1||(b3-a3)>1)&&((a3===11||b3===11)))||(((a3-b3)===2||(b3-a3)===2)&&(a3>11||b3>11))){
            if(a3>b3){
                p3.innerHTML = selA+ws;
                aPoints+=1;
                p3k.innerHTML ="correct set score";
            }else{
                p3.innerHTML = selB+ws;
                bPoints+=1;
                p3k.innerHTML ="correct set score";
            }
        }else{
            p3.innerHTML ="";
            p3k.innerHTML ="";
        }
        if((((a4-b4)>1||(b4-a4)>1)&&((a4===11||b4===11)))||(((a4-b4)===2||(b4-a4)===2)&&(a4>11||b4>11))){
            if(a4>b4){
                p4.innerHTML = selA+ws;
                aPoints+=1;
                p4k.innerHTML ="correct set score";
            }else{
                p4.innerHTML = selB+ws;
                bPoints+=1;
                p4k.innerHTML ="correct set score";
            }
        }else{
            p4.innerHTML ="";
            p4k.innerHTML ="";
        }
        if((((a5-b5)>1||(b5-a5)>1)&&((a5===11||b5===11)))||(((a5-b5)===2||(b5-a5)===2)&&(a5>11||b5>11))){
            if(a5>b5){
                p5.innerHTML = selA+ws;
                aPoints+=1;
                p5k.innerHTML ="correct set score";
            }else{
                p5.innerHTML = selB+ws;
                bPoints+=1;
                p5k.innerHTML ="correct set score";
            }
        }else{
            p5.innerHTML ="";
            p5k.innerHTML ="";
        }
    }else{
        p1k.innerHTML ="";
        p2k.innerHTML ="";
        p3k.innerHTML ="";
        p4k.innerHTML ="";
        p5k.innerHTML ="";
    }   
    if((aPoints>2||bPoints>2)&&((aPoints<4)&&(bPoints<4))&&(selA!==selB)&&(selA!==""||selB!=="")){
        if(aPoints>bPoints){
            winner.innerHTML = selA+" wins this match! Submit it and add another one.";
        }else{
            winner.innerHTML = selB+" wins this match! Submit it and add another one.";
        }
    document.getElementById("submitMatch").disabled = false;
    }else{
        winner.innerHTML ="";
        p1.innerHTML ="";
        p2.innerHTML ="";
        p3.innerHTML ="";
        p4.innerHTML ="";
        p5.innerHTML ="";
        document.getElementById("submitMatch").disabled = true;
    }
});

$("#submitMatch").click(function(e){
    var a1 = Number(newMatch.a1.value);
    var a2 = Number(newMatch.a2.value);
    var a3 = Number(newMatch.a3.value);
    var a4 = Number(newMatch.a4.value);
    var a5 = Number(newMatch.a5.value);
    var b1 = Number(newMatch.b1.value);
    var b2 = Number(newMatch.b2.value);
    var b3 = Number(newMatch.b3.value);
    var b4 = Number(newMatch.b4.value);
    var b5 = Number(newMatch.b5.value);
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
    if(a1>b1){
        aPointsFinal+=1;
    }
    if(a2>b2){
        aPointsFinal+=1;
    }
    if(a3>b3){
        aPointsFinal+=1;
    }
    if(a4>b4){
        aPointsFinal+=1;
    }
    if(a5>b5){
        aPointsFinal+=1;
    }
    if(b1>a1){
        bPointsFinal+=1;
    }
    if(b2>a2){
        bPointsFinal+=1;
    }
    if(b3>a3){
        bPointsFinal+=1;
    }
    if(b4>a4){
        bPointsFinal+=1;
    }
    if(b5>a5){
        bPointsFinal+=1;
    }
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
    var ord = matches.length;
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    if(dd<10) {
        dd = "0"+dd;
    } 
    if(mm<10) {
        mm = "0"+mm;
    } 
    today = dd+"/"+mm+"/"+yyyy;
    const match = new Match(selA, selB, res, sets, 0, "");
    matches.push(match);
    matches[ord].order = ord+1;
    matches[ord].date = today;
    localStorage["matches"] = JSON.stringify(matches);
    localStorage["players"] = JSON.stringify(players);
    aPointsFinal = 0;
    bPointsFinal = 0;
    document.getElementById("p1").innerHTML = "";
    document.getElementById("p2").innerHTML = "";
    document.getElementById("p3").innerHTML = "";
    document.getElementById("p4").innerHTML = "";
    document.getElementById("p5").innerHTML = "";
    document.getElementById("p1k").innerHTML = "";
    document.getElementById("p2k").innerHTML = "";
    document.getElementById("p3k").innerHTML = "";
    document.getElementById("p4k").innerHTML = "";
    document.getElementById("p5k").innerHTML = "";
    document.getElementById("winner").innerHTML = "";
    $("#newMatch")[0].reset();
    document.getElementById("submitMatch").disabled = true;
});

$("#selectA").on("focus", function (e){
    $("#selectA").empty();
    if(players.length<2){
        document.getElementById("morePlayers").innerHTML = "Add at least two players!";
    }
    players.sort(function(a, b){
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

$("#selectB").on("focus", function (e){
    $("#selectB").empty();
    if(players.length<2){
        document.getElementById("morePlayers").innerHTML = "Add at least two players!";
    }
    players.sort(function(a, b){
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

$("#pastA").on("focus", function (e){
    document.getElementById("pastP").innerHTML = "";
    $("#pastA").empty();
    players.sort(function(a, b){
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

$("#pastB").on("focus", function (e){
    document.getElementById("pastP").innerHTML = "";
    $("#pastB").empty();
    players.sort(function(a, b){
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
    var objFiltA = matches.filter(function(v){
        return (v.nameA === psA || v.nameA === psB)
    });
    var objFiltB = objFiltA.filter(function(v){
        return (v.nameB === psA || v.nameB === psB)
    });
    if(objFiltB.length===0){
        document.getElementById("pastP").innerHTML = "No matches between these two players, pick others!";
        $("#pastMatches")[0].reset();
        document.getElementById("submitPair").disabled = true;
    }else{
        for(b=0;b<objFiltB.length;b++){
            document.getElementById("pastP").innerHTML += 
            "GAME: "+objFiltB[b].order+".)  "+objFiltB[b].nameA+" vs. "+objFiltB[b].nameB+
            "  SCORE: "+objFiltB[b].result+"  SETS: ("+objFiltB[b].sets+")  DATE: "+objFiltB[b].date+"<br>";
        }
    $("#pastMatches")[0].reset();
    document.getElementById("submitPair").disabled = true;
    }
});

$(document).on("change" , ".phis" , function(){
    var ph = $("#player option:selected").text();
    if(ph!==""){
        document.getElementById("submitPlayerHistory").disabled = false;
    }else{
        document.getElementById("submitPlayerHistory").disabled = true;
    }
});

$("#player").on("focus", function (e){
    document.getElementById("playerStats").innerHTML = "";
    document.getElementById("playerHis").innerHTML = "";
    $("#player").empty();
    players.sort(function(a, b){
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

$("#submitPlayerHistory").click(function(e) {
    var ph = $("#player option:selected").text();
    var objFilt = matches.filter(function(v){
        return (v.nameA === ph || v.nameB === ph)
    });
    var objFiltPlayer = players.filter(function(v){
        return (v.name === ph)
    });
    if(objFilt.length===0){
        document.getElementById("playerStats").innerHTML = "";
        document.getElementById("playerHis").innerHTML = "This player didn´t play yet, pick another!";
        $("#playerHistory")[0].reset();
        document.getElementById("submitPlayerHistory").disabled = true;
    }else{
        document.getElementById("playerStats").innerHTML = 
        "NAME: "+objFiltPlayer[0].name+"  WINS: "+objFiltPlayer[0].wins+"  LOSSES: "+
        objFiltPlayer[0].losses+"  SETS WON: "+objFiltPlayer[0].sets;
        for(b=0;b<objFilt.length;b++){
            document.getElementById("playerHis").innerHTML += 
            "GAME: "+objFilt[b].order+".) "+objFilt[b].nameA+" vs. "+objFilt[b].nameB+"  SCORE: "+
            objFilt[b].result+"  SETS: ("+objFilt[b].sets+")  DATE: "+objFilt[b].date+"<br>";
        }
    $("#playerHistory")[0].reset();
    document.getElementById("submitPlayerHistory").disabled = true;
    }
});

$(document).on("change" , ".ghis" , function(){
    var gh = $("#game option:selected").text();
    if(gh!==""){
        document.getElementById("submitGameHistory").disabled = false;
    }else{
        document.getElementById("submitGameHistory").disabled = true;
    }
});

$("#game").on("focus", function (e){
    document.getElementById("gameHis").innerHTML = "";
    document.getElementById("otherGames").innerHTML = "";
    $("#game").empty();
    matches.forEach(function(item){
        var option = document.createElement("option");
        option.value = item.order;
        option.innerHTML = item.order+". "+item.nameA+"-"+item.nameB;
        game.appendChild(option);
    });
    $("#game").prepend("<option value='' selected='selected'></option>");
});

$("#submitGameHistory").click(function(e) {
    var gh = $("#game option:selected").val();
    var clonedMatches = JSON.parse(JSON.stringify(matches));
    var objFilt = matches.filter(function(v){
        return (String(v.order) == gh)
    });
    if(objFilt.length===0){
        document.getElementById("gameHis").innerHTML = "No such match, pick another!";
        $("#gameHistory")[0].reset();
        document.getElementById("submitGameHistory").disabled = true;
    }else{
        document.getElementById("gameHis").innerHTML = 
        "GAME: "+objFilt[0].order+".) "+objFilt[0].nameA+" vs. "+objFilt[0].nameB+
        "  SCORE: "+objFilt[0].result+"  SETS: ("+objFilt[0].sets+")  DATE: "+objFilt[0].date+"<br>";
        var or = objFilt[0].order;
        var nA = objFilt[0].nameA;
        var nB = objFilt[0].nameB;
        var objFiltA = clonedMatches.filter(function(v){
            return (v.nameA === nA || v.nameA === nB);
        });
        var objFiltB = objFiltA.filter(function(v){
            return (v.nameB === nA || v.nameB === nB);
        });
        var objFiltC = objFiltB.filter(function(v){
            return (v.order !== or);
        });
        document.getElementById("otherGames").innerHTML += "Other games played by this pair of players:"+"<br>";
        for(b=0;b<objFiltC.length;b++){
            document.getElementById("otherGames").innerHTML += 
            "GAME "+objFiltC[b].order+".) "+objFiltC[b].nameA+
            " vs. "+objFiltC[b].nameB+"  SCORE: "+objFiltC[b].result+
            " SETS: ("+objFiltC[b].sets+")  DATE: "+objFiltC[b].date+"<br>";
        }
    }
    $("#gameHistory")[0].reset();
    document.getElementById("submitGameHistory").disabled = true;
});

$("#matchHistory").on("click", function (e){
    if(allMatches.innerHTML === ""){
        for(a=0;a<matches.length;a++){
            allMatches.innerHTML += 
            "GAME: "+matches[a].order+".) "+matches[a].nameA+" vs. "+matches[a].nameB+"  SCORE: "+matches[a].result
            +"  SETS: ("+matches[a].sets+")  DATE: "+matches[a].date+"<br>";  }
    }else{
        allMatches.innerHTML = ""; 
    }
});

function compareWins(p1,p2){
    if (p1.wins < p2.wins)
        return 3;
    if (p1.wins > p2.wins)
        return -3;
    return 0;
}

function compareDiff(p1,p2){
    if (p1.wins === p2.wins){
        if (p1.diff < p2.diff)
        return 1;
    if (p1.diff > p2.diff)
        return -1;
    return 0; 
    }
}

function compareSets(p1,p2){
    if ((p1.wins === p2.wins)&&(p1.diff === p2.diff)){
        if (p1.sets < p2.sets)
        return 1;
    if (p1.sets > p2.sets)
        return -1;
    return 0; 
    }
}

$("#playerRankings").on("click", function (e){
    players.sort(function(a, b){
        var textA = a.name.toUpperCase();
        var textB = b.name.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
    for(g=0;g<players.length;g++){
        players[g].diff = players[g].wins - players[g].losses;
    };
    players.sort(compareWins);
    players.sort(compareDiff);
    players.sort(compareSets);
    if(rankings.innerHTML === ""){
        var str = "";
        for(i=0;i<players.length;i++){
            str+="RANK: "+(i+1)+"  NAME: "+players[i].name+"  WINS: "+players[i].wins+"  LOSSES: "
            +players[i].losses+" SETS WON: "+players[i].sets+"<hr>";
            rankings.innerHTML = str;
        }
    }else{
        rankings.innerHTML = "";
    }
});

};
