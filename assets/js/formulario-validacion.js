const nombre = document.getElementById("name")
const email = document.getElementById("email")
const pass = document.getElementById("password")
const passDos = document.getElementById("passDos")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit",e=>{
    e.preventDefault()
    let warnings= "";
    let entrar = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    parrafo.innerHTML = ""
    if(nombre.value.length<6){
        
        warnings += `El nombre no es válido <br>`
        entrar=true 
    }
if(!regexEmail.test(email.value)){
        warnings += `El email no es válido <br>`
        entrar=true
    }
    if(pass.value.length<8){
        warnings += `La contraseña no es válida <br>`
        entrar=true
    }
    if(passDos.value !== pass.value){
        warnings += `La contraseña no es igual <br>`
        entrar=true
    }
    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
    } 


})