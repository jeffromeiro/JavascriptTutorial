
window.addEventListener("keydown",movimenta);
meuDiv = document.getElementById("meuDiv");
let x = 0;
let y = 0;
function movimenta(event){
    
    switch(event.key){
        case "ArrowUp": 
            y-=5;
            meuDiv.style.top= y + "px";
        break;
        case "ArrowDown": 
            y+=5;
            meuDiv.style.top= y + "px";
        break;
        case "ArrowLeft": 
            x-=5;
            meuDiv.style.left= x + "px";
        break;
        case "ArrowRight": 
            x+=5;
            meuDiv.style.left= x + "px";
        break;

    }
}