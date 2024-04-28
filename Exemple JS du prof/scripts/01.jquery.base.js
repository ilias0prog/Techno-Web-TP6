alert("Bienvenue dans cet exemple de code JavaScript !")

console.log($("#my_card"))

$("<p>Ce paragraphe est ajouté par le code JavaScript !</p>")
  .css({
    border: "2px solid red",
    marginTop: "10px"
  })
  .insertAfter("#my_card")
