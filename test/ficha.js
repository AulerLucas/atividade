const programador = {//toda a arvore de processo
    nome: "Lucas",
    idade: "18",
    tecnologias: [  //arvore
        {//0
            nome: "React", //arvore
            especialidade: "frontend"
        },
        {//1
            nome: "node",
            especialidade: "backend"//arvore
        }

    ]

}

console.log(programador.tecnologias[0]) 
// caminho raiz para acessar "NOME" e "ESPECIALIDADE"
// programador = bloco mãe
// tecnologia = bloco filhos
// nome e especialidade = variáveis do bloco

// Sendo o array "[]" no qual indica-se qual parte da lista queres acessar 