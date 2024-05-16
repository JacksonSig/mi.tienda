let hobbies = {
    enPareja: ["Leer", "Comer helado", "Ir al cine", "Ir al parque","Dormir"],
    conAmigos: ["Tomar unos trago", "Charlar", "Bromear", "Jugar futbol", "Jugar Play"],
    conFamilia: ["Cenar", "Comer", "Pasear", "Viajar", "Cantar"],
}

let {enPareja, conAmigos, conFamilia} = hobbies

const guardar = enPareja[2]
const guardar2 = conFamilia[3]

const almacenar = document.getElementById("hobbies")
console.log(almacenar);

const mensaje = `Uno de mis hobbies favoritos para hacer en pareja es ${guardar}, y uno de los mejores para hacer en familia es ver ${guardar2}`;
almacenar.textContent = mensaje
