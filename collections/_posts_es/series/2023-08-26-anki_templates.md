---
layout: post
title:  Plantillas de Anki by Kaito
subtitle: Todo lo que necesitas para estudiar Japonés con Anki

cover-img: /assets/img/posts/anki_templates/banner.avif
thumbnail-img: /assets/img/posts/anki_templates/box.png
share-img: /assets/img/posts/anki_templates/box.png

categories: ['es']
traducciones: ['en','es']
series: [1,3]

header_blackbox: true

tags: [anki]
comments: true

---

En este artículo os voy a compartir las plantillas que he creado para estudiar Japonés. Son cuatro en total: **LEER**, **ESCRIBIR**, **DE_KANA** y **A_KANA**.

{: .box-blue}
**(2023/09/04)** Ya he terminado de revisar esta parte de la guía, por lo que activo los comentarios en ella.

{: .box-warning}
**Actualizaciones**: Cuando haya actualizaciones o nuevas plantillas utilizaré este cuadro para avisar de ello. Si pierdes el enlace a este blog o a este artículo puedes encontrarlo debajo de la plantilla ([ver imagen](/assets/img/posts/anki_templates/footer_sign.avif)).<br><br>
El texto es del mismo color que el fondo y no tiene enlaces para no molestar durante las revisiones, pero deberías poder seleccionarlo.

{% assign enlace = page.categories[0] | append: '/anki_templates2' | absolute_url %}
{% if page.categories[0] == site.language %}
    {% assign enlace = 'anki_templates2' | absolute_url %}
{% endif %}

A continuación, voy a enseñar las características de la plantilla, pero si quieres, puedes pasar directamente a la [siguiente parte]({{enlace}}) para empezar con la instalación.

## Funciones de las plantillas
Aunque haya cuatro plantillas, eso no significa que se limiten solo a cuatro funciones. Para ejemplificar, os voy a enseñar
cómo las utilizo yo.


* **LEER**: la utilizo para vocabulario, gramática/expresiones que usen kanji,
  y para mi deck de kanji sueltos.

![Tarjeta de Vocabulario](/assets/img/posts/anki_templates/leer1.avif){: .small_image :}
![Tarjeta de Gramática/Expresiones .. etc](/assets/img/posts/anki_templates/leer3.avif){: .small_image :}
![Tarjeta de Kanji (Kanjis Sueltos)](/assets/img/posts/anki_templates/leer2.avif){: .small_image :}

* **DE_KANA**: la utilizo principalmente para gramática, expresiones, vocabulario sin kanji.. etc.

![Tarjeta DE_KANA](/assets/img/posts/anki_templates/dekana1.avif){: .small_image :}

* **A_KANA**: no la utilizo, aún así la publico por si llegara a ser necesaria.

![Tarjeta A_KANA](/assets/img/posts/anki_templates/akana1.avif){: .small_image :}
* **ESCRIBIR**: está en principio sí que es solo para handwriting. No escribo mucho, pero es una tarjeta muy útil.

![Tarjeta de Handwriting](/assets/img/posts/anki_templates/escribir1.avif){: .small_image :}

## Características Generales
### Campos

Las tarjetas tienen muchos campos, así que puede marear al principio si no estás acostumbrado, pero es muy probable que llegue el día en el que necesites cada uno de ellos. 

Yo, por ejemplo, intento usar los mínimos campos posibles porque rellenar todo requiere tiempo y esfuerzo extra por cada palabra, pero sí que los uso cuando lo necesito o simplemente me apetece usarlos.

