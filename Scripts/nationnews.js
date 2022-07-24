
import navbarContent from "../Components/navbarContent.js";
document.getElementById("nav").innerHTML = navbarContent();

import footer from "../Components/footer.js";
document.getElementById("footer").innerHTML =footer();



 const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=9252738d55da4b0fbb83499ac7299865`
 data()
 async function data(){

    let res = await fetch(url)
    let data = await res.json()

    console.log(data)
    append(data.articles)
 }

 function append(data){
 data.forEach(function(elem){

    let div = document.createElement("div")

 let img = document.createElement("img")
 img.src = elem.urlToImage
img.setAttribute("id","yoyo")

 let title = document.createElement("h2")
 title.innerText= elem.title

 let des = document.createElement("p")
 des.innerText = elem.description

 div.append(img,title,des)
 document.querySelector("#nation").append(div)

})


 };


 const uri=`https://newsapi.org/v2/everything?q=india&apiKey=9252738d55da4b0fbb83499ac7299865
`
 data2()
 async function data2(){
 
    let res = await fetch(uri)
    let data = await res.json()

    console.log(data)
    appen(data.articles)

 }

 function appen(data){

    data.forEach(function(elem){

        let div = document.createElement("div")
        let img = document.createElement("img")
        img.src = elem.urlToImage
        img.setAttribute("id","yoyo2")

        let title = document.createElement("h3")
        title.innerText= elem.title

        let des = document.createElement("p")
        des.innerText = elem.description

        div.append(img,title,des)
        document.querySelector("#nat").append(div)



    })
 }


//  const url2 = `https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=9252738d55da4b0fbb83499ac7299865`

 
//  data3()
//  async function data3(){

//     let res = await fetch(url2)
//     let data = await res.json()

//     console.log(data)
//     append(data.articles)
//  }
//  function append(data){
//  data.forEach(function(elem){

//     let div = document.createElement("div")

//  let img = document.createElement("img")
//  img.src = elem.urlToImage
// img.setAttribute("id","yoyo")

//  let title = document.createElement("h1")
//  title.innerText= elem.title

//  let des = document.createElement("p")
//  des.innerText = elem.description

//  div.append(img,title,des)
//  document.querySelector("#nation").append(div)

// })


//  };


 const url3 =  `https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=9252738d55da4b0fbb83499ac7299865`

 data4()
 async function data4(){

    let res = await fetch(url3)
    let data = await res.json()

    console.log(data)
    append(data.articles)
 }
 function append(data){
 data.forEach(function(elem){

    let div = document.createElement("div")

 let img = document.createElement("img")
 img.src = elem.urlToImage
img.setAttribute("id","yoyo")

 let title = document.createElement("h1")
 title.innerText= elem.title

 let des = document.createElement("p")
 des.innerText = elem.description

 div.append(img,title,des)
 document.querySelector("#nation").append(div)

})


 };
