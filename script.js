
let a = document.getElementById('products')

let cardConteiner = document.getElementById("card-conteiner")

let cardProducts = document.getElementById("card-products")
console.log(cardConteiner);

a.addEventListener('click', () =>(
    cardConteiner.classList.add('card-none'),
    cardProducts.classList.remove('card-none')
))