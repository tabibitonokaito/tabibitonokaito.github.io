let contenedores_imagenes = document.getElementsByClassName("container-md");

for(contenedor = 0; contenedor<contenedores_imagenes.length; contenedor++){
  let lista_imagenes = contenedores_imagenes[contenedor].getElementsByTagName("img");

  for(imagen = 0; imagen<lista_imagenes.length; imagen++){
    if(!lista_imagenes[imagen].classList.contains("no_zoom")){
      let dp_contenedor = document.createElement("dp_contenedor"); dp_contenedor.classList.add("dp_contenedor");
        let dp_img = lista_imagenes[imagen]; /* no tocar sin duplicar */
        let dp_oculto = document.createElement("div"); dp_oculto.classList.add("dp_oculto");
          let dp_agrupador = document.createElement("div"); dp_agrupador.classList.add("dp_agrupador");
            let dp_img2 = dp_img.cloneNode(true); dp_img2.classList.add("dp_img2");
        dp_img.classList.add("dp_img"); /* añadimos ahora la clase para que no aparezca en img2 */
            let dp_cap = null; if(dp_img.alt){dp_cap = document.createElement("div");dp_cap.classList.add("dp_cap");dp_cap.innerHTML = dp_img.alt;}
        
      
      dp_contenedor.append(dp_img.cloneNode(true));

        dp_agrupador.append(dp_img2);
        if(dp_cap){dp_agrupador.append(dp_cap);}
        dp_oculto.append(dp_agrupador);
        dp_contenedor.append(dp_oculto);

      dp_img.replaceWith(dp_contenedor);
      imagen++;
    }
  }

  let dp_contenedores = document.getElementsByClassName("dp_contenedor");

  for(c=0; c<dp_contenedores.length; c++){
    let dp_contenedor = dp_contenedores[c];
    let dp_img = dp_contenedores[c].getElementsByClassName("dp_img")[0];
    let dp_cap = dp_contenedores[c].getElementsByClassName("dp_cap")[0];
    let dp_img2 = dp_contenedores[c].getElementsByClassName("dp_img2")[0];
    let dp_oculto = dp_contenedores[c].getElementsByClassName("dp_oculto")[0];


    
    dp_img.onclick = function(){
      dp_oculto.style.display = "block";
    }

    dp_oculto.onclick = function() {
      dp_oculto.className += " out"
      /*dp_img2.className += " out";
      if(dp_cap){dp_cap.className += " out";}*/
      setTimeout(function() {
          dp_oculto.style.display = "none";
          dp_oculto.className = "dp_oculto"

          /*dp_img2.className = "dp_img2";
          if(dp_cap){dp_cap.className += "dp_cap";}*/
      }, 500);
    }
  }
}