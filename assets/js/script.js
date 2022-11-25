
$("#email-address").on("input", function(){

    let emailInput = $("#email-address").val()

    var myHeaders = new Headers();
    myHeaders.append("apikey", "wFLZpRtpFqmOobP63e3acH5w9aZ5UY7P");

    var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
    };

fetch(`https://api.apilayer.com/email_verification/check?email=${emailInput}`, requestOptions)
  .then(function(response){
    return response.json()
  })
  .then(function(data){
    console.log(data)
    let emailBool = data.format_valid
    localStorage.setItem("email", emailBool);
  })
})

$("#phone").on("input", function(){

    let phoneInput = $("#phone").val()

    var myHeaders = new Headers();
    myHeaders.append("apikey", "wFLZpRtpFqmOobP63e3acH5w9aZ5UY7P");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

fetch(`https://api.apilayer.com/number_verification/validate?number=${phoneInput}`, requestOptions)
  .then(function (response) {
    return response.json()
  })
  .then(function (data){
    console.log(data)
    let phoneBool = data.valid
    localStorage.setItem("phone", phoneBool)
  })

})

let cartArray = [];

$("#signInBtn").on("click", function(){
    if(localStorage.getItem("email") == "true" && localStorage.getItem("phone") == "true"){
    location.assign("./main.html")
    }
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

