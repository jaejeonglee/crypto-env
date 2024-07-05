# crypto-env-js

`crypto-env-js` is a library designed to securely manage environment variables through encryption. This library uses symmetric key encryption to encrypt environment variables and decrypt them as needed.

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
