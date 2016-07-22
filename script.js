jQuery(document).ready(function($) {
  // Initialize ipsum
  var generated = $("#generated");
  var league = ["Quantum", "Submolecular", "superposition", "ponder", "whew", "fine", "jam", "snobby", "dope", "consume", "core", "inhibitor"];
  
  $("#ipsum").bind("submit", function(){
    var numParagraphs = $("input[name=num-paragraphs]").val()
    if(numParagraphs > 100){
      numParagraphs = 100;
    }
    var startWith = $("input[name=start-with]").is(':checked') ? "League of Ipsum dolor sit amet " : "";
    generated.html(ipsum(numParagraphs, league, startWith));
    return false;
  });
});


function ipsum(numParagraphs, phrases, startText){
  var text = "";

  if(numParagraphs < 1){
    return text;
  }
  
  for(var i = 0; i < numParagraphs; i++){
    // 5 - 8 sentences per paragraph
    var paragraph = "";
    var numSentences = Math.floor((Math.random()*4)+5);
    for(var j = 0; j 
        
        < numSentences; j++){
      // 15 - 20 words per sentence
      var sentence = "";
      var numWords = Math.floor((Math.random()*6)+10);
      for(var k = 0; k < numWords; k++){
        var word = "";
        var wordNum = Math.floor(Math.random()*phrases.length);
        word = phrases[wordNum];
        
        if (k != 0){
          sentence = sentence + " ";
        }
        sentence = sentence + word;
      }
      sentence = sentence + ".";
      if (j == 0 && i == 0){
        sentence = startText + sentence;
      }

      sentence = capitalizeFirstLetter(sentence);
      
      paragraph = paragraph + sentence;
      paragraph = paragraph + " ";
    }
    paragraph = "<p>" + paragraph + "</p>";
    text = text + paragraph;
  }
  
  return text;
}

function capitalizeFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}