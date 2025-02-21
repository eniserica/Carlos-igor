
const resultado = document.querySelector("#resultado");

const Calcular = () => {

    const peso = parseFloat(document.querySelector("#peso").value) ;
    const altura = parseFloat(document.querySelector("#altura").value) ;

    if(isNaN(peso) || isNaN(altura)){
        resultado.innerHTML = `<p>Preencha todos os campos!</p>`
    }

    if(peso < 10 || peso > 300){
        resultado.innerHTML = `<p>Peso inválido!</p>`
    }
}


