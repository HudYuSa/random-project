const click = document.querySelector("#click-btn")
const body = document.querySelector("body")
const color = document.querySelector("#color")
const text = document.querySelector("h1")
const container = document.querySelector(".container")
const random = document.querySelector("#random")
const label = document.querySelector("#label")

const merah = document.querySelector("#red-line")
const hijau = document.querySelector("#green-line")
const biru = document.querySelector("#blue-line")


click.addEventListener("click", () => {
  if (color.value.length > 0) {
    body.style.backgroundColor = color.value
    text.textContent = color.value
  }
  color.value = ""
})

let warna1 = [Math.floor(Math.random() * 256)]
let warna2 = [Math.floor(Math.random() * 256)]
let warna3 = [Math.floor(Math.random() * 256)]

random.addEventListener("click", () => {
  // const warna = [Math.floor(Math.random()*9),Math.floor(Math.random()*9),Math.floor(Math.random()*9),Math.floor(Math.random()*9),Math.floor(Math.random()*9),Math.floor(Math.random()*9)].join("")
  warna1 = [Math.floor(Math.random() * 256)]
  warna2 = [Math.floor(Math.random() * 256)]
  warna3 = [Math.floor(Math.random() * 256)]
  merah.value = warna1
  hijau.value = warna2
  biru.value = warna3

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

  // change color depends on background
  let color = Math.round((warna1 * 299 + warna2 * 587 + warna3 * 114) / 1000)
  let textColor = (color > 125) ? "#333" : "#eee"

  text.style.color = textColor
  label.style.color = textColor

  return warna1, warna2, warna3
})

console.log(color);
console.log(label);

let setting = ``

merah.addEventListener("input", () => {
  body.style.backgroundColor = `rgb(${merah.value},${hijau.value},${biru.value})`
  setting = `rgb(${merah.value},${hijau.value},${biru.value})`
  text.textContent = setting
})
hijau.addEventListener("input", () => {
  body.style.backgroundColor = `rgb(${merah.value},${hijau.value},100)`
  setting = `rgb(${merah.value},${hijau.value},${biru.value})`
  text.textContent = setting
})
biru.addEventListener("input", () => {
  body.style.backgroundColor = `rgb(${merah.value},${hijau.value},${biru.value})`
  setting = `rgb(${merah.value},${hijau.value},${biru.value})`
  text.textContent = setting
})

// body.addEventListener("mousemove", (e) => {
//   // console.log(e.clientX)
//   const xPos = Math.round((e.clientX / window.innerWidth) * 255)
//   const yPos = Math.round((e.clientY / window.innerWidth) * 255)
//   console.log(yPos);
//   body.style.backgroundColor = `rgb(${xPos},100,${yPos})`
// })

// console.log(biru.value);





