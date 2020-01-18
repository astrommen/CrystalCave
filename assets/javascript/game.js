
$(document).ready(function() {

    //Persistent/Global variables
    var crystalValue = 0;
    var userGemScore = [];
    var userScore = 0;
    var w=0;
    var l=0;
    // var wins = 0;
    // var lose = 0;
    
    // var crystalValueText = document.getElementById("crystal-value");
    // var userScoreText = document.getElementById("user-score");
    // var winScoreText = document.getElementById("wins");
    // var loseScoreText = document.getElementById("loses");
    
    
    function randomCrysVal() {
      return Math.floor((Math.random() * 12) + 1); 
    } 
    
    function addIdValue(id){
      $(id).attr("value", randomCrysVal()); 
    }

    function initializeCollector() {
      userScore = 0;
      userGemScore = [];
      
      $("#user-score").text(" ");
      
      crystalValue = Math.floor((Math.random() * 101) + 19);console.log(crystalValue);
      $(".crystal-value").text("Crystals Value: " + crystalValue);
      
      addIdValue("#blue");
      addIdValue("#green");
      addIdValue("#yellow");
      addIdValue("#red");
    }
    

    //Game Play
    $(".crystals").on("click", function(){
  
      userGemScore.push($(this).attr("value")); console.log(userGemScore);

      userScore = userGemScore.reduce(function(a, b){//reduce() method is an array method only!
          return Number(a) + Number(b);
      }); console.log(userScore);

      $("#user-score").text("Your Score: " + userScore);
      
      //Win/Lose Condition
      if (userScore === crystalValue){
        w++;
        $("#wins").text(w);
        alert("You've gathered the crystals!");
        initializeCollector();
      } else if (userScore > crystalValue){
        l++; 
        console.log(l);
        $("#losses").text(l);
        alert("You've lost the crystals!");
        initializeCollector();
      }
    });

    
    initializeCollector();
  });
  