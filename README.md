# A Demo Application for Prezi

### About

> The demo application I have prepared showcases some of my favorite tools and toys.  I enjoy writing pure JS applications that run on the client and consume data from cloud APIs. To that end I put this demo together using a headless CMS called Contentful as a backend.  Contentful is an easy to use Cloud CMS that has a data-first developer-centric approach and a robust API.  

> The client application uses my prefered javascript framework [Vue.js](http://vuejs.org/guide/).  Vue itself is very lean and my project boilerplate uses webpack to further compress and optimize the js package. 

> Putting this together was a lot of fun, and if I had more time I would have implemented a few more feature: 
- Integrate the [Contentful-Management SDK](https://www.npmjs.com/package/contentful-management) to enable users to add, update or delete an entry;  
- Pagination!; 
- Filter by slug - I added in a ui-only element to replicate a subject tag if I had time I would have made it work with the filtering 

> This application is based on my boilerplate for large scaleable applications in Vue.js. It comes bundled with vue-router and vue-loader for Webpack. Some features include: Babel 6 transpiler for es6; hot-reload; ESlint on-save; Test suite with Karma/Mocha/Jasmine featuring e2e testing via Nightwatch and in-browser testing with PhantomJS; bootstrap-sass (Bootstrap 3) CSS framewor; Integrated with the Contentful CMS SDK for rapid prototyping via cloud CMS; Express.js development server for local work and a simple distribution Server for Heroku. 

## Checkout the APP

> The app currently running on [Heroku](https://preziapp.herokuapp.com/).  If the drone is a sleep you may have to poke him to wake him up

> I have invited Emoke as a user in Contentful to view the "backend".  Pester her for access or pester me with your email and I will add you.

## Development Setup

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

# Related Docs:
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
