// Ini File Javascript

console.log('Hello World');
// kalkulasi();

// Function untuk perhitungan hasil BMI
function kalkulasi() {
    let hasilBmi = document.getElementById('hasil-bmi');
    let beratBadan = document.getElementById('in-berat-badan').value;
    let usia = document.getElementById('in-usia').value;
    let tinggiBadan = document.getElementById('in-tinggi-badan').value;
    
    // Formula perhitungan BMI
    let hitung = (beratBadan / ((tinggiBadan / 100) ** 2)).toFixed(2);

    // Variabel untuk data penjelasn BMI
    let keteranganBmi = document.getElementById('keterangan-hasil-bmi');

    // Menampilkan input number dari form di console
    console.log(beratBadan);
    console.log(usia);
    console.log(tinggiBadan);

    // Validasi kelengkapan isi
    if (beratBadan != '' && usia != '' && tinggiBadan != '') {
        hasilBmi.textContent = hitung;
        // console.log(hitung)
    } else {
        alert('Mohon Isi Semua Form!');
        // alert('Perhitungan BMI Berhasil Dilakukan');
    }

    // Menampilkan keterangan berdasarkan kategori status berat badan
    if (hasilBmi < 18.5) {
        keteranganBmi.textContent = "Berat badan yang dimiliki masih terbilang kurang. Jadi kamu terbilang kurus untuk saat ini. Tetap semangat untuk mencapai berat badan idealnya kak! ><";
    } else if (hasilBmi >= 18.5 && hasilBmi < 24.9) {
        keteranganBmi.textContent = "Selamaat! Berat badan yang dimiliki sudah ideal. Tetap jaga pola makan dan tetap semangat melakukan pola hidup yang sehat :)";
    } else if (hasilBmi >= 25.0 && hasilBmi < 29.9) {
        keteranganBmi.textContent = "Berat badan kamu saat ini sudah melewati batas ideal dan mendekati kegemukan. Kamu perlu mulai memperhatikan pola makan dan tidak lupa untuk mulai rutin melakukan olahraga dari sekarang. Semangat untuk mencapai berat badan idealnya kak! ><";
    } else {
        keteranganBmi.textContent = "Berat badan yang dimiliki sudah masuk ke kategori Obesitas atau kegemukan berlebih. Ayoo mulai lagi rutinkan berolahraga dan lebih memperhatikan komposisi makan kamu agar gizi yang didaptkan menjadi seimbang. Tetap semangat untuk mencapai berat badan idealnya kak! ><";
    }
}