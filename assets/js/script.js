let cartArray = [];

$("#signInBtn").on("click", function(){
    location.assign("./main.html")
})
$(".cartBtn").on("click", function(){
    location.assign("./cart.html")
})
$(".addBtn").on("click", function(){
    
    $(this).html(`✔`)
    setTimeout(() => {
        $(this).html("Add")
    }, "2000")

    let foodItem = $(this).siblings("h4").html()
    let foodPrice = $(this).siblings("p").attr("id")
    let foodImage = $(this).siblings("img").attr("src")

    if(localStorage.getItem("cart") === null){

        cartArray.push(foodItem, foodPrice, foodImage);

        localStorage.setItem("cart", JSON.stringify(cartArray))

    } else {

        cartArray = localStorage.getItem("cart");

        let parsedArray = JSON.parse(cartArray);

        parsedArray.push(foodItem, foodPrice, foodImage)

        cartArray = parsedArray;

        localStorage.setItem("cart", JSON.stringify(cartArray))

        cartArray = localStorage.getItem("cart")

        parsedArray = JSON.parse(cartArray);
    }
})

