
// `https://newsapi.org/v2/everything?q=tesla&from=2022-06-19&sortBy=publishedAt&apiKey=08e88dc30f0641c1bb12c5c0de28f60c` 


let worldNews = async() =>{

    let url = `https://newsapi.org/v2/everything?q=world&from=2022-06-22&sortBy=publishedAt&apiKey=08e88dc30f0641c1bb12c5c0de28f60c` ;
    let res = await fetch(url)
    let data = await res.json();
    console.log(data);
    append(data.articles)
}

worldNews()

let append = (data)=>{

    let container = document.getElementById("worldfirst")
   
    // data.forEach((el) => {
        for(let i=11; i<data.length-87; i++){
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
        for(let i=15; i<data.length-75; i++){
            let image = document.createElement("img")
            image.src = data[i].urlToImage;

            let title = document.createElement("p")
            title.innerText = data[i].title

            // let p = document.createElement("p")
            // p.innerText = data[i].description

            let div = document.createElement("div")
            div.setAttribute("class", "worldsecondnews")
            
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

////// Most Popular News ////////////////

let mostPopularNews = async() =>{

    let url = `https://newsapi.org/v2/everything?q=top&from=2022-06-22&sortBy=publishedAt&apiKey=08e88dc30f0641c1bb12c5c0de28f60c` ;
    let res = await fetch(url)
    let data = await res.json();
    console.log(data);
    append1(data.articles)
}

mostPopularNews()

let append1 = (data)=>{

    let container = document.getElementById("mostpopular")
   
    // data.forEach((el) => {
        for(let i=20; i<data.length-70; i++){
            let image = document.createElement("img")
            image.src = data[i].urlToImage;

            let title = document.createElement("h2")
            title.innerText = data[i].title

            // let p = document.createElement("p")
            // p.innerText = data[i].description

            let div = document.createElement("div")
            div.setAttribute("class", "mostpopularnews")
            
            div.append(title,image)
            div.addEventListener("click",()=>{
                let arr = [];
                arr.push(data[i]);
                localStorage.setItem("news",JSON.stringify(arr));
                window.location.href="news.html";
            })
            container.append(div);
        }
   
}
