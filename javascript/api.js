let golfCourses;

(function(){
    printCourses();
    getCourses();
})();

function printCourses(){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            golfCourses = JSON.parse(this.responseText);
            console.log(golfCourses);
            $('.chooseCourses').append('yes');

        }
    }
    xhttp.open("GET", "https://golf-courses-api.herokuapp.com/courses", true);
    xhttp.send();
}

function getCourses(){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            $(".chooseCourses").append("x")
        }
    }
    xhttp.open("Get", "https://golf-courses-api.herokuapp.com/courses", true);
    xhttp.send();
}