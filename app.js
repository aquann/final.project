<<<<<<< HEAD
var host = "api.giphy.com";
var path = "/v1/gifs/random";
var apiKey = "LrbR4KEfv97Es2M0bc2vatRnvtC2knWW";
var GIFset1 = [
    ["007", "thor", "transformers", "thanos"],
    ["dancing", "fire", "milk", "pinkpanther"],
    ["ballons", "pokemon", "toys", "sandwhich"],
    ["godfather", "crackers", "scary", "tall"],
    ["salt", "sun", "indianajones", "moon"],
    ["chocolate", "starwars", "spiderman", "screaming"],
    ["orange", "laughing", "screws", "freshprince"],
    ["cats", "dears", "seals", "lionking"],
    ["missionimpossible", "dogs", "apples", "octopus"],
    ["trump", "sky", "michaelmyers", "hats"]
];

var api = "https://" + host + path + "?api_key=" + apiKey + "&tag=";


for (let i = 0; i < GIFset1.length; i++) {
    const gifArray = GIFset1[i];
    for (let j = 0; j < gifArray.length; j++)  {
        const gifTag = gifArray[j];
       $.getJSON(api + gifTag, function(json) {
           console.log(json.data.image_url);
           if (json.data.length > 0) 
                console.log(json);
           var elem = document.getElementById('q'+i);
           console.log(elem);
       });
    }
}

var HintButtons = document.getElementsByClassName("HintButton")
for (let i = 0; i < HintButtons.length; i++) {
    var b = HintButtons[i];
    b.onclick = function () {
        this.previousElementSibling.style.display = "block"
    }

}


