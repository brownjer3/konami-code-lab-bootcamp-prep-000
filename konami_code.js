const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
var index = 0;

function init() {
var body = document.body;

  body.addEventListener('keydown', function(e) {
      var key = parseInt(e.detail || e.which);

      if (key === code[index]) {
      index++;

      if (index === code.length ) {

      window.alert('YES.');
      index = 0;
}
  } else {
      index = 0;
    }
  });
}

init();
