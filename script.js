document.getElementById('button').addEventListener('click', calculateArea)
let radius = 0
let circumference = 0
let diameter = 0

function calculateArea () {
  radius = document.getElementById('radius').value
  document.getElementById('answer-a').innerHTML = 'The area is ' + (Math.PI * radius * radius)

  circumference = document.getElementById('radius').value
  document.getElementById('answer-c').innerHTML = 'The circumference is ' + (2 * radius * Math.PI)

  diameter = document.getElementById('radius').value
  document.getElementById('answer-d').innerHTML = 'The diameter is ' + (radius * 2)
}
