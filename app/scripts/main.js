






// Contact Page button

$( "#header-contact-button" ).click(function() {
  $( "#contact-page" ).slideToggle( { direction: "left" }, 25000 );
});


// Contact Page Exit Button

$( "#close-contact-page" ).click(function() {
  $( "#contact-page" ).slideToggle( { direction: "right" }, 25000 );
});

// Drink Menu Page Button

$( "#menu-drinks" ).click(function() {
  $( "#drink-menu-page" ).slideToggle( { direction: "left" }, 25000 );
});


$( "#close-drink-menu-page-button" ).click(function() {
  $( "#drink-menu-page" ).slideToggle( { direction: "right" }, 25000 );
});










// $(document).ready(function() {
//   $("#header-contact-button").click(function() {
//     $('#contact-page').slideToggle( "slide", { direction: "left" }, 8000 );
//   });

//   $("#close-contact-page").click(function() {
//     $('#contact-page').toggle();
//   });
// });


// $("#header-contact-button").click(function () {
 
//     // Set the effect type
//     var effect = 'slide';
 
//     // Set the options for the effect type chosen
//     // var options = { direction: 'right' };
 
//     // Set the duration (default: 400 milliseconds)
//     var duration = 700;
 
//     $("#contact-page").toggle(effect, duration);
// });


// $("#close-contact-page").click(function () {
 
//     // Set the effect type
//     var effect = 'slide';
 
//     // Set the options for the effect type chosen
//     // var options = { direction: 'left' };
 
//     // Set the duration (default: 400 milliseconds)
//     var duration = 700;
 
//     $("#contact-page").toggle(effect, duration);
// });




// $(".myButton").click(function () {

//     // Set the effect type
//     var effect = 'slide';

//     // Set the options for the effect type chosen
//     var options = { direction: $('.mySelect').val() };

//     // Set the duration (default: 400 milliseconds)
//     var duration = 500;

//     $('#myDiv').toggle(effect, options, duration);
// });