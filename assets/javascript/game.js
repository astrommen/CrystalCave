
$(document).ready(function() {
    var blue;
    var green;
    var yellow;
    var red;
    var crystalValue = 0;
    var userScore = [];
    var wins = 0;
    var lose = 0;
    
    // var crystalValueText = document.getElementById("crystal-value");
    // var userScoreText = document.getElementById("user-score");
    // var winScoreText = document.getElementById("wins");
    // var loseScoreText = document.getElementById("loses");
    
    //clicking crystals something happens
    $(".crystals").on("click", function() {
      alert("I've been clicked!");
    });
    
    function initializeCollector() {
      var userScore = [];
      
      $("#user-score").empty();
      
      crystalValue = Math.floor(Math.random() * 101);console.log(crystalValue);
      $(".crystal-value").text("Crystal Value = " + crystalValue);
      
      $("#blue").attr("value", randomCrysVal()); console.log($(this).attr("value"));
      $("#green").attr("value", randomCrysVal()); console.log($(this).attr("value"));
      $("#yellow").attr("value", randomCrysVal()); console.log($(this).attr("value")); 
      $("#red").attr("value", randomCrysVal()); console.log($(this).attr("value"));
      
    }
    
    function randomCrysVal() {
      return Math.floor(Math.random() * 12); 
    } 

    //Game Play
    $(".crystals").on("click", function(){
    
    userScore.push($(this).attr("value")); console.log(userScore);
    
    
    });
    
    initializeCollector();
  });
  