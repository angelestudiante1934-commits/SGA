console.log("Inicio")
setTimeout(() => {
    console.log("Buscando alumnos...")
}, 3000);
console.log("Fin")

function saludar() {
    console.log("Nyaaa")
}
function ejecutar(funcion){
    funcion();
}
ejecutar(saludar)
function despedirse () {
    console.log("Hasta luego")
}
setTimeout(despedirse,3000)
setTimeout(() => {
    console.log("Buscando materias . . . .")
}, 4000);
setTimeout(() => {
    console.log("Buscando cursos . . . .")
}, 1000);
console.log("Abriendo SGA")
setTimeout(() => {
    console.log("Alumnos cargados")
}, 3000);
console.log("El usuario puede seguir navegando")

//EN 5 SEGUNDOS DE ESPERA LISTA RECIBIDA SOLICITANDO LISTA DE ALUMNNOS
//MIENTRAS ESPERA TIENE QUE APARECER LA LEYENDA "MIENTRAS TANTO EL PROGRAMA SIGUE EJECUTANDOSE" 

let lista =  ["Angel", "Jose", "Gomez"]

setTimeout(() => {
    console.log("Lista de alumnos:")
    lista.forEach(alumno => {
        console.log(alumno)
    });
}, 5000);
console.log("Mientras tanto el programa sigue ejecutandose")

function obtenerAlumnos(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Ya tengo el arreglo")
            resolve(["Ana","Juan"])
        }, 2000);
    })
}
obtenerAlumnos().then((alumnos) => {
    console.log(alumnos)
})

async function iniciar() {
   const alumnos = await obtenerAlumnos()
   console.log(alumnos) 
}
iniciar()

login(usuario).then((usuario) => {
    return obtenerCursos{usuario.id}
})

.then((cursos) => {
    return obtenerNotas(usuario.id)
})

.then((notas) => {
    console.log(notas)
})

.catch((error) => {
    console.log(error)
} )
 
async function MostrarNotas() {
    const usuario = await login(usuario)
    const cursos = await obtnerCursos(usuario.id)
    const notas = await obtnerNotas(cursos)
}

function obtenerClima(){
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve("22 C - Soleado")
        }, 2000);
    })
}
obtenerClima().then((clima) => {
    console.log(clima)
})

async function mostrarClima() {
    const clima = await obtenerClima()
    console.log(clima)
}

mostrarClima()

// crear obtenermateria obtener docentes y mostrar los datos a traves de async/await

function obtmat(){
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve("Matemica","Lengua")
        }, 2000);
    })
}
async function mstmat() {
    const mat = await obtmat()
    console.log(mat)
}
function obtprf(){
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve("Juan","Lulu")
        }, 2000);
    })
}
async function mstprf() {
    const prf = await obtprf()
    console.log(prf)
}
mstmat()
mstprf()

const alumnos = [
    {
        id:1,
        Nombre:"Angel Gomez"
    },
    {
        id:2,
        Nombre:"Jos Gomez"
    }
]

function obtalm(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(alumnos)
        }, 2000);
    } )
}
async function mostraralm() {
    const alumno = await obtalm()
    console.table(alumno)
}

mostraralm()