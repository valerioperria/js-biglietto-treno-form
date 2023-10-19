
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

    let ticketType = "";

    if (years === "minorenne") {
        price = basePrice - ((basePrice / 100) * 20);
        ticketType = "Biglietto Baby";
    } else if (years === "anziano") {
        price = basePrice - ((basePrice / 100) * 40);
        ticketType = "Biglietto Old";
    } else if (years === "maggiorenne") {
        price = basePrice;
        ticketType = "Biglietto Standard";
    }

    const wagonNumber = Math.floor(Math.random() * 19);

    const cpCode = Math.floor(Math.random() * 99999);

    // output

    const passenger = `${userName}`;

    const priceTicket = `${price.toFixed(2)} €`;

    const ticketOffert = `${ticketType}`;

    const wagon = `${wagonNumber}`;

    const codeCp = `${cpCode}`;

    console.log(ticketOffert)

    document.getElementById("traveler").innerHTML = passenger;

    document.getElementById("totalPrice").innerHTML = priceTicket;

    document.getElementById("offert").innerHTML = ticketOffert;

    document.getElementById("carriage").innerHTML = wagon;

    document.getElementById("cp").innerHTML = codeCp;

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