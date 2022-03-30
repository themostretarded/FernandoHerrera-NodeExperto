const deadpool ={
    nombre: 'wade',
    apellido:'winston',
    poder: 'regeneracion',
    //edad=59,
    getnombre(){
        return `${this.nombre} ${this.apellido} ${this.poder}`;
    }
}

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