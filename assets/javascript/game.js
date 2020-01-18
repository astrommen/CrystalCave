
$(document).ready(function() {

    //Persistent/Global variables
    var crystalValue = 0;
    var userGemScore = [];
    var userScore = 0;
    var wins = 0;
    var lose = 0;
    
    // var crystalValueText = document.getElementById("crystal-value");
    // var userScoreText = document.getElementById("user-score");
    // var winScoreText = document.getElementById("wins");
    // var loseScoreText = document.getElementById("loses");
    
    
    function randomCrysVal() {
      return Math.floor((Math.random() * 12) + 1); 
    } 
    
    function initializeCollector() {
      var userScore = 0;
      
      $("#user-score").empty();
      
      crystalValue = Math.floor((Math.random() * 101) + 19);console.log(crystalValue);
      $(".crystal-value").text("Crystal Value = " + crystalValue);
      
      // $("#blue").attr("value", randomCrysVal()); 
      // $("#green").attr("value", randomCrysVal()); 
      // $("#yellow").attr("value", randomCrysVal()); 
      // $("#red").attr("value", randomCrysVal()); 
      
      addIdValue("#blue");
      addIdValue("#green");
      addIdValue("#yellow");
      addIdValue("#red");
    }
    
    function addIdValue(id){
      $(id).attr("value", randomCrysVal()); 
    }

    //Game Play
    $(".crystals").on("click", function(){
  
      userGemScore.push($(this).attr("value")); console.log(userGemScore);

      userScore = userGemScore.reduce(function(a, b){//reduce() method is an array method only!
          return Number(a) + Number(b);
      }); console.log(userScore);

      // $(".user-score").text(userScore);
      
    });

    //Win/Lose Condition
    if (userScore == crystalValue){
      var w = 0;
      w++;
    } else if (userScore > crystalValue){
      var l = 0;
      l++;
    }
    
    initializeCollector();
  });
  