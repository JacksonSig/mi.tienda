// Simulación de la URL con parámetro 'id'
var url = "http://./details.html?id=${product.id}";

// Encontrar el índice del signo de interrogación en la URL
var queryStringIndex = url.indexOf("?");

// Verificar si hay una cadena de consulta en la URL
if (queryStringIndex !== -1) {
    // Obtener la cadena de consulta
    var queryString = url.substring(queryStringIndex + 1);

    // Dividir la cadena de consulta en pares clave=valor
    var params = queryString.split("&");

    // Iterar sobre los pares clave=valor para encontrar el parámetro 'id'
    for (var i = 0; i < params.length; i++) {
        var pair = params[i].split("=");
        if (pair[0] === "id") {
            // Capturar el valor del parámetro 'id'
            var id = pair[1];
            // Imprimir el valor de 'id' en la consola
            console.log("El valor de 'id' es:", id);
            break; // Detener la iteración una vez que se encuentre 'id'
        }
    }
}
const query = location.search;
const params = new URLSearchParams(query);
const id = params.get('id');
console.log(id);

function printDetails(id) {
    const product = products.find((each) => each.id === id);
    const detailsTemplate = `
          //pegar todo el contenido de la vista de detalle
          //identificar los datos estáticos
          //interpolarlos con $
       `;
    const detailsSelector = document.querySelector("#details");
    detailsSelector.innerHTML = detailsTemplate;
}
printDetails(id)

function printDetails(id) {
    const product = products.find((each) => each.id === id);
    const detailsTemplate = `
              ...
              <select type="text" placeholder="Selecciona un color">
                 ${product.colors.map(
        (each) => `<option value=${each}>${each}</option>`
    ).join("")}
              </select>
              ...
           `;
    const detailsSelector = document.querySelector("#details");
    detailsSelector.innerHTML = detailsTemplate;
}
printDetails(id)

function printDetails(id) {
    const product = products.find((each) => each.id === id);
    const detailsTemplate = `
          ...
             <div class="product-images-block">
                ${product.images.map(
        each => `<img class="miniImg" src="${each}" alt="mini" />`
    ).join("")}
             </div>
          ...
       `;
    const detailsSelector = document.querySelector("#details");
    detailsSelector.innerHTML = detailsTemplate;
}

printDetails(id)

function printDetails() {
    // Obtener todas las miniaturas de imagen
    var thumbnails = document.getElementsByClassName("thumbnail");

    // Iterar sobre cada miniatura y asignar un evento de clic en línea
    for (var i = 0; i < thumbnails.length; i++) {
        var thumbnail = thumbnails[i];
        // Obtener la ruta de la imagen agrandada asociada a esta miniatura
        var largeImageSrc = thumbnail.getAttribute("data-large-src");
        // Asignar el evento de clic en línea
        thumbnail.setAttribute("onclick", "changeMini('" + largeImageSrc + "')");
    }
}

// Función para cambiar la imagen agrandada
function changeMini(largeImageSrc) {
    // Obtener la imagen agrandada
    var largeImage = document.getElementById("largeImage");
    // Cambiar la fuente de la imagen agrandada
    largeImage.src = largeImageSrc;
}

function changeMini(event) {
    const selectedSrc = event.target.src;
    const bigSelector = document.querySelector("#bigImg");
    bigSelector.src = selectedSrc;
}

