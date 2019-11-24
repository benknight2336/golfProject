
let numPlayers=0;
let frontNine = 8;
let backNine = 17;

function buildGolfCourseSelect() {
    console.log(golfCourse)
    $('.selectTeeTypes').html("");
    html = `<select class='selectOptions' onchange="buildTeeBoxHoles(this.options[this.selectedIndex].value)">
    <option>select tee box</option>")`;

    let num = golfCourse.holes[0].teeBoxes.length - 1;
    for(let t = 0; t <= num; t++) {
        let teeBox = golfCourse.holes[0].teeBoxes[t];
        if(teeBox.teeType != "auto change location"){
            html += `<option value="${t}">${teeBox.teeType}</option>`;
        }
    }
    html += "</select>";
    $('.selectTeeTypes').html(html);
    $('.selectTeeTypes').show();
}

function enterPlayerNames(){
    numPlayers++;
    
    $('.playerInput').append("<div class='playerNames'><input  id='playerNames' type='text' placeholder='Enter Player Name...'></input></div>");

    buildPlayers();
}

function buildTeeBoxHoles(teeBoxIndex){
    console.log(teeBoxIndex);

    buildFrontNine(teeBoxIndex);
    addFrontNine();
    buildBackNine(teeBoxIndex);
    addBackNine();
    addTotal();
    
}

function buildFrontNine(teeBoxIndex){
    for(let fn = 0; fn <= frontNine; fn++){
        teeBoxNum = fn + 1;
        teeBoxYards = golfCourse.holes[fn].teeBoxes[teeBoxIndex].yards;
        teeBoxHandicap = golfCourse.holes[fn].teeBoxes[teeBoxIndex].hcp;
        teeBoxPar = golfCourse.holes[fn].teeBoxes[teeBoxIndex].par;
        $(".box").append(`<div id="col${teeBoxNum}"                             class="column">
                        <div>${teeBoxNum}</div>
                        <div class='yards'>Yards ${teeBoxYards}</div>
                        <div class ='handicap'> Hcp ${teeBoxHandicap}</div>
                        <div class ='par'>Par ${teeBoxPar}</div>
                        </div>
                        `);
        
    }   
}

function addFrontNine(){
    $(".box" ).append('<div id="colAddFront" class="addSeperate">Front</div>')
}

function buildBackNine(teeBoxIndex){
    for(let bn = 9; bn <= backNine; bn++){
        teeBoxNum = bn + 1;
        teeBoxYards = golfCourse.holes[bn].teeBoxes[teeBoxIndex].yards;
        teeBoxHandicap = golfCourse.holes[bn].teeBoxes[teeBoxIndex].hcp;
        teeBoxPar = golfCourse.holes[bn].teeBoxes[teeBoxIndex].par;

        $(".box").append(`<div id="col${teeBoxNum}"                             class="column">
                        <div>${teeBoxNum}</div>
                        <div class='yards'>Yards ${teeBoxYards}</div>
                        <div class = 'handicap'> Hcp ${teeBoxHandicap}</div>
                        <div class ='par'>Par ${teeBoxPar}</div>
                        </div>`
                        );
    }
}

function addBackNine(){
    $(".box").append('<div id="colAddBack" class="addSeperate">Back</div>')

}

function addTotal(){
    $(".box").append('<div id="colAddTotal" class="addTotal">Total</div>')

}


function buildPlayers(){
    
    console.log(numPlayers);
    for(let h = 1; h <= backNine; h++){
        $("#col"+ h).append(`<input id="p${numPlayers}h${h}" class="minibox"></input>`);
    }
    $("#colAddFront").append(`<input class="minibox"></input>`);
    $("#colAddBack").append(`<input class="minibox"></input>`);
    $("#colAddTotal").append(`<input class="minibox"></input>`);

    
}

