window.onload = function(){
    
//    $("#matchResults").toggle();




const playerName = document.getElementById("playerName");
const submitPlayer = document.getElementById("submitPlayer");
const selectA = document.getElementById('selectA');
const selectB = document.getElementById('selectB');
const submitMatch = document.getElementById("submitMatch");
const matchResult = document.getElementById("matchResult");
const a1 = document.getElementById("a1");



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
/*        if(a>b){
            $( "#selectA" ).val().wins+1;
            $( "#selectB" ).val().losses+1;
        }else{
            $( "#selectB" ).val().wins+1;
            $( "#selectA" ).val().losses+1;
        }*/
        
    p = "woooo";    
    }else{
        p="Please enter correct scores for this set!";
    }
}

$(document).on('change' , '.sets', function(){
   /* var x = $("a1").val();
       var y = $("b1").val();
    if(x&&y){alert("decf");}*/
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

    if(((a1-b1)>1||(b1-a1)>1)&&(a1>10||b1>10)){p1.innerHTML ="woooo";}
    if(((a2-b2)>1||(b2-a2)>1)&&(a2>10||b2>10)){p2.innerHTML ="woooo";}
    if(((a3-b3)>1||(b3-a3)>1)&&(a3>10||b3>10)){p3.innerHTML ="woooo";}
    if(((a4-b4)>1||(b4-a4)>1)&&(a4>10||b4>10)){p4.innerHTML ="woooo";}
    if(((a5-b5)>1||(b5-a5)>1)&&(a5>10||b5>10)){p5.innerHTML ="woooo";}
    
    
//    setResult(x,y,p1);      
    
    
 //   alert(typeof(x));
//    alert(x-y);

    
});
/*
$(".one").on("change", function (e) {
    
    var x = $("a1").val();
       var y = $("b1").val();
 //      var z = $("p1").innerHTML;
 if(x&&y){alert(x+y);}
    
});*/
//alert("vdsvsd");
       
 //      if(document.getElementById("a1")&&document.getElementById("a1").value&&document.getElementById("b1")&&document//.getElementById("b1").value){
// alert("vdefv");
 
 /*      
       var x = document.getElementById("a1").value;
       var y = document.getElementById("b1").value;
       var z = document.getElementById("p1").innerHTML;
       
       
       setResult(x,y,z);*/
//}
    
//});


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

$(".playerSelect").on("blur", function (e) {
    

    if(selectA.value===selectB.value){alert("womp womp")}
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
