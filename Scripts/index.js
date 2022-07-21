import navbarContent from "../Components/navbarContent.js";
document.getElementById("nav").innerHTML = navbarContent();

// let api = `dc646f3fe3df49938f899054f04d6265`;
let cont1= document.getElementById('top_stories_big_cards');
let cont2= document.getElementById('top_stories_small_cards');


let getData = async() =>{

    let url = `
    https://newsapi.org/v2/top-headlines?country=IN&apiKey=${api}` ;
    let res = await fetch(url)
    let data = await res.json();
    console.log(data);
    append(data.articles , cont1)
    append1(data.articles , cont2)
}


getData();

function append(data,container){
    
  for(let i =7;i<10;i++){
    let div =  document.createElement('div');
    div.setAttribute('class','top_stories_big_cards');
    let img = document.createElement('img');
    img.src=data[i].urlToImage;

    let h3 =  document.createElement('h3');
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
    
  for(let i =11;i<26;i++){
    let div =  document.createElement('div');
    div.setAttribute('class','top_stories_small_cards');
    let img = document.createElement('img');
    img.src=data[i].urlToImage;

    

    let p = document.createElement('p');
    p.innerText = data[i].title;

     

    div.append(img,p);
    container.append(div);
   
  }
};
