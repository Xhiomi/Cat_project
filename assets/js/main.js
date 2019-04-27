//
const formatoAdopacion = document.querySelector('#formato-adopcion');
const gatito = document.querySelector('#gatito');
const lista = document.querySelector('#lista');
const boton = document.querySelector('#boton-gatito');
const raza = document.getElementById('raza');
const contenedor = document.getElementById('contenedor');
const segundoContenedor = document.getElementById('segundo-contenedor');

// console.log(pizzaForm);
// console.log(pizza.value);

//Sirve para cachar un evento. Seguido por la función que hará cuando lo cache.
//preventDefault evita que se refresque la pagina
formatoAdopacion.addEventListener('submit', function(event){
  event.preventDefault();
  // console.log('Hemos detenido el submit');

  const razaGatito = raza.value;

  let razaImg;
  if(razaGatito == 'Azul ruso'){
    razaImg = 'azul_ruso.jpg'
  } else if(razaGatito == 'Gato persa') {
    razaImg = 'persa.jpg'
  } else if(razaGatito == 'Gato siamés') {
    razaImg = 'siames.jpg'
  } else if(razaGatito == 'Maine Coon'){
    razaImg = 'maine_coon.jpg'
  }

  console.log(razaGatito);
  lista.innerHTML += `
  <div class= 'modulo-gatitos'>
    <h1>${razaGatito}</h1>
    <img class="foto_gatito" src='assets/img/${razaImg}'>
    <button id="boton-gatito" type="button" name="button">¡Conoce más!</button>
  </div>
  `
  // function myFunction() {
  //     var ele = document.getElementById("selectBox");
  //     var selectedValue = ele.options[ele.selectedIndex].value;
  //
  //     var y = document.getElementById("demo");
  //     if(selectedValue=="1"){
  //        y.innerHTML = "hello";
  //     }
  //     else if(selectedValue=="2"){
  //        y.innerHTML = "hello 1";
  //     }
  //     else if(selectedValue=="3"){
  //        y.innerHTML = "hello 2";
  //     }
  //     else if(selectedValue=="4"){
  //        y.innerHTML = "hello 3";
  //     }
  // }

  // const raza = document.getElementById('raza')
  // let gatitoSeleccionadoEnBoton = razaImg;

  let descripcion;
  if(razaGatito == 'Azul ruso'){
    descripcion = 'El azul ruso es una raza de gato de tamaño medio y pelo corto plateado, fácilmente distinguible de otras razas. Es famoso por ser un gato inteligente y afectuoso, que disfruta el contacto con los humanos y es ideal para la vida en familia.'
  } else if(razaGatito == 'Gato persa') {
    descripcion = 'El Persa es una raza de gato caracterizada por tener una cara ancha y plana y un gran abundante pelaje de variados colores. Son considerados comúnmente como gatos aristocráticos.'
  } else if(razaGatito == 'Gato siamés') {
    descripcion = 'La siamesa es una raza de gato. Dentro de dicha raza se distinguen dos variedades: por un lado el siamés moderno o siamés propiamente dicho, y por otro el siamés tradicional o Thai.'
  } else if(razaGatito == 'Maine Coon'){
    descripcion = 'El Maine Coon, Coon de Maine o Mancoon es una raza de gato doméstico originaria de Estados Unidos.'
  }


  if (lista !== null) {
    lista.addEventListener('click', function(event){
      console.log('entra a segundo listener')
      contenedor.innerHTML = `
        <div class="Contenedor-interno">
        <img class="imagen-contenedor-interno" src='assets/img/${razaImg}'>
        </div>
      `
      segundoContenedor.innerHTML = `
      <p class="descripcion-parrafo">${descripcion}</p>
      `
      console.log('llega al final del segundo listener')
    });

  };

// formatoAdopacion.addEventListener('click', function(event){
//   event.preventDefault();
//
//   lista.innerHTML += `
//   ${}
//   if (razaGatito = '')
//   <img src=''>
//   `
// };
});
