# Simple Store

Una aplicación de e-commerce simple construida con React, Vite y TailwindCSS que utiliza la FakeStore API para mostrar productos.

## Características

- 🛍️ Catálogo de productos con filtros por categoría
- 🔍 Búsqueda de productos
- 🛒 Carrito de compras funcional
- 👤 Sistema de autenticación
- 📱 Diseño responsive
- ⚡ Interfaz rápida con Vite

## Tecnologías Utilizadas

- **React 19** - Biblioteca de interfaz de usuario
- **Vite** - Herramienta de construcción y desarrollo
- **TailwindCSS** - Framework de CSS utilitario
- **React Router DOM** - Enrutamiento
- **React Hook Form** - Manejo de formularios
- **Axios** - Cliente HTTP para API
- **FakeStore API** - API de productos de prueba

## Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── layout/         # Componentes de layout
│   ├── CartItem.jsx    # Item del carrito
│   ├── Notification.jsx # Notificaciones
│   ├── ProductCard.jsx # Tarjeta de producto
│   ├── ProductModal.jsx # Modal de producto
│   └── SearchBar.jsx   # Barra de búsqueda
├── context/            # Contextos de React
│   ├── AuthContext.jsx # Contexto de autenticación
│   ├── CartContext.jsx # Contexto del carrito
│   └── StoreContext.jsx # Contexto de la tienda
├── pages/              # Páginas principales
│   ├── Cart.jsx        # Página del carrito
│   ├── Home.jsx        # Página de inicio
│   ├── Login.jsx       # Página de login
│   └── Store.jsx       # Página de la tienda
├── services/           # Servicios y API
│   └── api.js          # Configuración de Axios y endpoints
├── App.jsx             # Componente principal
└── main.jsx            # Punto de entrada
```

## Instalación y Configuración

1. **Clonar el repositorio**

   ```bash
   git clone <url-del-repositorio>
   cd simple-store
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**

   ```bash
   npm run dev
   ```

4. **Construir para producción**

   ```bash
   npm run build
   ```

5. **Previsualizar build de producción**
   ```bash
   npm run preview
   ```

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run lint` - Ejecuta ESLint para revisar el código
- `npm run preview` - Previsualiza el build de producción

## API

La aplicación utiliza la [FakeStore API](https://fakestoreapi.com/) que proporciona:

- **GET /products** - Obtener todos los productos
- **GET /products/{id}** - Obtener un producto específico
- **GET /products/categories** - Obtener categorías
- **POST /auth/login** - Autenticación de usuario

### Credenciales de prueba:

- **Usuario:** `mor_2314`
- **Contraseña:** `83r5^_`

## Funcionalidades Principales

### Tienda

- Visualización de productos en grid responsive
- Filtrado por categorías
- Búsqueda por nombre de producto
- Modal con detalles del producto

### Carrito

- Agregar/quitar productos
- Modificar cantidades
- Cálculo automático de totales
- Persistencia en localStorage

### Autenticación

- Login con credenciales
- Manejo de tokens JWT
- Protección de rutas (si aplica)

## Desarrollo

### Estructura de Contextos

- **StoreContext**: Maneja productos, categorías y filtros
- **CartContext**: Gestiona el estado del carrito de compras
- **AuthContext**: Controla la autenticación del usuario

### Componentes Principales

- **ProductCard**: Tarjeta individual de producto
- **ProductModal**: Modal con detalles expandidos
- **CartItem**: Item individual en el carrito
- **SearchBar**: Componente de búsqueda

## Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT.
