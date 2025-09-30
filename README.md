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

## Uso

1. Edita el archivo `index.js` (o el nombre que tenga tu script).  
2. Sustituye los valores de ejemplo por los tuyos propios:

```javascript
const privateKey = 'TuClavePrivadaDeWalletAqui';
const keystorePassword = 'TuContrasenaParaElKeystoreAqui';
```

3. Ejecuta el script:

```bash
node index.js
```

4. El programa generará un archivo `keystore.json` en el directorio actual y mostrará en consola la **dirección de la billetera** correspondiente.

## Advertencias de Seguridad

- **Nunca** compartas tu clave privada ni la subas a repositorios públicos.  
- Guarda el archivo `keystore.json` y la contraseña en un lugar seguro y separado.  
- Si pierdes la contraseña, **no podrás recuperar ni descifrar el keystore**.  
- Para entornos de producción, utiliza variables de entorno o sistemas de gestión de secretos en lugar de incrustar claves privadas directamente en el código.

## Ejemplo de salida

Al ejecutar el script se mostrará algo similar a:

```
Keystore generado y guardado como keystore.json
Dirección de la billetera (derivada de tu clave privada): 0x1234abcd5678efgh...
Por favor, guarda la contraseña del keystore: "TuContrasenaParaElKeystoreAqui" y el archivo keystore.json en un lugar seguro.
Esta contraseña es fundamental para acceder a tu wallet.
```

***
