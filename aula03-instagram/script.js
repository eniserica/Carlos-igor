
document.getElementById("cadastro").addEventListener("click", function(){

    //capturei os elementos html
    const email = document.querySelector("#email")
    const senha = document.querySelector("#senha")
    const nome = document.querySelector("#nome")
    const usuario = document.querySelector("#usuario")

    //extrair valor digitado pelo usuario no campo input
    
    const emailValue = email.value;
    const senhaValue = senha.value;
    const nomeValue = nome.value;
    const usuarioValue = usuario.value;

    if(emailValue === ""){
        email.classList.add("erro")
    }else{
        email.classList.add("ok")
    }

    if(senhaValue === ""){
        senha.classList.add("erro")
    }else{
        senha.classList.add("ok")
    }

    if(nomeValue === ""){
        nome.classList.add("erro")
    }else{
        nome.classList.add("ok")
    }

    if(usuarioValue === ""){
        usuario.classList.add("erro")
    }else{
        usuario.classList.add("ok")
    }
})