let nomes = ['Jubileu', 'Juriscleiton', 'Marycleide', 'Fabio', 'Rei', 'Luigi', 'Mario', 'Princesa', 'Carlos', 'José'];
let idades = [23, 21, 22, 43, 255, 35, 37, 25, 26, 26];
let cores = ['azul', 'azul', 'rosa', 'verde', 'cinza', 'verde', 'vermelho', 'rosa', 'preto', 'preto'];

for (let index = 0; index < nomes.length; index++){
    console.log(nomes[index]+ ' - '+ idades[index]+ ' - '+ cores[index]);
}

idades.splice(4,1,33)
cores.splice(4,1,'preto')

console.log('---------------------------------')
for (let index = 0; index < nomes.length; index++){
    console.log(nomes[index]+ ' - '+ idades[index]+ ' - '+ cores[index]);
}