let roupasMasculinas = ["calça", "camiseta", "cueca", "blusa"];
let roupasFemininas = ["saia", "vestido", "blusinha","calcinha"];


roupasMasculinas.push(...roupasFemininas);

//console.log(...roupasMasculinas);

//let notas = [3, 9, 8, 10, 2, 1, 4];
let notas = [4,4,4,4];


//console.log(Math.max(...notas));

console.log(media(...notas));


// usando Rest

function media(...numeros){
    let resultado=0;
    for (let num of numeros) {
        resultado += num;
    }
    //console.log(resultado);
    return resultado/numeros.length;
}