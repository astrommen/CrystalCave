
$(document).ready(function() {
    var blue;
    var green;
    var yellow;
    var red;
    var crystalValue = 0;
    var userScore = 0;
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
      var userScore = 0;
      
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

 
    
    initializeCollector();
  });
  