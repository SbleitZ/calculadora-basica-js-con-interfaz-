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
    let tetris = resultado.value.split('')
    let aux = 0;
    // console.log(tetris)
    for(i in tetris){
        let mulOP = resultado.value.split('*')
        if(tetris[i] == '*'){
            aux = 1;
            for(let i=0; i<mulOP.length; i++){
                    aux *= parseInt(mulOP[i])
            }
            resultado.value = aux;
        }
        let divOP = resultado.value.split('/')
        if(tetris[i] == '/'){
            for(let i=0; i<divOP.length; i++){
                    if(i==0){
                        aux = parseInt(divOP[0])
                    }else{
                        aux /= parseInt(divOP[i])
                    }
            }
            resultado.value = aux;
        }
        let sumOP = resultado.value.split('+')
        if(tetris[i] == '+'){
            for(let i=0; i<sumOP.length; i++){
                    aux += parseInt(sumOP[i])
            }
            resultado.value = aux;
        }
        let resOP = resultado.value.split('-')
        if(tetris[i] == '-'){
            for(let i=0; i<resOP.length; i++){
                if(i==0){
                    aux = parseInt(resOP[0])
                }else{
                    aux -= parseInt(resOP[i])
                }
            }
            resultado.value = aux;
        }
    }
    // console.log('hola' + position)

    
    
    
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
