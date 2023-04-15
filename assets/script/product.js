const fruitsList = document.querySelector(".fruits .cards-list")
const legumesList = document.querySelector(".legumes .cards-list")


const getProductfromAPI = async () => {
    try {
        const reponse = await fetch("./assets/script/product.json")
        const data = await reponse.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

const products = await getProductfromAPI()
console.log(products)


const fruits = products.filter(item => item.category === "fruits")
console.log(fruits)
const legumes = products.filter(item => item.category === "legumes")
console.log (legumes)


const createCards = function (categoryList,category) {
    const cards = document.createElement("div")
    cards.className = "cards"

    const image = document.createElement("img")
    image.setAttribute("src", category.url)

    const text = document.createElement ("div")

    const name = document.createElement ("h3")
    name.innerText = category.name

    const price = document.createElement ("p")
    price.innerText = category.price

    text.append(name)
    text.append(price)

    cards.append(image)
    cards.append(text)

    categoryList.append(cards)

}



for (let i in fruits){
 createCards(fruitsList, fruits[i])
}

for (let i in legumes){
    createCards(legumesList, legumes[i])
}