let numPlayers = 5;
let numHoles = 18;


buildHoles();
function buildHoles(){
    for(let c = 1; c <= numHoles; c++){
        $(".box").append(`<div id="col${c}" class="column">${c}</div>`)

    }
    buildPlayers();
    
}

function buildPlayers(){
    for(p = 1; p <= numPlayers; p++){

        for(let h = 1; h <= numHoles; h++){
        $("#col"+ h).append(`<input id="p${p}h${h}" class="minibox"></input>`);
        }
    }
}