let qr = document.getElementById('qr');
let qrImg = document.getElementById('qrImg');
let qrText = document.getElementById('qrText');
let btn = document.getElementById('btn')

function generateQR(){
    if(qrText.value.length > 0){
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?data=" + qrText.value;
        qr.classList.add("show-img");
    }else{
        qrText.classList.add('error');
        setTimeout(()=>{
            qrText.classList.remove('error');
        },1000);
    }
}

btn.addEventListener('click', () => generateQR());