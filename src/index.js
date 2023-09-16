import "./style.css";
import PizzaImg from "./girl-with-red-hat-pizza.jpg";
import { renderMenu } from "./menu";

function clearPage() {
  document.body.innerHTML = "";
}

function renderNavbar() {
  const header = document.createElement("header");
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");

  ul.innerHTML = `
    <li><a href="#" id="home-link">Home</a></li>
    <li><a href="#" id="menu-link">Menu</a></li>
    <li><a href="#" id="about-link">About</a></li>
  `;

  nav.appendChild(ul);
  header.appendChild(nav);

  document
    .getElementById("menu-link")
    .addEventListener("click", handleMenuClick);

  return header;
}

function handleMenuClick() {
  clearPage();
  const menuContent = renderMenu();
  document.body.appendChild(menuContent);
}

function renderHero() {
  const heroContainer = document.createElement("div");
  heroContainer.classList.add("hero-container");

  const h1 = document.createElement("h1");
  h1.textContent = "Crusters";

  const subtitle = document.createElement("p");
  subtitle.classList.add("subtitle");
  subtitle.textContent =
    "Welcome to Crusters, where pizza becomes a culinary adventure! Indulge in our unique gourmet crusts, crafted with extraordinary ingredients like pumpkin spice, super gluten, spiked chia seeds, and more.";

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");

  const img = new Image();
  img.src = PizzaImg;
  imageContainer.appendChild(img);

  heroContainer.appendChild(h1);
  heroContainer.appendChild(subtitle);
  heroContainer.appendChild(imageContainer);

  return heroContainer;
}

function body() {
  const bodyContainer = document.createElement("div");
  bodyContainer.appendChild(renderNavbar());
  bodyContainer.appendChild(renderHero());
  return bodyContainer;
}

document.body.appendChild(body());
