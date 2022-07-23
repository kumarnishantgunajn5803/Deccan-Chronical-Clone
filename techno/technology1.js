
// let API_KEY='28f84fbd0e4f42868f67292546955dba'
//const url =`https://newsapi.org/v2/everything?q=tesla&from=publishedAt&apiKey=${API_KEY}`
const url = `https://newsapi.org/v2/everything?q=tesla&from=publishedAt&apiKey=28f84fbd0e4f42868f67292546955dba`
console.log(url)

//const url = `https://newsapi.org/v2/everything?q=tesla&from=publishedAt&apiKey=28f84fbd0e4f42868f67292546955dba`
 async  function getData(){
	
	let res =await fetch(url);
	let data= await res.json()
	console.log(data)
}

getData()



//et url = 'https://reqres.in/api/users'

// fetch(url).then(function (res) {
// 	return res.json()
// }).then(function (res) {
// 	console.log(res)
// }).catch(function (err) {
// 	console.log(err)
// })


// async function getData() {
// 	try {
// 		let res = await fetch(url);
// 		let user = await res.json();
// 		console.log(user)
// 		//dasplayData(data)
// 	} catch (err) {
// 		console.log(err)
// 	}
// }
// getData();