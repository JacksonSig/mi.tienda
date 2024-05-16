var misDatosFisicos = {
    nombre: "Jackson Signorile",
    edad: 21,
    dirección: {
        calle: "Calle Principal",
        número: "275",
        ciudad: "Ciudad Capital"
    },
    altura: 175,
    peso: 75,
    // hobby no especificado en este caso
};

// Construir el contenido del perfil utilizando operadores lógicos
var contenidoPerfil = `
    <p><strong>Nombre:</strong> ${misDatosFisicos.nombre}</p>
    <p><strong>Edad:</strong> ${misDatosFisicos.edad}</p>
    <p><strong>Dirección:</strong> ${misDatosFisicos.dirección ? misDatosFisicos.dirección.calle + ' ' + misDatosFisicos.dirección.número + ', ' + misDatosFisicos.dirección.ciudad : 'Dirección no especificada'}</p>
    <p><strong>Altura:</strong> ${misDatosFisicos.altura || 'Altura no especificada'} cm</p>
    <p><strong>Peso:</strong> ${misDatosFisicos.peso || 'Peso no especificado'} kg</p>
    <p><strong>Hobby:</strong> ${misDatosFisicos.hobby || 'Hobby no especificado'}</p>
`;

// Acceder al contenedor div con id "perfil"
var perfilDiv = document.getElementById("perfil");

// Asignar el HTML generado al contenedor perfil
perfilDiv.innerHTML = contenidoPerfil;

function parametro(id = "datos3") {
let variable = document.getElementById(id)
console.log(variable);
variable.textContent = `
<p><strong>Nombre:</strong> ${misDatosFisicos.nombre}</p>
<p><strong>Edad:</strong> ${misDatosFisicos.edad}</p>
<p><strong>Dirección:</strong> ${misDatosFisicos.dirección ? misDatosFisicos.dirección.calle + ' ' + misDatosFisicos.dirección.número + ', ' + misDatosFisicos.dirección.ciudad : 'Dirección no especificada'}</p>
<p><strong>Altura:</strong> ${misDatosFisicos.altura || 'Altura no especificada'} cm</p>
<p><strong>Peso:</strong> ${misDatosFisicos.peso || 'Peso no especificado'} kg</p>
<p><strong>Hobby:</strong> ${misDatosFisicos.hobby || 'Hobby no especificado'}</p>
`;
}
parametro("datos1")
parametro()

let nombre = "Jackson Signorile";
let edad = 21;
let altura = 1.78;
let peso = "100";
let genero = "Hombre";
let direccion = "Av. Horacio Urteaga 1458, Jesus Maria";

const persona = {
nombre,
edad,
datosFisicos: {
    altura,
    peso,
    genero,
},
direccion,
alcohol:"Ron Santa Teresa"
}
console.log(persona);
const printPersona = document.getElementById("persona")
console.log(printPersona);
const texto = `
<p><strong>Nombre:</strong> ${persona.nombre}</p>
<p><strong>Edad:</strong> ${persona.edad}</p>
<p><strong>Dirección:</strong> ${persona.direccion || 'Dirección no especificada'}</p>
<p><strong>Altura:</strong> ${persona.datosFisicos.altura || 'Altura no especificada'} cm</p>
<p><strong>Peso:</strong> ${persona.datosFisicos.peso || 'Peso no especificado'} kg</p>
`;
printPersona.innerHTML = texto
if (persona.edad >= 18) {
    printPersona.innerHTML = texto +  `
    <p><strong>Alcohol:</strong> ${persona.alcohol}</p>
`;
}
