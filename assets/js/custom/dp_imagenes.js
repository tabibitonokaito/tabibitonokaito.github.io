function decidir_size(imagen, total_imagenes){
  switch(total_imagenes){
    case 1:
    case 2:
      return "dp_50";
      break;
    case 3:
      return "dp_33";
      break;
    case 4:
      return "dp_50";
      break;
    case 5:
      if(imagen == 0 || imagen == 1){
        return "dp_50";
      }else{
        return "dp_33";
      }
      break;
    default:
      return "dp_33";
      break;
  }
}

function constuir_interior(dp_img, estilos_extra = []) {
  let dp_img_copia = dp_img.cloneNode(true);
  let dp_contenedor = document.createElement("div"); dp_contenedor.classList.add("dp_contenedor");
  let dp_oculto = document.createElement("div"); dp_oculto.classList.add("dp_oculto");
  let dp_agrupador = document.createElement("div"); dp_agrupador.classList.add("dp_agrupador");
  let dp_img2 = document.createElement("img"); dp_img2.src=dp_img.src; dp_img2.alt = dp_img.alt ; dp_img2.classList.add("dp_img2");

  dp_img_copia.classList.add("dp_img"); /* añadimos ahora la clase para que no aparezca en img2 */
  let dp_cap = null; if(dp_img.alt){dp_cap = document.createElement("div");dp_cap.classList.add("dp_cap");dp_cap.innerHTML = dp_img.alt;}

  if(estilos_extra.length){
    for(e=0; e<estilos_extra.length; e++){
      dp_contenedor.classList.add(estilos_extra[e]);
    }
  }


  dp_contenedor.append(dp_img_copia);
  dp_agrupador.append(dp_img2);
  if(dp_cap){dp_agrupador.append(dp_cap);}
  dp_oculto.append(dp_agrupador);
  dp_contenedor.append(dp_oculto);

  return dp_contenedor;
}

let main_container = document.querySelector("[role=main]");

let lista_imagenes = main_container.getElementsByTagName("img");
let imagenes_independientes = [];
let galerias = [];

for(img = 0; img<lista_imagenes.length; img++){
  dp_img = lista_imagenes[img];

  if(dp_img.classList.contains("no_zoom")){
    continue;
  }

  if(dp_img.classList.contains("small_image")){
    let gallery = [];
    let parent = dp_img.parentElement;

    do{
      gallery.push(dp_img);
      img++;
      dp_img = lista_imagenes[img];
    }while(img < lista_imagenes.length && parent.contains(dp_img));

    img--;

    galerias.push(gallery);
    continue;

  }
  imagenes_independientes.push(dp_img);
}

for(g=0; g<galerias.length; g++){
  let parent = galerias[g][0].parentElement;

  let nueva_galeria = document.createElement("div");
  nueva_galeria.classList.add("small_gallery");

  for(i=0; i<galerias[g].length; i++){
    let estilos_extra = [];

    estilos_extra.push(decidir_size(i,galerias[g].length));

    nueva_galeria.append(constuir_interior(galerias[g][i],estilos_extra));
  }

  parent.replaceWith(nueva_galeria);
}

for(i=0; i<imagenes_independientes.length; i++){
  imagenes_independientes[i].replaceWith(constuir_interior(imagenes_independientes[i]));
}

dp_contenedores = document.getElementsByClassName("dp_contenedor");

for(c=0; c<dp_contenedores.length; c++){
  let dp_contenedor = dp_contenedores[c];
  let dp_img = dp_contenedores[c].getElementsByClassName("dp_img")[0];
  let dp_cap = dp_contenedores[c].getElementsByClassName("dp_cap")[0];
  let dp_img2 = dp_contenedores[c].getElementsByClassName("dp_img2")[0];
  let dp_oculto = dp_contenedores[c].getElementsByClassName("dp_oculto")[0];


  dp_img.addEventListener('click', (e) => {
    dp_oculto.style.display = "flex";
  })

  dp_oculto.addEventListener('click', (e) => {
    if(!e.target.classList.contains("dp_cap")){
      dp_oculto.classList.add("out");
      setTimeout(function() {
        dp_oculto.style.display = "none";
        dp_oculto.classList.remove("out");
      }, 500);
    }

  })
}