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
yarn add @react-native-community/async-storage
yarn add jwt-decode
```

### Node Server

```
npm init -y
npm install express
npm install nodemon --save-dev
npm install --save express-validator
npm install bcryptjs
npm install jsonwebtoken
npm install cors
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

- https://www.mongodb.com/ -> Cloud -> Atlas -> Create a cluster
- Em Database Acess -> Add New Database User
- Network Acess -> Add IP Adresss -> Add Current IP Adress
- mongodb+srv://everluca:<password>@cluster0.ybkh2.azure.mongodb.net/<dbname>?retryWrites=true&w=majority
- Em Clusters -> CONNECT -> Connect your application
- Em CLusters -> CONNECT -> Connect using MongoDB Compass -> Download Compass

### Mongoose

- https://mongoosejs.com/
- npm install moongoose

### HEROKU

- Instalar Heroku CLI -> https://devcenter.heroku.com/articles/heroku-cli#getting-started
- Para checar versao no terminal digite: heroku --version
- Para login a partir do terminal: heroku login -i
- Apos criar a Procfile e alterar a package.json com a engines
- `heroku local web`
- `heroku create`
- `git push heroku master`
- A aplicacao deve estar no root do diretorio do git, ou seja package.json deve estar no mesmo diretorio do seu arquivo .git

### DEPLOY

- Alterar todos os endpoints para os urls do heroku por exemplo. Entao em houseAction:

```
const result = await fetch ('https://link-do-heroku/api/imoveis');
```

- Como estou usando expo e bem direto o deploy, abrir app.json e alterar nomes e icones conforme gosto.
- executar e push para expo cli:  
  ` expo publish`
- Criar uma conta em expo.io

* Depois que for publicado no expo cli, um link e providenciado, copie e coloque no browser.
* Para buildar o app, deve criar o bundle de cada plataforma:

#### Andriod:

```
expo build: android -t app-bunddle

Em appp.json e necessario configurar:
"android":{
  "package": "dev.evertonsavio.houselisting",
  "versionCode": 1
}
```

#### IOS:

```
Necessario uma Apple Developer account:

expo build: ios
```
