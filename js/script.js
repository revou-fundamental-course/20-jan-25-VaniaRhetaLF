// Ini File Javascript

// Function untuk perhitungan hasil BMI
function kalkulasi() {
    let hasilBmi = document.getElementById('hasil-bmi');
    let kategoriBmi = document.getElementById('kategori');
    let beratBadan = document.getElementById('in-berat-badan').value;
    let usia = document.getElementById('in-usia').value;
    let tinggiBadan = document.getElementById('in-tinggi-badan').value;

    // Kondisi botton jenis kelamin
    let jenisKelamin = document.getElementsByName('jenis-kelamin');
    let jenisKelaminChecked = false;

    for (let i = 0; i < jenisKelamin.length; i++) {
        if (jenisKelamin[i].checked) {
            jenisKelaminChecked = true;
        }
    }

    // Formula perhitungan BMI
    let hitung = (beratBadan / ((tinggiBadan / 100) ** 2)).toFixed(2);

    // Variabel untuk data penjelasn BMI
    let keteranganBmi = document.getElementById('keterangan-hasil-bmi');

    // Menampilkan input number dari form di console
    console.log(beratBadan);
    console.log(usia);
    console.log(tinggiBadan);
    console.log(hasilBmi);

    // Validasi kelengkapan isi
    if (beratBadan != '' && usia != '' && tinggiBadan != '' && jenisKelaminChecked) {
        hasilBmi.textContent = hitung;
    } else {
        alert('Mohon Isi Semua Form!');
        // alert('Perhitungan BMI Berhasil Dilakukan');
    }

    // Menampilkan keterangan berdasarkan kategori status berat badan
    if (hitung < 18.50) {
        keteranganBmi.textContent = "Berat badan yang dimiliki masih terbilang KURANG. Jadi kamu terbilang kurus untuk saat ini. Tetap semangat untuk mencapai berat badan idealnya kak! ><";
        kategoriBmi.textContent = 'KURUS';
    } else if (hitung >= 18.50 && hitung <= 24.99) {
        keteranganBmi.textContent = "Selamaat! Berat badan yang dimiliki sudah IDEAL. Tetap jaga pola makan dan tetap semangat melakukan pola hidup yang sehat :)";
        kategoriBmi.textContent = 'IDEAL';
    } else if (hitung >= 25.00 && hitung <= 29.99) {
        keteranganBmi.textContent = "Berat badan kamu saat ini sudah MELEWATI BATAS IDEAL dan mendekati kegemukan. Kamu perlu mulai memperhatikan pola makan dan tidak lupa untuk mulai rutin melakukan olahraga dari sekarang. Semangat untuk mencapai berat badan idealnya kak! ><";
        kategoriBmi.textContent = 'MENDEKATI GEMUK';
    } else {
        keteranganBmi.textContent = "Berat badan yang dimiliki sudah masuk ke kategori OBESITAS atau kegemukan berlebih. Ayoo mulai lagi rutinkan berolahraga dan lebih memperhatikan komposisi makan kamu agar gizi yang didapatkan menjadi seimbang. Tetap semangat untuk mencapai berat badan idealnya kak! ><";
        kategoriBmi.textContent = 'OBESITAS';
    }

    // Reset data di form agar kembali default
    function reset() {
        document.getElementById("beratBadan").value = '';
        document.getElementById("usia").value = '';
        document.getElementById("tinggiBadan").value = '';
    }
}