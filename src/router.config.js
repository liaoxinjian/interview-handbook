const fs = require('fs');
const path = require('path');
const customizedPagesConfig = require('./customized/pages.js');
const sharesPagesConfig = require('./shares/pages.js');

// 获取分包和主包配置
const mainPackagesRouter = customizedPagesConfig.pages;
const subpackagesRouter = sharesPagesConfig.pages;
const isSubpackages = sharesPagesConfig.isSubpackages;
let filePath = path.resolve(__dirname, './pages.json');
let pageRoute = {pages: [], subpackages: [{"root": "shares", "pages": []}], "globalStyle": {}};

// 主包路由
Object.keys(mainPackagesRouter).forEach(k => {
    console.log('k is', k);
    mainPackagesRouter[k].path = `customized/${mainPackagesRouter[k].path}`;
    pageRoute["pages"].push(mainPackagesRouter[k]);
})

// 分包路由
Object.keys(subpackagesRouter).forEach(k => {
    subpackagesRouter[k].path = `shares/${subpackagesRouter[k].path}`;
    if (isSubpackages) {
        pageRoute["subpackages"][0]["pages"].push(subpackagesRouter[k].path);
    }
    pageRoute["pages"].push(subpackagesRouter[k]);
})
function setting() {
    // if (customizedPagesConfig.tabBar.list || customizedPagesConfig.tabBar.list.length < 2) return new Error('tarbar list must have two items');
    pageRoute.globalStyle = customizedPagesConfig.globalStyle || {};
    pageRoute.tabBar = customizedPagesConfig.tabBar;
}
setting();
fs.writeFile(filePath, JSON.stringify(pageRoute), err => {
    if (err) {
        console.log('创建失败', err);
    } else {
        console.log('创建成功');
    }
});