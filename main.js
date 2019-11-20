let vNumero = []
for(let i = 1; i < 11; i++){
    vNumero[i] = 1
}

function presione1(){
    let numero = document.getElementById('numBoleto').value
    let nombre = document.getElementById('nombre').value
    if( vNumero[numero] != 1){
        alert('Este boleto ya esta vendido.')
    }else{
        alert('Compra exitosa!!')
        vNumero[numero] = nombre
    }
    console.log(vNumero)

}