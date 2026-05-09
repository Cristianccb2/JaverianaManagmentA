# Javeriana Gestor de eventos y leads

SPA desarrollada como prueba técnica para la gestión de programas académicos y registro de leads.  
La aplicación está construida con React, Redux Toolkit y TypeScript, implementando arquitectura escalable tipo feature-based.


# En el siguiente link se encuentra la aplicación funcionando

> https://javeriana-managment-a-bic7.vercel.app/

#  Tecnologías utilizadas

- React + Vite
- TypeScript
- Redux Toolkit
- React Redux
- Axios
- React Hook Form
- Zod
- Reselect
- TailwindCSS
- localStorage API

---

# Características principales

##  Gestión de programas académicos

- Datos simulados con estructura tipo backend
- Transformación de información desde API mock
- Renderizado dinámico de cards

##  Filtros avanzados

La aplicación permite filtrar programas por:

- Búsqueda por texto
- Categoría (Pregrado, Posgrado, Educación Continua)
- Modalidad (Presencial, Virtual, Híbrido)
- Facultad dinámica

Los filtros funcionan en tiempo real sin recarga de página.

---

## Registro de Leads

- Formulario con React Hook Form
- Validación con Zod
- Restricción de dominio institucional (`@javeriana.edu.co`)
- Normalización de datos
- Persistencia en Redux + localStorage

---

##  Persistencia de datos

Los leads se almacenan en:

```
localStorage
```
(para practicidad de la evaluación los leds almacenados en el localeStorage se veran al final del dachboard)

Esto permite mantener información incluso después de recargar la aplicación.

---

#  Arquitectura del proyecto

```
src/
--- app/              # Store de Redux
--- components/       # Componentes reutilizables
--- features/
─ events/       # Lógica de eventos/programas
─ leads/        # Gestión de leads
---hooks/            # Hooks de redux
--- pages/            # Vistas principales
--- services/         # instancia de axios
--- utils/            # manejo del local storage y estandarización de textos
--- main.tsx
```

---

# Decisiones técnicas

## Redux Toolkit

Se utilizó para centralizar el estado global:

- Eventos
- Filtros
- Leads

Permite escalabilidad y control predecible del estado.

---


## Formularios modernos

Se integró:

- React Hook Form (manejo eficiente de inputs)
- Zod (validación tipada)

---

## Simulación de API

Se utiliza JSONPlaceholder como simulación de backend, pero los datos que fueron modificados para mejora de la experiencia 

---

# Instalación y ejecución

## 1. Clonar repositorio

```
https://github.com/Cristianccb2/JaverianaManagmentA.git

```

## 2. Entrar al proyecto

```
cd javeriana-leads-manager
```

## 3. Instalar dependencias

```
npm install
```

## 4. Ejecutar en desarrollo

```
npm run dev
```

# Modo de uso
El operario tiene acceso a todos los eventos recuperados por la "API" junto con sus respecctivos filtros, una vez hay un interesado el operario puede insicribirlo al avento, donde se abrira un boton con la información de contacto, de ser finalizado el proceso de forma exitosa el interesado "lead" quedara almacenado


# Funcionalidades adicionales
La pagina web cuenta con modo oscuro que se adapta dependiendo las configuraciones del navegador

---

# Autor

Cristian Camilo Cabrera Barreto
