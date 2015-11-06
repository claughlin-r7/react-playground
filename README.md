# React Flux(Alt) Stater with Webpack

A [Reactjs](https://facebook.github.io/react/), Flux([alt.js](http://alt.js.org/)) and [webpack](https://webpack.github.io/)
starter kick. A great simple app that shows the starting point of creating a application or component in React. This
starter shows the basic use of react components, bundling a react application into a amd module, using flux for updating
data and making REST calls to the server and rendering [marionette](http://marionettejs.com) views with a react component.

## Installing

**You must be running on Node 4.0 or higher** you can install/update to the latest stable version of node using [n](https://www.npmjs.com/package/n).

### Install all the node packages:

```
npm install
```

### Install Grunt

```
sudo npm i grunt-cli -g
```

### Run the application
Grunt dev will run check styles on both jscs and elint, start a mini express server for serving up mock data and then
run [webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html).

```
grunt dev
```
### Visit the app
Open http://localhost:8081/
