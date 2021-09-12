//es una forma compactade escribir una funcion
//arrow funcion son funciones anonimas no tiene nombre
//siempre tienen un return implicito

/*funcion tax(prince){
    return prince * 0.13
}*/

/*const tax = (prince) =>{
    return prince * 0.13
}*/

/*funcion mas compacta 
const tax = price => price * 0.13

const price = 1000

console.log(`the price is ${price + tax(price)}`)*/

/*con esta si se puede llamar con this
const classicPerson = {
    name: 'classic person',
    sayName: function(){
        console.log(this.name)
    }
}*/

/*con esta es indefinido no se puede usar el this
const arrowPerson = {
    name: 'arrow person',
    sayName: () =>{
        console.log(this.name)
    }
}*/

/*classicPerson.sayName()
arrowPerson.sayName()*/