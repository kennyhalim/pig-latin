var pigLatin = function(strings){
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var words = strings.split(' ');
  var finishSentence = "";

  words.forEach(function(word){
    if (!isNaN(word)){
      finishSentence +=  word + " ";
    } else {
    if (word.length > 1 && vowels.includes(word.charAt(0).toLowerCase())){
      finishSentence += word + "way" + " ";
    }
    else if (word.length < 2 && vowels.includes(word.charAt(0).toLowerCase())){
      finishSentence += word + "ay" + " ";
    }
    else if (word.toLowerCase().includes("qu")){
      var indexofqu = word.indexOf("qu") + 2;
      var quword = [];
      for (var k = 0; k < indexofqu;k++){
        quword.push(word.toLowerCase().charAt(k));
      }
      finishSentence +=  word.slice(indexofqu) + quword.join('') + "ay" + " ";
    }
    else {
        var index = [];
        for(var i = 0; i<vowels.length;i++){
          if (word.toLowerCase().indexOf(vowels[i]) != -1){
            index.push(word.toLowerCase().indexOf(vowels[i]));
          }
        }
        var indexoffirstvowel = Math.min.apply(null,index);
        var newWord = [];
        for (var i = 0; i < indexoffirstvowel;i++){
          newWord.push(word.toLowerCase().charAt(i));
        }
        finishSentence += word.slice(indexoffirstvowel) + newWord.join('') + "ay" + " ";
    }
  }
    });
    return finishSentence;
  };



$(document).ready(function(){
  $("form#input").submit(function(event){

    $("#output").empty();
    var strings = $("#string").val();

    var result = pigLatin(strings);

    $("#output").append(result);

    event.preventDefault();
  });

});

// if(vowels.includes(word[i])){
//   //return word + "way" + " ";
//   console.log();
//   return words.length;
// }
