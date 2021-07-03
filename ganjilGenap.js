// Objectives

//     Mampu menggunakan built in function pada Array seperti .push, .shift, .unshift, dll
//     Mampu membuat function dan mengerti penggunaan parameter dari sebuah function
//     Mampu menggunakan template literals

// RESTRICTION Hanya boleh menggunakan built-in function untuk menambahkan atau mengurangi data dalam array, seperti .shift(), unShift(), push(), dan pop()
// Directions
// Antrian

// Diberikan sebuah function antrian yang menerima dua parameter yaitu line bertipe array dan person bertipe string. Function ini akan mengembalikan array yang dimana data array tersebut sudah bertambah diakhir array sesuai dengan parameter person.
// Panggil Antrian

// Diberikan sebuah function panggilAntrian yang menerima parameter line bertipe array. Function ini akan mengembalikan array yang dimana data array tersebut berkurang 1 didepannya.
// Tumpukan

// Diberikan sebuah function tumpukan yang menerima dua parameter line bertipe array dan title bertipe string. Function ini akan mengembalikan array yang dimana data array sudah bertambah diawal array sesuai dengan parameter title.
// Ganjil Genap

// Diberikan sebuah function ganjilGenap yang menerima satu parameter plat bertipe string. Parameter plat berisi informasi kumpulan plat dimana nomor antar plat dipisahkan oleh titik koma(;).

// Function ini akan mengembalikan keterangan jumlah plat genap dan jumlah plat ganjil.

function ganjilGenap(plat) {
  var genap = []
  var ganjil = []
  var result

  if (plat === "") {
    console.log("plat tidak ditemukan")
  } else if (plat === undefined) {
    console.log("invalid data")
  } else {
    var newPlat = plat.split(";")
    for (let i = 0; i < newPlat.length; i++) {
      if (newPlat[i] % 2 == 0) {
        genap.push(newPlat[i])
      } else {
        ganjil.push(newPlat[i])
      }
    }

    if (ganjil.length == 0) {
      result = `plat genap sebanyak ${genap.length} dan plat ganjil tidak ditemukan`

    } else if (genap.length == 0) {
      result = `plat ganjil sebanyak ${ganjil.length} dan plat genap tidak ditemukan`
    } else {
      result = `plat genap ${genap.length} dan plat ganjil sebanyak ${ganjil.length}`
    }

    return result

  }



}



console.log(ganjilGenap('2341;3429;864;1309;1276')) //plat genap sebanyak 2 dan plat ganjil sebanyak 3
console.log(ganjilGenap('2347;3429;1305')) //plat ganjil sebanyak 3 dan plat genap tidak ditemukan
console.log(ganjilGenap('864;1308;1276;1432')) //plat genap sebanyak 4 dan plat ganjil tidak ditemukan
console.log(ganjilGenap('')) //plat tidak ditemukan
console.log(ganjilGenap()) //invalid data