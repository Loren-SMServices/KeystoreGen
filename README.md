# Generador de Keystore con Ethers.js  

Esta aplicación permite generar un archivo **keystore.json** a partir de una clave privada de Ethereum y protegerlo con una contraseña.  
El keystore es un archivo cifrado que representa tu wallet y puede usarse para importar tu cuenta en diferentes clientes o aplicaciones.

## Requisitos

- Node.js (v16 o superior recomendado)  
- npm o yarn  

## Instalación

Clona el repositorio o descarga el archivo:

```bash
git clone https://github.com/Loren-SMServices/KeystoreGen.git
```

Instala las dependencias necesarias:

```bash
npm install ethers
```

## Uso local (antes de GitHub Actions)

1. Edita el archivo `index.js` (o el nombre que tenga tu script).  
2. Inicialmente, si quieres probar localmente, puedes configurar las variables o usar directamente variables de entorno.

```javascript
const privateKey = process.env.PRIVATE_KEY;  
const keystorePassword = process.env.KEYSTORE_PASSWORD;
```

3. Ejecuta el script:

```bash
PRIVATE_KEY="tuClavePrivada" KEYSTORE_PASSWORD="tuContrasena" node index.js
```

4. El programa generará un archivo `keystore.json` en el directorio actual y mostrará en consola la **dirección de la billetera** correspondiente.

## Uso con GitHub Actions (automatizado)

### Configuración de secretos

1. Ve a tu repositorio en GitHub → **Settings** → **Secrets and variables** → **Actions**.  
2. Añade los siguientes secretos con los valores apropiados:

   - `PRIVATE_KEY`: tu clave privada de wallet.  
   - `KEYSTORE_PASSWORD`: la contraseña para cifrar el keystore.

### Archivo workflow

El repositorio ya incluye un workflow en `.github/workflows/generate-keystore.yml` que:

- Se ejecuta manualmente (workflow_dispatch).
- Instala Node.js y dependencias.
- Ejecuta el script para generar el keystore usando los secretos.
- Guarda el `keystore.json` generado como artefacto descargable.

### Cómo lanzar la acción

- En GitHub, abre la pestaña **Actions** en tu repositorio.  
- Selecciona el workflow **Generar Keystore** en la lista.  
- Haz clic en **Run workflow** (Ejecutar workflow), elige la rama (normalmente `main` o `master`) y presiona **Run workflow**.  

Al terminar, en la ejecución verás el artefacto `keystore` para descargar el archivo generado.

## Advertencias de Seguridad

- **Nunca** compartas tu clave privada ni la subas a repositorios públicos.  
- Guarda el archivo `keystore.json` y la contraseña en un lugar seguro y separado.  
- Si pierdes la contraseña, **no podrás recuperar ni descifrar el keystore**.  
- Utiliza variables de entorno o sistemas de gestión de secretos para proteger datos sensibles.

## Ejemplo de salida

Al ejecutar el script se mostrará algo similar a:

```
Keystore generado y guardado como keystore.json
Dirección de la billetera: 0x1234abcd5678efgh...
Por favor, guarda la contraseña del keystore y el archivo en un lugar seguro.
Esta contraseña es fundamental para acceder a tu wallet.
```

***

Este README explica cómo usar el generador localmente y cómo automatizarlo en GitHub de forma segura y controlada. ¿Quieres ayuda con la integración continua o despliegue adicional?
