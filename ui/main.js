console.log('Loaded!');

//change the text of the main-text div
var element = document.getElementById('main-text');
element.innerHTML = 'Welcome !';

//Move the image
var img = document.getElementByID('madi');
img.onclick = function() {
    img.style.marginleft = '100px';
};