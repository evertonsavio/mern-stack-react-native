### React Native com Express Backend

```
npm install -g expo-cli
expo --version
expo init clientApp
yarn add @expo/vector-icons
yarn add react-native-floating-action
yarn add redux react-redux
yarn add redux-thunk redux-devtools-extension
yarn add formik
yarn add yup
```

### Node Server

```
npm init -y
npm install express
npm install nodemon --save-dev
npm install --save express-validator  
npm install bcryptjs
npm install jsonwebtoken
```

- package.json:

```
  "scripts": {
    "start": "nodemon index.js"

npm run start
```

```
npm install dotenv
```

- criar arquivo .env -> PORT=3000

```
require('dotenv').config();
const port = process.env.PORT || 3000;
```

### MongoDB  
  
* https://www.mongodb.com/ -> Cloud -> Atlas -> Create a cluster  
* Em Database Acess -> Add New Database User  
* Network Acess -> Add IP Adresss -> Add Current IP Adress  
* mongodb+srv://everluca:<password>@cluster0.ybkh2.azure.mongodb.net/<dbname>?retryWrites=true&w=majority  
* Em Clusters -> CONNECT -> Connect your application  
* Em CLusters -> CONNECT -> Connect using MongoDB Compass -> Download Compass

### Mongoose  
  
* https://mongoosejs.com/  
* npm install moongoose  