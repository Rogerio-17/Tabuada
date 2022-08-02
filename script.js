function tabuada() {
  let num = document.getElementById('txtn')


  let multiplicar = document.getElementById('mult')

  let dividir = document.getElementById('dividir')

  let somar = document.getElementById('somar')

  let subtrair = document.getElementById('sub')
  

  
  


  if (num.value == 0 || num.value > 10) {
    alert('Por favor digite um número válido')



  } else {
    let n = Number(num.value)
    let c = 1
    
    


    while (c <= 10) {
      
      let item = document.createElement('option')
      item.text = `${n} x ${c} = ${n*c}`
      item.value = `tab${c}`
      multiplicar.appendChild(item)

      c++

      
    } 

    for (let c = 1; c <= 10; c++) {
      let item = document.createElement('option')
      item.text = `${n} ÷ ${c} = ${(n/c).toFixed([2])}`
      item.value = `tab${c}`
      dividir.appendChild(item)
      
    }

    for (let c = 1; c <= 10; c++) {
      let item = document.createElement('option')
      item.text = `${n} + ${c} = ${(n + c)}`
      item.value = `tab${c}`
      somar.appendChild(item)
      }


      for (let c = 1; c <= 10; c++) {
        let item = document.createElement('option')
        item.text = `${n} - ${c} = ${(n - c)}`
        item.value = `tab${c}`
        subtrair.appendChild(item)
        }
    
  }
}


function limpar() {

  let lm = document.getElementsByName('Tabuada')[0]
  let ld = document.getElementsByName('Tabuada')[1]
  let ls = document.getElementsByName('Tabuada')[2]
  let lsu = document.getElementsByName('Tabuada')[3]

  lm.innerHTML = ''
  ld.innerHTML = ''
  ls.innerHTML = ''
  lsu.innerHTML = ''

 

  if(mult.value == '') {

    let item = document.createElement('option')
    item.text = 'Multiplicação'
    mult.appendChild(item)

   if(dividir.value == '') {

      let item = document.createElement('option')
      item.text = 'Divisão'
      dividir.appendChild(item)

    } 

    if(somar.value == '') {

      let item = document.createElement('option')
      item.text = 'Soma'
      somar.appendChild(item)

    } 

    
    if(sub.value == '') {

      let item = document.createElement('option')
      item.text = 'Subtração'
      sub.appendChild(item)

    } 
  } 


  
}