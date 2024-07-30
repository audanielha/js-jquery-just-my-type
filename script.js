$(document).ready(function(){

// Hides Uppercase Keyboard on Load
$('#keyboard-upper-container').css('display', 'none');

// While the shift key is held down, hide the lowercase keyboard and show the uppercase one
$(document).on('keydown', function(e){
    if(e.keyCode===16){
        $('#keyboard-upper-container').css('display', 'block');
        $('#keyboard-lower-container').css('display', 'none');
    }
})
// When the shift key is released, show the lowercase keyboard and hide the uppercase one
$(document).on('keyup', function(e){
    if(e.keyCode===16){
        $('#keyboard-upper-container').css('display', 'none');
        $('#keyboard-lower-container').css('display', 'block');
    }
})
// When keys are pressed, they should be highlighted in the browser.
$(document).on('keydown', function(e){
        $(`#${e.keyCode}`).css('background-color','green');
        $(`#${e.keyCode+32}`).css('background-color','green');
})

});