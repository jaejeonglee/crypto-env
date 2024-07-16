# crypto-env-js

If you use secure-env, you can hide the plain text in your .env file, but the symmetric key can still be seen in the .env file. This is like leaving the key in front of the door.

crypto-env-js provides this features:

    • Enter the symmetric key directly. (The plain text of the .env file is no longer needed on the server. Just keep it safe in a secure place on your local machine.)
    • Re-encrypts the decrypted plain text with a random key and stores it in memory. (To prevent memory dumps.)
    • Can refresh the random key and encrypted plain text every time you use the environment variable. Hackers will have a hard time. (This is optional. Please refer to the usage instructions.)

## Requires

     •An 'enc' file is required. The file can be created using 'secure-env'.  See "https://www.npmjs.com/package/secure-env".

## How it works

    •Initialization: The initEnv function prompts the user to enter a symmetric key, which is used to decrypt the environment variable file. The decrypted environment variables are then encrypted with a new random key and stored in memory.
    •Decryption and Re-encryption: The globalEnv function decrypts the environment variables stored in memory and immediately re-encrypts(option) them with a new random key to ensure sensitive information does not remain in memory for long.

## Installation

```bash
npm install crypto-env-js
```

## Usage

### Initialization

```javascript
const { initEnv } = require("crypto-env-js");

initEnv(); //Called only once when the server is running
```

### Accessing Environment Variables

```javascript
const { globalEnv } = require("crypto-env-js");

console.log(globalEnv().YOUR_ENV_VARIABLE);
```

### Example

```javascript
//app.js
const { initEnv, globalEnv } = require("crypto-env-js");

// Initialization
initEnv();

// Accessing environment variables
console.log(globalEnv().YOUR_ENV_VARIABLE);

//1. node app.js
//2. Enter your enc key.
//3. Choose whether to renew env every time you use it.
```

## Dependencies

    • crypto-js: A library for encryption
    • readline-sync: A library for synchronous user input
    • secure-env: A library for encrypting and decrypting environment variable files

If you encounter an error or need a feature, please write in issues tab.🙏
