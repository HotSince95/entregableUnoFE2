  /* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  
  datosPersona.nombre=prompt('Cual es tu nombre?');
  if (datosPersona.nombre != null) {
    document.getElementById("nombre").innerHTML;
  }

  const anioNacimiento = parseInt(prompt('En que anio naciste?'));
  const anioActual = new Date().getFullYear();
  datosPersona.edad = anioActual - anioNacimiento;
  if (datosPersona.edad !=null){
    document.getElementById("edad").innerHTML;
  }
  datosPersona.ciudad=prompt('En donde vivis?');
  if (datosPersona.ciudad != null) {
    document.getElementById("ciudad").innerHTML;
  }
  
  const interesadoEnJs = (confirm('Te interesa Javascript?'));
    datosPersona.interesPorJs = interesadoEnJs;
}
function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  const nombreElement = document.getElementById('nombre');
  const edadElement = document.getElementById('edad');
  const ciudadElement = document.getElementById('ciudad');
  const jsElement = document.getElementById('javascript');

  nombreElement.textContent = datosPersona.nombre;
  edadElement.textContent = datosPersona.edad;
  ciudadElement.textContent = datosPersona.ciudad;
  jsElement.textContent = datosPersona.interesPorJs ? 'Sí' : 'No';
}

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  const materias = document.querySelector('#fila');
  materias.innerHTML = '';
  listado.forEach(materia =>{
    materias.innerHTML += 
    `<div class="caja">
        <img src=${materia.imgUrl} alt=${materia.lenguajes}>
        <p class="lenguajes">${materia.lenguajes}</p>
        <p class="bimestre">${materia.bimestre}</p>
  </div>`;
  })
}




function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  document.querySelector('#sitio').classList.toggle("dark");
}


/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
