let cartArray = [];

$("#signInBtn").on("click", function(){
    console.log("working")
    location.assign("./main.html")
    console.log("working")
})
$(".cartBtn").on("click", function(){
    location.assign("./cart.html")
})
$(".addBtn").on("click", function(){
    let foodItem = $(this).siblings("h4").html()
    console.log(foodItem)
    let foodPrice = $(this).siblings("p").attr("id")
    console.log(foodPrice)
    let foodImage = $(this).siblings("img").attr("src")
    console.log(foodImage)
    if(localStorage.getItem("cart") === null){

        cartArray.push(foodItem, foodPrice, foodImage);

        localStorage.setItem("cart", JSON.stringify(cartArray))

        console.log(localStorage.getItem("cart"))
    } else {

        cartArray = localStorage.getItem("cart");

        let parsedArray = JSON.parse(cartArray);

        parsedArray.push(foodItem, foodPrice, foodImage)

        cartArray = parsedArray;

        console.log(localStorage.getItem("cart"))

        // cartArray.push(foodItem, foodPrice, foodImage);

        localStorage.setItem("cart", JSON.stringify(cartArray))

        console.log(localStorage.getItem("cart"))

        cartArray = localStorage.getItem("cart")

        parsedArray = JSON.parse(cartArray);
    }
})















const array = ["food", "clothes", "tools", 23]

localStorage.setItem("storage", JSON.stringify(array))
var newArray = localStorage.getItem("storage")
var goodArray = JSON.parse(newArray)
console.log(goodArray[1])
console.log(localStorage.getItem("storage"))