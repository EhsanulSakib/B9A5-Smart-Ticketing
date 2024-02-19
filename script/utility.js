const maxSeat = 4;

const A1 = document.getElementById("A1");
const A2 = document.getElementById("A2");
const A3 = document.getElementById("A3");
const A4 = document.getElementById("A4");

const B1 = document.getElementById("B1");
const B2 = document.getElementById("B2");
const B3 = document.getElementById("B3");
const B4 = document.getElementById("B4");

const C1 = document.getElementById("C1");
const C2 = document.getElementById("C2");
const C3 = document.getElementById("C3");
const C4 = document.getElementById("C4");

const D1 = document.getElementById("D1");
const D2 = document.getElementById("D2");
const D3 = document.getElementById("D3");
const D4 = document.getElementById("D4");

const E1 = document.getElementById("E1");
const E2 = document.getElementById("E2");
const E3 = document.getElementById("E3");
const E4 = document.getElementById("E4");

const F1 = document.getElementById("F1");
const F2 = document.getElementById("F2");
const F3 = document.getElementById("F3");
const F4 = document.getElementById("F4");

const G1 = document.getElementById("G1");
const G2 = document.getElementById("G2");
const G3 = document.getElementById("G3");
const G4 = document.getElementById("G4");

const H1 = document.getElementById("H1");
const H2 = document.getElementById("H2");
const H3 = document.getElementById("H3");
const H4 = document.getElementById("H4");

const I1 = document.getElementById("I1");
const I2 = document.getElementById("I2");
const I3 = document.getElementById("I3");
const I4 = document.getElementById("I4");

const J1 = document.getElementById("J1");
const J2 = document.getElementById("J2");
const J3 = document.getElementById("J3");
const J4 = document.getElementById("J4");

const seatBooking = document.getElementById("seat-booking");
let ticketCount = 0;
let totalPriceSpan = document.getElementById("totalPrice");
let totalPrice = parseInt(totalPriceSpan.innerText);

let discountPriceSpan = document.getElementById("discountPrice");
let discountPrice = parseInt(discountPriceSpan.innerText);

let grandPriceSpan = document.getElementById("grandPrice");
let grandPrice = parseFloat(grandPriceSpan.innerText);

let phoneValid = false;
function pPhone() {
  phoneValid = true;
  isThik();
}

let clickedBtn = seatBooking.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    let key = event.target.id;
    if (ticketCount < 4) {
      disableKey(key);
      addToCart(key);
      grandTotal();
    } else {
      my_modal_1.showModal();
    }
    isThik();

    if (ticketCount == 4) {
      enableCupon();
    }
  }
});

function isThik() {
  if (phoneValid && ticketCount > 0) {
    enableSubmitBtn();
  }
}

const cupon1 = document.getElementById("code1").innerText;
console.log(cupon1);
const cupon2 = document.getElementById("code2").innerText;
console.log(cupon2);

const cuponInputField = document.getElementById("checkCupon");
console.log(cuponInputField);

function cuponCheck() {
  let cuponInput = cuponInputField.value;
  let cuponDiv = document.getElementById("cupon-div");

  if (cuponInput == cupon1) {
    discountPrice = parseFloat(totalPrice * 0.15).toFixed(2);
    discountPriceSpan.innerText = discountPrice;
    cuponDiv.classList.add("hidden");
  } else if (cuponInput == cupon2) {
    discountPrice = parseFloat(totalPrice * 0.2).toFixed(2);
    discountPriceSpan.innerText = discountPrice;
    cuponDiv.classList.add("hidden");
  } else {
    alert("Invalid Cupon Code!");
  }
  grandTotal();
}

function grandTotal() {
  grandPrice = totalPrice - discountPrice;
  grandPriceSpan.innerText = grandPrice;
}

const submitCuponBtn = document.getElementById("cupon-access-btn");

// function submitCupon() {
//   const cupon = checkCuponCode.value;
//   console.log(cupon);
// }

// submitCuponBtn.addEventListener("click", submitCupon());

function disableKey(btnName) {
  let selected = document.getElementById(btnName);
  selected.classList.remove("bg-[#F7F8F8]");
  selected.classList.add("bg-[#1DD100]", "text-white");
  selected.disabled = true;
  updateSeat();
}

function updateSeat() {
  let seatRemainElement = document.getElementById("seat-remain");

  let seatRemain = parseInt(seatRemainElement.innerText);

  let takenSeatSpan = document.getElementById("taken-seat");

  let takenSeat = parseInt(takenSeatSpan.innerText);

  seatRemain--;
  ticketCount++;
  takenSeat++;
  seatRemainElement.innerText = seatRemain;
  takenSeatSpan.innerText = takenSeat;
}

function addToCart(seatNo) {
  const orderList = document.getElementById("orderList");

  const addToList = document.createElement("li");

  addToList.classList.add(
    "my-2",
    "flex",
    "flex-row",
    "justify-between",
    "border-b",
    "border-dashed",
    "border-[#03071233]"
  );

  const newItem = `
  <p>${seatNo}</p>
  <p class="ml-8">Economy</p>
  <p>550</p>
  </li>`;

  addToList.innerHTML = newItem;
  orderList.append(addToList);
  updateTotalPrice();
}

function updateTotalPrice() {
  totalPrice += 550;
  totalPriceSpan.innerText = totalPrice;
}

function enableCupon() {
  const cuponBtn = document.getElementById("cupon-access-btn");

  cuponBtn.classList.remove("bg-slate-400");
  cuponBtn.classList.add("bg-[#1DD100]");
  cuponBtn.disabled = false;
}

// function checkCuponCode() {

//   console.log(discountPrice);

//   if (cupon1 === cuponInput) {
//     const updateDiscountPrice = parseFloat(totalPrice * 0.15).toFixed(2);
//     discountPrice = updateDiscountPrice;
//     console.log(discountPrice);
//   }
// }

function enableSubmitBtn() {
  const submitBtn = document.getElementById("confirm");
  submitBtn.classList.remove("bg-slate-400");
  submitBtn.classList.add("bg-[#1DD100]");
  submitBtn.disabled = false;
}
