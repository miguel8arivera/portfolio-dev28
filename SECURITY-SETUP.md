# 🔒 Configuración de Seguridad - Pasos Obligatorios

## ⚠️ ACCIÓN INMEDIATA REQUERIDA

Tu contraseña de Gmail **`281095my`** ha sido expuesta en el código. **Debes cambiarla AHORA**.

---

## 📋 Lista de Tareas de Seguridad

### ✅ Ya Completado
- [x] Removidas credenciales hardcodeadas del código
- [x] Implementado sistema de variables de entorno
- [x] Actualizado `.gitignore` para proteger `.env`
- [x] Creado archivo `.env.example` como template

### 🔴 URGENTE - Debes hacer AHORA

#### 1. Cambiar Contraseña de Gmail
1. Ve a https://myaccount.google.com/security
2. Cambia tu contraseña actual inmediatamente
3. **Si este repositorio es público en GitHub/GitLab, considera que la contraseña está completamente comprometida**

#### 2. Configurar Contraseña de Aplicación de Gmail

Gmail no permite usar tu contraseña normal con nodemailer. Necesitas una "Contraseña de aplicación":

**Pasos:**
1. Ve a https://myaccount.google.com/security
2. Activa "Verificación en dos pasos" (si no la tienes)
3. Busca "Contraseñas de aplicación"
4. Selecciona:
   - **Aplicación:** Correo
   - **Dispositivo:** Otro (nombre personalizado: "Portfolio Nodemailer")
5. Gmail generará una contraseña de 16 caracteres (ejemplo: `abcd efgh ijkl mnop`)
6. **Copia esa contraseña SIN ESPACIOS**

#### 3. Actualizar archivo `.env`

Abre el archivo `.env` y actualiza:

```env
EMAIL_PASS=aqui_pega_la_contraseña_de_aplicacion_sin_espacios
```

#### 4. Verificar que `.env` NO esté en Git

Ejecuta en la terminal:

```bash
git status
```

**NO debe aparecer el archivo `.env`** en la lista de cambios.

Si aparece, ejecuta:
```bash
git rm --cached .env
git commit -m "Remove .env from git tracking"
```

#### 5. Si tu repositorio es público

Si has hecho commit o push de las credenciales a GitHub/GitLab:

1. **La contraseña está permanentemente en el historial de Git**
2. Debes:
   - Cambiar la contraseña de Gmail inmediatamente
   - Considerar limpiar el historial de Git (avanzado)
   - O crear un nuevo repositorio desde cero

---

## 🧪 Probar la Configuración

Después de configurar todo:

```bash
# Desde la raíz del proyecto
npm run server
```

El servidor debe iniciar sin errores. Si ves:
```
server listing to port 5000 only
```

Significa que la configuración está correcta.

---

## 📝 Mejores Prácticas Implementadas

### ✅ Variables de Entorno
- **`.env`** - Contiene las credenciales reales (NUNCA commitear)
- **`.env.example`** - Template sin credenciales (SÍ commitear)
- **`.gitignore`** - Protege el archivo `.env`

### ✅ Código Actualizado
- `contactRoute.js` ahora usa `process.env.EMAIL_USER` y `process.env.EMAIL_PASS`
- No hay credenciales hardcodeadas en el código
- El servidor ya carga dotenv con `require("dotenv").config()`

---

## 🚀 Para Producción (Heroku/Vercel/etc)

Cuando despliegues a producción, configura las variables de entorno en el panel de tu proveedor:

### Heroku
```bash
heroku config:set EMAIL_USER=tu_email@gmail.com
heroku config:set EMAIL_PASS=tu_contraseña_de_aplicacion
heroku config:set EMAIL_RECIPIENT=tu_email@gmail.com
```

### Vercel
```bash
vercel env add EMAIL_USER
vercel env add EMAIL_PASS
vercel env add EMAIL_RECIPIENT
```

O usa el panel web de configuración.

---

## ❓ FAQ

**P: ¿Por qué no funciona con mi contraseña normal de Gmail?**
R: Gmail bloquea aplicaciones menos seguras. Debes usar una "Contraseña de aplicación".

**P: ¿Puedo usar otro servicio de email?**
R: Sí, puedes cambiar el servicio en `contactRoute.js` (Outlook, SendGrid, etc.)

**P: ¿Es seguro ahora?**
R: Sí, siempre que:
- Hayas cambiado la contraseña expuesta
- El archivo `.env` NO esté en Git
- Nunca hagas commit del archivo `.env`

---

## 📞 Soporte

Si tienes problemas:
1. Verifica que la verificación en dos pasos esté activa
2. Regenera la contraseña de aplicación
3. Verifica que no haya espacios en la contraseña del `.env`
4. Revisa los logs del servidor para errores específicos

---

**Última actualización:** 2026-02-03
**Estado:** 🔴 REQUIERE CONFIGURACIÓN MANUAL
