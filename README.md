# Umbral Inmobiliaria

Sitio web para una inmobiliaria con catálogo de propiedades filtrable, navegación adaptable a dispositivos móviles y formulario de contacto.

## Tecnologías

- React para la interfaz y el estado interactivo.
- Vite para desarrollo y compilación.
- Tailwind CSS para utilidades responsive y estilos de interacción.
- CSS para la identidad visual y los estilos específicos de cada sección.

## Estructura del proyecto

- `src/components/`: secciones y componentes reutilizables de la página.
- `src/data/`: datos de las propiedades.
- `src/hooks/`: lógica reutilizable, como el filtrado del catálogo.
- `src/App.jsx`: composición de la landing y conexión entre sus secciones.

## Desarrollo local

```bash
pnpm install
pnpm dev
```

## Build de producción

```bash
pnpm build
pnpm preview
```

El formulario necesita conectarse a un servicio de envío para recibir consultas.