![](/assets/img/posts/anki_templates/campos.avif#center){: .mx-auto.d-block.no_zoom :}

#### Explicación de los campos
Algunos campos no necesitan explicación porque son literales.

* **Palabra**: Siempre es la palabra, pero con unos matices. En **LEER** y **ESCRIBIR**, sería 漢字, en **A_KANA** y **DE_KANA**, sería かんじ. 
    * **¿Por qué en A_KANA y DE_KANA no usas el campo Hiragana?:** Porque así Yomichan puede detectar las tarjetas aunque sean de otro tipo de tarjeta al que tienes configurado. 
    * **Si no te gusta estar cambiando los tipos de tarjetas**, habrá que hacer algún que otro ajuste, pero perfectamente puedes utilizar solamente la plantilla **LEER** y usar Palabra para todo.
    
    [Más abajo](#ajuste_diagrama) en el diagrama explicaré un pequeño ajuste que puede que queráis aplicar en este caso. Usar solo **LEER** también tiene desventajas, por ejemplo, en Audio se explica una de ellas.

* **Hiragana**: se llama así, pero en realidad es para escribir en hiragana o katakana la lectura de la palabra.  

* **Alternativas**: si la palabra tiene otras formas de escribirse o pronunciarse, puedes indicarlas aquí. Estarán menos destacadas que la principal, pero justo debajo de ella.

* **Significado**: significado no japonés, aunque también destacar un significado japonés. A tu gusto.

* **Significado Japonés**: aparece en un recuadro blanco estilizado que está muy bien.

* **Notas Visibles**: lo uso para mostrar avisos en el **front**. Por ejemplo cuando una palabra tiene varias pronunciaciones puedes especificar a cual se refiere la tarjeta con una pista.

* **Frases Visibles y Frases**: hay dos campos porque muchas veces te interesará que se vean las frases en el **front** y otras muchas no.

* **No Confundir**: este campo lo terminé agregando porque era información que agregaba a **notas** y me molestaba, a mi me gusta que el campo notas sea independiente. Solo se ve en el back y sirve para poner algo como "昨日・昨今" en ambas tarjetas, así si confundes una palabra con otra podrás encontrar ambas fácilmente usando el buscador.

* **Notas**: este campo es para poner todo aquello que necesites relacionado con la palabra y que no encaje en ningún otro campo.

* **Audio**: este campo es más interesante de lo que parece. Con programas como Yomichan puedes añadir a las tarjetas las pronunciaciones de la palabra y, dependiendo del tipo de tarjeta, este audio se escuchará en el **front** o en el **back**.
    * **LEER**: se escucha en el **back**.
    * **ESCRIBIR**: se escucha en el **front** y ayuda un montón a saber qué es lo que tienes que escribir.
    * **DE_KANA**: se escucha en el **front** ya que en estas tarjetas normalmente lo que tienes que recordar es el significado.
    * **A_KANA**: se escucha en el **back**.

* **Imágenes**: es un campo para que las imágenes tengan su propia sección. Antes usaba el campo **notas** para esto, pero era muy incómodo cuando quería añadir anotaciones también. Centra el texto por defecto e intenta ordenar las imágenes en horizontal si es que caben, pero siempre puedes añadir saltos de línea.

* **Diagrama**: Puedes usar plugins bonitos como [Kanji Colorizer (stroke order diagrams)](https://ankiweb.net/shared/info/1964372878) para añadir el stroke order de los kanji. En caso de no agregar nada, aparecerá el stroke order de todas formas con una fuente especial para ello.<a name="ajuste_diagrama"></a>

{: .box-note}
**Ajuste si solo vas a usar la plantilla leer LEER como sustitución a DE_KANA:** Si te molesta que Diagrama te genere el stroke order para las palabras tarjetas que no usan kanji (como すんな) puedes desactivar esta función tú mismo, solo **no te olvides de copiar el código que vas a editar a un block de notas por si rompes algo**:<br><br>
En el buscador de Anki encuentra cualquier tarjeta que use la plantilla **LEER** y arriba de los campos verás un botón que pone Tarjetas (<u>imagen1</u>) le das y verás el código de la plantilla. <br><br>
Tienes que editar el Back Template y borrar la parte que está entre \{\{^Diagrama\}\} y \{\{/Diagrama\}\} (<u>imagen2</u>).<br><br>
Solo quedaría guardar los cambios.  

![Tarjeta de Kanji (Kanjis Sueltos)](/assets/img/posts/anki_templates/quitar_diagrama_selectivo2.png){: .small_image :}
![Tarjeta de Kanji (Kanjis Sueltos)](/assets/img/posts/anki_templates/quitar_diagrama_selectivo.png){: .small_image :}

* **Contenido Oculto**: al igual que no confundir, esta es mi nueva joya. El campo aparece oculto por defecto y sirve para poner cualquier cosa que no quieras que se vea directamente. 
    * Puedes usarlo para guardar todo lo que no encaje en el resto de campos.
    * También puedes guardar contenido que no quieres que vean los demás, como por ejemplo información más personal. Esto te va a permitir, por ejemplo, streamear sin mostrar cosas que no quieres.
    * Otro uso sería que, si por ejemplo, queréis compartir algunas tarjetas, pues sabréis dónde está exactamente lo que no queréis compartir.

    Seguro que le sacáis un buen provecho.

{: .box-note}
**Nota**: Los campos **Hiragana** y **Diagrama** se incluyen también en las plantillas **DE_KANA** y **A_KANA** pero no se ven en las revisiones (son campos minimizados abajo de todos los demás).<br><br>
Los motivos son por seguridad y comodidad, si por error haces un cambio de tipo de tarjeta de, por ejemplo, **LEER** a **DE_KANA**, no vas a perder ninguna información y simplemente convirtiendo las tarjetas de vuelta a **LEER**, podrás revertir los cambios.

#### Funciones extendidas
He incluido a las plantillas algunas características muy interesantes que os voy a contar a continuación:

* **Botones de acceso rápido** a diversos diccionarios y búsqueda de imágenes (para todas las plantillas).
![Acceso rápido ultra cómodo](/assets/img/posts/anki_templates/anki_7yKZ92uKMc.gif)  

Suponiendo que la palabra fuera 瀞, podéis dar clic con la rueda del ratón a los siguientes enlaces para saber cómo funcionarían los botones:

* [漢字辞典](https://jitenon.com/search/%E7%80%9E)　(normalmente para kanji) útil para kanken
* [漢字ペディア](https://www.kanjipedia.jp/search?k=%E7%80%9E&kt=1&wt=1&ky=1&wy=1&sk=partial) (normalmente para kanji) útil para kanken
* [画像](https://www.google.com/search?tbm=isch&q=%E7%80%9E) busca imagenes
* [画像とは](https://www.google.com/search?tbm=isch&q=%E7%80%9E%E3%81%A8%E3%81%AF) busca imagenes con とは (enfatiza el significado)
* [Google](https://www.google.com/search?q=%E7%80%9E%E3%81%A8%E3%81%AF) busca con とは en google (para saber que significa)
* [NIAI](https://niai.mrahhal.net/similar?q=%E7%80%9E) busca kanji que son parecidos por usar los mismos radicales (útil para kanken)
* [goo](https://dictionary.goo.ne.jp/word/%E7%80%9E/) si te gusta goo puedes acceder directamente a el
* 単語をコピー: copia la palabra
* [Jisho](https://jisho.org/search/%E7%80%9E) ya la conoceis
* [例文](https://www.google.com/search?q=%E7%80%9E%E3%81%AE%E4%BE%8B%E6%96%87) busqueda en google de frases de ejemplo (の例文)

* **Filtro que reduce el brillo de las imágenes**: aunque la plantilla sea casi blanca, las imágenes con fondos totalmente blancos seguían siendo molestas a la vista, pero con esto ya se acabó el problema. Si quieres ver la imagen en color original, puedes poner el puntero del ratón encima.

![Las imágenes con texto y fondo blanco no parecen imágenes](/assets/img/posts/anki_templates/anki_98jCjfLPQG.gif)

* **Estilos predefinidos para el campo Hiragana** (también foto de arriba). Puedes usar negrita, subíndice, etc., para usar unos estilos predefinidos en el campo hiragana. Esto viene de perlas para las tarjetas de kanji individuales.

    * **Imágenes**: tienen un tamaño automático que está definido por CSS para ajustarse al texto, empujan muy poco (2px) el texto a la derecha. En la imagen puedes ver **外** que especifica pronunciaciones que están fuera del kanken.

    * **Superíndice**: pone el texto de color naranja. Lo uso para especificar que es una pronunciación que solo he visto en nombres.

    * **Subíndice**: pone el texto de un color rojo que no destaca mucho. Lo uso para indicar pronunciaciones que son del kanji pero que no se encuentran en ninguna parte, ni en palabras, ni nombres, ni nada, solo aparecen en diccionarios.

    * **Subrayado**: pone el texto de color azul. La pronunciación no aparece en el diccionario, pero sí se usa. 

    * **Negrita**: pone el texto de color rosado. Es una pronunciación 常用漢字.
    
    * **Cursiva**: oscurece el texto sea del color que sea, por ejemplo, para destacar que pronunciación entra dentro del kanji. Ejemplo: 食べる (**た**べる).

    {: .box-note}
**Nota**: puedes desactivar los estilos predefinidos agregando la clase "**no**" a cada elemento (usando el editor HTML).

    En siguientes versiones mejoraré los estilos predefinidos para que se puedan desactivar más cómodamente y además que se puedan activar en cualquier otro campo que no sea hiragana.


* **BLUR**: por si fuera poco con el campo **Contenido Oculto**, este es otro sistema para ocultar contenido.
    * Aplica un blur a tus imágenes/texto o cualquier elemento o grupo de elementos HTML.
    * Da clic al elemento con blur para alternar el blur on<->off.
    * Decide qué tanto se difumina el contenido entre una gran variedad de grados.

    * **¿Cómo se usa?** 
        1. Se agrega un div padre  (\<div class="blur CLASE_2"\>) que contenga la imagen o en general cualquier elemento o grupo de elementos HTML a los que quieras aplicar un blur inicial.
        2. **CLASE**: en lugar de **CLASE**, hay que elegir una clase secundaria entre **n h hh hhh hhhh hhhhh x xx xxx xxxx xxxxx**, dependiendo de qué tan potente quieres que sea el blur. 
        
    El siguiente código ocultará tanto la imagen como el texto y al hacer clic en cualquiera de los dos se mostrarán ambos (porque están dentro del mismo div padre). El texto debería ser intangible (porque a poco blur que le pongas a un texto no se podrá leer), pero la imagen solo se verá un poco borrosa.
    ```html
    <div class="blur n">  
        Mi Imagen Oculta<br>  
        <img src="mi_imagen.png">  
    </div>
    ```
    
{: .box-note}
**Notas:**<br>Los div blur son elementos en línea, así que si caben se pondrán unos al lado de otros. Si quieres un salto de línea entre dos blur, tendrás que añadir un \<br\>.<br><br>
Los blur ocultan contenido directamente pero pueden ser revertidos fácilmente mediante IA, así que usa Contenido Oculto si realmente no quieres que se vea algo.

![Función de Blur](/assets/img/posts/anki_templates/blur_gif.gif)

* Funciones que están medio incluidas (se instalan aparte de la plantilla, pero están configuradas)
    * **Fuente Principal**: La fuente principal de **Palabra** está configurada para que se vea igual en cualquier dispositivo (incluso si no tiene instalada la fuente).

    * **Fuente para orden de trazos**: Si no utilizas un addon para crear imágenes con el orden de trazos como el mencionado [Kanji Colorizer (stroke order diagrams)](https://ankiweb.net/shared/info/1964372878), podrás ver aun así el orden de trazos en las tarjetas de tipo LEER y ESCRIBIR (en cualquier dispositivo también). 
    
    {: .box-note}
    Si no se ven los trazos de algún kanji es porque seguramente no forma parte del kanken y aunque uses el Kanji Colorizer, seguramente tampoco obtendrías el orden de trazos.

Para el resto de fuentes, la fuente dependerá del sistema en el que ejecutes Anki, pero no debería ser un problema, ya que donde es realmente molesto es en Palabra. Además, debería de verse prácticamente igual con las fuentes elegidas.

{: .box-note}
**¿Por qué no se ha configurado para que las fuentes se vean igual en todos los dispositivos?**<br>
El motivo es que cargar fuentes ralentiza la carga de las tarjetas durante las revisiones (como detalle, añadir imágenes grandes también ralentiza la carga de las tarjetas).<br>
En mi móvil con estas dos que he elegido, no tengo casi latencia, pero añadir una tercera fuente sí es un problema. Mi móvil no es que sea muy bueno, pero eso lo convierte en un buen estándar porque si va bien en mi móvil debería ir bien en un móvil promedio.
También podría usar la fuente de Palabra para todo, pero es que la verdad es que esta fuente se ve muy bien en ese campo pero no en los demás y lo mismo pasa al revés.<br>
De todas formas, en futuras versiones incluiré una optimización para que todo pase primero por Javascript y haré que lo que se tenga que ver rápido se muestre rápido, pero secciones como Imágenes o Diagrama aparecerán lo más rápidamente posible pero siempre después de lo importante. Además, todas las fuentes estarán incluidas para no depender del sistema operativo.