let numPlayers=1;
let frontNine = 9;
let backNine = 18;

function enterPlayerNames(){
    for(let pn = 1; pn <= numPlayers; pn++){
        $('.playerInput').append("<input class='playerNames' id='playerNames' placeholder='Enter Player Name...'></input>")
    }
    buildPlayers();
}

buildFrontNine();
function buildFrontNine(){
    for(let fn = 1; fn <= frontNine; fn++){
        $(".box").append(`<div id="col${fn}" class="column">${fn}</div>`);
        
    }   
}

addFrontNine();
function addFrontNine(){
    $(".box").append('<div id="colAddFront" class="addSeperate">Front</div>')

}

buildBackNine();
function buildBackNine(){
    for(let bn = 10; bn <= backNine; bn++){
        $(".box").append(`<div id="col${bn}" class="column">${bn}</div>`)
    }
}

addBackNine();
function addBackNine(){
    $(".box").append('<div id="colAddBack" class="addSeperate">Back</div>')

}

function buildPlayers(){
    for(p = 1; p <= numPlayers; p++){

        for(let h = 1; h <= backNine; h++){
            $("#col"+ h).append(`<input id="p${p}h${h}" class="minibox"></input>`);
            $("#addFront"+ h).append(`<input id="p${p}h${h}" class="minibox"></input>`);
            $("#addBack"+ h).append(`<input id="p${p}h${h}" class="minibox"></input>`);

        }
    }
}

