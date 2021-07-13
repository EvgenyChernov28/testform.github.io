
let products = document.getElementById('products')

let cardConteiner = document.getElementById("card-conteiner")

let cardProducts = document.getElementById("card-products")

products.addEventListener('click', () =>(
    cardConteiner.classList.add('card-none'),
    cardProducts.classList.remove('card-none')
))

let continueButton = document.getElementById("continue-button")

let choseProducts = document.getElementById("chose-products")

var form = document.getElementById("test")

let testt = document.getElementById('product4').innerHTML
console.log(testt)
continueButton.addEventListener('click', () =>(
    cardProducts.classList.add('card-none'),
    choseProducts.classList.remove('card-none'),
    


    console.log(form.elements.answer[form.elements.answer.length - form.elements.answer.value])
    // testt = document.getElementById('product4'),
    // console.log(testt)
))

