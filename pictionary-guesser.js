$(document).ready(function() {
  let words = [
    'cat',
    'habitat',
    'rock',
    'basketball',
    'rose',
    'school',
    'lizard',
    'chocolate',
    'house',
    'bird',
    'dog',
    'wizard',
    'rat',
    'archery',
  ];

  let randomWordSelector = Math.floor(Math.random() * words.length);
  let currentWord = words[randomWordSelector]; // this is to help test code, later the user will have to input known information and actual word will not be known

  for (let i = 0; i < words.length; i++) {
    let wordElement = $('<li>');
    wordElement.text(words[i]);
    if (currentWord.length === words[i].length) {
      $('#words-container').append(wordElement);
    }
  }
  $('#submit').on('click', function(event) {
    //event.preventDefault(); prevents default event behavior like refreshing the page
    console.log('sup!');
    console.log(currentWord);
  });
});
