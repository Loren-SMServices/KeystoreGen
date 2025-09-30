
const { Wallet } = require('ethers');
const fs = require('fs');

async function createKeystore() {
  // CLAVE PRIVADA: Por favor, no la mantengas directamente en el código de producción.
  // Considera usar variables de entorno o un método seguro para introducirla.
  const privateKey = 'TuCkavePrivadaDeWalletAqui'; 

  // Crea un objeto Wallet a partir de la clave privada
  const wallet = new Wallet(privateKey);

  // CONTRASEÑA DEL KEYSTORE: Esta contraseña se usará para cifrar el archivo keystore.
  // Asegúrate de usar una contraseña fuerte y de recordarla.
  const keystorePassword = 'TuContrasenaParaElKeystoreAqui'; 

  // Exporta el keystore cifrado
  const keystore = await wallet.encrypt(keystorePassword);

  // Guarda el keystore en un archivo
  fs.writeFileSync('keystore.json', keystore);

  console.log('Keystore generado y guardado como keystore.json');
  console.log('Dirección de la billetera (derivada de tu clave privada):', wallet.address);
  console.log('Por favor, guarda la contraseña del keystore: "' + keystorePassword + '" y el archivo keystore.json en un lugar seguro.');
  console.log('Esta contraseña es fundamental para acceder a tu wallet.');
}

createKeystore();
