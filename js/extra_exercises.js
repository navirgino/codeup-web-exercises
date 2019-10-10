/*function numOfChar(str){
    return str + " has " + str.length + " variables";
}

console.log(numOfChar("Homer"));*/


/*########################################################*/


/*
function madLib(){
    var noun = prompt("Enter a noun");
    var verb = prompt("Enter a verb");
    var adverb = prompt("Enter an adverb");
    return alert("So, you " + verb + " your " + noun + " very " + adverb + " Wow!");
}

console.log(madLib());*/

/*########################################################*/

function areaOfRectangularRoom() {
    var length = parseInt(prompt("What is the length of the room in feet? "));
    var width = parseInt(prompt("What is the width of the room in feet? "));
    var area = length * width;
    var sq_ft = area / 10.764;
    alert ("You have entered the dimensions of " + length + " feet by "
        + width + " feet.");
    alert("The area is: ");
    alert(area + " square feet.");
    alert(sq_ft + " square meters.");



}

console.log(areaOfRectangularRoom());


