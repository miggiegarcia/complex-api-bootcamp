let userInput=document.getElementById("enterText")
let button=document.getElementById("search")
let paragraph =document.getElementById("showQuote")
let img= document.getElementById("image")

const key = "BluKHLTCrQAHxxgL3FgNZeNOacybD79l"

button.addEventListener('click',function(){

fetch(`https://api.giphy.com/v1/gifs/search?q=${userInput}&api_key=${key}`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      console.log(response[0])
      // console.log(response.data[2])
      // console.log(response.data[2].images.original.url)
      let data = response.data[0]
      document.getElementById("image").src = data.images.original.url


fetch(`https://quote-garden.herokuapp.com/quotes/random`)
  .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
  .then(response => {
    // console.log(response.quoteText)
    document.getElementById("showQuote").innerHTML=response.quoteText
    })


    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    });
})
})
