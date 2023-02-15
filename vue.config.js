const path = require('path');
module.exports = {
    pluginOptions: {
        "style-resources-loader": {
            preProcessor: 'less',
            patterns: [
                path.resolve(__dirname, 'src/static/css/base.less'),
                path.resolve(__dirname, 'src/static/font/iconfont.css'),
            ]
        }
    }
}