
let count = 0;

let totalPrice = 0;

//If cart has items it will execute the following
if (localStorage.getItem("cart") != null){

    $("#cartItems").empty();

        cartArray = localStorage.getItem("cart");

        parsedArray = JSON.parse(cartArray);

        //Loops through the storage array and inserts data in to their respective created elements.
    for(var i = 0; i < parsedArray.length / 3; i++){

        //Containment div for each cart item
            let newDiv = `<div id="${i}" class="relative flex border-b-2 border-info-grey p-5 "></div>`

        $("#cartItems").append(newDiv)
        //Name of the food item
            let foodItemEl = `<h4 class="text-[30px] ml-5 mt-3 font-Bree text-header-grey">${parsedArray[count]}</h4>`

        count += 1;
        //Price of the food item
            let foodPriceEl = `<p id="${parsedArray[count]}" class="absolute top-[90px] left-[220px] text-[20px] font-Roboto">$${parsedArray[count]}</p>`

            let itemPrice = parseFloat(parsedArray[count])

            totalPrice += itemPrice

            localStorage.setItem("foodTotalPrice", JSON.stringify(totalPrice))
        //Locally stores the total price for checkout page
        count += 1;
        //Image for the food item
            let foodImageEl = `<img class="w-[175px] h-[125px] rounded-lg" src="${parsedArray[count]}">`

        count += 1;
        //Delete button for the food item
            let foodButtonEl = `<button class="absolute right-[10%] top-[65px] border-[2px] border-black h-[40px] w-[40px] rounded-full deleteBtn material-symbols-outlined ">delete</button>`

        $(`#${i}`).append(foodImageEl)
        $(`#${i}`).append(foodItemEl)
        $(`#${i}`).append(foodPriceEl)
        $(`#${i}`).append(foodButtonEl)
        //Appends them and inserts the total price to the hundredth decimal point
        $("#foodTotal").html(`Total: $${totalPrice.toFixed(2)}`)

        //Gives the checkout button it's text
        $("#checkoutBtn").html("Checkout")


    }
} else {
//If cart is empty it will execute the following
    $("#cartItems").empty();

        const blankCart = 
        `
        <div class="h-[70vh] relative">
            <h3 class="absolute top-[100px] text-gray-400 text-6xl text-center font-Bree w-[70%] mx-[15%]">Your Cart Is Currently Empty</h3>
            <h3 class="absolute top-[300px] text-gray-400 text-6xl text-center font-Bree w-[70%] mx-[15%]">Guess You're Not Hungry :(</h3>
        </div>
        `
//Placeholder text for an empty cart
    $("#cartItems").append(blankCart)

    $("#foodTotal").html("")

    $("#checkoutBtn").html("")
 }

$(".deleteBtn").on("click", function(){
//Event listener for the delete buttons in the cart
    cartArray = localStorage.getItem("cart");

    parsedArray = JSON.parse(cartArray);
    //Makes the variable equal the h4 of the button's item
        let foodItemRemove = $(this).siblings("h4").html();
    //Makes the variable equal the paragraph text of the button's item
        let foodPriceRemove = $(this).siblings("p").html();
    //Makes the variable equal the src attribute of the button's image sibling
        let foodImgRemove = $(this).siblings("img").attr("src");
    //Finds where the food name item is in the array and returns the index
        let foodItemIndex = jQuery.inArray(foodItemRemove, parsedArray);
    //Finds where the food price item is in the array and returns the index
        let foodPriceIndex = jQuery.inArray(foodPriceRemove, parsedArray)
    //Finds where the food image source item is in the array and returns the index
        let foodImgIndex = jQuery.inArray(foodImgRemove, parsedArray)
    //Uses the id of the paragraph element to assign the amount of money to be removed from the total
            foodSubtract = $(this).siblings("p").attr("id")

            totalPrice -= parseFloat(foodSubtract)
    //Local storages the total price for the checkout
            localStorage.setItem("foodTotalPrice", JSON.stringify(totalPrice))


    $("#foodTotal").html(`Total: $${totalPrice.toFixed(2)}`)
    //If the cart is empty then the button and total price will be emptied
        if(totalPrice.toFixed(2) == 0.00){
            $("#foodTotal").html("")
            $("#checkoutBtn").html("")
        }
//Removes the food item pieces that were declared in lines 80-90
        parsedArray.pop(foodItemIndex)

        parsedArray.pop(foodPriceIndex)

        parsedArray.pop(foodImgIndex)

    cartArray = parsedArray;

        localStorage.setItem("cart", JSON.stringify(cartArray))

//Removes the selected item's div
    $(this).parent("div").remove()

        cartArray = localStorage.getItem("cart")

        parsedArray = JSON.parse(cartArray)


        if(parsedArray.length == 0){

            localStorage.removeItem("cart")
        }
//If cart is completely emptied, it will insert the placeholder texts
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
//Goes to the checkout page when you click the checkout button
$("#checkoutBtn").on("click", function(){
    location.assign("./checkout.html")
})

