let numPlayers = 5;
let frontNine = 9;
let backNine = 18;


buildFrontNine();
function buildFrontNine(){
    for(let fn = 1; fn <= frontNine; fn++){
        $(".box").append(`<div id="col${fn}" class="column">${fn}</div>`)

    }
    buildBackNine();
    buildPlayers();
    
}

function buildBackNine(){
    for(let bn = 10; bn <= backNine; bn++){
        $(".box").append(`<div id="col${bn}" class="column">${bn}</div>`)
    }
}

function buildPlayers(){
    for(p = 1; p <= numPlayers; p++){

        for(let h = 1; h <= backNine; h++){
        $("#col"+ h).append(`<input id="p${p}h${h}" class="minibox"></input>`);
        }
    }
}

function addFrontNine(){
    
}