let numPlayers=0;
let frontNine = 9;
let backNine = 18;


function enterPlayerNames(){
    numPlayers++;
    
    $('.playerInput').append("<div class='playerNames'><input  id='playerNames' type='text' placeholder='Enter Player Name...'></input></div>")

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
        $(".box" ).append('<div id="colAddFront" class="addSeperate">Front</div>')
    

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
    
    console.log(numPlayers);
    for(let h = 1; h <= backNine; h++){
        $("#col"+ h).append(`<input id="p${numPlayers}h${h}" class="minibox"></input>`);
    }
    $("#colAddFront").append(`<input class="minibox"></input>`);
    $("#colAddBack").append(`<input class="minibox"></input>`);
    
}

