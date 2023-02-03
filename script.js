function generatePassword(
    panjang_password,
    kapital_atoz,
    kecil_atoz,
    numeric
){
    if(panjang_password < 2){
        return '(Invalid)';
    }
    if(!kapital_atoz && !kecil_atoz && !numeric){
        return '(Invalid)';
    }

    let hasil = '';

    for(let i = 0; i < panjang_password; i++){
        const metode = randomSampai(3)

        if(metode === 0 && kapital_atoz){
            const huruf_random = randomSampai(26);
            const kapitalA = 'A'.charCodeAt()+huruf_random;
            const password = String.fromCharCode(kapitalA);

            hasil += password;
            continue;
        }

        if(metode === 1 && kecil_atoz){
            const huruf_random = randomSampai(26);
            const kecila = 'a'.charCodeAt() + huruf_random;
            const password = String.fromCharCode(kecila);

            hasil += password;
            continue;
        }

        if(metode === 2 && numeric){
            const angka_random = randomSampai(10);
            const nol = '0'.charCodeAt() + angka_random;
            const password = String.fromCharCode(nol);
            
            hasil += password;
            continue;
        }

        i--;

    }

    return hasil;

}

function randomSampai(randomSampai) {
    return Math.floor(Math.random() * randomSampai)
}

const generate_password_button = document.getElementById('generate_password');
generate_password_button.addEventListener('click', function(event){
    const panjang_password = document.getElementById('panjang_password').value;
    const kapital_atoz = document.getElementById('kapital_az').checked;
    const kecil_atoz = document.getElementById('kecil_az').checked;
    const numeric = document.getElementById('angka').checked;

    const hasilPassword = generatePassword(panjang_password, kapital_atoz, kecil_atoz, numeric);
    document.getElementById('hasil_password').innerText = hasilPassword;
})