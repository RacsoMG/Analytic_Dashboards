Proyecto: Dashboard Analítico (React + Vite + Tailwind)

Estructura (resumen):
src/
├── api/              # firebase.js, dashboardApi.js (stubs)
├── assets/
├── components/
│   ├── ui/           # Card, Button, Badge (glassmorphism)
│   ├── charts/       # MainAreaChart, DistributionPieChart, GrowthBarChart
│   └── layout/       # Sidebar, Navbar, DashboardLayout, DashboardContainer, TransactionTable
├── context/          # DashboardContext.jsx (Context API + reducer)
├── hooks/            # useLiveStats.js, useTransactionSearch.js (debounce search)
├── pages/            # Overview.jsx
├── utils/            # formatters.js
├── App.jsx
└── main.jsx

Descripción corta:
Este scaffold crea un Dashboard Analítico con un `DashboardContainer.jsx` que orquesta
el estado global (Context API) y suscribe a `useLiveStats` para simular datos en vivo.
Las gráficas están implementadas con Recharts y memoizadas para optimizar renders.

Características implementadas:
- Estructura de carpetas solicitada.
- `DashboardContainer.jsx`: gestiona filtros (categoría, rango de fecha), renderiza layout,
  tarjetas con estilo glassmorphism, AreaChart principal y charts secundarios.
- `useLiveStats`: hook que genera datos aleatorios cada 3 segundos y notifica al container.
- `useTransactionSearch`: hook con búsqueda debounce (300ms) para filtrar transacciones.
- `TransactionTable`: tabla de transacciones con estado coloreado (Completada, Pendiente, Fallida).
- `DashboardContext`: estado global y dispatch para cambios eficientes en filtros/stats.
- Componentes de UI básicos (`Card`, `Button`, `Badge`) con Tailwind classes y glassmorphism.
- Gráficas (Recharts) memoizadas con optimización de renders.

Instrucciones de instalación y ejecución (rápido):
1) Asegúrate de tener Node.js 18+ y npm/yarn.
2) Desde la raíz del proyecto, instala dependencias necesarias:

   npm install react react-dom
   npm install -D vite tailwindcss postcss autoprefixer
   npm install recharts

3) Inicializa Tailwind (si aún no lo tienes):

   npx tailwindcss init -p

   y en `tailwind.config.js` agrega rutas bajo `content` apuntando a `src/**/*.{js,jsx}`.

4) Crea `src/index.css` con las directivas Tailwind (ej: @tailwind base; @tailwind components; @tailwind utilities;) y configura dark mode si quieres.

5) Ejecuta en modo desarrollo con Vite:

   npx vite

Notas sobre rendimiento y arquitectura:
- Las gráficas están envueltas en `React.memo` y el hook `useLiveStats` emite datos
  con un intervalo fijo para simular Firebase/WebSocket.
- Usa `useMemo` en `MainAreaChart` para preprocesar series y reducir trabajo en render.
- Los filtros (categoría) se actualizan en el `DashboardContext` y provocan
  reconexión del hook para simular datos relevantes a la categoría.

Próximos pasos recomendados:
- Conectar una fuente real de datos (Firebase / WebSocket / Axios) dentro de `src/api/`.
- Agregar paginación a la tabla de transacciones.
- Implementar filtros avanzados (por estado, rango de montos, fechas).
- Agregar formularios de reporte y exportación de datos a CSV/Excel.
- Añadir tests unitarios para hooks y componentes críticos.
- Implementar Dark/Light Mode toggle en el Navbar.
- Añadir notificaciones en tiempo real con Toast/Snackbar.

Guía rápida de dónde editar:
- Layout y orquestador principal: src/components/layout/DashboardContainer.jsx
- Tabla de transacciones: src/components/layout/TransactionTable.jsx
- Hook de datos en vivo: src/hooks/useLiveStats.js
- Hook de búsqueda debounce: src/hooks/useTransactionSearch.js
- Estado global: src/context/DashboardContext.jsx
- Gráficas: src/components/charts/*.jsx
