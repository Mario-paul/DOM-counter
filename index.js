// Your code here
//let counter = 0; //this does not modify the counter-value ID <p> on the DOM (the HTML document). Not the best solution.

document.querySelector("#counter-increment").onclick = function (event) {
  let counter = Number(document.querySelector("#counter-value").innerHTML)
  if (counter >= 0 && counter < 10) {
    counter++
    document.querySelector("#counter-value").innerHTML = counter;
  }
}

document.querySelector("#counter-decrement").onclick = function (event) {
  let counter = Number(document.querySelector("#counter-value").innerHTML)
  if (counter <= 10 && counter > 0) {
    counter--
    document.querySelector("#counter-value").innerHTML = counter;
  }
}