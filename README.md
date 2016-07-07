# A Demo Application for Prezi

### About

> The demo application I have prepared showcases some of my favorite tools and toys.  I enjoy writing pure JS applications that run on the client and consume APIs for fun and profit. To that end I put this demo together using a headless CMS called Contentful as a backend.  Contentful is an easy to use Cloud CMS that enables rapid prototyping. It has a data-first developer-centric approach and a robust API.  

> The client application uses my prefered javascript framework [Vue.js](http://vuejs.org/guide/).  Vue itself is very lean and my project boilerplate uses webpack to further compress and optimize the js package. 

> I took some liberties with the data for the sake of awesome.  I replaced the thumbnail source with thumbnails from [Unsplash It](https://unsplash.it/) as they deliver much faster.  I replaced the non-working links to the random Prezi profiles with links to [Random User Generator](https://randomuser.me/), and the entry titles link to a random wikipedia article for further enjoyment.  Oh and I used [BuzzWords](https://github.com/wooorm/buzzwords) for bleeding-edge-of-reality tags.

> Putting this together was a lot of fun, and if I had more time I would have implemented a few more features: 
- Integrate the [Contentful-Management SDK](https://www.npmjs.com/package/contentful-management) to enable users to add, update or delete an entry;  
- Pagination; 
- Filter by tag - I added a ui element to replicate a subject tag and if I had more time I would have made it work with the filtering
- Unit testing, cause you know...

> This application is based on my boilerplate for large scaleable applications in Vue.js. It comes bundled with vue-router and vue-loader for Webpack. Some features include: Babel 6 transpiler for es6; hot-reload; ESlint on-save; Test suite with Karma/Mocha/Jasmine featuring e2e testing via Nightwatch and in-browser testing with PhantomJS; bootstrap-sass (Bootstrap 3) CSS framewor; Integrated with the Contentful CMS SDK for rapid prototyping via cloud CMS; Express.js development server for local work and a simple distribution Server for Heroku. 

## View the Live App

> The app currently running on [Heroku](https://preziapp.herokuapp.com/).  If the drone is asleep you may have to poke it a few times to wake it up

> I have invited read-only users in Contentful to view the "backend".  Pester me with your email and I will add you.

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
