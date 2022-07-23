
// `https://newsapi.org/v2/everything?q=tesla&from=2022-06-19&sortBy=publishedAt&apiKey=08e88dc30f0641c1bb12c5c0de28f60c` 

// f21120aafe774c5c87c75812e7983fbd

let worldNews = async() =>{
    let url = `https://newsapi.org/v2/top-headlines?country&category=business&apiKey=f21120aafe774c5c87c75812e7983fbd`
    // let url = `https://newsapi.org/v2/everything?q=world&from=2022-06-22&sortBy=publishedAt&apiKey=08e88dc30f0641c1bb12c5c0de28f60c` ;
    let res = await fetch(url)
    let data = await res.json();
    // console.log(data);
    // append(data.articles)
}

// worldNews()

let append = (data)=>{

    let container = document.getElementById("worldfirst")
   
    // data.forEach((el) => {
        for(let i=0; i<data.length-18; i++){
            let image = document.createElement("img")
            image.src = data[i].urlToImage;

            let title = document.createElement("h2")
            title.innerText = data[i].title

            let p = document.createElement("p")
            p.innerText = data[i].description

            let div = document.createElement("div")
            div.setAttribute("class", "worldfirstnews")
            
            div.append(image,title,p)
            div.addEventListener("click",()=>{
                let arr = [];
                arr.push(data[i]);
                localStorage.setItem("news",JSON.stringify(arr));
                window.location.href="news.html";
            })
            container.append(div);
        }
        
    // });

    let container1 = document.getElementById("worldsecond")
   
    // data.forEach((el) => {
        for(let i=5; i<data.length-5; i++){
            let image = document.createElement("img")
            image.src = data[i].urlToImage;

            let div1 = document.createElement("div")
            div1.append(image)

            let title = document.createElement("p")
            title.innerText = data[i].title

            // let p = document.createElement("p")
            // p.innerText = data[i].description

            let div = document.createElement("div")
            div.setAttribute("class", "worldsecondnews")
            
            div.append(div1,title)
            div.addEventListener("click",()=>{
                let arr = [];
                arr.push(data[i]);
                localStorage.setItem("news",JSON.stringify(arr));
                window.location.href="news.html";
            })
            container1.append(div);
        }
}

////// Most Popular News ////////////////

let mostPopularNews = async() =>{

    let url = `https://newsapi.org/v2/everything?q=top&from=2022-06-22&sortBy=publishedAt&apiKey=08e88dc30f0641c1bb12c5c0de28f60c` ;
    let res = await fetch(url)
    let data = await res.json();
    // console.log(data);
    // append1(data.articles)
}

// mostPopularNews()

let append1 = (data)=>{

    let container = document.getElementById("mostpopular")
   
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
            div.setAttribute("class", "mostpopularnews")
            
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

let galleryNews = async() =>{

    let url = `https://newsapi.org/v2/everything?q=gallery&from=2022-06-22&sortBy=publishedAt&apiKey=08e88dc30f0641c1bb12c5c0de28f60c` ;
    let res = await fetch(url)
    let data = await res.json();
    // console.log(data);
    // append2(data.articles)
}

// galleryNews()

let append2 = (data)=>{

    let container = document.getElementById("galleryfirst")
   
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
            div.setAttribute("class", "galleryfirstnews")
            
            div.append(div1,title)
            div.addEventListener("click",()=>{
                let arr = [];
                arr.push(data[i]);
                localStorage.setItem("news",JSON.stringify(arr));
                window.location.href="news.html";
            })
            container.append(div);
        }
        let cont = document.getElementById("gallerysecond")
    
        let image = document.createElement("img")
        image.src = data[6].urlToImage
    
        cont.append(image);     
}

/////////// Neighbours News ////////////////

let neighboursNews = async() =>{

    let url = `https://newsapi.org/v2/everything?q=neighbour&from=2022-06-22&sortBy=publishedAt&apiKey=08e88dc30f0641c1bb12c5c0de28f60c` ;
    let res = await fetch(url)
    let data = await res.json();
    // console.log(data);
    // append3(data.articles)
}

// neighboursNews()

let append3 = (data)=>{

    let container = document.getElementById("neighbourfirst")
   
    // data.forEach((el) => {
        for(let i=20; i<data.length-77; i++){
            let image = document.createElement("img")
            image.src = data[i].urlToImage;

            let title = document.createElement("h2")
            title.innerText = data[i].title

            let p = document.createElement("h2")
            p.innerText = data[i].content

            let div = document.createElement("div")
            div.setAttribute("class", "neighbournews")
            
            div.append(image,title,p)
            div.addEventListener("click",()=>{
                let arr = [];
                arr.push(data[i]);
                localStorage.setItem("news",JSON.stringify(arr));
                window.location.href="news.html";
            })
            container.append(div);
        }
        let cont = document.getElementById("neighboursecond")
    
        let image = document.createElement("img")
        image.src = data[9].urlToImage
    
        cont.append(image);    
}

/////////////// ASIA NEWS //////////////////

let asiaNews = async() =>{

    let url = `https://newsapi.org/v2/everything?q=asia&from=2022-06-22&sortBy=publishedAt&apiKey=08e88dc30f0641c1bb12c5c0de28f60c` ;
    let res = await fetch(url)
    let data = await res.json();
    // console.log(data);
    // append4(data.articles)
}

