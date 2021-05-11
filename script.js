document.getElementById('button').addEventListener('click',calculateArea)
let radius = 0
let circumference = 0
let diameter = 0


function calculateArea () {
  radius = document.getElementById('radius').value
  document.getElementById('answerA').innerHTML = 'The area is ' + (Math.PI * radius * radius)

  circumference = document.getElementById('radius').value
  document.getElementById('answerC').innerHTML = 'The circumference is ' + (2 * radius * Math.PI)

  diameter = document.getElementById('radius').value
  document.getElementById('answerD').innerHTML = 'The diameter is ' + (radius * 2)
}