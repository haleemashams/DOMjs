let mainContent = document.getElementById("main-content");
/////////////////////////
var childElements = mainContent.children;
for (var i = 0; i < childElements.length; i++) {
  console.log(childElements[i]);
}
//////////////////////////////////////
var renderElements = document.getElementsByClassName("render");
for (var i = 0; i < renderElements.length; i++) {
  console.log(renderElements[i].innerHTML);
}
/////////////////////////////////////////////
var firstNameInput = document.getElementById("first-name");
firstNameInput.value = "Your First Name";
////////////////////////////////////////////
var lastNameInput = document.getElementById("last-name");
lastNameInput.value = "Your Last Name";

var emailInput = document.getElementById("email");
emailInput.value = "Your Email";
//////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////////////
var lastNameElement = document.getElementById("lastName");
lastNameElement.firstChild.nodeValue = "Last Name: Updated Bank";
////////////////////////////////////////////////
var mainContentElement = document.getElementById("main-content");
var firstChild = mainContentElement.firstElementChild;
var lastChild = mainContentElement.lastElementChild;
//////////////////////////////////////////////////////////////////////
var lastNameElement = document.getElementById("lastName");
var nextSibling = lastNameElement.nextElementSibling;
var previousSibling = lastNameElement.previousElementSibling;
/////////////////////////////////////////////////////////////
var emailElement = document.getElementById("email");
var parentNode = emailElement.parentNode;
var nodeType = emailElement.nodeType;
///////////////////////////////////////////////////////////////
