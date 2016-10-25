$(function(){
var vowels = ["A","a","I","i","O","o","E","e","U","u"];
  var funnanator = function(dashing){
    for (var counter = 0; counter < dashing.length; counter += 1){
      if (vowels.indexOf(dashing[counter]) > -1) {
        dashing[counter]="-";
      }
    }
    return dashing.join("");
  }

  $('.blanks button').click(function(event){
    var sentenceInput = $('input#sentence').val();
    var sentenceArray=sentenceInput.split("");
    var codeSentence = funnanator(sentenceArray);
    $("form").remove();
    $("#output h5").append(codeSentence);

  event.preventDefault();
  });
});
