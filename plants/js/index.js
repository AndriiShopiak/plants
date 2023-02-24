const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".burger_nav_mobile");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})
document.querySelectorAll(".menu__item").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))

document.addEventListener( 'click', (e) => {
	const withinBoundaries = e.composedPath().includes(hamburger);
	const withinBoundaries1 = e.composedPath().includes(navMenu);
 
	if ( ! withinBoundaries && !withinBoundaries1) {
		hamburger.classList.remove("active");
    navMenu.classList.remove("active");
	}
})

// add script for buttons ( SERVICE SECTION )

let gardens = document.querySelector("#Gardens");
let planting = document.querySelector("#Planting");
let lawn = document.querySelector(".Lawn");
let countClick = 1;
let serviceItem = document.querySelectorAll(".service__item"),i;

gardens.addEventListener("click", () => {
  if (countClick <=2) {
    gardens.classList.add("service_button_active");
    countClick ++;
    if (lawn.classList[1] !== "service_button_active" && planting.classList[1] !== "service_button_active") {
      if(serviceItem[3].style.cssText === "filter: blur(4px);") {
        serviceItem[0].style.cssText = 'filter: blur(0px);';
        serviceItem[4].style.cssText = 'filter: blur(0px);';
      }
      else {
         serviceItem[1].style.cssText = 'filter: blur(4px);';
          serviceItem[2].style.cssText = 'filter: blur(4px);';
          serviceItem[3].style.cssText = 'filter: blur(4px);';
          serviceItem[5].style.cssText = 'filter: blur(4px);';
      }
    }
     if (planting.classList[1] === "service_button_active") {
      serviceItem[0].style.cssText = 'filter: blur(0px);';
      serviceItem[4].style.cssText = 'filter: blur(0px);';
      serviceItem[5].style.cssText = 'filter: blur(0px);';
    }
    if(serviceItem[3].style.cssText === "filter: blur(4px);") {
      serviceItem[0].style.cssText = 'filter: blur(0px);';
    }
  }
  else {
    planting.classList.remove("service_button_active");
    lawn.classList.remove("service_button_active");
    gardens.classList.add("service_button_active");
    serviceItem[0].style.cssText = 'filter: blur(0px);';
    serviceItem[1].style.cssText = 'filter: blur(4px);';
    serviceItem[2].style.cssText = 'filter: blur(4px);';
    serviceItem[3].style.cssText = 'filter: blur(4px);';
    serviceItem[4].style.cssText = 'filter: blur(0px);';
    serviceItem[5].style.cssText = 'filter: blur(4px);';
    countClick --;
  }
})
planting.addEventListener("click", () => {
  if (countClick <=2) {
    planting.classList.add("service_button_active");
    countClick ++;
    if (gardens.classList[1] === "service_button_active" || lawn.classList[1] === "service_button_active"){
      serviceItem[1].style.cssText = 'filter: blur(0px);';
      serviceItem[3].style.cssText = 'filter: blur(0px);';
      serviceItem[5].style.cssText = 'filter: blur(0px);';
    }
    else {
      if (serviceItem[2].style.cssText = 'filter: blur(0px);') {
        serviceItem[1].style.cssText = 'filter: blur(0px);';
        serviceItem[3].style.cssText = 'filter: blur(0px);';
        serviceItem[5].style.cssText = 'filter: blur(0px);';
      }
      else {
        serviceItem[0].style.cssText = 'filter: blur(4px);';
        serviceItem[2].style.cssText = 'filter: blur(4px);';
        serviceItem[4].style.cssText = 'filter: blur(4px);';
      }
    }
  }
  else {
    gardens.classList.remove("service_button_active");
    lawn.classList.remove("service_button_active");
    planting.classList.add("service_button_active");
      serviceItem[0].style.cssText = 'filter: blur(4px);';
      serviceItem[1].style.cssText = 'filter: blur(0px);';
      serviceItem[2].style.cssText = 'filter: blur(4px);';
      serviceItem[3].style.cssText = 'filter: blur(0px);';
      serviceItem[4].style.cssText = 'filter: blur(4px);';
      serviceItem[5].style.cssText = 'filter: blur(0px);';
    countClick  --;
  }
})
lawn.addEventListener("click", () => {
  if (countClick <=2) {
    lawn.classList.add("service_button_active");
    countClick ++;
    if (gardens.classList[1] === "service_button_active" || planting.classList[1] === "service_button_active"){
      serviceItem[2].style.cssText = 'filter: blur(0px);';
    }
    else {
      serviceItem[0].style.cssText = 'filter: blur(4px);';
      serviceItem[1].style.cssText = 'filter: blur(4px);';
      serviceItem[3].style.cssText = 'filter: blur(4px);';
      serviceItem[4].style.cssText = 'filter: blur(4px);';
      serviceItem[5].style.cssText = 'filter: blur(4px);';
    }
  }
  else {
    planting.classList.remove("service_button_active");
    gardens.classList.remove("service_button_active");
    lawn.classList.add("service_button_active");
    serviceItem[0].style.cssText = 'filter: blur(4px);';
      serviceItem[1].style.cssText = 'filter: blur(4px);';
      serviceItem[2].style.cssText = 'filter: blur(0px);';
      serviceItem[3].style.cssText = 'filter: blur(4px);';
      serviceItem[4].style.cssText = 'filter: blur(4px);';
      serviceItem[5].style.cssText = 'filter: blur(4px);';
    countClick  --;
  }
})

