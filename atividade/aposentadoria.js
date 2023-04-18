

//objeto
const pessoa = {
    nome: "lucas", //variaveis
    genero: 'F',
    idade: 60,
    anos_contribuicao: 30
}

const somaIdadeContribuida = pessoa.idade + pessoa.anos_contribuicao

// Estrutura condicional
if (pessoa.genero = 'M') {
    if (pessoa.anos_contribuicao >= 35 &&
        somaIdadeContribuida >= 95) {
            console.log("pode se aposentar")
        }else{
            console.log("Não pode se aposentar")
        }
    }else{
    if (pessoa.genero = 'F') {
        if (pessoa.anos_contribuicao >= 30 &&
            somaIdadeContribuida >= 85) {
                console.log("pode se aposentar")
            }else{
                console.log("Não pode se aposentar")
        }
    }
}
