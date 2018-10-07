document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.slider');
  var instances = M.Slider.init(elems);
});

// Or with jQuery

$(document).ready(function(){
  $('.slider').slider({
    indicators: true,
    height: 400,
    duration: 500,
    interval: 3000,
  });
});


document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);
});

// Or with jQuery

$(document).ready(function(){
  $('.modal').modal({
    startingTop: '20%',
    startingTop: '20%',
  });
});