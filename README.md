#  Fan Page Marvel

Fan page de Marvel para conocer más sobre sus **héroes y villanos**. Explora a los personajes con sus imágenes, busca a tu favorito y consulta sus detalles y estadísticas.

## Características

- Galería de personajes de Marvel (héroes y villanos) con su imagen
- Buscador por nombre en tiempo real
- Contador de personajes encontrados
- Vista de detalle con nombre real, alias, editorial y ocupación
- Barras de estadísticas: inteligencia, fuerza, velocidad, durabilidad, poder y combate
- Imágenes personalizadas para algunos personajes (carpeta `public/images`)
- Tema verde en honor a Doomsday

##  Tecnologías

- [Preact](https://preactjs.com/) + React
- [Vite](https://vitejs.dev/)
- JavaScript, HTML y CSS
- [Superhero API](https://akabab.github.io/superhero-api/) para los datos de los personajes

##  Cómo ejecutarlo

1. Clona el repositorio:
   ```bash
   git clone https://github.com/IvancitoTec/Lab4-API.git
   ```
2. Entra a la carpeta e instala las dependencias:
   ```bash
   cd Lab4-API
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. Abre en el navegador la dirección que aparece en la terminal (normalmente `http://localhost:5173`).

## 🖼️ Cambiar las imágenes de un personaje

1. Guarda tu imagen en `public/images/`.
2. Agrégala al objeto `customImages` en `src/components/MarvelHeroes/MarvelHeroes.jsx`:
   ```jsx
   const customImages = {
     'Doctor Strange': '/images/Strange.webp'
   };
   ```
Los personajes que no estén en la lista usan la imagen de la API.

## 👤 Autor

Hecho por [IvancitoTec](https://github.com/IvancitoTec)
