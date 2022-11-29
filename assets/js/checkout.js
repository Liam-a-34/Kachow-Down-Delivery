//If the user selected to save all data previously, this will auto fill all the fields
for(var i = 1; i < 13; i++){
    $(`#field-${i}`).val(localStorage.getItem(`field-${i}`))
}

let foodTotalPrice = parseFloat(localStorage.getItem("foodTotalPrice"))
//Sets the total price in the checkout page
let fixedPrice = foodTotalPrice.toFixed(2)
//If the number is 0 or an error occurs, it will set the total to 0
if(isNaN(fixedPrice)){
    $("#foodTotal").html("Total: $0")
} else{
$("#foodTotal").html(`Total: $${fixedPrice}`);
}
//Buy button event listener
$("#buyBtn").on("click", function(){
    if($("#saveCheck").is(":checked")) { 
        for(var i = 1; i < 13; i++){
            localStorage.setItem(`field-${i}`, $(`#field-${i}`).val())
        } //If the save data check box is checked it will save all the fields to local storage
        setTimeout(function(){
            localStorage.removeItem("cart")
            localStorage.removeItem("totalFoodPrice")
            location.assign("./thanks.html") 
        }, 1000)

    } else{
        localStorage.removeItem("cart")
        localStorage.removeItem("foodTotalPrice")
        $("#foodTotal").html("Total: $0")

        location.assign("./thanks.html")
    }
})
