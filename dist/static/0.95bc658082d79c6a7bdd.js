webpackJsonp([0],[,,function(e,t,a){var i,o;a(13),i=a(8),o=a(16),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),o&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=o)},,,,,function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={data:function(){return{overlay:"overlay",overlayBlue:"overlay-blue",overlayIndigo:"overlay-indigo"}},props:["prezis"],methods:{isEven:function(e){return e%2===0},randomImage:function(){var e=Math.floor(100*Math.random()+50);return e.toString()}}}},function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=a(18),r=i(o);t["default"]={components:{Prezis:r["default"]},data:function(){return{layoutData:{prezis:[{id:"56f137f432fbb67217182785",title:"incididunt amet ad nostrud",thumbnail:"https://unsplash.it/400/400",creator:{name:"consectetur laborum",profileUrl:"https://randomuser.me/"},createdAt:"March 6, 2014"},{id:"56f137f4d62116d1231786ca",title:"Lorem commodo excepteur minim",thumbnail:"https://unsplash.it/400/400",creator:{name:"cupidatat excepteur",profileUrl:"https://randomuser.me/"},createdAt:"July 31, 2015"},{id:"56f137f46ba885ffacf4d3ff",title:"ut ipsum ut nostrud",thumbnail:"https://unsplash.it/400/400",creator:{name:"nisi aliquip",profileUrl:"https://randomuser.me/"},createdAt:"July 5, 2015"},{id:"56f137f48510226968e8c9e7",title:"anim id enim duis",thumbnail:"https://unsplash.it/400/400",creator:{name:"exercitation commodo",profileUrl:"https://randomuser.me/"},createdAt:"July 11, 2015"},{id:"56f137f40684a0672110741c",title:"consectetur dolor nisi amet",thumbnail:"https://unsplash.it/400/400",creator:{name:"minim velit",profileUrl:"https://randomuser.me/"},createdAt:"May 3, 2015"},{id:"56f137f408cec65e5e9aefc6",title:"laborum do duis reprehenderit",thumbnail:"https://unsplash.it/400/400",creator:{name:"adipisicing ullamco",profileUrl:"https://randomuser.me/"},createdAt:"June 30, 2014"},{id:"56f137f4c607b02dbfee5c91",title:"est consectetur magna ullamco",thumbnail:"https://unsplash.it/400/400",creator:{name:"anim eu",profileUrl:"https://randomuser.me/"},createdAt:"March 4, 2015"},{id:"56f137f4fc5e9054dec2547e",title:"nostrud consectetur voluptate ea",thumbnail:"https://unsplash.it/400/400",creator:{name:"deserunt magna",profileUrl:"https://randomuser.me/"},createdAt:"December 24, 2014"}]}}}}},function(e,t,a){t=e.exports=a(1)(),t.push([e.id,'.card{width:100%;height:100%;max-width:400px;max-height:auto;padding:15px 0}.card .image{border-radius:3px;display:block;min-height:240px;overflow:hidden;position:relative}.card .image>img{display:block;margin-bottom:0;-webkit-transition:all .25s ease-in-out;transition:all .25s ease-in-out}.card .image:hover>img{-webkit-transform:scale(1.2);transform:scale(1.2)}.card .title{color:#fff;display:inline-block;font-family:Montserrat;font-size:1.5em;font-weight:700;line-height:1.2;margin-bottom:.75em;text-decoration:none;-webkit-transition:all .3s ease-out;transition:all .3s ease-out}.card .title:hover{color:hsla(0,0%,100%,.7);text-decoration:none}.card .overlay{content:"";bottom:0;display:block;height:100%;left:0;position:absolute;right:0;top:0;width:100%;z-index:1}.card .overlay-indigo{background-image:-webkit-linear-gradient(top,rgba(92,107,192,.1),rgba(92,107,192,.8));background-image:linear-gradient(180deg,rgba(92,107,192,.1),rgba(92,107,192,.8));z-index:2}.card .overlay-blue{background-image:-webkit-linear-gradient(top,rgba(41,182,246,.1),rgba(41,182,246,.8));background-image:linear-gradient(180deg,rgba(41,182,246,.1),rgba(41,182,246,.8));z-index:2}.card .overlay-content{position:absolute;bottom:0;padding:1.5em;z-index:3}.card .meta{margin:0;margin-right:-1em;margin-bottom:.75em}.card .meta.meta-last,.card .meta li{margin-bottom:0}.card .meta li{color:#f8f8f8;display:inline;list-style-type:none;padding-right:1em;font-size:.85em;font-variant:small-caps;letter-spacing:1px}.card .meta li:not(:last-child):after{content:"\\25CF";font-style:normal;position:relative;color:hsla(0,0%,100%,.25);right:-.6em}.card .meta li>a{color:#f8f8f8}',"",{version:3,sources:["/./src/components/prezi.vue"],names:[],mappings:"AAAA,MAAM,WAAW,YAAY,gBAAgB,gBAAgB,cAAqB,CAAC,aAAa,kBAAkB,cAAc,iBAAiB,gBAAgB,iBAAiB,CAAC,iBAAiB,cAAc,gBAAgB,wCAAwC,+BAA+B,CAAC,uBAAuB,6BAA6B,oBAAoB,CAAC,aAAa,WAAY,qBAAqB,uBAAyB,gBAAgB,gBAAgB,gBAAgB,oBAAqB,qBAAqB,oCAAqC,2BAA4B,CAAC,mBAAmB,yBAA4B,oBAAoB,CAAC,eAAe,WAAW,SAAS,cAAc,YAAY,OAAO,kBAAkB,QAAQ,MAAM,WAAW,SAAS,CAAC,sBAAsB,sFAA0F,iFAAwF,SAAS,CAAC,oBAAoB,sFAA0F,iFAAwF,SAAS,CAAC,uBAAuB,kBAAkB,SAAS,cAAc,SAAS,CAAC,YAAY,SAAS,kBAAkB,mBAAoB,CAAC,AAAsC,qCAAhB,eAAe,CAAgK,AAA/J,eAAe,cAAc,eAAe,qBAAqB,AAAgB,kBAAkB,gBAAiB,wBAAwB,kBAAkB,CAAC,sCAAsC,gBAAgB,kBAAkB,kBAAkB,0BAA6B,WAAY,CAAC,iBAAiB,aAAa,CAAC",file:"prezi.vue",sourcesContent:['.card{width:100%;height:100%;max-width:400px;max-height:auto;padding:15px 0 15px 0}.card .image{border-radius:3px;display:block;min-height:240px;overflow:hidden;position:relative}.card .image>img{display:block;margin-bottom:0;-webkit-transition:all .25s ease-in-out;transition:all .25s ease-in-out}.card .image:hover>img{-webkit-transform:scale(1.2);transform:scale(1.2)}.card .title{color:white;display:inline-block;font-family:"Montserrat";font-size:1.5em;font-weight:700;line-height:1.2;margin-bottom:0.75em;text-decoration:none;-webkit-transition:all 0.3s ease-out;transition:all 0.3s ease-out}.card .title:hover{color:rgba(255,255,255,0.7);text-decoration:none}.card .overlay{content:"";bottom:0;display:block;height:100%;left:0;position:absolute;right:0;top:0;width:100%;z-index:1}.card .overlay-indigo{background-image:-webkit-linear-gradient(top, rgba(92,107,192,0.1), rgba(92,107,192,0.8));background-image:linear-gradient(to bottom, rgba(92,107,192,0.1), rgba(92,107,192,0.8));z-index:2}.card .overlay-blue{background-image:-webkit-linear-gradient(top, rgba(41,182,246,0.1), rgba(41,182,246,0.8));background-image:linear-gradient(to bottom, rgba(41,182,246,0.1), rgba(41,182,246,0.8));z-index:2}.card .overlay-content{position:absolute;bottom:0;padding:1.5em;z-index:3}.card .meta{margin:0;margin-right:-1em;margin-bottom:0.75em}.card .meta.meta-last{margin-bottom:0}.card .meta li{color:#f8f8f8;display:inline;list-style-type:none;margin-bottom:0;padding-right:1em;font-size:0.85em;font-variant:small-caps;letter-spacing:1px}.card .meta li:not(:last-child):after{content:"\\25cf";font-style:normal;position:relative;color:rgba(255,255,255,0.25);right:-0.6em}.card .meta li>a{color:#f8f8f8}\n'],sourceRoot:"webpack://"}])},function(e,t,a){t=e.exports=a(1)(),t.push([e.id,"section.title .info{clear:both;display:block;font-variant:small-caps;letter-spacing:2px;padding-top:1.5em;padding-bottom:1.5em;text-align:center}","",{version:3,sources:["/./src/layouts/Home.vue"],names:[],mappings:"AAAA,oBAAoB,WAAW,cAAc,wBAAwB,mBAAmB,kBAAkB,qBAAqB,iBAAiB,CAAC",file:"Home.vue",sourcesContent:["section.title .info{clear:both;display:block;font-variant:small-caps;letter-spacing:2px;padding-top:1.5em;padding-bottom:1.5em;text-align:center}\n"],sourceRoot:"webpack://"}])},,function(e,t,a){var i=a(9);"string"==typeof i&&(i=[[e.id,i,""]]);a(3)(i,{});i.locals&&(e.exports=i.locals)},function(e,t,a){var i=a(10);"string"==typeof i&&(i=[[e.id,i,""]]);a(3)(i,{});i.locals&&(e.exports=i.locals)},,function(e,t){e.exports=' <section class=prezis> <div class=container> <template v-for="prezi in prezis"> <div class="col-lg-4 col-md-4 col-sm-6"> <div class=card data-id="{{ prezi.id }}"> <div class=image> <img v-bind:src="prezi.thumbnail + \'?image=\' + randomImage()" alt=""> <div v-bind:class="[overlay, isEven($index) ? overlayBlue : overlayIndigo ]"> <div class=overlay-content> <ul class=meta> <li><a href=#0><i class="fa fa-tag"></i> Html5/Css3</a></li> <li><a href=#0><i class="fa fa-clock-o"></i> {{ prezi.createdAt }} </a></li> </ul> <a href=#0 class=title>{{ prezi.title }}</a> <ul class="meta meta-last"> <li><a v-bind:href="prezi.creator[\'profileUrl\']" target=_blank><i class="fa fa-user"></i> {{ prezi.creator[\'name\'] }}</a></li> </ul> </div> </div> </div> </div> </div> </template> </div> </section> '},function(e,t){e.exports=' <section class=title> <div class=container> <div class=row> <div class="info col-md-12"> <p>A Prezi Demo</p> <p>Lovingly Made by <a target=_blank href=#>Simon Moon</a>.</p> <a href=# class="btn btn-small btn-primary">New Prezi</a> </div> </div> </div> </section> <prezis v-bind:prezis=layoutData.prezis> </prezis>'},,function(e,t,a){var i,o;a(12),i=a(7),o=a(15),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),o&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=o)}]);
//# sourceMappingURL=0.95bc658082d79c6a7bdd.js.map