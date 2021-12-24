// let coba = prompt("coba sesuatu")
// coba += prompt("baru")
// console.log(coba);


// function displayEven() {

//   for (let i = 0; i < arguments.length; i++) {
//     // console.log(arguments[i] + 1);
//     if (i % 2 === 0 ) console.log(i)

//   }

// }
// function displayOdd() {

//   for (let i = 0; i < arguments.length; i += 2) {
//     console.log(arguments[i]);
//   }
// }
// displayEven(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
// displayOdd(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

// console.log("hasd\nhad");


// function multTable() {
//   let multiplication = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]


//   for (let j = 0; j < arguments.length; j++) {
//     for (let i = 0; i < multiplication.length; i++) {
//       // hasil.push(arguments[j]) * multiplication[i]
//       // console.log(arguments[j] * multiplication[i]);
//     }
//   }

// }

// multTable(1, 2)

// function faktorial(n) {
//   if (n === 0) return 1
//   return (n * faktorial(n - 1)
//   );

// }
// // console.log(faktorial(10));


// const myArr = [1, "halo", [1, 2, 3]]

// // console.log(myArr[2][2]);
// myarr2 = myArr[2][2]



// const prices = [10, 30, 15, 25, 50, 40, 5]

// salePrices = prices.map((price) => {
//   return price / 2.5
// })
// // console.log(salePrices);

// const product = [
//   { nama: "gold star", price: 20 },
//   { nama: "mushroom", price: 40 },
//   { nama: "green shells", price: 30 },
//   { nama: "banana skin", price: 10 },
//   { nama: "red shells", price: 50 }
// ]

// reducedPrice = product.map((product) => {
//   if (product.price > 30) {
//     return { nama: product.nama, price: product.price / 2 }
//   }
//   else {
//     return product
//   }
// })
// // console.log(reducedPrice);

// km to miles converter
// let kmToMil = ((km) => {
//   let result = km * 0.62137119
//   return result.toFixed(2)
// })


// console.log(kmToMil(10));


// array sum
// let arrSum = ((arr) => {
//   let hasil = 0
//   for (i = 0; i < arr.length; i++) {
//     hasil += arr[i]
//   }
//   // console.log(hasil);
//   return hasil.toFixed(2)
// })
// let number = [2, 4, 0.54, -2, -5]
// let result = arrSum(number)
// console.log(arrSum(number));

// =============
// reverse array
// =============
// let reverseArr = ((arr) => {
//   let reversedArr = []
//   for (let i = arr.length - 1; i >= 0; i--) {
//     reversedArr.push(arr[i])
//     // console.log(reversedArr);
//   }
//   return reversedArr
// })
// // ================
// // generate number
// // ================
// function range(start, end) {
//   return Array(end - start + 1).fill().map((_, idx) => start + idx)
// }

// let number = range(1, 100)
// let reversedNumber = reverseArr(number)

// console.log(reversedNumber.join(" "));
// console.log(typeof (reversedNumber.join(" ")));

// ==========================
// negative number filter
// ==========================
// let filterArr = ((arr) => {
//   let filteredArr = arr.filter(arr => arr >= 0)
//   return filteredArr
// })

// let array = [1, -1, -4, 20, 0, 100, -34, -0.25]
// // filteredArr(array)
// console.log(filterArr(array));

// ==========================
// Remove spaces function
// ==========================
// let rmvSpc = ((str) => {
//   let arr = str.split("")
//   let delspc = arr.filter(arr => arr !== " ")
//   return delspc.join("")
// })

// let string = "ini adalah string tanpa spasi"
// console.log(rmvSpc(string));

// ==========================
// check truthy of divisble number
// ==========================
// let divisble = ((num, bagi) => {
//   if (num % bagi === 0) return true
//   else return false
// })
// console.log(divisble(100, 49));


// ==============
// bantu wpu - js
// ==============

// let a = "**********"
// console.log(a);

// function segitiga(panjang) {
//   // buat variable yang nanti bakal kita jadikan untuk membuat value dari beda
//   let panjangAwal = 0
//   for (let i = panjang; i > 0; i--) {
//     // karna i awal itu sama dengan panjang sementara kita mau beda itu sama dengan pangjang yang dikurang trus menerus jadinya jadinya inya kita kurangi 1 supaya startnya pas
//     let beda = panjangAwal + i - 1
//     let hasil = [" "]
//     // for untuk namabahin spaci
//     for (let spaci = i - 1; spaci > 0; spaci--) {
//       hasil.push("   ")
//     }
//     // for untuk namabahin bintang
//     for (let j = beda; j < panjang; j++) {
//       hasil.push("  *")
//     }
//     // ubah hasil yang sebelumnya array jadi string trus masukkan ke hasilAkhir
//     hasilAkhir = hasil.join("")
//     console.log(hasilAkhir);
//   }
// }

// segitiga(10)

// BTW ini masih kacau dan saya juga masi beginner tapi semoga membantu kwkw


// const button = document.querySelector("button")
// const input = document.querySelector("input")
// const hasil = document.querySelector(".hasil")
// let a = 0

// input.addEventListener("keyup", ((e) => {
//   if (e.key === "Enter") {
//     e.preventDefault()

//     a += parseInt(input.value)
//     hasil.textContent = a

//   }

//   let b = parseInt(input.value)
//   console.log(typeof (b));
// })
//   , input.value = "")










