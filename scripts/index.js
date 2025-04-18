class Activity {
  constructor(id, title, description, imgUrl) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imgUrl = imgUrl;
  }
}
class Repository {
  constructor() {
    this.activities = [];
    this.id = 0;
  }
  getAllActivities() {
    return this.activities;
  }
  createActivity(title, description, imgUrl) {
    this.id++;
    let newActivity = new Activity(this.id, title, description, imgUrl);
    this.activities.push(newActivity);
  }
}
// Crear una instancia del repositorio
const activityRepository = new Repository();

const botonRegistrar = document.getElementById("botonRegistrar");
const tituloInput = document.getElementById("titulo");
const descripcionInput = document.getElementById("descripcion");
const urlimagenInput = document.getElementById("urlimagen");
const contenedor = document.getElementById("contenedor");
const botonBorrar = document.getElementById("botonBorrar");
botonBorrar.style.display = "none";

const handler = (e) => {
  e.preventDefault();

  const titulo = tituloInput.value;
  const descripcion = descripcionInput.value;
  const imagen = urlimagenInput.value;

  if (titulo === "" || descripcion === "" || imagen === "") {
    alert("Te faltan datos por ingresar");
  } else {
    // Llamar al método createActivity y pasar los datos
    activityRepository.createActivity(titulo, descripcion, imagen);

    tituloInput.value = "";
    descripcionInput.value = "";
    urlimagenInput.value = "";

    mostrarTarjetas();
  }
};

function mostrarTarjetas() {
  contenedor.innerHTML = "";
  activityRepository.getAllActivities().map((activity) => {
    const tarjeta = document.createElement("div"); // Crear un nuevo div para cada tarjeta
    tarjeta.classList.add("tarjeta");

    tarjeta.innerHTML = `
            <h3>Actividad Registrada:</h3>
            <p>Título: ${activity.title}</p>
            <p>Descripción: ${activity.description}</p>
            <p>URL Imagen: <img src="${activity.imgUrl}" alt="Imagen Actividad" style="max-width: 100%; height: auto;" /></p>
        `;
    tarjeta.addEventListener("click", (event) => {
      event.target.remove();
    });

    contenedor.appendChild(tarjeta); // Añadir la tarjeta al contenedor
    botonBorrar.style.display = "flex";
    botonBorrar.addEventListener("click", borrarTarjetas);
  });
}
function borrarTarjetas() {
  location.reload();
}

botonRegistrar.addEventListener("click", handler);
