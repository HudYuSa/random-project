const click = document.querySelector("#click-btn")
const body = document.querySelector("body")
const color = document.querySelector("#color")
const text = document.querySelector("h1")
const container = document.querySelector(".container")
const random = document.querySelector("#random")



click.addEventListener("click", () => {
    body.style.backgroundColor = color.value
    text.textContent = color.value
    color.value = ""

})

random.addEventListener("click", () => {
    // const warna = [Math.floor(Math.random()*9),Math.floor(Math.random()*9),Math.floor(Math.random()*9),Math.floor(Math.random()*9),Math.floor(Math.random()*9),Math.floor(Math.random()*9)].join("")
    const warna1 = [Math.floor(Math.random() * 256)]
    const warna2 = [Math.floor(Math.random() * 256)]
    const warna3 = [Math.floor(Math.random() * 256)]

    let warnaWarni = warna1 + "," + warna2 + "," + warna3

    body.style.backgroundColor = `rgb(${warnaWarni})`
    text.textContent = body.style.backgroundColor
    // let hex = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"]
    // let hexColor= "#"
    // for(let i =0;i<6 ; i++){
    //     hexColor += hex[13]
    // }
    // body.style.backgroundColor = hexColor
    // text.textContent = body.style.backgroundColor
})

