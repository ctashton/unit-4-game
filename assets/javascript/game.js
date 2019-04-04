// This is the target number
var answer = "";
// This is the user's points
var totalScore = 0;
// This is our wins counter
var wins = 0;
// This is our losses counter
var losses = 0;

var crystalArray = ["./assets/images/greenCrystal.jpg", "./assets/images/blueCrystal.jpg", "./assets/images/redCrystal.jpg", "./assets/images/purpleCrystal.jpg"];

$("#answerText").html("Number to Guess: " + "<span>" + answer + "</span>");
$("#titleText").html("<h1>Crystal Collector!</h1>");
$("#scoreKeeper").html("<p>Wins: " + wins + "</p><p>Losses: " + losses + "</p>");
$("#userPoints").html("<br><span>" + totalScore + "</span>");

// This is a for loop to generate the crystals and assign their values

for (let i = 0; i < crystalArray.length; i++) {
    // Create a var named "imageCrystal" equal to the img tag along with an ID named crystal + index#
    var imageCrystal = $("<img>", {id: "crystal" + i});
    // Assign a class each time the loop is ran called crystal-image
    imageCrystal.addClass("crystal-image");
    // give each instance a source attribute of our crystal Array index as it loops
    imageCrystal.attr("src", crystalArray[i]);
    // This will assign a random number value to each crystal between integers 1-12
    imageCrystal.attr("data-crystalvalue", Math.floor(Math.random() * 12) + 1);
    // append our rubyImages div ID with each imageCrystal
    $("#rubyImages").append(imageCrystal);
};
    //Hey jquery, when our elements with the class crystal-image are clicked, run this function...
$(".crystal-image").on("click", function() {
   // alert("you clicked an image!");
    // These two lines take *THIS* crystalvalue that's assigned and parses it to an integer
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    //When clicked, the value of the crystal will be added to the users score value
     totalScore += crystalValue;
    // This updates the html page to show the new Total score.
     $("#userPoints").html("Your total points: " + "<br><span>" + totalScore + "</span>");
    // if totalScore is exactly our defined answer
     if (totalScore === answer){
         // wins +1
         wins++;
         // update html with new score and reset game
         $("#scoreKeeper").html("<p>Wins: " + wins + "</p><p>Losses: " + losses + "</p>");
         resetGame()
         // else if totalScore goes over target answer
     } else if (totalScore > answer) {
         //losses ++
         losses++;
        // update html with new score and reset game
         $("#scoreKeeper").html("<p>Wins: " + wins + "</p><p>Losses: " + losses + "</p>");
         resetGame()
     }
});
    //function to reset game stats
function resetGame(){
    // totalscore back to 0
    totalScore = 0;
    // new target score
    answer = Math.floor(Math.random() * 101) + 19;
    //update display for answer and target score
    $("#answerText").html("<span>" + answer + "</span>");
    $("#userPoints").html("Your total points: " + "<br><span>" + totalScore + "</span>");
    // update image crystal attribute with a new value.
    $("#crystal0").attr("data-crystalvalue", Math.floor(Math.random() * 12) + 1);
    $("#crystal1").attr("data-crystalvalue", Math.floor(Math.random() * 12) + 1);
    $("#crystal2").attr("data-crystalvalue", Math.floor(Math.random() * 12) + 1);
    $("#crystal3").attr("data-crystalvalue", Math.floor(Math.random() * 12) + 1);

    // append our rubyImages div ID with each imageCrystal
    $("#rubyImages").append(imageCrystal);

}






