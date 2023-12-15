var oldElements = document.querySelectorAll('.old-element');
oldElements.forEach(function(element) {
  element.style.color = '#ecc48f';
});

var newElements = document.querySelectorAll('.new-element');

newElements.forEach(function(element) {
  
  element.style.backgroundColor = '#ecc48f';
});
