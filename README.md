# About This Demo


> The client application uses my prefered javascript framework [Vue.js](http://vuejs.org/guide/).  Vue itself is very lean and my project boilerplate uses webpack to further compress and optimize the js package. 


> This application is based on my boilerplate for large scaleable applications in Vue.js. It comes bundled with vue-router and vue-loader for Webpack. Some features include: Babel 6 transpiler for es6; hot-reload; ESlint on-save; Test suite with Karma/Mocha/Jasmine featuring e2e testing via Nightwatch and in-browser testing with PhantomJS; bootstrap-sass (Bootstrap 3) CSS framework; Integrated with the Contentful CMS SDK for rapid prototyping via cloud CMS; A development server for local work and a simple distribution Server for Heroku written in Express.js. 

## View the Live App

> The app is currently running on [Heroku](https://vuedemoapp.herokuapp.com/).  If the Heroku and Contentful drones are asleep you may have to poke it a few times to wake it up - they take naps when no one visits.  Hitting refresh will randomize the tile images.


### Development Setup

``` bash
# install dependencies
npm install

# serve from Express server with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

#deploy to heroku
#If attempting to deploy to Heroku please follow instruction in the Dev center for setting up a new app.
npm run deploy

```

### Related Docs:
[Vue.js](http://vuejs.org/guide/) - 
[Webpack](https://webpack.github.io/docs/what-is-webpack.html) - 
[Vue-Router](http://vuejs.github.io/vue-router/en/index.html) - 
[Vue-Loader](http://vuejs.github.io/vue-loader) - 
[Bootstrap-Sass](https://github.com/twbs/bootstrap-sass) - 
[Bootstrap](http://bootstrapdocs.com/v3.0.3/docs/css/) -
[Contentful CMS](https://www.contentful.com/developers/docs/) -
[Heroku](https://devcenter.heroku.com/)

#Dev Tools:
[KarmaJS](https://karma-runner.github.io/0.13/index.html) - 
[MochaJS](https://mochajs.org/) - 
[JasmineJS](http://jasmine.github.io/2.4/introduction.html) - 
[Nightwatch](http://nightwatchjs.org/) - 
[PhantomJS](http://phantomjs.org/) - 
[BabelJS](https://babeljs.io/) - 
[ESLint](http://eslint.org/) -
