let individuo = {
    nome: "Leonardo",
    idade: 27,
    CNH: true,
}

if(individuo.idade >= 18 && !individuo.CNH){
    console.log("Possui mais de 18 anos porém nao tem CNH.")
}else if(individuo.idade >= 18 && individuo.CNH){
    console.log("Possui mais de 18 anos e tem CNH!")
}else if(individuo.idade < 18 && !individuo.CNH){
        console.log("Tem menos que 18 anos e não tem CNH")
    } else{
        console.log("Tem menos de 18 anos e tem CNH (como?...)")
    }
