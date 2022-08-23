const resultado = document.getElementById('resultado')

const uno = document.getElementById('asd')

const test = document.getElementsByClassName('items')

test[0].onclick = () =>{
    resultado.value += test[0].innerText;
}
test[1].onclick = () =>{
    resultado.value += test[1].innerText;
}
test[2].onclick = () =>{
    resultado.value += test[2].innerText;
}
test[3].onclick = () =>{
    resultado.value += test[3].innerText;
}
test[4].onclick = () =>{
    resultado.value += test[4].innerText;
}
test[5].onclick = () =>{
    resultado.value += test[5].innerText;
}
test[6].onclick = () =>{
    resultado.value += test[6].innerText;
}
test[7].onclick = () =>{
    resultado.value += test[7].innerText;
}
test[8].onclick = () =>{
    resultado.value += test[8].innerText;
    console.log(resultado.value)
    let testing = resultado.value;//guardo el string para luego convertirlo en entero
    console.log(testing.split('+'))
}
test[9].onclick = () =>{//igual
    // resultado.value += test[9].innerText;
    if(resultado.value==''){
        //no hay dato entonces no hacemos nada
        alert("Tienes que tener al menos 2 numeros para hacer una operación ")
    }else if(resultado.value.split('+').length == 1 && resultado.value.split('-').length == 1 && resultado.value.split('*').length == 1 && resultado.value.split('/').length == 1){
        alert("Inserta más numeros")
        
    }
    let aux = 0;
    // console.log(tetris)
    if(resultado.value.includes('+') == true){
        let resInput = resultado.value.split('+')
        for(let i=0; i<resInput.length; i++){
            aux += parseInt(resInput[i])
        }
        resultado.value = aux;
    }else if(resultado.value.includes('-') == true){
        let resInput = resultado.value.split('-')
        for(let i = 0; i<resInput.length; i++){
            if(i==0){
                aux = parseInt(resInput[0])
            }else{
                aux -= parseInt(resInput[i])
            }
        }
        resultado.value = aux;
    }else if(resultado.value.includes('/') == true){
        let resInput = resultado.value.split('/')
        for(let i=0; i<resInput.length; i++){
            if(i==0){
                aux = parseInt(resInput[0])
            }else{
                aux /= parseInt(resInput[i])
            }
        }
        resultado.value = aux;
    }else{
        let resInput = resultado.value.split('*')
        aux = 1;
        for(let i=0; i<resInput.length; i++){
            aux *= parseInt(resInput[i])
        }
        resultado.value = aux;
    }

}

    
    

test[10].onclick = () =>{
    resultado.value = '';
}
test[11].onclick = () =>{
    resultado.value += test[11].innerText;
}
test[12].onclick = () =>{
    resultado.value += test[12].innerText;
}
test[13].onclick = () =>{
    resultado.value += test[13].innerText;
}
test[14].onclick = () =>{
    resultado.value += test[14].innerText;
}
