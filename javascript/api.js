let golfCourses;
let golfCourse;

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


function getCourse(courseId){
    console.log(courseId);
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
           golfCourse = JSON.parse(this.responseText).data;
           buildGolfCourseSelect();
        }
    }
    xhttp.open("GET", `https://golf-courses-api.herokuapp.com/courses/${courseId}`, true);
    xhttp.send();
} 

function displayCourses() {
    for(let i = 0; i < golfCourses.courses.length; i++) {
        $('.chooseCourses').append(`
        <div class="courseCard">
            <div class="courseImg" onclick="getCourse(${golfCourses.courses[i].id})" style="background-image: 
            url(${golfCourses.courses[i].image})"></div>
        <h3>${golfCourses.courses[i].name}</h3>
        </div>
        `)
    }    
}
