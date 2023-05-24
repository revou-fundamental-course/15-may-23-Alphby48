// Fungsi input luas persegi
function hitungLuas() {
  var sisiLuas = document.getElementById("sisi-luas").value;

  document.getElementById("output-luas").innerHTML =
    "<span>" + sisiLuas + "</span>";
  console.log(sisiLuas);

  document.getElementById("output-luas2").innerHTML =
    "<span>" + sisiLuas + "</span>";
  console.log(sisiLuas);

  let a1 = parseInt(sisiLuas);
  let a2 = sisiLuas * sisiLuas;

  document.getElementById("result").innerHTML = "<span>" + a2 + "</span>";
  console.log(a2);

  var elemen = document.getElementById("hasilLuas");
  elemen.style.display = "block";
  var elemen1 = document.getElementById("btn-reset");
  elemen1.style.display = "block";
  return sisiLuas;
}
//Tombol Reset Luas persegi
function resetLuas() {
  document.getElementById("sisi-luas").value = "";

  var elemen = document.getElementById("hasilLuas");
  elemen.style.display = "none";
}

//KELILING

// Fungsi input penghitung keliling
function hitungKeliling() {
  var sisiKeliling = document.getElementById("sisi-keliling").value;
  var output = document.getElementById("output-keliling");

  document.getElementById("rumus-keliling").innerHTML = " 4 x " + sisiKeliling;
  document.getElementById("result-keliling").innerHTML = 4 * sisiKeliling;

  output.style.display = "block";
}

// Tombol Reset keliling persegi
function resetKeliling(flag) {
  document.getElementById("output-keliling").style.display =
    flag === 1 ? "block" : "none";
  document.getElementById("sisi-keliling").value = "";
}
