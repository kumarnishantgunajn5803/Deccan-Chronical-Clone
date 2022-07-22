import navbarContent from "../Components/navbarContent.js";
document.getElementById("nav").innerHTML = navbarContent();

import footerPart from "../Components/footer.js";
document.getElementById("footer").innerHTML = footerPart();

// 9252738d55da4b0fbb83499ac7299865

const URL_For_bollyood = `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=384bb13c6cc64241871ad51164029236`;

let getData_for_bollywood = async () => {
  let response = await fetch(URL_For_bollyood);
  let data = await response.json();
  console.log(data);
  displayData_for_bollywood(data.articles);
};

getData_for_bollywood();

let displayData_for_bollywood = (data) => {
  let bollywood = document.getElementById("bollywood-blog");
  let bollywood_small_blog = document.getElementById("bollywood-small-blog");
  for (let ele = 0; ele < 3; ele++) {
    let div = document.createElement("div");
    div.setAttribute("id", "bollywood-div");
    div.addEventListener("click", function () {
      showEle(data[ele]);
    });

    let image = document.createElement("img");
    image.src = data[ele].urlToImage;

    let description = document.createElement("p");
    description.innerText = data[ele].description;
    description.setAttribute("class", "description-para");

    let title = document.createElement("p");
    title.innerText = data[ele].title;
    title.setAttribute("class", "title-para");

    div.append(image, description, title);
    bollywood.append(div);
  }

  for (let ele = 3; ele < data.length; ele++) {
    let div = document.createElement("div");
    div.setAttribute("id", "bollywood-small-blog-div");
    div.addEventListener("click", function () {
      showEle(data[ele]);
    });

    let image = document.createElement("img");
    image.src = data[ele].urlToImage;

    let title = document.createElement("p");
    title.innerText = data[ele].title;
    title.setAttribute("class", "title-para");

    div.append(image, title);
    bollywood_small_blog.append(div);
  }
};

const URL_For_hollyood = `https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=384bb13c6cc64241871ad51164029236`;
let getData_for_hollywood = async () => {
  let response = await fetch(URL_For_hollyood);
  let data = await response.json();
  console.log(data);
  displayData_for_hollywood(data.articles);
};

getData_for_hollywood();

let displayData_for_hollywood = (data) => {
  let hollywood = document.getElementById("hollywood-blog1");
  data.forEach((ele) => {
    let div = document.createElement("div");
    div.setAttribute("class", "hollywood-div");
    div.addEventListener("click", function () {
      showEle(ele);
    });

    let image = document.createElement("img");
    image.src = ele.urlToImage;

    let title = document.createElement("p");
    title.innerText = ele.title;
    title.setAttribute("class", "title-para");

    let description = document.createElement("p");
    description.innerText = ele.description;
    description.setAttribute("class", "description-para");

    div.append(image, title, description);
    hollywood.append(div);
  });
};

const URL_For_television = `https://newsapi.org/v2/top-headlines?country=pt&category=entertainment&apiKey=384bb13c6cc64241871ad51164029236`;

let getData_for_television = async () => {
  let response = await fetch(URL_For_television);
  let data = await response.json();
  console.log(data);
  displayData_for_television(data.articles);
};

getData_for_television();

let displayData_for_television = (data) => {
  let television = document.getElementById("television-blog1");
  let television_small_blog = document.getElementById("television-small-blog");
  for (let ele = 0; ele < 3; ele++) {
    let div = document.createElement("div");
    div.setAttribute("id", "television-div");
    div.addEventListener("click", function () {
      showEle(data[ele]);
    });

    let image = document.createElement("img");
    image.src = data[ele].urlToImage;

    //   let description = document.createElement("p");
    //   description.innerText = data[ele].description;
    //   description.setAttribute("class", "description-para");

    let title = document.createElement("p");
    title.innerText = data[ele].title;
    title.setAttribute("class", "title-para");

    div.append(image, title);
    television.append(div);
  }

  for (let ele = 3; ele < 7; ele++) {
    let div = document.createElement("div");
    div.setAttribute("id", "television-small-blog-div");
    div.addEventListener("click", function () {
      showEle(data[ele]);
    });

    let image = document.createElement("img");
    image.src = data[ele].urlToImage;

    let title = document.createElement("p");
    title.innerText = data[ele].title;
    title.setAttribute("class", "title-para");

    div.append(image, title);
    television_small_blog.append(div);
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


