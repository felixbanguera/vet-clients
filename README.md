# vet-clients
Microservicio de clientes para el ejercicio de veterinaria

Este microservicio gestiona los **clientes de un sistema veterinario**, incluyendo su información de contacto y las mascotas asociadas.  
Está diseñado como un servicio independiente que puede ser consumido por otros microservicios (por ejemplo, un servicio de **Autenticación** o **Citas**) mediante APIs RESTful.

---

## 🚀 Características

- Operaciones CRUD para clientes (`crear`, `leer`, `actualizar`, `eliminar`)
- Almacenamiento de datos en **MongoDB (NoSQL)**
- Construido con **Node.js** y **Express**
- Validación de datos con **Mongoose**
- Gestión de variables de entorno con **dotenv**
- Seguridad mediante **autenticación con API Key**
- CORS habilitado para la integración con otros servicios

---

## 🧱 Tecnologías utilizadas

| Componente | Tecnología |
|-------------|-------------|
| Entorno de ejecución | Node.js |
| Framework | Express |
| Base de datos | MongoDB |
| ODM | Mongoose |
| Seguridad | Middleware de API Key |
| Variables de entorno | dotenv |
| Recarga automática | nodemon |

---

## 🛠️ Guía de instalación local

Sigue estos pasos para ejecutar el proyecto localmente.

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/<tu-usuario>/vet-clients.git
cd vet-clients
```

### 2️⃣ Instalar dependencias

```bash
npm install
```

### 3️⃣ Instalar y ejecutar MongoDB localmente

#### macOS (Homebrew)
```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

#### Ubuntu / Linux
```bash
sudo apt update
sudo apt install -y mongodb
sudo systemctl start mongodb
sudo systemctl enable mongodb
```

#### Windows
Descarga e instala desde [MongoDB Community Server](https://www.mongodb.com/try/download/community).  
Asegúrate de que el servicio `mongod` esté en ejecución.

---

### 4️⃣ Configurar variables de entorno

Crea un archivo llamado `.env` en la raíz del proyecto y agrega lo siguiente:

```
PORT=4000
MONGO_URI=mongodb://localhost:27017/vet_clients_db
API_KEY=miclaveprivada123
```

Puedes modificar `MONGO_URI` y `API_KEY` según tu configuración.

---

### 5️⃣ Ejecutar el servicio

#### Modo desarrollo (con recarga automática):
```bash
npm run dev
```

#### Modo producción:
```bash
npm start
```

El servidor debería iniciar en:
```
http://localhost:4000
```

---

## 🧩 Endpoints del API

### URL base
```
http://localhost:4000/api/clients
```

### Autenticación
Todos los endpoints requieren una **API Key válida** en el encabezado `x-api-key`:

```
x-api-key: <tu_api_key>
```

---

### ➕ Crear un nuevo cliente
**POST** `/api/clients`

#### Cuerpo de la solicitud
```json
{
  "name": "Carlos Mendoza",
  "phone": "3001234567",
  "email": "carlosm@example.com",
  "address": "Calle 45 #12-34",
  "active": true,
  "pets": [11]
}
```

---

### 📋 Obtener todos los clientes
**GET** `/api/clients`

---

### 🔍 Obtener un cliente por ID
**GET** `/api/clients/:id`

---

### ✏️ Actualizar un cliente
**PUT** `/api/clients/:id`

#### Ejemplo de cuerpo (solo los campos a actualizar)
```json
{
  "phone": "3009876543",
  "active": false
}
```

---

### ❌ Eliminar un cliente
**DELETE** `/api/clients/:id`

---

## 🔐 Middleware de autenticación con API Key

Este microservicio utiliza un middleware que valida la API Key en cada solicitud protegida.

Ejemplo (`authMiddleware.js`):

```js
export function verifyApiKey(req, res, next) {
  const apiKey = req.headers["x-api-key"];
  if (!apiKey || apiKey !== process.env.API_KEY) {
    return res.status(403).json({ message: "Acceso denegado: API Key inválida o ausente" });
  }
  next();
}
```
---

## 🧪 Pruebas

Puedes usar **Postman**, **Insomnia** o **curl** para probar los endpoints.

Ejemplo con `curl`:
```bash
curl -X POST http://localhost:4000/api/clients   -H "Content-Type: application/json"   -H "x-api-key: miclaveprivada123"   -d '{"name":"Carlos Mendoza","phone":"3001234567","email":"carlosm@example.com","active":true}'
```

---

## 🧹 Comandos útiles

| Comando | Descripción |
|----------|--------------|
| `npm install` | Instalar dependencias |
| `npm run dev` | Iniciar con recarga automática |
| `npm start` | Iniciar en modo producción |
| `brew services stop mongodb-community` | Detener MongoDB en macOS |
| `sudo systemctl stop mongodb` | Detener MongoDB en Linux |

---

## 🧾 Licencia

Este proyecto hace parte de un ejercicio académico para la asignatura de **Patrones de Diseño de Software**.  
Puedes usarlo o modificarlo libremente con fines educativos.

---

👨‍💻 **Autor:** Félix Banguera  
📅 *Actualizado: Octubre 2025*
