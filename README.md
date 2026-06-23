# Panel Central de Apps

Panel estatico para agrupar enlaces a apps y plataformas de trabajo.

## Como abrirlo

Abre `index.html` en el navegador.

## Como subirlo a GitHub

1. Crea un repositorio nuevo en GitHub.
2. Sube todos los archivos de esta carpeta al repositorio.
3. En GitHub, entra en `Settings` > `Pages`.
4. En `Build and deployment`, selecciona `Deploy from a branch`.
5. Elige la rama `main` y la carpeta `/root`.
6. Guarda los cambios y espera a que GitHub Pages genere el enlace.

## Como cambiar apps

Edita el array `apps` dentro de `app.js`.

Campos principales:

- `name`: nombre visible de la app.
- `href`: enlace que se abre al clicar la tarjeta.
- `category`: categoria usada por los filtros.
- `owner`: etiqueta secundaria de la tarjeta.
- `icon`: icono que se renderiza en la tarjeta.

## Apps incluidas

- Importador Universal: `https://avrilcelada2401.github.io/Importador-3.0/`
- Playoff Help QAS: `https://playoffhelpspre.playoffinformatica.com/qas`
- Playoff Track: `https://playoff-track-89466.web.app`
- Feedback Analyzer: `https://feedback-analyzer-4f09d.web.app`
- Control Impagados: `https://control-impagados-3-0.web.app/`
- CS Metrics: `https://cs-metrics.vercel.app/`
- NPS Tracker: `https://nps-tracker-three.vercel.app/`
- Supaclean: `https://supaclean.web.app/`
- Lifeboat: `https://lifeboat.playoffinformatica.com/`

## Estructura

- `index.html`: estructura principal.
- `styles.css`: estilos del panel.
- `app.js`: listado de apps, filtros e iconos.
- `assets/`: logo y favicon.