// asiaNews()

let append4 = (data)=>{

    let container = document.getElementById("asiafirst")
   
    // data.forEach((el) => {
        for(let i=11; i<data.length-85; i++){
            let image = document.createElement("img")
            image.src = data[i].urlToImage;

            let title = document.createElement("h2")
            title.innerText = data[i].title

            // let p = document.createElement("p")
            // p.innerText = data[i].description

            let div = document.createElement("div")
            div.setAttribute("class", "asiafirstnews")
            
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

    let container1 = document.getElementById("asiasecond")
   
    // data.forEach((el) => {
        for(let i=15; i<data.length-81; i++){
            let image = document.createElement("img")
            image.src = data[i].urlToImage;

            let title = document.createElement("h2")
            title.innerText = data[i].title

            // let p = document.createElement("p")
            // p.innerText = data[i].description

            let div = document.createElement("div")
            div.setAttribute("class", "asiasecondnews")
            
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

////////////// MIDDLE EAST /////////////////

let middleEastNews = async() =>{

    // let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f21120aafe774c5c87c75812e7983fbd`;
    let url = `https://newsapi.org/v2/everything?q=middleeast&from=2022-06-22&sortBy=publishedAt&apiKey=08e88dc30f0641c1bb12c5c0de28f60c` ;
    let res = await fetch(url)
    let data = await res.json();
    console.log(data);
    append5(data.articles)
}

middleEastNews()

let append5 = (data)=>{

    let container = document.getElementById("middleEastfirst")
   
    // data.forEach((el) => {
        for(let i=10; i<data.length-86; i++){
            let image = document.createElement("img")
            image.src = data[i].urlToImage;

            let title = document.createElement("h2")
            title.innerText = data[i].title

            let p = document.createElement("h2")
            p.innerText = data[i].content

            let div = document.createElement("div")
            div.setAttribute("class", "middleEastnews")
            
            div.append(image,title,p)
            div.addEventListener("click",()=>{
                let arr = [];
                arr.push(data[i]);
                localStorage.setItem("news",JSON.stringify(arr));
                window.location.href="news.html";
            })
            container.append(div);
        }
        let cont = document.getElementById("middleEastsecond")
    
        let image = document.createElement("img")
        image.src = data[9].urlToImage
    
        cont.append(image);    
}

/////////////// AMERICA NEWS ///////////////////

let americaNews = async() =>{

    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f21120aafe774c5c87c75812e7983fbd`;
    // let url = `https://newsapi.org/v2/everything?q=us&from=2022-06-22&sortBy=publishedAt&apiKey=08e88dc30f0641c1bb12c5c0de28f60c` ;
    let res = await fetch(url)
    let data = await res.json();
    // console.log(data);
    // append6(data.articles)
}

// americaNews()

let append6 = (data)=>{

    let container = document.getElementById("americafirst")
   
    // data.forEach((el) => {
        for(let i=11; i<data.length-5; i++){
            let image = document.createElement("img")
            image.src = data[i].urlToImage;

            let div1 = document.createElement("div")
             div1.append(image)

            let title = document.createElement("h2")
            title.innerText = data[i].title

            // let p = document.createElement("p")
            // p.innerText = data[i].description

            let div = document.createElement("div")
            div.setAttribute("class", "americafirstnews")
            
            div.append(div1,title)
            div.addEventListener("click",()=>{
                let arr = [];
                arr.push(data[i]);
                localStorage.setItem("news",JSON.stringify(arr));
                window.location.href="news.html";
            })
            container.append(div);
        }
        
    // });

    let container1 = document.getElementById("americasecond")
   
    // data.forEach((el) => {
        for(let i=1; i<data.length-15; i++){
            let image = document.createElement("img")
            image.src = data[i].urlToImage;

            let title = document.createElement("h2")
            title.innerText = data[i].title

            // let p = document.createElement("p")
            // p.innerText = data[i].description

            let div = document.createElement("div")
            div.setAttribute("class", "americasecondnews")
            
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

//////////////// EUROPE News /////////////////////

let europeNews = async() =>{

    let url = `https://newsapi.org/v2/everything?q=europe&from=2022-06-22&sortBy=publishedAt&apiKey=08e88dc30f0641c1bb12c5c0de28f60c` ;
    let res = await fetch(url)
    let data = await res.json();
    // console.log(data);
    // append7(data.articles)
}

// europeNews()

let append7 = (data)=>{

    let container = document.getElementById("europefirst")
   
    // data.forEach((el) => {
        for(let i=20; i<data.length-76; i++){
            let image = document.createElement("img")
            image.src = data[i].urlToImage;

            let title = document.createElement("h2")
            title.innerText = data[i].title

            let p = document.createElement("h2")
            p.innerText = data[i].content

            let div = document.createElement("div")
            div.setAttribute("class", "europenews")
            
            div.append(image,title,p)
            div.addEventListener("click",()=>{
                let arr = [];
                arr.push(data[i]);
                localStorage.setItem("news",JSON.stringify(arr));
                window.location.href="news.html";
            })
            container.append(div);
        }
        let cont = document.getElementById("europesecond")
    
        let image = document.createElement("img")
        image.src = data[9].urlToImage
    
        cont.append(image);    
}

