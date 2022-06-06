
let mensagens=10;

function login(){
    
    let username="Jeff";
    mensagens--;
    
    function alerta(){
        document.getElementById("alerta").innerHTML=`${username} você tem ${mensagens} mensagens`;
        //mensagens--;
    }
    return alerta();
}


document.getElementById("botaoEmail").onclick=login;

