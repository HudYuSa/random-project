
// rock.addEventListener("click", () => {
//   let loop = true
//   let score = 0

//   while (loop) {
//     // menangkap pilihan player
//     let p = prompt("pilih: gajah, semut, orang")

//     // menangkap pilihan computer
//     // membangkitkan bilangan random
//     let comp = Math.floor(Math.random() * 3) + 1
//     console.log(comp);
//     if (comp == 1) {
//       comp = "gajah"
//     } else if (comp == 2) {
//       comp = "semut"
//     } else (comp = "orang")
//     console.log(comp);

//     // menentukan rules
//     let hasil = ""
//     if (p == comp) {
//       hasil = "seri"

//     } else if (p == "gajah") {
//       // if (comp == "semut") {
//       //   hasil = "anda kalah"
//       // } else if (comp == "orang") {
//       //   hasil = "anda menang"
//       // }
//       // OPERATOR TERNARY
//       hasil = (comp == "orang") ? "anda menang" : "anda kalah"

//     } else if (p == "semut") {
//       // if (comp == "gajah") {
//       //   hasil = "anda menang"
//       // } else if (comp == "orang") {
//       //   hasil = "anda kalah"
//       // }
//       // OPERATOR TERNARY
//       hasil = (comp == "gajah") ? "anda menang" : "anda kalah"

//     } else if (p == "orang") {
//       // if (comp == "gajah") {
//       //   hasil = "anda kalah "
//       // } else if (comp = "semut") {
//       //   hasil = "anda menang"
//       // }
//       // OPERATOR TERNARY
//       hasil = (comp == "semut") ? "anda menang" : "anda kalah"

//     } else (hasil = "anda memasukkan pilihan yang salah")

//     if (hasil == "anda menang") {
//       score += 100
//     } else if (hasil == "anda kalah") {
//       score -= 100
//     } else { score == score }

//     alert(`anda memilih ${p} dan computer memilih ${comp} \n hasilnya ${hasil} \n score anda adalah : ${score}`);


//     loop = confirm("sekali lagi?")
//   }
//   alert("terimakasih sudah bermain")
// })

// 1 = paper
// 2 = rock
// 3 = scissor

const mulai = document.querySelector("button")
const result = document.querySelector(".info")

const player = document.querySelectorAll(".pilihan img")
const compIMG = document.querySelector(".img-komputer")

const score = document.querySelector("#score span")

const scoreAwal = JSON.parse(localStorage.getItem("score"))
const save = document.querySelector("#simpan")
const reset = document.querySelector("#reset")

// supaya score awalnya ndak undifined
if (scoreAwal) score.textContent = scoreAwal


let inc;
// supaya dia cuma ngambil dari localstorage kalo ada aja valuenya
if (scoreAwal != 0) { inc = scoreAwal }
else { inc = 0 }
console.log(typeof (scoreAwal));

let aTime = 200


let getScr = ((hasil) => {
  if (hasil == "YOU WIN!") {
    inc += 100
    let generate = setInterval(() => {
      let parsedScr = parseInt(score.textContent)
      if (parsedScr === inc) clearInterval(generate)
      else {
        parsedScr += 1
        score.textContent = parsedScr
        console.log(inc);
      }
    }, 1)

  }
  else if (hasil == "YOU LOSE!") {
    inc -= 50
    let generate = setInterval(() => {
      let parsedScr = parseInt(score.textContent)
      if (parsedScr === inc) clearInterval(generate)
      else {
        parsedScr -= 1
        score.textContent = parsedScr
        console.log(inc);
      }
    }, 1)

  }

})

const getComp = (() => {
  let comp = Math.floor(Math.random() * 3) + 1
  if (comp == 1) {
    comp = "paper"
  } else if (comp == 2) {
    comp = "rock"
  } else { comp = "scissor" }
  console.log(comp);
  return comp
})

let getHasil = ((player, comp) => {

  if (player == comp) return "DRAW"
  if (player == "paper") return (comp == "rock") ? "YOU WIN!" : "YOU LOSE!"
  if (player == "rock") return (comp == "scissor") ? "YOU WIN!" : "YOU LOSE!"
  if (player == "scissor") return (comp == "paper") ? "YOU WIN!" : "YOU LOSE!"

})


let randomIMG = (() => {
  let img = ["rock", "paper", "scissor"]
  let i = 0
  let presentTime = new Date().getTime()

  setInterval(() => {
    if (new Date().getTime() - presentTime > aTime) {
      clearInterval
      return
    }
    compIMG.setAttribute("src", "img/" + img[i++] + ".png")
    if (i == img.length) i = 0
  }, 50)
})

let randomText = (() => {
  let img = ["YOU WIN", "YOU LOSE", "OUY LUOS"]
  let i = 0
  let presentTime = new Date().getTime()

  setInterval(() => {
    if (new Date().getTime() - presentTime > aTime) {
      clearInterval
      return
    }
    // compIMG.setAttribute("src", "img/" + img[i++] + ".png")
    result.textContent = img[i++]
    if (i == img.length) i = 0
  }, 50)
})


//  when clicked its gonna listen to that are clicked because we use querySelectorALl
player.forEach((img) => {
  img.addEventListener("click", running)
  function running() {

    result.textContent = ""
    console.log(img);
    let comp = getComp()

    randomIMG()
    randomText()

    let player1 = img.classList.value
    console.log(player);

    let hasil = getHasil(player1, comp)

    setTimeout(() => {
      compIMG.setAttribute("src", `img/${comp}.png`)
      result.textContent = hasil
      getScr(hasil)
    }, aTime)
    console.log(animating);

  }
})


save.addEventListener("click", (() => {
  localStorage.setItem("score", score.textContent)
}))

reset.addEventListener("click", (() => {
  localStorage.setItem("score", 0)
  score.textContent = 0
  inc = 0
}))

console.log(player);