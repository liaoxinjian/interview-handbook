module.exports = {
    "pages": [ //pages数组中第一项表示应用启动页，参考：https://uniapp.dcloud.io/collocation/pages
		{
			"path": "pages/index/index",
			"style": {
				"navigationBarTitleText": "面试宝典",
				"navigationBarTextStyle": "white"
			}
		},
		{
			"path": "pages/individualCenter/index",
			"style": {
				"navigationBarTitleText": "个人中心",
				"navigationBarTextStyle": "white"
			}
		}
	],
	"globalStyle": {
		"navigationBarTextStyle": "white",
		"navigationBarTitleText": "演示",
		"navigationBarBackgroundColor": "#4C9574",
		"backgroundColor": "#4C9574",
		"renderingMode": "seperated", // 仅微信小程序，webrtc 无法正常时尝试强制关闭同层渲染
	},
	"tabBar": {
		"color": "#7A7E83",
		"selectedColor": "#3cc51f",
		"borderStyle": "black",
		"backgroundColor": "#ffffff",
		"height": "50px",
		"fontSize": "10px",
		"iconWidth": "24px",
		"spacing": "3px",
		"list": [{
			"pagePath": "customized/pages/index/index",
			"iconPath": "static/images/home.png",
			"selectedIconPath": "static/images/home_active.png",
			"text": "组件",
		}, {
			"pagePath": "customized/pages/individualCenter/index",
			"iconPath": "static/images/center.png",
			"selectedIconPath": "static/images/center_active.png",
			"text": "接口"
		}],
	},
}