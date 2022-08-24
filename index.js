

  var Hallo = document.getElementById("Feedback").value;
var myName = document.getElementById("User").value;

function changeText(div) {
  div.innerText = `Hello ${myName}!`;
}

function buttonClicked() {
  const newElement = document.createElement('div');
  newElement.innerText = `${myName} : Feedback erfolgreich gesendet : ${Hallo} `;
  document.body.appendChild(newElement);
  
}

setTimeout(function() {
  const div = document.getElementById('nameDiv');
  changeText(div);
}, 5000);
