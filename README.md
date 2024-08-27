# LinkDev - Prueba técnica con Astro

## Descripción

LinkDev es un prototipo de perfil público, similar a Linktree, desarrollado como parte de una prueba técnica para FRQTAL
utilizando Astro. El proyecto permite a los desarrolladores crear y compartir fácilmente tarjetas personalizadas con sus
redes sociales y enlaces de interés. Este es un prototipo básico que demuestra las funcionalidades esenciales.

## Tecnologías Utilizadas

Este proyecto fue desarrollado utilizando las siguientes tecnologías:

- **[Astro](https://astro.build/):** Framework de desarrollo web estático moderno.
- **[TypeScript](https://www.typescriptlang.org/):** Lenguaje de programación tipado, usado para mejorar la robustez y mantenibilidad del código.
- **[Node.js](https://nodejs.org/):** Entorno de ejecución para JavaScript en el servidor.
- **[CSS](https://developer.mozilla.org/es/docs/Web/CSS):** Utilizado para el diseño y el estilo de las páginas.
- **[GitHub Actions](https://github.com/features/actions):** Para la automatización de despliegue.

## Tabla de Contenidos

- [GitHub Pages](#github-pages)
- [Instalación](#instalación)
- [Uso](#uso)
- [Añadir un nuevo perfil](#añadir-un-nuevo-perfil)
- [Personalización](#personalización)
- [Contribución](#contribución)
- [Licencia](#licencia)

## GitHub Pages

El proyecto se encuentra subido a GitHub Pages y puede ser accedido a través del siguiente enlace:

[https://dald99.github.io/prueba-tecnica-astro/](https://dald99.github.io/prueba-tecnica-astro/)

## Instalación

Sigue estos pasos para instalar y ejecutar el proyecto localmente:

1. **Clonar el repositorio:**

   ```shell
   git clone https://github.com/Dald99/prueba-tecnica-astro
   ```

2. **Navegar al directorio del proyecto:**

   ```shell
   cd prueba-tecnica-astro
   ```

3. **Instalar dependencias:**

   ```shell
   npm install
   ```

## Uso

Para iniciar el proyecto en tu máquina local:

1. **Iniciar el servidor de desarrollo:**

    ```shell
    npm run dev
    ```

2. **Acceder al proyecto en tu navegador:**

   Abre tu navegador y navega a http://localhost:4321/prueba-tecnica-astro/.

3. **Explorar perfiles existentes:**

   En la página principal, encontrarás un buscador donde podrás escribir el nombre de un perfil para acceder a su
   página. Para esta demostración, se han incluido los siguientes perfiles:

    - dald99
    - janedoe
    - johndoe
    - karl98

## Añadir un nuevo perfil

1. **Abrir el archivo users.json:**

   Dentro del proyecto, abre el archivo users.json y añade un nuevo objeto con la siguiente estructura:

   ```json
       {
     "username": "nombre-de-usuario",
     "name": "Nombre del usuario",
     "location": "Ubicación del usuario",
     "bio": "Descripción del usuario",
     "avatarUrl": "URL de la imagen",
     "color": "Color de la tarjeta",
     "links": [
       {
         "name": "Nombre del enlace",
         "url": "URL del enlace"
       }
     ]
   }
   ```

2. **Guardar los cambios:**

   Una vez que hayas añadido el nuevo perfil, guarda el archivo y asegúrate de que todos los campos sean completados, ya
   que son obligatorios. Si falta alguno, el perfil no se mostrará en la aplicación.

## Personalización

### Links Disponibles

Los nombres de enlaces disponibles para las tarjetas son los siguientes. Estos nombres asignan automáticamente el icono
correspondiente en la tarjeta:

- Github
- LinkedIn
- Twitter
- Instagram
- Facebook
- Youtube
- Tiktok
- Dribbble
- Twitch
- Discord
- Reddit
- Snapchat
- Porfolio
- Pinterest

### Colores Disponibles

Puedes personalizar el color de la tarjeta utilizando uno de los siguientes nombres de colores (en inglés y minúsculas):

- red
- blue
- green
- yellow
- purple
- orange

## Contribución

Directrices para contribuir al proyecto:

1. Hacer un fork del repositorio.
2. Crear una nueva rama: `git checkout -b feature/nombre-de-tu-feature`
3. Realizar tus cambios y hacer commit: `git commit -m 'Agregar alguna característica'`
4. Subir a la rama: `git push origin feature/nombre-de-tu-feature`
5. Abrir un pull request.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT.