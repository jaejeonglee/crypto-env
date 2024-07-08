# crypto-env-js

To prevent sensitive information from being exposed in the code, it is common practice to manage it using .env files. However, since the contents of environment variables exist in plain text, if someone gains access to the directory, they can easily view the information.

While `secure-env` can be used to hide plain text in .env files, the symmetric key still resides in the .env file. In this case, you can use `crypto-env-js` to securely manage the .env file containing the symmetric key for the .enc file.

`crypto-env-js` allows you to input the symmetric key directly, so you can hide the key from the directory. The contents decrypted using the symmetric key are then re-encrypted with a random key and stored in memory. You only need to know the KEY of the environment variable. The encrypted VALUES are decrypted and provided each time they are used. This helps to minimize the risk of dumps.

## Requires

    .env.enc file encrypted using secure-env.

## How it works

    1. Initialization: The initEnv function prompts the user to enter a symmetric key, which is used to decrypt the environment variable file. The decrypted environment variables are then encrypted with a new random key and stored in memory.
    2. Decryption and Re-encryption: The globalEnv function decrypts the environment variables stored in memory and immediately re-encrypts them with a new random key to ensure sensitive information does not remain in memory for long.

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
