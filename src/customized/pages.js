module.exports = {
    "pages": [ //pages数组中第一项表示应用启动页，参考：https://uniapp.dcloud.io/collocation/pages
		{
			"path": "pages/index/index",
			"style": {
				"navigationBarTitleText": "面试宝典",
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
}