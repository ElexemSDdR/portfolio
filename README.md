# Portfolio

_This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.2._

Mi portfolio personal hecho con Angular y TailwindCSS.

El mismo cuenta con varias features que van siendo agregadas, como:

- Traducción de idioma (sin el traductor de Google, sino a traves de content collection, como en Astro).
- Cambio de tema de oscuro a claro o de preferencia del sistema.
- Vista de mi CV para poder descargarlo y hasta imprimirlo.

## Content Collection

Para recrear una especie de _content collection feature_ como en Astro se utiliza la librería "[velite](https://velite.js.org/)", la cual es la más similar al content collection de Astro, aunque todavía sigue en una fase de desarrollo bastante temprana, es bastante estable.

<img src="./public/velite-logo.svg" style="height: 160px; width: 160px;" />

Con esta misma solo mando los archivos requeridos para formatearlos automaticamente con ngx-markdown en los componentes de Angular. Los archivos los escribo yo con cuidado para evitar malas traducciones desde Google Traductor o similar.

## Otras características

### Sobre Angular

Este proyecto utiliza la última versión de Angular (hasta ahora la v22) intentando utilizar las últimas features estables de la misma, como el nuevo decorador @Service en vez del @Injectable por ejemplo; o los más recientes usos de signals, como las subscripciones hechas con toSignal en vez del metodo subscribe.

### Sobre CSS y HTML

Se utilizan también nuevas features de **CSS** y **HTML** como los _anchor_ para los menús desplegables o los atributos _popover_ y _popovertarget_. Como también el uso de la función light-dark() en css para mejor cambio de claro a oscuro. Aunque el 95% del proyecto está utilizando TailwindCSS.

### Demás

Se usa también _prettier_ para acomodar mejor los archivos de angular (los .ts y .html) junto con los plugins de tailwind para mejor acomodo de las clases.

## Features agregadas hasta ahora:

- [x] Cambio de tema
- [ ] Traducción
- [ ] Descarga y visualización de mi CV
