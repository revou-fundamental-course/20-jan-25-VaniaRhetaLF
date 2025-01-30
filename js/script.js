// Ini File Javascript


// Kalkulasi hasil perhitungan berat badan/tinggi badan
function kalkulasi() {
    let beratBadan = document.getElementById("in-berat-badan").value;
    let usia = document.getElementById("in-usia").value;
    let tinggiBadan = document.getElementById("in-tinggi-badan").value;

    let hasil = beratBadan/((tinggiBadan/100)^2);

    document.write('Hasilnya adalah' + hasil)