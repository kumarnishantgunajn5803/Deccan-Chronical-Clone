import navbarContent from "../Components/navbarContent.js";
document.getElementById("nav").innerHTML = navbarContent();

import footerPart from "../Components/footer.js";
document.getElementById("footer").innerHTML = footerPart();

const api = "9252738d55da4b0fbb83499ac7299865"

const URL_For_gallery = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${api}`;

let getData_for_gallery = async () => {
  let response = await fetch(URL_For_gallery);
  let data = await response.json();
  console.log(data);
  displayData_for_gallery(data.articles);
};

getData_for_gallery();

let displayData_for_gallery = (data) => {
  let head_sub_blog1 = document.getElementById("head_sub_blog1");
  let head_sub_blog2 = document.getElementById("head_sub_blog2");

  let div = document.createElement("div");
  
  let image = document.createElement("img");
  image.src = data[0].urlToImage;
  div.append(image);
  head_sub_blog1.append(div);

  for (let ele = 0; ele < 5; ele++) {
    let div = document.createElement("div");
    div.addEventListener("click", function () {
        showEle(data[ele]);
      });

    let image = document.createElement("img");
    image.src = data[ele].urlToImage;

    let title = document.createElement("p");
    title.innerText = data[ele].title;

    div.append(image, title);
    head_sub_blog2.append(div);
  }

  for (let ele = 0; ele < 7; ele++) {
    let div = document.createElement("div");
    div.addEventListener("click", function () {
        showEle(data[ele]);
      });
  }
};

const URL_For_gallery_entertaiment = `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=${api}`;

let getData_for_gallery_entertaiment = async () => {
  let response = await fetch(URL_For_gallery_entertaiment);
  let data = await response.json();
  console.log(data);
  displayData_for_gallery_entertaiment(data.articles);
};

getData_for_gallery_entertaiment();

let displayData_for_gallery_entertaiment = (data) => {
  let head_of_gallery_Blog2 = document.getElementById("head-of-gallery-Blog2");

  for (let ele = 0; ele < 6; ele++) {
    let div = document.createElement("div");
    div.addEventListener("click", function () {
        showEle(data[ele]);
      });

    let image = document.createElement("img");
    image.src = data[ele].urlToImage;

    let title = document.createElement("p");
    title.innerText = data[ele].title;

    div.append(image, title);
    head_of_gallery_Blog2.append(div);
  }
};



const URL_For_gallery_lifestyle = `https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=${api}`;

let getData_for_gallery_lifestyle = async () => {
  let response = await fetch(URL_For_gallery_lifestyle);
  let data = await response.json();
  console.log(data);
  displayData_for_gallery_lifestyle(data.articles);
};

getData_for_gallery_lifestyle();

let displayData_for_gallery_lifestyle = (data) => {
  let head_of_gallery_Blog3 = document.getElementById("head-of-gallery-Blog3");

  for (let ele = 0; ele < 6; ele++) {
    let div = document.createElement("div");
    div.addEventListener("click", function () {
        showEle(data[ele]);
      });

    let image = document.createElement("img");
    image.src = data[ele].urlToImage;

    let title = document.createElement("p");
    title.innerText = data[ele].title;

    div.append(image, title);
    head_of_gallery_Blog3.append(div);
  }
};




const URL_For_gallery_technology = `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=${api}`;

let getData_for_gallery_technology = async () => {
  let response = await fetch(URL_For_gallery_technology);
  let data = await response.json();
  console.log(data);
  displayData_for_gallery_technology(data.articles);
};

getData_for_gallery_technology();

let displayData_for_gallery_technology = (data) => {
  let head_of_gallery_Blog4 = document.getElementById("head-of-gallery-Blog4");

  for (let ele = 0; ele < 6; ele++) {
    let div = document.createElement("div");
    div.addEventListener("click", function () {
        showEle(data[ele]);
      });

    let image = document.createElement("img");
    image.src = data[ele].urlToImage;

    let title = document.createElement("p");
    title.innerText = data[ele].title;

    div.append(image, title);
    head_of_gallery_Blog4.append(div);
  }
};





const URL_For_gallery_sport = `https://newsapi.org/v2/top-headlines?country=in&category=sport&apiKey=${api}`;

let getData_for_gallery_sport = async () => {
  let response = await fetch(URL_For_gallery_sport);
  let data = await response.json();
  console.log(data);
  displayData_for_gallery_sport(data.articles);
};

getData_for_gallery_sport();

let displayData_for_gallery_sport = (data) => {
  let head_of_gallery_Blog5 = document.getElementById("head-of-gallery-Blog5");

  for (let ele = 0; ele < 6; ele++) {
    let div = document.createElement("div");
    div.addEventListener("click", function () {
        showEle(data[ele]);
      });

    let image = document.createElement("img");
    image.src = data[ele].urlToImage;

    let title = document.createElement("p");
    title.innerText = data[ele].title;

    div.append(image, title);
    head_of_gallery_Blog5.append(div);
  }
};



const URL_For_gallery_world = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${api}`;

let getData_for_gallery_world = async () => {
  let response = await fetch(URL_For_gallery_world);
  let data = await response.json();
  console.log(data);
  displayData_for_gallery_world(data.articles);
};

getData_for_gallery_world();

let displayData_for_gallery_world = (data) => {
  let head_of_gallery_Blog6 = document.getElementById("head-of-gallery-Blog6");

  for (let ele = 0; ele < 6; ele++) {
    let div = document.createElement("div");
    div.addEventListener("click", function () {
        showEle(data[ele]);
      });

    let image = document.createElement("img");
    image.src = data[ele].urlToImage;

    let title = document.createElement("p");
    title.innerText = data[ele].title;

    div.append(image, title);
    head_of_gallery_Blog6.append(div);
  }
};




const URL_For_gallery_science = `https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=${api}`;

let getData_for_gallery_science = async () => {
  let response = await fetch(URL_For_gallery_science);
  let data = await response.json();
  console.log(data);
  displayData_for_gallery_science(data.articles);
};

getData_for_gallery_science();

let displayData_for_gallery_science = (data) => {
  let head_of_gallery_Blog7 = document.getElementById("head-of-gallery-Blog7");

  for (let ele = 0; ele < 6; ele++) {
    let div = document.createElement("div");
    div.addEventListener("click", function () {
        showEle(data[ele]);
      });

    let image = document.createElement("img");
    image.src = data[ele].urlToImage;

    let title = document.createElement("p");
    title.innerText = data[ele].title;

    div.append(image, title);
    head_of_gallery_Blog7.append(div);
  }
};



let arr = JSON.parse(localStorage.getItem("showData")) || [];

function showEle(ele) {
  arr = [];
  arr.push(ele);
  console.log(arr);
  window.location.href = "showNews.html";
  localStorage.setItem("showData", JSON.stringify(arr));
}
