const deadpool ={
    nombre: 'wade',
    apellido:'winston',
    poder: 'regeneracion',
    //edad=59,
    getnombre(){
        return `${this.nombre} ${this.apellido} ${this.poder}`;
    }
}

const heroes =['Deadpool','Superman','Batman'];
// const h1 = heroes[0];
// const h2 = heroes[1];
// const h3 = heroes[2];
//si solo quisiera a batman seria asi
//const [,,h3]=heroes;
const[h1,h2,h3]=heroes;
console.log(h1,h2,h3)

//const nombre=deadpool.nombre;
//const apellido=deadpool.apellido;
//const poder=deadpool.poder;

//const {nombre, apellido, poder,edad=0} = deadpool
//console.log(nombre ,apellido, poder, edad)

/*
function imprimeheroe({nombre,apellido,poder,edad=0}){
    nombre="fernando";
    console.log(nombre,apellido,poder,edad);
}
imprimeheroe(deadpool);
*/