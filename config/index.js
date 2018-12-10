
//全局的配置
const config = {
    htmloptions: { //html压缩的配置
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    },
    serveroptions: {// 热更新服务
        root: './dist',
        port: 8000,
        livereload: true 
    },
    pages: [ 'index', 'list', 'shopcar', 'login', 'register', 'details'  ],
    cssoptions: {// css配置
        'index': { // index页面的css
            'index': [
                './src/stylesheets/reset.css',
                './src/views/index/stylesheets/*.css'
            ]
        },
        // 'list': {
        //     'list': [
        //         './src/stylesheets/reset.css',
        //         './src/views/list/stylesheets/*.css'
        //     ]
        // },
        // 'shopcar': {
        //     'shopcar':[
        //         './src/stylesheets/reset.css',
        //         './src/views/shopcar/stylesheets/*.css'
        //     ]
        // },
        // 'login': {
        //     'login': [
        //         './src/stylesheets/reset.css',
        //         './src/views/login/stylesheets/*.css'
        //     ]
        // },
        // 'register': { 
        //     'register': [
        //         './src/stylesheets/reset.css',
        //         './src/views/register/stylesheets/*.css'
        //     ]
        // },
        // 'details': {
        //     'details': [
        //         './src/stylesheets/reset.css',
        //         './src/views/details/stylesheets/*.css'
        //     ]
        // }
    },
    jsoptions: {// js配置
        'index': './src/views/index/javascripts/index.js',
        // 'list': './src/views/list/javascripts/list.js',
        // 'register': './src/views/register/javascripts/register.js',
        // 'login': './src/views/login/javascripts/login.js',
        // 'details': './src/views/details/javascripts/details.js',
        // 'shopcar': './src/views/shopcar/javascripts/shopcar.js',
    }
} 

// 把config暴露出去，是为了在其他地方用，只能暴露一次
module.exports = config