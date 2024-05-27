const h1 = document.querySelector("#h1")
const difText = document.querySelector("#difText")
const bigText = document.querySelector("#bigText")
const smallText = document.querySelector("#smallText")
const colorText = document.querySelector("#colorText")
const bgText = document.querySelector("#bgText")

let textsize = 32
difText.addEventListener("click" , ()=>{
    h1.innerText = "Three Ways to Register Events in JavaScript"
})
bigText.addEventListener("click" , ()=>{
    textsize += 2
    h1.style.fontSize = `${textsize}px`
})
smallText.addEventListener("click" , ()=>{
    textsize -= 2
    h1.style.fontSize = `${textsize}px`
})
colorText.addEventListener("click" , ()=>{
    h1.style.color = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
})
bgText.addEventListener("click" , ()=>{
    h1.style.backgroundColor = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
})
const img = document.querySelector("#img")
const images = [
    "https://images.unsplash.com/photo-1716792588036-c2834e00afc6?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8",
    "https://plus.unsplash.com/premium_photo-1671111266225-68b2ad19c292?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1716583731424-45c32c2ad63b?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1715690245661-a13ad2c23da8?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8"
]
let i =0
function imgChanger() {
    img.src = images[i]
    i++
}