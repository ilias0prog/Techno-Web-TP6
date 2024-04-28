
alert("Bienvenue dans cet exemple de code JavaScript !")

const elem = document.getElementById("my_card")

console.log(elem)

const parent = elem.parentElement
const new_element = document.createElement('p')
new_element.innerText = "Ce paragraphe est ajouté par le code JavaScript !"
new_element.style.border = "2px solid red"
new_element.style.marginTop = "10px"

parent.appendChild(new_element)
