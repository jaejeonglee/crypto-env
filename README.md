# crypto-env

`crypto-env` is a library designed to securely manage environment variables through encryption. This library uses symmetric key encryption to encrypt environment variables and decrypt them as needed.

## How it works

    1.	Initialization: The initEnv function prompts the user to enter a symmetric key, which is used to decrypt the environment variable file. The decrypted environment variables are then encrypted with a new random key and stored in memory.
    2.	Decryption and Re-encryption: The globalEnv function decrypts the environment variables stored in memory and immediately re-encrypts them with a new random key to ensure sensitive information does not remain in memory for long.

## Installation

```bash
npm install crypto-env
```

## Usage

### Initialization

```javascript
const { initEnv } = require("crypto-env");

initEnv(); //Called only once when the server is running
```

### Accessing Environment Variables

```javascript
const { globalEnv } = require("crypto-env");

console.log(globalEnv().YOUR_ENV_VARIABLE);
```

### Example

```javascript
const { initEnv, globalEnv } = require("crypto-env");

// Initialization
initEnv();

// Accessing environment variables
const env = globalEnv();
console.log(`Database User: ${env.DB_USER}`);
console.log(`Database Password: ${env.DB_PASSWORD}`);
console.log(`Database Host: ${env.DB_HOST}`);
console.log(`Database Name: ${env.DB_DATABASE}`);
```

## Dependencies

    •	crypto-js: A library for encryption
    •	readline-sync: A library for synchronous user input
    •	secure-env: A library for encrypting and decrypting environment variable files
