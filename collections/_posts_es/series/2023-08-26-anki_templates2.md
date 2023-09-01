---
layout: post
title:  Plantillas de Anki by Kaito
subtitle: "Parte 2: Fuentes"

cover-img: /assets/img/posts/anki_templates/banner.avif
thumbnail-img: /assets/img/posts/anki_templates/box.png
share-img: /assets/img/posts/anki_templates/box.png

categories: ['es']
traducciones: ['es']
series: [2,3]

header_blackbox: true

tags: [anki]
comments: false

---

Normalmente sería sencillo instalar plantillas (y lo es) pero las fuentes no me pertenecen, se tienen que instalar cosas en un orden concreto, sobre todo con las fuentes.

# Fuentes

<span style="color:red">**Se tienen que instalar primero si o si**</span>, ya que sino Anki elegirá otra fuente para los Campos (en el buscador) y seguramente esa fuente no sea Japonesa por lo que tendreis que ajustarlo todo o reinstalar la plantilla. **Además**, no solo consiste en instalarlas en tu sistema operativo, sino en Anki (dependiendo de la fuente).


{: .box-note}
**¿Tienes tus propias fuentes?:** También puedes ponerlas, en caso de que no sepas como funcionan las fuentes en anki puedes seguir leyendo esta sección y lo descubriras. <br><br>
La fuente principal tendrás que meterla a la carpeta media de Anki con una _ delante para que no se elimine, arriba del todo de los css de las plantillas podras cambiar en main_font _TakaoGothic.ttf por el nombre de tu fuente favorita pero no importes más de una fuente o ralentizarás la carga de la tarjeta cuando hagas reviews, con dos en mi móvil va bien pero con más no (imagen1)<br><br>
El resto de fuentes las puedes especificar en las variables de las fuentes jfont1.. etc (imagen2)

![Import de fuentes](/assets/img/posts/anki_templates/Code_TQnqVEy0DD.png){: .small_image :}
![Resto de ajustes de fuentes en el css](/assets/img/posts/anki_templates/Code_IxA63gP9be.png){: .small_image :}

### Takao Gothic

Es la fuente de Palabra, podeis descargarla en [este enlace](https://launchpad.net/takao-fonts). El zip incluye variaciones pero nosotros la que usamos es **TakaoGothic.ttf**, en Windows se instala haciendo doble click al archivo y dando click a instalar en la ventana que se abre.

![](/assets/img/posts/anki_templates/takao.avif){: .small_image :}
![](/assets/img/posts/anki_templates/Photoshop_sJsQwOeYJk.png){: .small_image :}

Ahora para aunque tu móvil no tenga la fuente al menos la Palabra se vea igual tendrías que meter la fuente a la carpeta media de Anki con el siguiente nombre "_TakaoGothic.ttf".

Tiene que ser ese nombre si o si porque aparece así se especifica en los cuatro css, además la _ sirve para que anki no borre la fuente a pesar de no incluirse como contenido multimedia de ninguna tarjeta.

####¿Cómo acceder a la carpeta media de Anki? (Al menos en Windows) 
1. Entramos a **Ejecutar** pulsando **Windows + R**, escribimos "%appdata%" y damos click en aceptar.
2. Se nos abrira el explorador, buscamos **Anki2** en la carpeta que se nos ha abierto.
3. Dentro de **Anki2** debera de aparecer una carpeta con nuestro nombre de usuario, accedemos a ella.
4. Ahí tenemos la carpeta media, en realidad se llama **collection.media** y es donde tenemos que pegar "_TakaoGothic.ttf" y la fuente de los trazos.

![1](/assets/img/posts/anki_templates/explorer_ShcXRADEkn.png){: .small_image :}
![2](/assets/img/posts/anki_templates/explorer_5TSQR9FqSm.png){: .small_image :}
![3](/assets/img/posts/anki_templates/explorer_5ywokEnE7B.png){: .small_image :}
![4](/assets/img/posts/anki_templates/explorer_vkhFE2XnxO.png){: .small_image :}

### Kanji Stroke Order
El enlace de descarga [es este](https://www.nihilist.org.uk/). Al igual que **Takao Gothic**, además de instalarla deberemos meterla a la carpeta media también pero con este otro nombre "_strokeOrder.ttf".


![click ahí para descargar](/assets/img/posts/anki_templates/chrome_CLXNl0k8h8.png)

Y con eso estarían las fuentes