//var gifQuiz = "Gif Quiz";
//var quiz = [{
//    "question": "How does this character sound like?",
//    "image": "thor.gif",
//  },
//  {
//    "question": "How does this character sound like?",
//    "image": "thanos.gif",
//  },
//  {
//    "question": "How does this character sound like?",
//     "image": "thanos.gif",
//  },
//  {
//    "question": "How does this character sound like?",
//   "image": "thanos.gif",
//    "choices": [
//      "sound1",
//      "sound1",
//      "sound1",
//      "sound1"
//    ],
//  },
//  {
//    "question": "How does this character sound like?",
//     "image": "thanos.gif",
//  },
//];
//
//var currentquestion = 0,
//  score = 0,
//  submt = true,
//  picked;
//jQuery(document).ready(function($) {
//
//  function htmlEncode(value) {
//    return $(document.createElement('div')).text(value).html();
//  }
//
//  function addChoices(choices) {
//    if (typeof choices !== "undefined" && $.type(choices) == "array") {
//      $('#choice-block').empty();
//      for (var i = 0; i < choices.length; i++) {
//        $(document.createElement('li')).addClass('choice choice-box').attr('data-index', i).text(choices[i]).appendTo('#choice-block');
//      }
//    }
//  }
//
//
//  function nextQuestion() {
//    submt = true;
//    $('#explanation').empty();
//    $('#question').text(quiz[currentquestion]['question']);
//    $('#pager').text('Question ' + Number(currentquestion + 1) + ' of ' + quiz.length);
//    if (quiz[currentquestion].hasOwnProperty('image') && quiz[currentquestion]['image'] != "") {
//      if ($('#question-image').length == 0) {
//        $(document.createElement('img')).addClass('question-image').attr('id', 'question-image').attr('src', quiz[currentquestion]['image']).attr('alt', htmlEncode(quiz[currentquestion]['question'])).insertAfter('#question');
//      } else {
//        $('#question-image').attr('src', quiz[currentquestion]['image']).attr('alt', htmlEncode(quiz[currentquestion]['question']));
//      }
//    } else {
//      $('#question-image').remove();
//    }
//    addChoices(quiz[currentquestion]['choices']);
//    setupButtons();
//  }
//
//  function processQuestion(choice) {
//    if (quiz[currentquestion]['choices'][choice] == quiz[currentquestion]['correct']) {
//      $('.choice').eq(choice).css({
//        'background-color': '#50D943'
//      });
//      $('#explanation').html('<strong>Correct!</strong> ' + htmlEncode(quiz[currentquestion]['explanation']));
//      score++;
//    } else {
//      $('.choice').eq(choice).css({
//        'background-color': '#D92623'
//      });
//      $('#explanation').html('<strong>Incorrect.</strong> ' + htmlEncode(quiz[currentquestion]['explanation']));
//    }
//    currentquestion++;
//    $('#submitbutton').html('NEXT QUESTION »').on('click', function() {
//      if (currentquestion == quiz.length) {
//        endQuiz();
//      } else {
//        $(this).text('Check Answer').css({
//          'color': '#222'
//        }).off('click');
//        nextQuestion();
//      }
//    })
//  }
//
//  function setupButtons() {
//    $('.choice').on('mouseover', function() {
//      $(this).css({
//        'background-color': '#e1e1e1'
//      });
//    });
//    $('.choice').on('mouseout', function() {
//      $(this).css({
//        'background-color': '#fff'
//      });
//    })
//    $('.choice').on('click', function() {
//      picked = $(this).attr('data-index');
//      $('.choice').removeAttr('style').off('mouseout mouseover');
//      $(this).css({
//        'border-color': '#222',
//        'font-weight': 700,
//        'background-color': '#c1c1c1'
//      });
//      if (submt) {
//        submt = false;
//        $('#submitbutton').css({
//          'color': '#000'
//        }).on('click', function() {
//          $('.choice').off('click');
//          $(this).off('click');
//          processQuestion(picked);
//        });
//      }
//    })
//  }
//
//
//  function endQuiz() {
//    $('#explanation').empty();
//    $('#question').empty();
//    $('#choice-block').empty();
//    $('#submitbutton').remove();
//    $('#question').text("You got " + score + " out of " + quiz.length + " correct.");
//    $(document.createElement('h2')).css({
//      'text-align': 'center',
//      'font-size': '4em'
//    }).text(Math.round(score / quiz.length * 100) + '%').insertAfter('#question');
//  }
//
//  function init() {
//
//    if (typeof quiztitle !== "undefined" && $.type(quiztitle) === "string") {
//      $(document.createElement('h1')).text(quiztitle).appendTo('#frame');
//    } else {
//      $(document.createElement('h1')).text("Gif Quiz").appendTo('#frame');
//    }
//
//    if (typeof quiz !== "undefined" && $.type(quiz) === "array") {
//
//      $(document.createElement('p')).addClass('pager').attr('id', 'pager').text('Question 1 of ' + quiz.length).appendTo('#frame');
//
//      $(document.createElement('h2')).addClass('question').attr('id', 'question').text(quiz[0]['question']).appendTo('#frame');
//
//      if (quiz[0].hasOwnProperty('image') && quiz[0]['image'] != "") {
//        $(document.createElement('img')).addClass('question-image').attr('id', 'question-image').attr('src', quiz[0]['image']).attr('alt', htmlEncode(quiz[0]['question'])).appendTo('#frame');
//      }
//      $(document.createElement('p')).addClass('explanation').attr('id', 'explanation').html(' ').appendTo('#frame');
//
//
//      $(document.createElement('ul')).attr('id', 'choice-block').appendTo('#frame');
//
//
//      addChoices(quiz[0]['choices']);
//
//
//      $(document.createElement('div')).addClass('choice-box').attr('id', 'submitbutton').text('Check Answer').css({
//        'font-weight': 700,
//        'color': '#222',
//        'padding': '30px 0'
//      }).appendTo('#frame');
//
//      setupButtons();
//    }
//  }
//
//  init();
//});
=======
var gifQuiz = "Gif Quiz";
var quiz = [{
    "question": "How does this character sound like?",
    "image": "",
    "choices": [
      "https://media.giphy.com/media/Xtij9YYM3NLYk/giphy.gif",
      "https://media.giphy.com/media/Xtij9YYM3NLYk/giphy.gif",
      "https://media.giphy.com/media/Xtij9YYM3NLYk/giphy.gif",
      "https://media.giphy.com/media/Xtij9YYM3NLYk/giphy.gif"
    ],
  },
  {
    "question": "How does this character sound like?",
    "image": "thanos.gif",
    "choices": [
      "https://media.giphy.com/media/Xtij9YYM3NLYk/giphy.gif",
      "https://media.giphy.com/media/Xtij9YYM3NLYk/giphy.gif",
      "https://media.giphy.com/media/Xtij9YYM3NLYk/giphy.gif",
      "https://media.giphy.com/media/Xtij9YYM3NLYk/giphy.gif"
    ],
  },
  {
    "question": "How does this character sound like?",
     "image": "thanos.gif",
    "choices": [
      "sound1",
      "sound1",
      "sound1",
      "sound1"
    ],
  },
  {
    "question": "How does this character sound like?",
   "image": "thanos.gif",
    "choices": [
      "sound1",
      "sound1",
      "sound1",
      "sound1"
    ],
  },
  {
    "question": "How does this character sound like?",
     "image": "thanos.gif",
    "choices": [
      "sound1",
      "sound1",
      "sound1",
      "sound1"
    ],
  },
];

var currentquestion = 0,
  score = 0,
  submt = true,
  picked;
