alert("This alert box was called with the onload event");
var student = {
  name: "",
  type: "student"
};

document.addEventListener('DOMContentLoaded', contentLoaded);

function contentLoaded(event) {
  document.getElementById('name').addEventListener("keyup", keyUp);
}

function keyUp(event) {
  calculateNameOutput();
}

function calculateNameOutput() {
   student.name = document.getElementById('name').value;

var totalNumberValue= 0;
for (var i = 0; i < student.name.length; i++) {
  totalNumberValue += student.name.charCodeAt(i);
}

var outputx = "Total numeric value of person's name is " + totalNumberValue;
document.getElementById('output').innetText = outputx;
}
