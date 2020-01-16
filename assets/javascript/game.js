
$(document).ready(function() {
    var blue;
    var green;
    var yellow;
    var red;
    var crystalValue;
    var userScore = 0;
    var wins = 0;
    var lose = 0;
    
    var crystalValueText = document.getElementById("crystal-value");
    var userScoreText = document.getElementById("user-score");
    var winScoreText = document.getElementById("wins");
    var loseScoreText = document.getElementById("loses");
    
    //clicking crystals something happens
    $(".crystals").on("click", function() {
      alert("I've been clicked!");
    });
    
    function initializeCollector() {
      var userScore = 0;
      
      $("#user-score").empty();
      
      crystalValue = Math.floor(Math.random() * 101);console.log(crystalValue);
      $(".crystal-value").text("Crystal Value = " + crystalValue);
      
      blue = randomCrysVal();console.log("this is " + blue);
      green = randomCrysVal();console.log("this is " + green);
      yellow = randomCrysVal();console.log("this is " + yellow);
      red = randomCrysVal();console.log("this is " + red);
      
    }
    
    function randomCrysVal() {
      return Math.floor(Math.random() * 12);
      
    } 
    initializeCollector();
  });
  