jQuery(document).ready(function($) {

  function htmlEncode(value) {
    return $(document.createElement('div')).text(value).html();
  }

  function addChoices(choices) {
    if (typeof choices !== "undefined" && $.type(choices) == "array") {
      $('#choice-block').empty();
      for (var i = 0; i < choices.length; i++) {
        $(document.createElement('li')).addClass('choice choice-box').attr('data-index', i).text(choices[i]).appendTo('#choice-block');
      }
    }
  }


  function nextQuestion() {
    submt = true;
    $('#explanation').empty();
    $('#question').text(quiz[currentquestion]['question']);
    $('#pager').text('Question ' + Number(currentquestion + 1) + ' of ' + quiz.length);
    if (quiz[currentquestion].hasOwnProperty('image') && quiz[currentquestion]['image'] != "") {
      if ($('#question-image').length == 0) {
        $(document.createElement('img')).addClass('question-image').attr('id', 'question-image').attr('src', quiz[currentquestion]['image']).attr('alt', htmlEncode(quiz[currentquestion]['question'])).insertAfter('#question');
      } else {
        $('#question-image').attr('src', quiz[currentquestion]['image']).attr('alt', htmlEncode(quiz[currentquestion]['question']));
      }
    } else {
      $('#question-image').remove();
    }
    addChoices(quiz[currentquestion]['choices']);
    setupButtons();
  }

  function processQuestion(choice) {
    if (quiz[currentquestion]['choices'][choice] == quiz[currentquestion]['correct']) {
      $('.choice').eq(choice).css({
        'background-color': '#50D943'
      });
      $('#explanation').html('<strong>Correct!</strong> ' + htmlEncode(quiz[currentquestion]['explanation']));
      score++;
    } else {
      $('.choice').eq(choice).css({
        'background-color': '#D92623'
      });
      $('#explanation').html('<strong>Incorrect.</strong> ' + htmlEncode(quiz[currentquestion]['explanation']));
    }
    currentquestion++;
    $('#submitbutton').html('NEXT QUESTION »').on('click', function() {
      if (currentquestion == quiz.length) {
        endQuiz();
      } else {
        $(this).text('Check Answer').css({
          'color': '#222'
        }).off('click');
        nextQuestion();
      }
    })
  }

  function setupButtons() {
    $('.choice').on('mouseover', function() {
      $(this).css({
        'background-color': '#e1e1e1'
      });
    });
    $('.choice').on('mouseout', function() {
      $(this).css({
        'background-color': '#fff'
      });
    })
    $('.choice').on('click', function() {
      picked = $(this).attr('data-index');
      $('.choice').removeAttr('style').off('mouseout mouseover');
      $(this).css({
        'border-color': '#222',
        'font-weight': 700,
        'background-color': '#c1c1c1'
      });
      if (submt) {
        submt = false;
        $('#submitbutton').css({
          'color': '#000'
        }).on('click', function() {
          $('.choice').off('click');
          $(this).off('click');
          processQuestion(picked);
        });
      }
    })
  }


  function endQuiz() {
    $('#explanation').empty();
    $('#question').empty();
    $('#choice-block').empty();
    $('#submitbutton').remove();
    $('#question').text("You got " + score + " out of " + quiz.length + " correct.");
    $(document.createElement('h2')).css({
      'text-align': 'center',
      'font-size': '4em'
    }).text(Math.round(score / quiz.length * 100) + '%').insertAfter('#question');
  }

  function init() {

    if (typeof quiztitle !== "undefined" && $.type(quiztitle) === "string") {
      $(document.createElement('h1')).text(quiztitle).appendTo('#frame');
    } else {
      $(document.createElement('h1')).text("Gif Quiz").appendTo('#frame');
    }

    if (typeof quiz !== "undefined" && $.type(quiz) === "array") {

      $(document.createElement('p')).addClass('pager').attr('id', 'pager').text('Question 1 of ' + quiz.length).appendTo('#frame');

      $(document.createElement('h2')).addClass('question').attr('id', 'question').text(quiz[0]['question']).appendTo('#frame');

      if (quiz[0].hasOwnProperty('image') && quiz[0]['image'] != "") {
        $(document.createElement('img')).addClass('question-image').attr('id', 'question-image').attr('src', quiz[0]['image']).attr('alt', htmlEncode(quiz[0]['question'])).appendTo('#frame');
      }
      $(document.createElement('p')).addClass('explanation').attr('id', 'explanation').html(' ').appendTo('#frame');


      $(document.createElement('ul')).attr('id', 'choice-block').appendTo('#frame');


      addChoices(quiz[0]['choices']);


      $(document.createElement('div')).addClass('choice-box').attr('id', 'submitbutton').text('Check Answer').css({
        'font-weight': 700,
        'color': '#222',
        'padding': '30px 0'
      }).appendTo('#frame');

      setupButtons();
    }
  }

  init();
});
>>>>>>> 09b184f435d0543cee7ac9a325a3c6918c391229
