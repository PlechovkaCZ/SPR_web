/* >>>>>  Function for inserting html/text file to existing html page <<<<< */
/* How to use it:
*   place "<div include-html="content.html"></div>" where html should be placed
*   call includeHTML() at the bottom of the page
*/
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
}
/*-----------------------------------------------------*/

/* >>>>>  Function to edit URL parameter <<<<< */
/* How to use it:
*   If parameter doesn't exist, function creates it
*   If parameter exists, function changes it
*   Function automaticly update user URL with set parameters
*/
function editURLParameter(parameter, value) {
  const params = new URLSearchParams(location.search); //Read URL
  params.set(parameter, value); //Update parameters
  window.history.replaceState({}, '', `${location.pathname}?${params}`); //Update user URL
  return;
}
/*-----------------------------------------------------*/

/* >>>>>  Function to delete URL parameter <<<<< */
/* How to use it:
*   Function deletes given URL parametr
*   Function automaticly update user URL
*/
function deleteURLParameter(parameter) {
  const params = new URLSearchParams(location.search); //Read URL
  params.delete(parameter); //Update parameters
  window.history.replaceState({}, '', `${location.pathname}?${params}`); //Update user URL
  return;
}
/*-----------------------------------------------------*/

/* >>>>>  Function to read URL parameter - number <<<<< */
/* How to use it:
*   Use only with positive numers/zero
*   Function reads specified parameter, if it is positive number, it returns it's value
*   If parameter doesn't exist or has wrong value, function returns -1
*/
function getURLParameterNumber(parameter) {
  const params = new URLSearchParams(location.search); //Read URL
  let number = parseInt(params.get(parameter), 10); // Read parameter, parse it as number
  if(Number.isInteger(number) && number > 0){
    return number;
  }
  return -1;
}
/*-----------------------------------------------------*/


/* >>>>>  Function to test if mobile device is used <<<<< */
/*
*/
function isMobileDevice(){
  if('ontouchstart' in window || window.orientation > -1){
    return true;
  }
  else{
    return false;
  }
}

/*-----------------------------------------------------*/


/* >>>>>  Function to load script in javascript file <<<<< */
/*
*/
function loadScript(url, callback)
{
    // Adding the script tag to the head as suggested before
    var head = document.head;
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}

/*-----------------------------------------------------*/

/* >>>>>  Function to load JSON data <<<<< */
/*
*/
function loadJSON(url, callback)
{
    var request = new XMLHttpRequest();

    request.onreadystatechange = function() {
      if (request.readyState === 4) {
        callback(request.response);
      }
    }

    request.open('GET', url);
    request.responseType = 'json';
    request.send();


}

/*-----------------------------------------------------*/
