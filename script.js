window.onload = function(){
    
    $("#matchResults").toggle();




const name = document.getElementById('name');
const submit = document.getElementById('submit');
const selectA = document.getElementById('selectA');
const selectB = document.getElementById('selectB');

const players = [];

class Player {
    constructor(n, w, l) {
      this.name = n;
      this.wins = w;
      this.losses = l;
    }
}

submit.addEventListener('click', function() {
  const player = new Player(name.value, 0, 0);
  players.push(player);
  document.getElementById("name").value = '';
});

match.onclick = function(){
    $("#matchResults").toggle();
};




$('#selectA').on('mouseenter', function (e) {
    $('#selectA')
    .empty();
    
    players.forEach(function(item){
var option = document.createElement('option');
option.value = item.name;
option.innerHTML = item.name;
selectA.appendChild(option);
});
});
    

    
};


    
};
