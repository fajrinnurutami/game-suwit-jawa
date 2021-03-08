/*
1. Menangkap pilihan player
2. Menangkap pilihan komputer
3. Membangkitkan bilangan random
4. Menentukan rules
5. Tampilkan hasilnya
*/
let tanya = true;

while (tanya === true) {
    //menangkap pilihan player
    let p = prompt('pilih: gajah, semut, orang');

    //menangkap pilihan computer dan membangkitkan pilihan random
    let comp = Math.random();
    if (comp < 0.34) {
        comp = 'gajah';
    } else if (comp >= 0.34 && comp <= 0.67) {
        comp = 'orang';
    } else {
        comp = "semut"
    }

    //menentukan rules 
    let hasil = '';
    if (p == comp) {
        hasil = 'SERI';
    } else if (p == 'gajah') {
        hasil = (comp == 'orang') ? 'MENANG' : 'KALAH';
    } else if (p == 'semut') {
        hasil = (comp == 'orang') ? 'KALAH' : 'MENANG';
    } else {
        hasil = 'memasukkan pilihan yang salah';
    }

    //tampilkan hasilnya
    alert(`Kamu memilih : ${p} dan komputer memilih ${comp} \n Maka hasilnya kamu ${hasil}`);

    tanya = confirm('lagi');
}

alert('terima kasih');