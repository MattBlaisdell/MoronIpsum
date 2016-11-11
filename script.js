jQuery(document).ready(function($) {
  // Initialize ipsum
  var generated = $("#generated");
  var league = ["irregardless", "dawg", "dhat", "Dern tootin","I would build a wall like noboday can build a wall", "Bigly", "wrong", "folks", "yuge", "believe me", "I alone can fix it", "grab them by the pussy", "hombres",  "britches", "ornery", "baller", "could of", "should of", "alpha", "beta", "noob", "newb", "ratchet", "shorty", "cray", "dat ish cray", "bruh", "bruhh", "twerk", "legit", "is that a thing", "bye felicia", "hip", "totes", "adorbs", "totes adorbs", "on fleek", "turnt", "fetch", "so fetch", "quit trying to make fetch happen", "sprang break", "dat",  "turn up", "grind", "chirped", "doe", "ish", "swerve", "swag", "i can't even", "fleek", "basic", "squad", "lit", "fam", "woke", "snuck", "firstly", "prolly", "literally", "funner", "anyways", "orientate", "madded", "impactful", "supposedly", "flustrated", "conversate", "that's so random", "for all intensive purposes", "announciate", "expresso", "misunderestimate","vice-a versa","whole nother", "bae", "yolo", "participator",];""

  $("#ipsum").bind("submit", function(){
    var numParagraphs = $("input[name=num-paragraphs]").val()
    if(numParagraphs > 100){
      numParagraphs = 100;
    }
    var startWith = $("input[name=start-with]").is(':checked') ? "League of Ipsum dolor sit amet " : "Lorem ipsum dolor sit amet ";
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
    var numSentences = Math.floor((Math.random()*3)+4);
    for(var j = 0; j

        < numSentences; j++){
      // 15 - 20 words per sentence
      var sentence = "";
      var numWords = Math.floor((Math.random()*4)+8);
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
