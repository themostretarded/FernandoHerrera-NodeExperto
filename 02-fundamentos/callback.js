// setTimeout(function(){
//     console.log('hola mundo')
// },1000);

const getUsuarioByID = (id,callback) =>{
    const usuario = {
        //esto se puede poner asi id:id
        id,
        nombre:'MARCOS'
    }

    setTimeout(()=>{
        callback(usuario)
    },1500)
}
getUsuarioByID(10,(usuario)=>{
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());
});