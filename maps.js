const loja = new Map([
    ["sapato",10],
    ["calça", 100],
    ["camiseta", 50],
    ["cueca", 15]
]
);

loja.delete("cueca");
loja.set("cuecas", 100);
console.log(loja.keys());

loja.forEach((valor, chave)=> console.log(`${chave} $${valor}`));

console.log(loja.size);
console.log(loja.has("short"));
console.log(loja.get("camiseta"));


