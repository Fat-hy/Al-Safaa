var headers = document.querySelectorAll(".dropdown-container header");

for (var i = 0; i < headers.length; i++) {
  headers[i].addEventListener("click", openCurrAccordion);
}

//Use this as the callback if you would like multiple dropdowns to be open
function openAccordion(e) {
  var parent = this.parentElement;
  var article = this.nextElementSibling;

  if (!parent.classList.contains("open")) {
    parent.classList.add("open");
    article.style.maxHeight = article.scrollHeight + "px";
  } else {
    parent.classList.remove("open");
    article.style.maxHeight = "0px";
  }
}

//Use this as the callback if you would like no more than one dropdown to be open
function openCurrAccordion(e) {
  for (var i = 0; i < headers.length; i++) {
    var parent = headers[i].parentElement;
    var article = headers[i].nextElementSibling;

    if (this === headers[i] && !parent.classList.contains("open")) {
      parent.classList.add("open");
      article.style.maxHeight = article.scrollHeight + "px";
    } else {
      parent.classList.remove("open");
      article.style.maxHeight = "0px";
    }
  }
}

//Notes:
/* Adding the 'open' class to the dropdown allows us to create
 * easier stylings for the different components of the dropdown.
 * It basically acts as a way to style based on the state (open/closed).
 * The maxHeight style transition is the base functionality.
 *
 * Change the callback in line 4 to either openCurrAccordion or openAccordion
 * to see the two different behaviors commented above each function
 */

//More Advanced Notes:
/* If you had a nav menu with defined heights you could use the checkbox trick
 * common with mobile nav menus. However, height cannot be transitioned so we
 * use max-height. In addition, transitioning max-height to a percentage doesn't
 * function properly, we need to use javascript to find the height and set it as
 * a pixel value. If you have a pre-determined height for your dropdowns, you
 * could implement a version without javascript. Javascript does allow us a
 * little more flexibility in this instance.
 */
