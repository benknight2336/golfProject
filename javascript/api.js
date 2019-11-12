let golfCourses;

(function(){
    getCourses();
})();

function getCourses(){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            golfCourses = JSON.parse(this.responseText);
            console.log(golfCourses);
            displayCourses();
        }
    }
    xhttp.open("GET", "https://golf-courses-api.herokuapp.com/courses", true);
    xhttp.send();
}

function displayCourses() {
    for(let i = 0; i < golfCourses.courses.length; i++) {
        $('.chooseCourses').append(`
        <div class="courseCard">
            <div class="courseImg" style="background-image: 
            url(${golfCourses.courses[i].image})"></div>
        <span>${golfCourses.courses[i].name}</span>
        </div>
        `)
    }    
}