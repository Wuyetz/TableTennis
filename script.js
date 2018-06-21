window.onload = function () {


function Player (name){
    
this.name = name;

}


var playerArray = [];


//var value=$('#newPlayer').val();


//var obj = JSON.parse(value);


$(function () {
        
$('form[name="newPlayer"]').submit(function() {
            var player1 = $(this.name).serializeArray();
            // Do what you will with 'person' now...
        });
    });
    
players.onclick = function(){
    alert(playerArray.length);    
};
    
};