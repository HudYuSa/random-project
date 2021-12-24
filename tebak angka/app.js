
// const mulai = document.querySelector("button")

// mulai.addEventListener("click", () => {
//   let loop = true
//   let nyawa = 3
//   let score = 0
//   let range = 10

//   alert("tebak angka dari 1-" + range + " \n kamu punya " + nyawa + " kesempatan")


//   while (loop) {

//     let heart = nyawa
//     let posisi = ""
//     let text = `anda punya ${heart} kesempatan`
//     let answer = Math.floor(Math.random() * range) + 1

//     while (heart > 0) {
//       let player = prompt(text)

//       if (player == answer) {
//         alert("selamat anda benar \n angka yang dicari adalah " + answer)
//         break
//       }

//       else if (player < answer || player > answer && heart !== 0) {
//         if (player > answer) {
//           posisi = "terlalu tinggi"
//         } else if (player < answer) {
//           posisi = "terlalu rendah"
//         }
//         heart--
//         text = `maaf angka yang anda masukkan ${posisi} \n sisa ${heart} kesempatan`

//       } else if (player.length == 0) {
//         player = prompt(`tolong tulis sesuatu!! \n sisa ${heart} kesempatan`)
//       }
//       console.log(player);

//     }
//     // console.log(heart);
//     console.log("heart:" + heart);
//     if (heart == 3) {
//       score += 100
//       loop = confirm(`score anda: ${score}\nsekali lagi?`)
//     } else if (heart == 2) {
//       score += 75
//       loop = confirm(`score anda: ${score}\nsekali lagi?`)
//     } else if (heart == 1) {
//       score += 50
//       loop = confirm(`score anda: ${score}\nsekali lagi?`)
//     } else {
//       loop = confirm(`kesempatan habis \nscore anda: ${score}\nsekali lagi?`)
//     }
//     console.log("answer = " + answer);


//     // if (heart == 0) {
//     //   loop = confirm("kesempatan habis \n sekali lagi?")
//     // } else { loop = confirm("sekali lagi?") }
//   }

// })

// ambil semua element yang dibutuhkan
const container = document.querySelector(".container")
const judul = document.querySelector(".judul")
const inputField = document.querySelector("form")
const input1 = document.querySelector("#range1")
const input2 = document.querySelector("#range2")
const mulai = document.querySelector(".start")
const keyboard = document.querySelector(".keyboard")
const option = document.querySelectorAll(".angka")
const result = document.querySelector("#hasil")
const lagi = document.querySelector(".again")

console.log(option);
let answer
let heart = 0
let loop = true

// globaleventlistener for dynamic element 
function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, e => {
    if (e.target.matches(selector)) {
      callback(e)
    }
  })
}

// css function

let cssAnimation = ((element, name, duration, timing, iteration, direction, fill) => {
  element.style.animation = `${name} ${duration} ${timing} ${iteration} ${direction} ${fill}`
})

// console.log(number);
// animasi menghilang untuk button dan form dan animasi muncul untuk result
// masukkan keyboard sesuai jumlah yang dinginkan

// function for creating element with text attribute etc in it
function createH1(text) {
  const h1 = document.createElement("h1")
  h1.setAttribute("class", "angka")
  h1.textContent = text
  // h1.setAttribute("class", text)
  return h1
}
// function appending the created element
function appendChildren(parent, children) {
  parent.appendChild(children)
}


// buat dua untuk generate satu untuk yang positif satu untuk yang negatif
let generate = ((box) => {
  let i = 0
  let a = []
  let interval = setInterval(() => {
    ++i
    if (i > box.length) {
      clearInterval(interval)
      return
    }
    let h1 = createH1(box[i - 1])
    appendChildren(keyboard, h1)
    a.push(h1)

    // keyboard.innerHTML += `<h1>${box[i - 1]}</h1>`
    console.log(a);
  }, 30);
  keyboard.innerHTML = a
  console.log(keyboard);
})

