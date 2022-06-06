let botao = document.querySelector("#meuBotao");
let imagemCarro = document.querySelector("#carro");
/*
botao.addEventListener("click",()=>{
    if (imagemCarro.style.display=="none"){
        imagemCarro.style.display="block";
    } else {
        imagemCarro.style.display="none";
    }
    
})
*/
botao.addEventListener("click",()=>{
    if (imagemCarro.style.visibility=="hidden"){
        imagemCarro.style.visibility="visible"; 
    } else {
        imagemCarro.style.visibility="hidden";
    }
    
})