
const $ = require('jquery');

const sayHello = () => {
    console.log("Hello, World!");
};
sayHello();

$('*').css({
   'display': 'flex',
   'justifyContent': 'center',
    'alignItems': 'center',
    'flex-direction': 'column',
    'width': '100%'
});

$('#thanks').html('Hello, World').css({
    'background': 'blue',
    'color': "ghostwhite",
    'font-family': 'heiti',
    'width': '100%'

});


$('#foolHardy').css({
    'background': 'grey',
    'font-family': 'helvetica',
    'height': '75px'
});

$('#butAlas').css({
    'background': 'lightgrey',
    'font-family': 'helvetica',
    'height': '50px'
});


const hiHello = require('./say-hello');
hiHello();