// untuk nampilin pilihannya dan nambahin animasi
mulai.addEventListener("click", firstConstruction)
function firstConstruction() {
  let range1 = parseInt(input1.value)
  let range2 = parseInt(input2.value)
  let number = range1
  // make the actual range between the 2 input
  let slice = Math.abs(range2 - range1)

  // store it in a new array
  let storage = []
  // fiil the new array with the value of the actual range
  if (slice != 0) {
    for (let i = 0; i <= slice; ++i) {
      if (range1 < range2) {
        number++
        storage.push(number - 1)
      }
      else if (range2 < range1) {
        number--
        storage.push(number + 1)
      }
    }
  }
  // generate the number that have been stored to the html

  if (input1.value != "") {
    // judul.style.animation = "scale .5s ease-in 2 alternate forwards "
    keyboard.style.animation = null

    mulai.removeEventListener("click", firstConstruction)
    cssAnimation(judul, "scale", "0.5s", "ease", "2", "alternate", "forwards")
    inputField.style.animation = "opacity 0.3s ease-in 1 forwards"
    mulai.style.animation = "opacity 0.3s ease 1 forwards"

    setTimeout(() => {
      generate(storage)
      judul.textContent = `You have ${heart} chance's`
      judul.style.fontSize = "2.5em"
      inputField.style.display = "none"
      mulai.style.display = "none"

    }, 500);
  }

  // buat answer
  if (range1 < range2) answer = Math.floor(Math.random() * slice) + range1
  else if (range2 < range1) answer = Math.floor(Math.random() * slice) + range2
  console.log(answer)

  // tentukan nyawa tergantung range angkanya
  if (slice <= 3) heart = 2
  else if (slice > 3 && slice <= 10) heart = 3
  else if (slice > 10 && slice <= 50) heart = 4
  else if (slice > 50 && slice <= 100) heart = 5
  else heart = 6

  // console.log(range2);
  // console.log("range1 :" + range1);
  console.log(`slice: ${slice}`);
  console.log("heart:" + heart);
  console.log(typeof (slice));
  console.log(answer);
}

// buat function rules dan increment dan lainnya
addGlobalEventListener("click", "h1", e => {
  if (heart != 0) {
    result.style.animation = null
  }
  if (heart > 0) {

    console.log(e.target);
    const chosen = parseInt(e.target.textContent)

    let position = ""

    if (chosen == answer) {
      position = "anda benar!!!"
      lagi.style.display = "block"
      lagi.style.animation = "opacity2 1s ease-in 1 forwards"
      heart = 0
    }
    else if (chosen > answer || chosen < answer) {
      if (chosen > answer) position = "terlalu tinggi!"
      else if (chosen < answer) position = "terlalu rendah!"
      heart--
      judul.textContent = `You have ${heart} chance's`
    }

    setTimeout(() => {
      result.textContent = position
      result.style.animation = "scaleUp .7s ease-in-out 1 forwards"
    }, 1)

    if (heart == 0) {
      lagi.style.display = "block"
      lagi.style.animation = "opacity2 1s ease-in 1 forwards"
    }




    console.log(answer);
    console.log(heart);



  }
})



lagi.addEventListener('click', ulang)

function ulang() {
  mulai.addEventListener("click", firstConstruction)

  input1.value = ""
  input2.value = ""


  keyboard.style.animation = "fadeOut 1s ease-in-out 1 forwards"
  result.style.animation = "scaleDown .5s ease 1 forwards"
  judul.style.animation = null
  inputField.style.animation = null
  mulai.style.animation = null

  setTimeout(() => {

    judul.textContent = `game tebak angka`
    judul.style.fontSize = "3em"
    inputField.style.display = "block"
    mulai.style.display = "block"

  }, 500);

  setTimeout(() => {
    keyboard.innerHTML = ""
  }, 1000);

  lagi.style.display = "none"

}





