const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

var index = 0;

function init() {

  document.addEventListener('keydown', function(e) {
      var key = parseInt(e.detail || e.which);

  for (var i = 0; i < code.length; i++) {
    if (key === code[i]);
  }

/*document.addEventListener('keydown', function(e) {
    var key = parseInt(e.detail || e.which);

    for (index = 0; index < code.length; index++) {
    if (key === code[index]) {
      console.log(e.which);
      index++;

      if (index === code.length - 1) {
        window.alert('fuck. yes.');
        index = 0;
      }
    } else {
      index = 0;
    }
  }
}
}
*/
//init();

// for (index = 0; index < code.length; index++) {
