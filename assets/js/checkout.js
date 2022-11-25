
for(var i = 1; i < 13; i++){
    $(`#field-${i}`).val(localStorage.getItem(`field-${i}`))
}

let foodTotalPrice = parseFloat(localStorage.getItem("foodTotalPrice"))

let fixedPrice = foodTotalPrice.toFixed(2)

if(isNaN(fixedPrice)){
    $("#foodTotal").html("Total: $0")
} else{
$("#foodTotal").html(`Total: $${fixedPrice}`);
}

$("#buyBtn").on("click", function(){
    if($("#saveCheck").prop("checked")) { 
        for(var i = 1; i < 13; i++){
            localStorage.setItem(`field-${i}`, $(`#field-${i}`).val())
        }
    }
})
