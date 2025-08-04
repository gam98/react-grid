# React Cards Grid 🎯

> Un proyecto React moderno con TypeScript que muestra una grid responsive de cards de cursos, construido con Vite para un desarrollo rápido y eficiente.

![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=flat-square&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7.0.4-646CFF?style=flat-square&logo=vite)

## ✨ Características

- 🎨 **Diseño Responsive**: Grid que se adapta perfectamente a todos los tamaños de pantalla
- 🖼️ **Cards Interactivas**: Cards con imágenes de alta calidad, categorías y efectos hover suaves
- ⚡ **Desarrollo Rápido**: Powered by Vite para hot reload instantáneo
- 🔒 **Type Safety**: TypeScript para un código más robusto y mantenible
- 🎯 **Componentes Modulares**: Arquitectura escalable y reutilizable
- 🌐 **Imágenes Optimizadas**: Integración con Unsplash para imágenes de alta calidad
- 📱 **Mobile First**: Diseño optimizado para dispositivos móviles

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js (versión 16 o superior)
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/react-cards-grid.git

# Navegar al directorio del proyecto
cd react-cards-grid

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

¡Abre [http://localhost:5173](http://localhost:5173) para ver la aplicación en tu navegador! 🎉

## 📜 Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | 🔥 Ejecuta la aplicación en modo desarrollo con hot reload |
| `npm run build` | 📦 Construye la aplicación optimizada para producción |
| `npm run preview` | 👀 Previsualiza la build de producción localmente |
| `npm run lint` | 🔍 Ejecuta ESLint para encontrar y corregir problemas de código |

## 📁 Estructura del Proyecto

```text
react-cards-grid/
├── 📁 public/              # Archivos estáticos
├── 📁 src/
│   ├── 📁 assets/          # Recursos estáticos (iconos, etc.)
│   ├── 📁 data/            # Datos de ejemplo y configuración
│   │   └── cardsData.ts    # 📊 Datos de las cards
│   ├── 📁 images/          # Imágenes locales del proyecto
│   ├── 📁 types/           # Definiciones de tipos TypeScript
│   │   └── Card.ts         # 🏷️ Interfaces y tipos
│   ├── App.tsx             # 🎯 Componente principal
│   ├── App.css             # 🎨 Estilos principales
│   ├── index.css           # 🌐 Estilos globales
│   ├── main.tsx            # 🚪 Punto de entrada de la aplicación
│   └── vite-env.d.ts       # ⚙️ Tipos de Vite
├── eslint.config.js        # 📋 Configuración de ESLint
├── package.json            # 📦 Dependencias y scripts
├── tsconfig.json           # ⚙️ Configuración de TypeScript
├── vite.config.ts          # ⚡ Configuración de Vite
└── README.md               # 📖 Este archivo
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

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE](LICENSE) para más detalles.

## 👨‍💻 Autor

Creado con ❤️ por [Tu Nombre](https://github.com/tu-usuario)

---

⭐ ¡No olvides darle una estrella al proyecto si te gustó!