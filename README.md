# toDoManager

A simple tool to create, view and store task history

### create a project from scratch

- create package.json: npm init -y
- create 2 folders: public and src
- create index.html
- install:
  @babel/core -
  @babel/cli -
  (most browsers suported ES6, preset-env may not necessary)
  @babel/preset-env - handles transformation of ES6 into CommonJS
  @babel/preset-react - deal with JSX property
  - inside src, create:
    index.js - contain code that inserts our react app into our index.html page
    app.css and app.js - contain style and code, for the root component of the app
  - install react and react-dom
  - install web pack (to build our app, take the code in source directory and perform some operations, like convert ES6 and JSX in CommonJS and host our public diretory, so we can view app in the browser)
    webpack
    webpack-cli
    webpack-dev-server
    styled-loader
    css-loader
    babel-loader
