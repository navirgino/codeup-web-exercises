(function(){
    "use strict";



    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = planetsString.split("|");

    console.log(planetsArray);


    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     */

    var namesString = planetsArray.join('<br>');
    console.log(namesString);
    document.write(namesString);
     /** BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
     /*David's solution commented out below*/
/*
    var planetsUL = "<ul>";
    planetsArray.forEach(function(planets){
        planetsUL += "<li>" + planets + "</li>"
    });
    planetsUL += "</ul>";
    document.write(planetsUL);
*/


     planetsArray.unshift('<ul>');
     var planetsLi = planetsArray.join('<li>');
     planetsArray.push('</ul>');


     document.write(planetsLi);
     console.log(planetsLi);



})();
