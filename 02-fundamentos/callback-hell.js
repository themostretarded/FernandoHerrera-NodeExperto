const empleados =[
    {
        id:1,
        nombre: 'Marcos'
    },
    {
        id:2,
        nombre: 'karen'
    },
    {
        id:3,
        nombre: 'linda'
    }
];

const salarios =[
    {
        id:1,
        salario: 1000
    },
    {
        id:2,
        salario: 6000
    }
]

const getEmpleado = (id, callback)=>{
    const empleado = empleados.find((e)=>e.id ===id)
    if(empleado){
        callback(null,empleado);
    }else {
        callback (`Empleado con id ${id} no existe`);
    }
    
}

getEmpleado(1,(err, empleado)=>{
    if(err){
        console.log("error!");
        return console.log(err);
    }
    console.log("Empleado existe!");
    console.log(empleado)
})