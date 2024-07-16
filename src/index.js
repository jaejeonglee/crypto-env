const CryptoJS = require("crypto-js");
const secureEnv = require("secure-env");
const readlineSync = require("readline-sync");

let encryptedEnv = {};
let randomKey;
let renewOption;

const initEnv = () => {
  try {
    let enteredKey = readlineSync.question("Enter key: ", {
      hideEchoBack: true,
    });

    const decryptedEnv = secureEnv({ secret: enteredKey });

    if (!decryptedEnv) {
      throw new Error();
    }
    while (true) {
      const option = readlineSync.question(
        "\nrenew on every env usage:\n 1. yes\n 2. no\n 3. process exit\nEnter : "
      );

      if (option === "1") {
        renewOption = true;
        encryptEnv(decryptedEnv);

        break;
      } else if (option === "2") {
        renewOption = false;
        encryptEnv(decryptedEnv);

        break;
      } else if (option === "3") {
        process.exit(1);
      } else {
        console.error("\n must be choose one");
      }
    }
  } catch (error) {
    console.error("Fail to initialize with key. Please check the key.");
    process.exit(1);
  }
};

const globalEnv = () => {
  try {
    const decryptedString = decrypt(encryptedEnv);
    const decryptedEnv = JSON.parse(decryptedString);

    if (renewOption) {
      encryptEnv(decryptedEnv);
    }
    return decryptedEnv;
  } catch (error) {
    throw new Error();
  }
};

const encryptEnv = (decryptedEnv) => {
  randomKey = CryptoJS.lib.WordArray.random(32).toString();

  const jsonString = JSON.stringify(decryptedEnv);
  encryptedEnv = encrypt(jsonString);
};

const encrypt = (decrypted) => {
  const key = CryptoJS.SHA256(randomKey).toString();
  const encrypted = CryptoJS.AES.encrypt(decrypted, key).toString();
  return encrypted;
};

const decrypt = (encrypted) => {
  const key = CryptoJS.SHA256(randomKey).toString();
  const bytes = CryptoJS.AES.decrypt(encrypted, key);
  const decrypted = bytes.toString(CryptoJS.enc.Utf8);
  return decrypted;
};

module.exports = { initEnv, globalEnv };
