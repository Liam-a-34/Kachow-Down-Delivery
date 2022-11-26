
$("#email-address").on("input", function(){

    let emailInput = $("#email-address").val()

    var myHeaders = new Headers();
    myHeaders.append("apikey", "wFLZpRtpFqmOobP63e3acH5w9aZ5UY7P");

    var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
    };
//Checks to see if the email is valid on every input
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
//Checks to see if the phone number is valid on ever input
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
//If both fields have valid inputs when you click the sign in, you will be brought to the main page
$("#signInBtn").on("click", function(){
    if(localStorage.getItem("email") == "true" && localStorage.getItem("phone") == "true"){
    location.assign("./main.html")
    }
})

//Brings you to the cart when you click the cart button
$(".cartBtn").on("click", function(){
    location.assign("./cart.html")
})
//Event listener for food item add buttons
$(".addBtn").on("click", function(){
    //Changes the clicked add button to a check and then back again after 2 seconds
    $(this).html(`✔`)
    setTimeout(() => {
        $(this).html("Add")
    }, "2000")
//Sets the variables to equal the specified attributes of it's siblings
    let foodItem = $(this).siblings("h4").html()
    let foodPrice = $(this).siblings("p").attr("id")
    let foodImage = $(this).siblings("img").attr("src")
//If cart is empty, it will not pull from the storage at the start
    if(localStorage.getItem("cart") === null){

        cartArray.push(foodItem, foodPrice, foodImage);

        localStorage.setItem("cart", JSON.stringify(cartArray))

    } else {
      //If the cart has items, it will execute differently
        cartArray = localStorage.getItem("cart");

        let parsedArray = JSON.parse(cartArray);

        parsedArray.push(foodItem, foodPrice, foodImage)

        cartArray = parsedArray;

        localStorage.setItem("cart", JSON.stringify(cartArray))

        cartArray = localStorage.getItem("cart")

        parsedArray = JSON.parse(cartArray);
    }
})

