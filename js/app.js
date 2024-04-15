// const images = [
//   {
//     url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat",
//   },
//   {
//     url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//   },
//   {
//     url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running",
//   },
// ];

// function createGallery(images) {
//   const gallery = document.querySelector(".gallery");
//   let galleryhtml = "";

//   images.forEach((image) => {
//     galleryhtml += `<li><img src="${image.url}" alt="${image.alt}"></li>`;
//   });
//   gallery.insertAdjacentHTML("beforeend", galleryhtml);
// }

// let button = document.querySelector(".btn");

// button.addEventListener("click", function () {
//   createGallery(images);
// });
// ////////////////////////////////////////////////////////
// let counterValue = 0;

// let button1 = document.querySelector("btn2");

// button1.addEventListener("click", function () {
//   counterValue += 1;
// });

// const element = document.getElementById("demo");
// const list = document.querySelector(".list");
// console.dir({ list });

// list.classList.add("some-class");

// // list.classList.remove("some-class");

// list.classList.replace("some-class", "new-class");

// let card = document.createElement("h1");
// card.textContent = "salam";

// let image = document.createElement("img");

// image.src = "https://picsum.photos/200/300";
// image.alt = "photo";
// image.width = "400";
// image.height = "400";

// let container = document.querySelector(".container");

// container.before(card, image);

///////////////////////////////////////////////////////////////////////////////////////////////

function createProductCard(productName1, price1, imageUrl1) {
  let cardProduct = document.createElement("div");

  let productName = document.createElement("p");
  let price = document.createElement("p");
  let imageUrl = document.createElement("img");

  productName.textContent = productName1;
  price.textContent = price1;
  imageUrl.src = imageUrl1;

  cardProduct.append(productName);
  cardProduct.append(price);
  cardProduct.append(imageUrl);

  return cardProduct;
}

let card = createProductCard(
  "Apple",
  "Цена = 25",
  "https://picsum.photos/200/300"
);

let container = document.querySelector(".container");
container.prepend(card);

//////////////////////////////////////////////////////////////////////////////////////////////////

function createCommentMessage(author1, message1, timestamp1) {
  let commentMessage = document.createElement("div");

  let author = document.createElement("p");
  let message = document.createElement("p");
  let timestamp = document.createElement("p");

  author.textContent = author1;
  message.textContent = message1;
  timestamp.textContent = timestamp1;

  commentMessage.append(author);
  commentMessage.append(message);
  commentMessage.append(timestamp);

  return commentMessage;
}

let message = createCommentMessage("Расул", "аман бабуль ", "12:00");

let container2 = document.querySelector(".container");

container2.append(message);

////////////////////////////////////////////////////////////////////////////////////////

function createMenuItem(name1, price1, description1) {
  let menu = document.createElement("div");

  let name = document.createElement("p");
  let price = document.createElement("p");
  let description = document.createElement("p");

  name.textContent = name1;
  price.textContent = price1;
  description.textContent = description1;

  menu.append(name);
  menu.append(price);
  menu.append(description);

  return menu;
}

let menu = createCommentMessage("Аварские хинкали", " Цена = 15", "бомбовые");

let container3 = document.querySelector(".container");

container3.append(menu);
