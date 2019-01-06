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

  $('#number-of-letters-input').on('input', function(event) {
    addWordsByLetterCount(words);
  });

  $('#hint-1-input').on('input', function(event) {
    addWordsByLetterCount(words);
  });

  $('#hint-1-position-input').on('input', function(event) {
    addWordsByLetterCount(words);
  });

  $('#reset').on('click', function(event) {
    $(this)
      .closest('form')
      .find('input, textarea')
      .val('');
    addWordsByLetterCount(words);
  });
});

function addWordsByLetterCount(words) {
  $('#words-container').empty();
  let wordLength = parseInt($('#number-of-letters-input').val());
  for (let i = 0; i < words.length; i++) {
    let wordElement = $('<li>');
    wordElement.text(words[i]);
    if (wordLength === words[i].length) {
      if (
        $('#hint-1-input').val() !== '' &&
        $('#hint-1-position-input').val() !== ''
      ) {
        if (
          $('#hint-1-input').val() ===
          words[i].charAt(parseInt($('#hint-1-position-input').val() - 1))
        ) {
          $('#words-container').append(wordElement);
        }
      } else {
        $('#words-container').append(wordElement);
      }
    }
  }
}
