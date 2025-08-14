# Proyecto de Autenticación con Node.js, JWT y MongoDB

Este proyecto implementa un **sistema de autenticación seguro** usando Node.js, Express, JWT y MongoDB.  
Permite registrar usuarios, iniciar sesión y acceder a rutas protegidas mediante tokens JWT.

---

## Características

- Registro de usuarios con validación de campos.  
- Login con generación de token JWT.  
- Rutas protegidas mediante middleware `protect`.  
- Contraseñas encriptadas con bcrypt.  
- Rate limiting para prevenir ataques de fuerza bruta.  
- Seguridad mejorada con `helmet` y `cors`.  

---

## Tecnologías utilizadas

- Node.js  
- Express  
- MongoDB / MongoDB Atlas  
- JSON Web Token (jsonwebtoken)  
- bcryptjs  
- express-rate-limit  
- helmet  
- cors  

---

## Instalación

```
# Clonar el repositorio
git clone <URL_DEL_REPOSITORIO>

# Entrar al proyecto
cd Authentication

# Instalar dependencias
npm install
````
Configuración de variables de entorno
Crea un archivo .env en la raíz del proyecto:
```
PORT=5000
MONGO_URI=<TU_URI_DE_MONGODB>
JWT_SECRET=<TU_CLAVE_SECRETA>
```
## Uso
- Ejecutar el servidor
npm run dev
- Probar la API con Postman
```
Registro de usuario
Método: POST

URL: http://localhost:5000/api/auth/register

Headers: Content-Type: application/json

Body:

json
Copiar
Editar
{
  "name": "Juan Perez",
  "email": "juan@example.com",
  "password": "123456"
}
```
Login
Método: POST

URL: http://localhost:5000/api/auth/login

Headers: Content-Type: application/json

Body:

json
Copiar
Editar
{
  "email": "juan@example.com",
  "password": "123456"
}
Respuesta: token JWT y datos del usuario.

Ruta protegida /profile
Método: GET

URL: http://localhost:5000/api/auth/profile

Headers:

makefile
Copiar
Editar
Authorization: Bearer <TOKEN_OBTENIDO_DEL_LOGIN>
Respuesta: datos del usuario (sin contraseña).

Notas de seguridad
Las contraseñas se almacenan encriptadas con bcrypt.

Tokens JWT con expiración de 1 día.

Rate limiting aplicado en la ruta de login.

Helmet y CORS configurados para mejorar la seguridad.

Contribuciones
Este proyecto es solo para fines educativos y de portafolio.

Autor
Gamaliel Jarquin
