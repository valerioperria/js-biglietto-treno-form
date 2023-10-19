
const userNameElem = document.getElementById("name");

const kmElem = document.getElementById("km");

const ageElem = document.getElementById("age");

const ticket = document.querySelector(".ticket");

// bottone invia

const sendBtn = document.getElementById("send");
sendBtn.addEventListener("click", function () {

    // raccolta dati

    const userName = userNameElem.value;
    console.log(userName)

    const kilometers = kmElem.value;
    console.log(kilometers)

    const years = ageElem.value;
    console.log(years)


    // logica programma

    const basePrice = kilometers * 0.21;

    let price = "";

    if (years === "minorenne") {
        price = basePrice - ((basePrice / 100) * 20);
    } else if (years === "anziano") {
        price = basePrice - ((basePrice / 100) * 40);
    } else {
        price = basePrice;
    }

    // output

    const passenger = `${userName}`;

    const priceTicket = `${price.toFixed(2)} €`;

    document.getElementById("traveler").innerHTML = passenger;

    document.getElementById("totalPrice").innerHTML = priceTicket;

    ticket.classList.remove("hidden");

    console.log(passenger, priceTicket)
})

// bottone elimina

const clearBtn = document.getElementById("clear").addEventListener("click", function () {
    userNameElem.value = "";
    kmElem.value = "";
    ageElem.value = "";
    ticket.classList.add("hidden");
})