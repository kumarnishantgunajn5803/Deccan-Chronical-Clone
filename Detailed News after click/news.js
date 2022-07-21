

let newsData = JSON.parse(localStorage.getItem("news"));

let cont = document.getElementById("newsShow")
newsData.forEach(function(el){

    let image = document.createElement("img")
    image.src = el.urlToImage

    let title = document.createElement("h1")
    title.innerText = `Title :- ${el.title}`;

    let desc = document.createElement("h2")
    desc.innerText = `Description :- ${el.description}`;

    let content = document.createElement("h3")
    content.innerText = `content :- ${el.content}`;

    let div = document.createElement("div")
    div.setAttribute("class", "news")

    div.append(image,title,desc,content)
    cont.append(div);

})