// Accordion ---------------------------------------------------
let selectors = document.querySelectorAll(".selectors__selector__item");
let circle = document.querySelectorAll("svg");
let circle1 = document.querySelectorAll("svg circle");
let circlePath = document.querySelectorAll("path");
circle[0].addEventListener("click", () => {
  selectors[1].classList.remove("selectors__active");
  selectors[2].classList.remove("selectors__active");
  selectors[0].classList.toggle("selectors__active");
  // ----------------------------------------------------------
  circle[1].classList.remove("drop__service__active");
  circle1[1].classList.remove("circle__active");
  circlePath[2].classList.remove("circle__path");
  circlePath[3].classList.remove("circle__path");
  circle[2].classList.remove("drop__service__active");
  circle1[2].classList.remove("circle__active");
  circlePath[4].classList.remove("circle__path");
  circlePath[5].classList.remove("circle__path");
  // ----------------------------------------------------------
  circle[0].classList.toggle("drop__service__active");
  circle1[0].classList.toggle("circle__active");
  circlePath[0].classList.toggle("circle__path");
  circlePath[1].classList.toggle("circle__path");
})
circle[1].addEventListener("click", () => {
  selectors[0].classList.remove("selectors__active");
  selectors[2].classList.remove("selectors__active");
  selectors[1].classList.toggle("selectors__active");
  // ----------------------------------------------------------
  circle[0].classList.remove("drop__service__active");
  circle1[0].classList.remove("circle__active");
  circlePath[0].classList.remove("circle__path");
  circlePath[1].classList.remove("circle__path");
  circle[2].classList.remove("drop__service__active");
  circle1[2].classList.remove("circle__active");
  circlePath[4].classList.remove("circle__path");
  circlePath[5].classList.remove("circle__path");
  // ----------------------------------------------------------
  circle[1].classList.toggle("drop__service__active");
  circle1[1].classList.toggle("circle__active");
  circlePath[2].classList.toggle("circle__path");
  circlePath[3].classList.toggle("circle__path");
})
circle[2].addEventListener("click", () => {
  selectors[0].classList.remove("selectors__active");
  selectors[1].classList.remove("selectors__active");
  selectors[2].classList.toggle("selectors__active");
  // ----------------------------------------------------------
  circle[0].classList.remove("drop__service__active");
  circle1[0].classList.remove("circle__active");
  circlePath[0].classList.remove("circle__path");
  circlePath[1].classList.remove("circle__path");
  circle[1].classList.remove("drop__service__active");
  circle1[1].classList.remove("circle__active");
  circlePath[2].classList.remove("circle__path");
  circlePath[3].classList.remove("circle__path");
  // ----------------------------------------------------------
  circle[2].classList.toggle("drop__service__active");
  circle1[2].classList.toggle("circle__active");
  circlePath[4].classList.toggle("circle__path");
  circlePath[5].classList.toggle("circle__path");
})

