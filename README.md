# crypto-env-js

If you use secure-env, you can hide the plain text in your .env file, but the symmetric key can still be seen in the .env file. This is like leaving the key in front of the door.

crypto-env-js provides the following features: 1. Enter the symmetric key directly. (The plain text of the .env file is no longer needed on the server. Just keep it safe in a secure place on your local machine.) 2. Re-encrypts the decrypted plain text with a random key and stores it in memory. (To prevent memory dumps!) 3. Can refresh the random key and encrypted plain text every time you use the environment variable. Hackers will have a hard time. (This is optional. Please refer to the usage instructions.)

## Requires

    .env.enc (You can create the encrypted .env file using 'npm secure-env'.)

## How it works

1. Initialization: The initEnv function prompts the user to enter a symmetric key, which is used to decrypt the environment variable file. The decrypted environment variables are then encrypted with a new random key and stored in memory.
2. Decryption and Re-encryption: The globalEnv function decrypts the environment variables stored in memory and immediately re-encrypts(option) them with a new random key to ensure sensitive information does not remain in memory for long.

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
const { initEnv, globalEnv } = require("crypto-env-js");

// Initialization
initEnv();

// Accessing environment variables
console.log(globalEnv().YOUR_ENV_VARIABLE);
```

## Dependencies

    • crypto-js: A library for encryption
    • readline-sync: A library for synchronous user input
    • secure-env: A library for encrypting and decrypting environment variable files
