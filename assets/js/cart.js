/* <div class="relative flex border-b-2 border-info-grey p-5 ">
                <img class="w-[175px] h-[125px] rounded-lg" src="https://ik.imagekit.io/liamallen34/Kachow_Images/shutterstock_271030664.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668723789056">
                <h4 class="text-[30px] ml-5 mt-3 font-Bree text-header-grey">Chicken Salad</h4>
                <p class="relative top-[70px] right-[185px] text-[20px] font-Roboto">$18.99</p>
                <button class="material-symbols-outlined absolute right-[10%] top-[65px] border-[2px] border-black h-[40px] w-[40px] rounded-full">delete</button>
            </div> */
            let count = 0;

if (localStorage.getItem("cart") != null){
    cartArray = localStorage.getItem("cart");

    parsedArray = JSON.parse(cartArray);

    for(var i = 0; i < parsedArray.length / 3; i++){

        let newDiv = `<div id="${i}" class="relative flex border-b-2 border-info-grey p-5 "></div>`

        $("#cartItems").append(newDiv)

        let foodItemEl = `<h4 class="text-[30px] ml-5 mt-3 font-Bree text-header-grey">${parsedArray[count]}</h4>`

        count += 1;

        let foodPriceEl = `<p class="absolute top-[90px] left-[220px] text-[20px] font-Roboto">$${parsedArray[count]}</p>`

        count += 1;

        let foodImageEl = `<img class="w-[175px] h-[125px] rounded-lg" src="${parsedArray[count]}">`

        count += 1;

        let foodButtonEl = `<button class="material-symbols-outlined absolute right-[10%] top-[65px] border-[2px] border-black h-[40px] w-[40px] rounded-full">delete</button>`

        $(`#${i}`).append(foodImageEl)
        $(`#${i}`).append(foodItemEl)
        $(`#${i}`).append(foodPriceEl)
        $(`#${i}`).append(foodButtonEl)
    }
}