// ------CONTACT--US----------------
let adressList = [
  `<div class="contact_us__adress__block adress__items">
        <div class="adress__item__content">
            <div class="adress__item">
                <span class="adress__item__line">City:</span>
                <span class="adress__item__line_value">Canandaigua, NY</span>
            </div>
            <div class="adress__item">
                <span class="adress__item__line">Phone:</span>
                <span class="adress__item__line_value">+1 585 393 0001</span>
            </div>
            <div class="adress__item">
                <span class="adress__item__line">Office adress:</span>
                <span class="adress__item__line_value">151 Charlotte Street</span>
            </div>
        </div>
        <a href="tel:1 585 393 0001">
          <button class="adress__item__button">Call us</button>
        </a>
    </div>`,
    `<div class="contact_us__adress__block adress__items">
        <div class="adress__item__content">
            <div class="adress__item">
                <span class="adress__item__line">City:</span>
                <span class="adress__item__line_value">New York City</span>
            </div>
            <div class="adress__item">
                <span class="adress__item__line">Phone:</span>
                <span class="adress__item__line_value">+1	212	456 0002</span>
            </div>
            <div class="adress__item">
                <span class="adress__item__line">Office adress:</span>
                <span class="adress__item__line_value">9 East 91st Street</span>
            </div>
        </div>
        <a href="tel:1 212	456 0002">
          <button class="adress__item__button">Call us</button>
        </a>
    </div>`,
    `<div class="contact_us__adress__block adress__items">
        <div class="adress__item__content">
            <div class="adress__item">
                <span class="adress__item__line">City:</span>
                <span class="adress__item__line_value">Yonkers, NY</span>
            </div>
            <div class="adress__item">
                <span class="adress__item__line">Phone:</span>
                <span class="adress__item__line_value">+1	914	678 0003</span>
            </div>
            <div class="adress__item">
                <span class="adress__item__line">Office adress:</span>
                <span class="adress__item__line_value">511 Warburton Ave</span>
            </div>
        </div>
        <a href="tel:1	914	678 0003">
          <button class="adress__item__button">Call us</button>
        </a>
    </div>`,
    `<div class="contact_us__adress__block adress__items">
        <div class="adress__item__content">
            <div class="adress__item">
                <span class="adress__item__line">City:</span>
                <span class="adress__item__line_value">Sherrill, NY</span>
            </div>
            <div class="adress__item">
                <span class="adress__item__line">Phone:</span>
                <span class="adress__item__line_value">+1	315	908 0004</span>
            </div>
            <div class="adress__item">
                <span class="adress__item__line">Office adress:</span>
                <span class="adress__item__line_value">14 WEST Noyes BLVD</span>
            </div>
        </div>
        <a href="tel:1	315	908 0004">
          <button class="adress__item__button">Call us</button>
        </a>
    </div>`
];

let conButton = document.querySelector(".contact_us svg");
let conListCity = document.querySelector(".contact_us__choice__block__city_list");
let inputContact = document.querySelector(".contact_us__choice__input");
let cityItem = document.querySelectorAll(".city_list_item");
let cityValue = document.querySelector("#city_label");
let addressInsertion = document.querySelector("#test");
for (let i = 0; i<cityItem.length; i++) {
  cityItem[i].addEventListener("click", () => {
      cityValue.innerHTML = cityItem[i].textContent;
      addressInsertion.innerHTML = adressList[i];
      conListCity.classList.remove("active_city");
      conButton.style.cssText = 'transform: rotate(0);';
  })
}
conButton.addEventListener("click", () => {
  if (conButton.style.cssText === "" || conButton.style.cssText === "transform: rotate(0deg);") {
    conButton.style.cssText = 'transform: rotate(3.142rad);';
  } else {
    conButton.style.cssText = 'transform: rotate(0);';
  }
  inputContact.classList.add("active_input");
  conListCity.classList.toggle("active_city");
})
