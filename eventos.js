let botao=document.getElementById("meuBotao");

botao.onclick = ()=>window.alert("Clique");

botao.onmouseover = () => {
    botao.style.backgroundColor="black";
    botao.style.color="white";
};

botao.onmouseout = () => {
    botao.style.backgroundColor="white";
    botao.style.color="black";
};

let meuDiv=document.getElementById("meuDiv");


meuDiv.onmouseout = ()=>{
    meuDiv.style.backgroundColor="green";
}


meuDiv.onmousedown = ()=>{
    meuDiv.style.backgroundColor="orange";
}

meuDiv.onmouseup = ()=>{
    meuDiv.style.backgroundColor="grey";
}


let titulo = document.getElementById("titulo");
titulo.addEventListener("click",()=>{
    titulo.style.color="black";
})

let outerDiv=document.getElementById("outerDiv");
outerDiv.addEventListener("mouseover", mudaCorCyan, true);

meuDiv.addEventListener("mouseover",()=> alert("evento 1") );
meuDiv.addEventListener("mouseover",()=> alert("evento 2"));


function mudaCorCyan(){
    this.style.backgroundColor="black";
    window.alert(this.id);
}

function mudaCorGreen(){
    this.style.backgroundColor="lightgreen";
    window.alert(this.id);
}