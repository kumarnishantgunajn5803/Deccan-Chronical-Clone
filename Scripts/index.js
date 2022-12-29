import navbarContent from "../Components/navbarContent.js";
document.getElementById("nav").innerHTML = navbarContent();
import footer from "../Components/footer.js";
document.getElementById("footer").innerHTML =footer();

 

let api = 'dc646f3fe3df49938f899054f04d6265';
let cont1= document.getElementById('top_stories_big_cards');
let cont2= document.getElementById('top_stories_small_cards');
let cont3= document.getElementById('most_popular');


let getData = async() =>{

    let url = `
    https://newsapi.org/v2/top-headlines?country=IN&apiKey=${api}` ;
    let res = await fetch(url)
    let data = await res.json();
    console.log(data);
    append(data.articles , cont1)
    append1(data.articles , cont2)
    append2(data.articles , cont3)
}


getData();

function append(data,container){
    
  for(let i =3;i<6;i++){
    let div =  document.createElement('div');
    div.setAttribute('class','top_stories_big_cards');
    div.addEventListener("click", function () {
      showEle(data[i]);
    });
    let img = document.createElement('img');
    img.src=data[i].urlToImage;

    let h3 =  document.createElement('h2');
    h3.innerText=data[i].title;

    let p = document.createElement('p');
    p.innerText = data[i].description;

    let c = document.createElement('p');
    c.innerText = data[i].content;

    div.append(img,h3,p,c);
    container.append(div);
   
  }
};

function append1(data,container){
    
  for(let i =5;i<20;i++){
    let div =  document.createElement('div');
    div.setAttribute('class','top_stories_small_cards');
    div.addEventListener("click", function () {
      showEle(data[i]);
    });
    let img = document.createElement('img');
    img.src=data[i].urlToImage;

    

    let p = document.createElement('p');
    p.innerText = data[i].title;

     

    div.append(img,p);
    container.append(div);
   
  }
};

function append2(data,container){
    
  for(let i =0;i<10;i++){
    let div =  document.createElement('div');
    div.setAttribute('class','most_popular_cards');
    div.addEventListener("click", function () {
      showEle(data[i]);
    });
    let img = document.createElement('img');
    img.src=data[i].urlToImage;

    

    let p = document.createElement('p');
    p.innerText = data[i].title;

     

    div.append(p,img);
    container.append(div);
   
  }
};
let cont_south =document.getElementById('south_cards_container');
let getData2 = async() =>{

  let url = `
  https://newsapi.org/v2/everything?q=south-india&apiKey=${api}` ;
  let res = await fetch(url)
  let data = await res.json();
  console.log(data);
  append_south(data.articles,cont_south)
}
getData2();

function append_south(data,container){
    
  for(let i =72;i<80;i++){
    let div =  document.createElement('div');
    div.setAttribute('class','south_cards');
    div.addEventListener("click", function () {
      showEle(data[i]);
    });
    let img = document.createElement('img');
    img.src=data[i].urlToImage;

    

    let p = document.createElement('h3');
    p.innerText = data[i].title;

     

    div.append(img,p);
    container.append(div);
   
  }
};

// Entertainment


let cont_entertainment =document.getElementById('entertainment_container');
let getData3 = async() =>{

  let url = `
  https://newsapi.org/v2/everything?q=india-entertainment-bollywood&apiKey=${api}` ;
  let res = await fetch(url)
  let data = await res.json();
  console.log(data);
  append_entertainment(data.articles,cont_entertainment)
}
getData3();




function append_entertainment(data,container){
    
  for(let i =20;i<26;i++){
    let div =  document.createElement('div');
    div.setAttribute('class','entertainment_cards');
    div.addEventListener("click", function () {
      showEle(data[i]);
    });
    let img = document.createElement('img');
    img.src=data[i].urlToImage;

    

    let p = document.createElement('h3');
    p.innerText = data[i].title;

     

    div.append(img,p);
    container.append(div);
   
  }
};


// jobs & education


