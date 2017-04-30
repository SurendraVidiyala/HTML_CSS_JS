var guess_input;
var target;
var finished = false;
var guess_input_text;
var guesses = 0;

function do_game() {
    var random_number = Math.random() * 100;
    var random_number_integer = Math.floor(random_number);
    target = random_number_integer + 1;
    while (!finished) {
        guess_input_text = prompt("I'm thinking of a number" +
            "in the range of 0 and 100\n\n" + "What is the Number?");
        guess_input = parseInt(guess_input_text);
        guesses += 1;
        finished = check_guess();
    }
}

function check_guess() {
    if (isNaN(guess_input)) {
        alert("You  have not enetered a number.\n\n" +
            "Please enter the numberin the range 1 to 100");
        return false;
    }
    if ((guess_input < 1) || (guess_input > 100)) {
        alert("Please enter an integer nnumber in the range 1 to 100.");
        return false;
    }
    if (guess_input > target) {
        alert("Your number is too Large!");
        return false;
    }
    if (guess_input < target) {
        alert("Your number is too small!");
        return false;
    }
    alert("You got it! The number was" + target + ".\n\n It took you" + guesses +
        "guesses to get the number");
    return true;
}