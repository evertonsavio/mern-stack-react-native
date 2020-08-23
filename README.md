### React Native com Express Backend

```
npm install -g expo-cli
expo --version
expo init awesomeApp
```

### Node Server

```
npm init -y
npm install express
npm install nodemon --save-dev
```

- package.json:

```
  "scripts": {
    "start": "nodemon index.js"

npm run start
```

````
npm install dotenv```

* criar arquivo .env -> PORT=3000  

```
require('dotenv').config();
const port = process.env.PORT || 3000;
```