let cont_jobs =document.getElementById('jobs_container');
let getData4 = async() =>{

  let url = `
  https://newsapi.org/v2/everything?q=india-jobs-education&apiKey=${api}` ;
  let res = await fetch(url)
  let data = await res.json();
  console.log(data);
  append_jobs(data.articles,cont_jobs)
}
getData4();




function append_jobs(data,container){
    
  for(let i =20;i<24;i++){
    let div =  document.createElement('div');
    div.setAttribute('class','jobs_cards');
    div.addEventListener("click", function () {
      showEle(data[i]);
    });
    let img = document.createElement('img');
    img.src=data[i].urlToImage;

    

    let p = document.createElement('h3');
    p.innerText = data[i].title;

     

    div.append(img,p);
    container.append(div);
   
  }
};

//sports



let cont_sports =document.getElementById('sports_container');
let getData5 = async() =>{

  let url = `
  https://newsapi.org/v2/everything?q=sports-india&apiKey=${api}` ;
  let res = await fetch(url)
  let data = await res.json();
  console.log(data);
  append_sports(data.articles,cont_sports)
}
getData5();




function append_sports(data,container){
    
  for(let i =30;i<38;i++){
    let div =  document.createElement('div');
    div.setAttribute('class','sports_cards');
    div.addEventListener("click", function () {
      showEle(data[i]);
    });
    let img = document.createElement('img');
    img.src=data[i].urlToImage;

    

    let p = document.createElement('h3');
    p.innerText = data[i].title;

     

    div.append(img,p);
    container.append(div);
   
  }
};

//lifestyle


let cont_lifestyle =document.getElementById('lifestyle_container');
let getData6 = async() =>{

  let url = `
  https://newsapi.org/v2/everything?q=lifestyle&apiKey=${api}` ;
  let res = await fetch(url)
  let data = await res.json();
  console.log(data);
  append_lifestyle(data.articles,cont_lifestyle)
}
getData6();




function append_lifestyle(data,container){
    
  for(let i =10;i<18;i++){
    let div =  document.createElement('div');
    div.setAttribute('class','lifestyle_cards');
    div.addEventListener("click", function () {
      showEle(data[i]);
    });
    let img = document.createElement('img');
    img.src=data[i].urlToImage;

    

    let p = document.createElement('h3');
    p.innerText = data[i].title;

     

    div.append(img,p);
    container.append(div);
   
  }
};

//techonology

let cont_technology =document.getElementById('technology_container');
let getData7 = async() =>{

  let url = `
  https://newsapi.org/v2/everything?q=technology&apiKey=${api}` ;
  let res = await fetch(url)
  let data = await res.json();
  console.log(data);
  append_technology(data.articles,cont_technology)
}
getData7();




function append_technology(data,container){
    
  for(let i =0;i<8;i++){
    let div =  document.createElement('div');
    div.setAttribute('class','technology_cards');
    div.addEventListener("click", function () {
      showEle(data[i]);
    });
    let img = document.createElement('img');
    img.src=data[i].urlToImage;

    

    let p = document.createElement('h3');
    p.innerText = data[i].title;

     

    div.append(img,p);
    container.append(div);
   
  }
};

// SOUTH-ENTERTAINMENT

let cont_south_entertainment =document.getElementById('south_entertainment_container');
let getData8 = async() =>{

  let url = `
  https://newsapi.org/v2/everything?q=tollywood&apiKey=${api}` ;
  let res = await fetch(url)
  let data = await res.json();
  console.log(data);
  append_south_entertainment(data.articles,cont_south_entertainment)
}
getData8();




function append_south_entertainment(data,container){
    
  for(let i =25;i<31;i++){
    let div =  document.createElement('div');
    div.setAttribute('class','south_entertainment_cards');
    div.addEventListener("click", function () {
      showEle(data[i]);
    });
    let img = document.createElement('img');
    img.src=data[i].urlToImage;

    

    let p = document.createElement('h3');
    p.innerText = data[i].title;

     

    div.append(img,p);
    container.append(div);
   
  }
};
//WORLD
let cont_world =document.getElementById('world_container');
let getData9 = async() =>{

  let url = `
  https://newsapi.org/v2/everything?q=world&apiKey=${api}` ;
  let res = await fetch(url)
  let data = await res.json();
  console.log(data);
  append_world(data.articles,cont_world)
}
getData9();




