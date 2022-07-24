
import navbarContent from "../Components/navbarContent.js";
document.getElementById("nav").innerHTML = navbarContent();

import footer from "../Components/footer.js";
document.getElementById("footer").innerHTML =footer();


let newsData = JSON.parse(localStorage.getItem("news"));

let cont = document.getElementById("newsShowfirst")
newsData.forEach(function(el){

    let image = document.createElement("img")
    image.src = el.urlToImage

    let title = document.createElement("h2")
    title.innerText = `Title :- ${el.title}`;

    let desc = document.createElement("h3")
    desc.innerText = `Description :- ${el.description}`;

    let content = document.createElement("h4")
    content.innerText = `Content :- ${el.content}`;

    let div = document.createElement("div")
    div.setAttribute("class", "news")

    div.append(image,title,desc,content)
    cont.append(div);

})


let NewsmostPopularNews = async() =>{

    let url = `https://newsapi.org/v2/everything?q=top&from=2022-06-22&sortBy=publishedAt&apiKey=08e88dc30f0641c1bb12c5c0de28f60c` ;
    let res = await fetch(url)
    let data = await res.json();
    console.log(data);
    append1(data.articles)
}

NewsmostPopularNews()

let append1 = (data)=>{

    let container = document.getElementById("Newsmostpopular")
   
    // data.forEach((el) => {
        for(let i=20; i<data.length-70; i++){
            let image = document.createElement("img")
            image.src = data[i].urlToImage;

            let div1 = document.createElement("div")
             div1.append(image)
             
            let title = document.createElement("h2")
            title.innerText = data[i].title

            // let p = document.createElement("p")
            // p.innerText = data[i].description

            let div = document.createElement("div")
            div.setAttribute("class", "Newsmostpopularnews")
            
            div.append(title,div1)
            div.addEventListener("click",()=>{
                let arr = [];
                arr.push(data[i]);
                localStorage.setItem("news",JSON.stringify(arr));
                window.location.href="news.html";
            })
            container.append(div);
        }
   
}

//////////// Gallery News /////////////

let NewsgalleryNews = async() =>{

    let url = `https://newsapi.org/v2/everything?q=gallery&from=2022-06-22&sortBy=publishedAt&apiKey=08e88dc30f0641c1bb12c5c0de28f60c` ;
    let res = await fetch(url)
    let data = await res.json();
    console.log(data);
    append2(data.articles)
}

NewsgalleryNews()

let append2 = (data)=>{

    let container = document.getElementById("Newsgalleryfirst")
   
    // data.forEach((el) => {
        for(let i=0; i<data.length-96; i++){
            let image = document.createElement("img")
            image.src = data[i].urlToImage;

            
            let div1 = document.createElement("div")
            div1.append(image)

            let title = document.createElement("p")
            title.innerText = data[i].title

            // let p = document.createElement("p")
            // p.innerText = data[i].description

            let div = document.createElement("div")
            div.setAttribute("class", "Newsgalleryfirstnews")
            
            div.append(div1,title)
            div.addEventListener("click",()=>{
                let arr = [];
                arr.push(data[i]);
                localStorage.setItem("news",JSON.stringify(arr));
                window.location.href="news.html";
            })
            container.append(div);
        }
        let cont = document.getElementById("Newsgallerysecond")
    
        let image = document.createElement("img")
        image.src = data[6].urlToImage
    
        cont.append(image);     
}

/////////// Neighbours News ////////////////

let NewsneighboursNews = async() =>{

    let url = `https://newsapi.org/v2/everything?q=neighbour&from=2022-06-22&sortBy=publishedAt&apiKey=08e88dc30f0641c1bb12c5c0de28f60c` ;
    let res = await fetch(url)
    let data = await res.json();
    console.log(data);
    append3(data.articles)
}

NewsneighboursNews()

let append3 = (data)=>{

    let container = document.getElementById("Newsneighbourfirst")
   
    // data.forEach((el) => {
        for(let i=20; i<data.length-77; i++){
            let image = document.createElement("img")
            image.src = data[i].urlToImage;

            let title = document.createElement("h2")
            title.innerText = data[i].title

            let p = document.createElement("h2")
            p.innerText = data[i].content

            let div = document.createElement("div")
            div.setAttribute("class", "Newsneighbournews")
            
            div.append(image,title,p)
            div.addEventListener("click",()=>{
                let arr = [];
                arr.push(data[i]);
                localStorage.setItem("news",JSON.stringify(arr));
                window.location.href="news.html";
            })
            container.append(div);
        }
        let cont = document.getElementById("Newsneighboursecond")
    
        let image = document.createElement("img")
        image.src = data[9].urlToImage
    
        cont.append(image);    
}

/////////////// ASIA NEWS //////////////////

let NewsasiaNews = async() =>{

    let url = `https://newsapi.org/v2/everything?q=asia&from=2022-06-22&sortBy=publishedAt&apiKey=08e88dc30f0641c1bb12c5c0de28f60c` ;
    let res = await fetch(url)
    let data = await res.json();
    console.log(data);
    append4(data.articles)
}

NewsasiaNews()

let append4 = (data)=>{

    let container = document.getElementById("Newsasiafirst")
   
    // data.forEach((el) => {
        for(let i=11; i<data.length-85; i++){
            let image = document.createElement("img")
            image.src = data[i].urlToImage;

            let title = document.createElement("h2")
            title.innerText = data[i].title

            // let p = document.createElement("p")
            // p.innerText = data[i].description

            let div = document.createElement("div")
            div.setAttribute("class", "Newsasiafirstnews")
            
            div.append(image,title)
            div.addEventListener("click",()=>{
                let arr = [];
                arr.push(data[i]);
                localStorage.setItem("news",JSON.stringify(arr));
                window.location.href="news.html";
            })
            container.append(div);
        }
        
    // });

    let container1 = document.getElementById("Newsasiasecond")
   
    // data.forEach((el) => {
        for(let i=15; i<data.length-81; i++){
            let image = document.createElement("img")
            image.src = data[i].urlToImage;

            let title = document.createElement("h2")
            title.innerText = data[i].title

            // let p = document.createElement("p")
            // p.innerText = data[i].description

            let div = document.createElement("div")
            div.setAttribute("class", "Newsasiasecondnews")
            
            div.append(image,title)
            div.addEventListener("click",()=>{
                let arr = [];
                arr.push(data[i]);
                localStorage.setItem("news",JSON.stringify(arr));
                window.location.href="news.html";
            })
            container1.append(div);
        }
}
