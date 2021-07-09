
let products = document.getElementById('products')

let cardConteiner = document.getElementById("card-conteiner")

let cardProducts = document.getElementById("card-products")

products.addEventListener('click', () =>(
    cardConteiner.classList.add('card-none'),
    cardProducts.classList.remove('card-none')
))

let continueButton = document.getElementById("continue-button")

let choseProducts = document.getElementById("chose-products")

console.log(continueButton);

continueButton.addEventListener('click', () =>(
    cardProducts.classList.add('card-none'),
    choseProducts.classList.remove('card-none')
))