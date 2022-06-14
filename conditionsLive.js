console.log("Hello World");

// The Math.random() function returns a floating-point, pseudo-random number in the range 0 to less than 1 
// (inclusive of 0, but not 1) with approximately uniform distribution over that range — which you can then scale 
// to your desired range.
let randomNumber = Math.random();

console.log(randomNumber); 

// If a condition computes a true value, then its block of statements is executed. Otherwise, the next condition 
// is tried, and so on. If none of the conditions computes a true value, then the block of statements associated 
// with the else block is executed.
if (randomNumber < 0.5) {

    console.log("Hello Betelhem");
    console.log(randomNumber);

}

if (randomNumber >= 0.5) {

    console.log('Random Number is greater than 0.5');
    console.log(randomNumber);

}

const dayOfWeek = 'Monday';

// if then else statement allows selection between two alternatives, dependent on the truth or falsity of a given 
// condition. The if statement can be followed by an optional else statement that executes when the expression is false.
if (dayOfWeek === 'Monday') {

    console.log('This is Monday');

} else if (dayOfWeek === 'Thursday') {

    console.log("This is Thursday");

} else if (dayOfWeek ===  'Saturday') {

    console.log("Hooray, today is Saturday");
}

// const means that the value is assigned at the time of declaration and it cannot be changed.
const age = prompt('ENTER AN AGE');
// const age = 8;


if (age < 5) {
    console.log("You Type Pretty Fast - 5 ");
} else if (age < 10) {
    console.log("Output of the logic compared to CASE STATEMENTS");
} else if (age < 35) {
    console.log("Output of the logic Mr Adult.");
}

// if all conditions fail else will be used as our last resort
else {

    console.log("Last Resort If All Conditons Fail");
} 


const expr = 'Strawberries';

// The switch statement is a part of JavaScript's "Conditional" Statements, which checks the value strictly. 
// So the expression's result does not match with the case. 
switch (age) {

    case 'Oranges':
        console.log("Oranges are $0.59 a pound");
        break;    
    case 'Mangoes':
        console.log("Hello Mangos!");
        break;
    case 'Strawberries':
        console.log("Hello Strawberries");
        break;
    default:
        console.log("Sorry, we are out of your asked item.");

}

// In the absence of such a limitation, the element(Strawberries) is not a match and the break helps to 
// break out of the switch block.

const password = prompt("Please Enter A New Password");

// if (password length is less than 6) inform user that password should be at least 6 characters 
// else if (passwords do not match) ask user to confirm password else inform user that passwords match, all is ok.
if (password.length >= 6) {

    if (password.indexOf(' ') === -1) {

        console.log("Valid Password")
    }else {
        console.log("Password Can't Have Spaces")
    }

} else {

    console.log("Password is Too Short")
}

function singSong() {
    console.log("DO");
    console.log("RE");
    console.log("MI");
}

//  singSong() Function is called, return value will end up in singsong three times and Function returns DO RE MI.
singSong()
singSong()
singSong()

function greet(firstName) {
//The log() method writes (logs) a message to the console. In this case the message is hey there Betelhem. 
// string interpolation is the process of embedding an expression into part of a string. 
 
    console.log(`Hey There, ${firstName}`)
}

greet('Betelhem')

function greet1(firstName,lastName) {
    console.log(`Hey There, ${firstName} ${lastName[0]}.`)
}
// The out put message will be hey there Betelhem Shenkut
greet1('Betelhem','Shenkut')