$(document).ready(function(){

// Hides Uppercase Keyboard on Load
$('#keyboard-upper-container').css('display', 'none');

// While the shift key is held down, hide the lowercase keyboard and show the uppercase one
$(document).on('keydown', function(e){
    if(e.keyCode===16){
        $('#keyboard-upper-container').css('display', 'block');
        $('#keyboard-lower-container').css('display', 'none');
    }
});
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
});
$(document).on('keyup', function(e){
    $(`#${e.keyCode}`).css('background-color','unset');
    $(`#${e.keyCode+32}`).css('background-color','unset');
});

let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];

let counter = 0; 
$('#sentence').append(sentences[counter])
});
let spacing = 1;
$(document).on('keydown', function(){

    $('#yellow-block').css('margin-left', `${15 * spacing}px`);
    spacing++
});

