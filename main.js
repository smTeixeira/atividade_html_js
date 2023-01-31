const form = document.getElementById('form-numero');
const valorA = document.getElementById('valor-a');
const valorB = document.getElementById('valor-b');
let formEValido = false ; 

function validaNumero(num1, num2) {
    const valorBMaior = num2 - num1;
    return valorBMaior > 0;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const mensagemSucesso = "O numero do campo B é maior do que numero do campo A!!";

    formEValido = validaNumero(valorA.value, valorB.value)
    if(formEValido) {
        const containerMensagemSucesso = document.querySelector('.positive-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        
        valorA.value = '';
        valorB.value = '';
    }else {
        valorB.style.border = '1px solid red';
        document.querySelector('.negative-message').style.display = 'block';
    }if(!formEValido) {
        valorB.style.border = '1px solid red';
        document.querySelector('.negative-message').style.display = 'block';
    }else {
        valorB.style = '';
        document.querySelector('.negative-message').style.display = '';
    }
})

//valorB.addEventListener('change', function(e) {
   // console.log(e.target.value);
   // formEValido = validaNumero(e.target.value);


//})
