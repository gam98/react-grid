# React Cards Grid

Un proyecto React con TypeScript que muestra una grid responsive de cards de cursos, creado con Vite.

## Características

- ✅ Grid responsive que se adapta a diferentes tamaños de pantalla
- ✅ Cards con imágenes, categorías y información de cursos
- ✅ Efectos hover suaves
- ✅ Diseño moderno y limpio
- ✅ TypeScript para type safety
- ✅ Vite para desarrollo rápido

## Instalación

```bash
# Clonar el repositorio
git clone <tu-repositorio>

# Navegar al directorio
cd react-cards-grid

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

## Scripts Disponibles

- `npm run dev` - Ejecuta la aplicación en modo desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter

## Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
├── data/               # Datos de ejemplo
│   └── cardsData.ts    # Datos de las cards
├── types/              # Definiciones de tipos TypeScript
│   └── Card.ts         # Tipo Card
├── App.tsx             # Componente principal
├── App.css             # Estilos principales
└── main.tsx            # Punto de entrada
```

## Responsive Design

- **Mobile (< 768px)**: 1 columna
- **Tablet (768px - 1024px)**: 2 columnas
- **Desktop (> 1024px)**: 3 columnas

## Tecnologías Utilizadas

- React 18
- TypeScript
- Vite
- CSS Grid
- CSS Flexbox

## Personalización

Para agregar nuevas cards, edita el archivo `src/data/cardsData.ts`:

```typescript
export const cardsData: Card[] = [
  {
    id: 6,
    title: "Tu Nuevo Curso",
    coursesCount: 8,
    category: "Tu Categoría",
    image: "url-de-tu-imagen",
    bgColor: "#tu-color"
  }
];
```