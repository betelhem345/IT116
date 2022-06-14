/*
//console.log(document.domain);// Gives the domain of the web page.
//console.log(document.domain);// Gives the IP adress of the web page.
//console.log(document.URL);// Gives the URL of the web page. 
THE DOCUMENT ATTRIBUTE CAN ACCESS DIFFERENT ELEMENTS.
//console.log(document.title);//Gives the tittle of the document.
//console.log(document.doctype);//Gives the doctype of the document.
//console.log(document.head);//Gives the head element of the document.
//console.log(document.body);//Gives the body element of the document.
//console.log(document.all);//Gives all elements in the document.
//console.log(document.all[5]);//Calling all [5] elements within the document
//document.all[10].textContent = "I just changed the header!";//Changed the header of the document by manipulating js 
to make a change.
Document Object Model can scan the tree for elements. 
//console.log(document.forms);//Gives all the forms with in the document.
//console.log(document.links);//Gives all elements that ahs href element within the document.
//console.log(document.images);//Gives all image contents with in the document.

///////////////////////////////////////////////////
/////////////////////////

//console.log(document.getElementById('header-title'));//Get Element By Id.
// Creation of an object variable using the document function.
//let headerTitle = document.getElementById('header-title'); 
//headerTitle.textContent = "I Am Changing the Header";//Here the header of the document is being changed.
//headerTitle.innerText = "I Am Changing It Again.";//The header of the document is being changed again.
//headerTitle.style.color = 'hotpink';//The header will be styled with hotpink color.
*/

//////////////////////////////////////////
////////////////////////////////////

// var items = document.getElementsByClassName('list-group-item');//Get Element By ClassName. Returns an array-like 
// object of all child elements which have all of the given class name('list-group-item').
// console.log(items);//Gives all items in the calss('list-group-item')
// console.log(items[0]);//Gives the first item in the class ('list-group-item')

// // Styling Property Attributes through the variable.
// items[0].textContent = "Hello, World!";//Content of the first element is set to Hello, World!.
// items[0].style.fontWeight = 'bold';//The first item is set bold font weight.
// items[0].style.backgroundColor = 'red';//The background of the first item is styled with red color.
// items[0].textContent = 'Oooop - Coleman Love';//The first item text content is set to Oooop - Coleman Love.
// items[0].style.color = 'white';//The first item element content color is styled with white color.

// items[1].textContent = "Good Bye"; //Content of the first index of the array is set to Good Bye.
// items[1].style.fontWeight = 'bold';//The first element is set bold font weight.
// items[1].style.backgroundColor = 'pink';//The background of the first element is styled with pink color.
// items[1].textContent = 'Alpha Kappa Alpha';//The first element text content is set to Alpha Kappa Alpha.
// items[1].style.color = 'green';//The first item element content color is styled with green color.

// items[2].textContent = "Hello"; //Content of the array is set to Hello.
// items[2].style.fontWeight = 'bold';//The second element is set bold font weight.
// items[2].style.backgroundColor = 'blue';The background of the second element is styled with blue color.
// items[2].textContent = 'Zee Phiiii - Zeta Phi Beta';//The second element text content is set to Zee Phiiii - Zeta Phi Beta.
// items[2].style.color = 'white';//The second item element content color is styled with white color.

//This is a counter which loops all the way until 10.
//The loop starts in position 1 (let i = 1)
// for (let i = 1; i <= 10; i++) {
//     console.log(i);

// }

//This is a counter which loops all the way until 20.
//The loop starts in position 0 (let i = 0)
// for (let i = 0; i <=20; i +=2) {
//     console.log(i);
// }


// for (let i = 100; i >= 0; i -=2) {

//     console.log(i);

// }

// for (var i = 0; i < items.length; i++) {

// items[i].style.backgroundColor = 'grey'//Background color styled with grey.
//     items[i].textContent = 'I Changed The List';//Text content of the item is I Changed The List.
//     items[i].style.color = 'green';//Color of the tect content is styled with green.

// }

/////////////////////////////////

//For loop is used to execute code repeatedly, the list of arrays start from item 0.
// const myDiamonds = ['Snacky','Scary','Piggy','Pinchie','Lily','IttyBitty','Nibbles','Lanky','Kibbles'];
// for(let i = 0; i < myDiamonds.length; i++){
//     console.log(i, myDiamonds[i]);
// }

//////////////////////////////////////////////////////////////////////////////
///////////////

//Get Element By Tag Name 
// var li = document.getElementsByTagName('li');

// console.log(li);
// console.log(li[1]);//Gives the value of attribute li 1.

// li[1].textContent = "Hello 2";//Text content of li 1 is Hello 2.
// li[1].style.fontWeight = 'bold';//The font weight of li 1 is bold.
// li[1].style.backgroundColor = 'crimson';//The background color of li 1 is styled with crimson.
// li[1].style.color = 'white';//The text content of li 1 is styled with white color.

// // 
// for(var i = 0; i < li.length; i++){
//     li[i].style.backgroundColor = 'lightgrey';//The background of li[i]is styled with lightgrey.
//     li[i].textContent = 'Changed Text';//Gives the value of li[i] "Changed Text"
// }

//////////////////////////////////////////////////////////////////////////////
///////////// 

//The Document method querySelector() returns the first Element within the document 
//that matches the specified selector, or group of selectors. If no matches are found, null is returned.
// var header = document.querySelector('#main-header');//The var header function is used to insert document.querySelector('#main-header')
// header.style.borderBottom = 'solid 4px hotpink';//Style the borderBottom with hot pink color. 
// var input = document.querySelector('input');//The Variable Input component lets you override an existing variable that has been 
//defined for this analysis document.querySelector
// input.value = "Changed The Input Box Text";//The input value defines the initial (default) value of the input field Changed The Input Box Text
// var submit = document.querySelector("input[type='submit']");
// submit.value = "SEND";//The value of the submit variable is SEND.
// var item = document.querySelector('.list-group-item');
// item.style.color = 'red'; 
// var lastItem = document.querySelector('.list-group-item:last-child');//The last item variable 
// lastItem.style.color = 'coral';//The styling color of the last item is set to coral.

////////////////////////////////////////////////////////////////////
//////////

//The Document method querySelectorAll() returns a static (not live) NodeList representing 
//a list of the document's elements that match the specified group of selectors.
/*
var titles = document.querySelectorAll('.title');//The variable tittles for the class
console.log(titles);//The console.log(tittles) method outputs the tittle to the web console
titles[0].textContent = 'Hello Betelhem';//The out put of the titles[0].textContent is Hello Betelhem.  
var odd = document.querySelectorAll('li:nth-child(odd)');//The query selector matches the nth child(odd) of its parent through out the document.
var even = document.querySelectorAll('li:nth-child(even)');//The query selector matches the nth child(even) of its parent through out the document.
for (var i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = 'grey';//The background of odd is styled withe grey color.
    even[i].style.backgroundColor = 'green';//The background of even is styled withe green color.
    even[i].style.color = 'whitesmoke';
}
*/
