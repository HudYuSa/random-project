let penumpang = []
let tambahPenumpang = (nama) => {

  if (penumpang.length === 0 && penumpang.length <= 15) {
    penumpang.push(nama)
    return this

  }
  else {
    for (let i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == undefined && penumpang.length <= 15) {
        penumpang[i] = nama
        return this
      }
      else if (penumpang[i] == nama && penumpang.length <= 15) {
        console.log("maaf sudah ada penumpang dengan nama tersebut");
        return penumpang
      }


      else if (i == penumpang.length - 1 && penumpang.length <= 15) {
        penumpang.push(nama)
        return this
      }

    }
  }
}
let hapusPenumpang = (nama) => {

  for (let i = 0; i < penumpang.length; i++) {
    if (penumpang[i] == nama) {
      penumpang[i] = undefined
    }
  }
}


tambahPenumpang("ahmad")
tambahPenumpang("galih")
tambahPenumpang("abdi")
tambahPenumpang("ridwan")
hapusPenumpang("abdi")
tambahPenumpang("kiki")

console.log(penumpang);
console.log(penumpang.length);





