# webgui-admin

> New admin interface for WebGUI CMS

## Build Setup

``` bash
# install dependencies
npm install

# start webgui
docker run -i -p 80:80 -t scrottie/webgui8:latest
```

# add the js to a style template
``` html
<script src="http://localhost:8080/_assets/app.js"></script>
```

``` bash
# serve with hot reload at localhost:8080
npm run dev
```

``` bash
# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
