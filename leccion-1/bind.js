const person = {
    name: 'Bruce',
    lasname: 'Wayne',
    fullname: function(){
        return `${this.name} ${this.lasname}`
    }
}


const print = function(greet, adj){
    console.log(greet, this.fullname(),'ypu are', adj)
}.bind(person)

const printBinded = print.bind(person)
printBinded('hello', 'special')

print.apply(person, ['hello','special'])


/*print ('hello', 'special')
print.call (person,'hello', 'special')*/