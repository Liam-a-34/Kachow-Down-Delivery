
let count = 0;

let totalPrice = 0;

if (localStorage.getItem("cart") != null){

    $("#cartItems").empty();

        cartArray = localStorage.getItem("cart");

        parsedArray = JSON.parse(cartArray);

    for(var i = 0; i < parsedArray.length / 3; i++){

            let newDiv = `<div id="${i}" class="relative flex border-b-2 border-info-grey p-5 "></div>`

        $("#cartItems").append(newDiv)

            let foodItemEl = `<h4 class="text-[30px] ml-5 mt-3 font-Bree text-header-grey">${parsedArray[count]}</h4>`

        count += 1;

            let foodPriceEl = `<p id="${parsedArray[count]}" class="absolute top-[90px] left-[220px] text-[20px] font-Roboto">$${parsedArray[count]}</p>`

            let itemPrice = parseFloat(parsedArray[count])

            totalPrice += itemPrice

            localStorage.setItem("foodTotalPrice", JSON.stringify(totalPrice))

        count += 1;

            let foodImageEl = `<img class="w-[175px] h-[125px] rounded-lg" src="${parsedArray[count]}">`

        count += 1;

            let foodButtonEl = `<button class="absolute right-[10%] top-[65px] border-[2px] border-black h-[40px] w-[40px] rounded-full deleteBtn material-symbols-outlined ">delete</button>`

        $(`#${i}`).append(foodImageEl)
        $(`#${i}`).append(foodItemEl)
        $(`#${i}`).append(foodPriceEl)
        $(`#${i}`).append(foodButtonEl)

        $("#foodTotal").html(`Total: $${totalPrice.toFixed(2)}`)

        $("#checkoutBtn").html("Checkout")


    }
} else {

    $("#cartItems").empty();

        const blankCart = 
        `
        <div class="h-[70vh] relative">
            <h3 class="absolute top-[100px] text-gray-400 text-6xl text-center font-Bree w-[70%] mx-[15%]">Your Cart Is Currently Empty</h3>
            <h3 class="absolute top-[300px] text-gray-400 text-6xl text-center font-Bree w-[70%] mx-[15%]">Guess You're Not Hungry :(</h3>
        </div>
        `

    $("#cartItems").append(blankCart)

    $("#foodTotal").html("")

    $("#checkoutBtn").html("")
 }

$(".deleteBtn").on("click", function(){

    cartArray = localStorage.getItem("cart");

    parsedArray = JSON.parse(cartArray);

        let foodItemRemove = $(this).siblings("h4").html();

        let foodPriceRemove = $(this).siblings("p").html();

        let foodImgRemove = $(this).siblings("img").attr("src");

        let foodItemIndex = jQuery.inArray(foodItemRemove, parsedArray);

        let foodPriceIndex = jQuery.inArray(foodPriceRemove, parsedArray)

        let foodImgIndex = jQuery.inArray(foodImgRemove, parsedArray)

            foodSubtract = $(this).siblings("p").attr("id")

            totalPrice -= parseFloat(foodSubtract)

            localStorage.setItem("foodTotalPrice", JSON.stringify(totalPrice))


    $("#foodTotal").html(`Total: $${totalPrice.toFixed(2)}`)

        if(totalPrice.toFixed(2) == 0.00){
            $("#foodTotal").html("")
            $("#checkoutBtn").html("")
        }

        parsedArray.pop(foodItemIndex)

        parsedArray.pop(foodPriceIndex)

        parsedArray.pop(foodImgIndex)

    cartArray = parsedArray;

        localStorage.setItem("cart", JSON.stringify(cartArray))


    $(this).parent("div").remove()

        cartArray = localStorage.getItem("cart")

        parsedArray = JSON.parse(cartArray)


        if(parsedArray.length == 0){

            localStorage.clear("cart")
        }

    if(localStorage.getItem("cart") == null){

        const blankCart = 
             `
            <div class="h-[70vh] relative">
            <h3 class="absolute top-[100px] text-gray-400 text-6xl text-center font-Bree w-[70%] mx-[15%]">Your Cart Is Currently Empty</h3>
            <h3 class="absolute top-[300px] text-gray-400 text-6xl text-center font-Bree w-[70%] mx-[15%]">Guess You're Not Hungry :(</h3>
            </div>
            `

        $("#cartItems").append(blankCart)
    }
})

$("#checkoutBtn").on("click", function(){
    location.assign("./checkout.html")
})

