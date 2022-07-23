import navbarContent from "../Components/navbarContent.js";
document.getElementById("nav").innerHTML = navbarContent();

import footerPart from "../Components/footer.js";
document.getElementById("footer").innerHTML = footerPart();

const URL_For_Extranews = "https://newsapi.org/v2/top-headlines?country=in&apiKey=9252738d55da4b0fbb83499ac7299865"
const URL_For_Extranews2 = "https://newsapi.org/v2/top-headlines?country=us&apiKey=9252738d55da4b0fbb83499ac7299865"

let arr = JSON.parse(localStorage.getItem("showData")) || [];
console.log(arr)
let show_data_headers = (arr) =>{

    let show_data_here = document.getElementById("show-data-here")

    arr.forEach((ele) =>{
        let div = document.createElement("div")

        let title = document.createElement("h1")
        title.innerText = ele.title

        let image = document.createElement("img")
        image.src = ele.urlToImage

        let content = document.createElement("p")
        content.innerText = ele.content

        div.append(title, image, content)
        show_data_here.append(div)

    })
}

show_data_headers(arr)

let getData_for_Extranews = async () =>{
    let response = await fetch(URL_For_Extranews)
    let data = await response.json()
    console.log(data)
    displayData_for_Extranews(data.articles)
}

getData_for_Extranews()

let displayData_for_Extranews = (data) =>{
    let additional_news = document.getElementById("additional-news-blog1")

    for(let ele = 0; ele < 16; ele++){
        let div = document.createElement("div")

        let title = document.createElement("p")
        title.innerText = data[ele].title

        let image = document.createElement("img")
        image.src = data[ele].urlToImage

        div.append(title, image)
        additional_news.append(div)
    }
}



let getData_for_Extranews2 = async () =>{
    let response = await fetch(URL_For_Extranews2)
    let data = await response.json()
    console.log(data)
    displayData_for_Extranews2(data.articles)
}

getData_for_Extranews2()

let displayData_for_Extranews2 = (data) =>{
    let additional_news2 = document.getElementById("additional-news2-blog1")

    for(let ele = 0; ele < 13; ele++){
        let div = document.createElement("div")

        let title = document.createElement("p")
        title.innerText = data[ele].title

        let image = document.createElement("img")
        image.src = data[ele].urlToImage

        div.append(title, image)
        additional_news2.append(div)
    }
}