function append_world(data,container){
    
  for(let i =0;i<8;i++){
    let div =  document.createElement('div');
    div.setAttribute('class','world_cards');
    div.addEventListener("click", function () {
      showEle(data[i]);
    });
    let img = document.createElement('img');
    img.src=data[i].urlToImage;

    

    let p = document.createElement('h3');
    p.innerText = data[i].title;

     

    div.append(img,p);
    container.append(div);
   
  }
};


//SCIENCE
let cont_science =document.getElementById('science_container');
let getData_science = async() =>{

  let url = `
  https://newsapi.org/v2/everything?q=science&apiKey=${api}` ;
  let res = await fetch(url)
  let data = await res.json();
  console.log(data);
  append_science(data.articles,cont_science)
}
getData_science();




function append_science(data,container){
    
  for(let i =0;i<8;i++){
    let div =  document.createElement('div');
    div.setAttribute('class','science_cards');
    div.addEventListener("click", function () {
      showEle(data[i]);
    });
    let img = document.createElement('img');
    img.src=data[i].urlToImage;

    

    let p = document.createElement('h3');
    p.innerText = data[i].title;

     

    div.append(img,p);
    container.append(div);
   
  }
};
//BUSINESS
let cont_business =document.getElementById('business_container');
let getData_business = async() =>{

  let url = `
  https://newsapi.org/v2/everything?q=business&apiKey=${api}` ;
  let res = await fetch(url)
  let data = await res.json();
  console.log(data);
  append_business(data.articles,cont_business)
}
getData_business();




function append_business(data,container){
    
  for(let i =0;i<8;i++){
    let div =  document.createElement('div');
    div.setAttribute('class','business_cards');
    div.addEventListener("click", function () {
      showEle(data[i]);
    });
    let img = document.createElement('img');
    img.src=data[i].urlToImage;

    

    let p = document.createElement('h3');
    p.innerText = data[i].title;

     

    div.append(img,p);
    container.append(div);
   
  }
};
//OPINION
let cont_opinion =document.getElementById('opinion_container');
let getData_opinion = async() =>{

  let url = `
  https://newsapi.org/v2/everything?q=opinion&apiKey=${api}` ;
  let res = await fetch(url)
  let data = await res.json();
  console.log(data);
  append_opinion(data.articles,cont_opinion)
}
getData_opinion();




function append_opinion(data,container){
    
  for(let i =0;i<8;i++){
    let div =  document.createElement('div');
    div.setAttribute('class','opinion_cards');
    div.addEventListener("click", function () {
      showEle(data[i]);
    });
    let img = document.createElement('img');
    img.src=data[i].urlToImage;

    

    let p = document.createElement('h3');
    p.innerText = data[i].title;

     

    div.append(img,p);
    container.append(div);
   
  }
};
//EDITOR'S PICK
let cont_editor =document.getElementById('editor_container');
let getData_editor= async() =>{

  let url = `
  https://newsapi.org/v2/everything?q=editor's-pick&apiKey=${api}` ;
  let res = await fetch(url)
  let data = await res.json();
  console.log(data);
  append_editor(data.articles,cont_editor)
}
getData_editor();




function append_editor(data,container){
    
  for(let i =0;i<8;i++){
    let div =  document.createElement('div');
    div.setAttribute('class','editor_cards');
    div.addEventListener("click", function () {
      showEle(data[i]);
    });
    let img = document.createElement('img');
    img.src=data[i].urlToImage;

    

    let p = document.createElement('h3');
    p.innerText = data[i].title;

     

    div.append(img,p);
    container.append(div);
   
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
