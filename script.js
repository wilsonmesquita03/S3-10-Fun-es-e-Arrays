function positions(firstPlace, secondPlace, lastPlace){
    let posicao = [firstPlace, secondPlace, lastPlace]
    if(secondPlace == 'Daniel'){
    posicao[0]= secondPlace
    posicao[1]= firstPlace
    posicao[2]= lastPlace

    console.log(` 1ª - Colocado ${posicao[0]}`)
    console.log(` 2ª - Colocado ${posicao[1]}`)
    console.log(` 3ª - Colocado ${posicao[2]}`)

    }else if(lastPlace == 'Daniel'){
    posicao[0]= firstPlace
    posicao[1]= lastPlace
    posicao[2]= secondPlace
    
    console.log(` 1ª - Colocado ${posicao[0]}`)
    console.log(` 2ª - Colocado ${posicao[1]}`)
    console.log(` 3ª - Colocado ${posicao[2]}`)
    }else {
        console.log(` 1ª - Colocado ${posicao[0]}`)
        console.log(` 2ª - Colocado ${posicao[1]}`)
        console.log(` 3ª - Colocado ${posicao[2]}`)
    }
}

positions('Wilson', 'Daniel', 'Thiago')