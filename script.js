window.onload = function () {

function Player (name){
    this.name = name;
}

var playerArray = [];

//var value=$('#newPlayer').val();

//var obj = JSON.parse(value);
/*
$(function () {
        $('form[name="newPlayer"]').submit(function() {
            var player1 = $(this.name).serializeArray();
            playerArray.push(player1);
            // Do what you will with 'person' now...
        });
    });
*/
/*
var player1 = {};
formData.forEach(function(value, key){
    object[key] = value;
});
var json = JSON.stringify(player1);
*/
/*
sbmt.onclick = function(){
document.getElementById("newPlayer").value = new Player(this.value);
};
*/
playerForm.onsubmit = function(){
    playerArray.push(window[$('form[name="newPlayer"]').value] = new Player());
    
};
//window[variableName] = new Player();

players.onclick = function(){
  //  playerArray.push(player1);
    alert(playerArray.length);    
};
    
};
