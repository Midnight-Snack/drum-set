// Use jQuery to handle the click event on all elements with the class "drum"
$(".drum").click(function() {
    var buttonInnerHTML = $(this).html();
    makeSound(buttonInnerHTML);
  });
  
  // Use jQuery to handle the keydown event on the document
  $(document).keydown(function(event) {
    makeSound(event.key);
  });
  
  // Function to play sound based on the key
  function makeSound(key) {
    var audio;
    switch (key) {
      case "w":
        audio = new Audio("sounds/tom-1.mp3");
        break;
      case "a":
        audio = new Audio("sounds/tom-2.mp3");
        break;
      case "s":
        audio = new Audio("sounds/tom-3.mp3");
        break;
      case "d":
        audio = new Audio("sounds/tom-4.mp3");
        break;
      case "j":
        audio = new Audio("sounds/cymbal.wav");
        break;
      case "k":
        audio = new Audio("sounds/kick-bass.mp3");
        break;
      case "l":
        audio = new Audio("sounds/crash.mp3");
        break;
      default:
        console.log("Unbound key: " + key);
        return;
    }
    audio.play();
  }
  