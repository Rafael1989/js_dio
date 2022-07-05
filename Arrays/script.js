let array = []

array.push(3)

array

array.push(2)

array.pop()

array.push(2)

array.push(5)

array.shift() // remove do fim da lista

array.unshift(1) // adiciona no comeco da lista

for(let i = 0; i < array.length; i++){
    console.log(array[i])
}

array.includes(3) // tem o 3?

array.every(item => item === 5) // todos os numeros sao o 5?

array.some(item => item === 5) // algum é 5?

array.reverse() // para reverter a ordem dos elementos
 
