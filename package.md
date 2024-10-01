{
  "name": "echo",
  "version": "1.0.0",
  "main": "index.js",
"scripts": {
  "start": "concurrently \"wait-on http://localhost:3000 && electron .\" \"npm run react-start\" \"npm run server-start\"",
  "react-start": "webpack serve --config webpack.config.js",
  "server-start": "node src/server.js",
  "build": "webpack --config webpack.config.js && electron-builder",
  "postinstall": "electron-builder install-app-deps"
},
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "@types/express": "^5.0.0",
    "@types/react": "^18.3.10",
    "@types/react-dom": "^18.3.0",
    "concurrently": "^9.0.1",
    "electron": "^32.1.2",
    "electron-builder": "^25.0.5",
    "electron-is-dev": "^3.0.1",
    "express": "^4.21.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "typescript": "^5.6.2",
    "wait-on": "^8.0.1"
  },
  "devDependencies": {
    "@babel/preset-env": "^7.25.4",
    "@babel/preset-react": "^7.24.7",
    "@babel/preset-typescript": "^7.24.7",
    "babel-loader": "^9.2.1",
    "ts-loader": "^9.5.1",
    "webpack": "^5.95.0",
    "webpack-cli": "^5.1.4",
    "webpack-dev-server": "^5.1.0"
  }
}
