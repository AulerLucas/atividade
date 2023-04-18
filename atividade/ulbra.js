const empresa = {
    nome: "lucas",
    segmento: "TI",
    endereco: {
        rua: "rio negro",
        numero: "99"
    }
}

//template String ``
console.log(`A empresa de ${empresa.segmento} altamente renomada está na rua ${empresa.endereco.rua}, N°:${empresa.endereco.numero}`);