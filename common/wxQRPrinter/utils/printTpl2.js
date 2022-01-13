
// 韵达同城联面单格式  -- 面单上的宽度和高度要乘以8
let YDTCL = [
	"! 0 200 200 1040 1\n",
	"PAGE-WIDTH 608 \n",
	"GAP-SENSE\n",
	// 画整个边框()
	"LINE 0 120 550 120 2 ",
	"T 24 0 480 60 同城\n",
	"T 24 0 480 95 特快\n",
	"BOX 460 47 545 120 2 ",
	"T 24 0 0 95 2021年5月20日 13:55:30 \n",
	// 四段码并设置粗体指令：SETBOLD 、字符放大指令：<SETMAG >
	"SETBOLD 2\n",
	"SETMAG 2 2 \n",
	"T 55 11 15 135 三段码 三段码 三段码 \n",
	"T 55 11 345 135 二段码 \n",
	"SETBOLD 1\n",
	"SETMAG 1 1 \n",
	"LINE 0 180 550 180 2 ",
	// 横向条形码及单号
	"B 128 2 30 110 15 200 100009319371\n",
	"T 24 0 172 320 100009319371\n",
	"LINE 0 350 550 350 2 ",
	// 收件地址
	"SETMAG 2 2 \n",
	// "SETBOLD 1 \n",
	"T 55 11 5 370 宝安区新安街道中粮大厦 \n",
	// "SETBOLD 0 \n",
	"SETMAG 1 1 \n",
	"LINE 0 430 420 430 2 ",
	// 集
	"SETMAG 2 2 \n",
	// "SETBOLD 1 \n",
	"T 55 11 11 450 集 \n",
	// "SETBOLD 0 \n",
	"SETMAG 1 1 \n",
	"BOX 0 440 50 500 2 ",
	// 派件分拨
	"T 55 11 80 450 派件分拨 \n",
	"LINE 0 510 420 510 2 ",
	// 收
	"SETMAG 2 2 \n",
	"T 55 11 11 520 收 \n",
	"SETMAG 1 1 \n",
	"BOX 0 515 50 565 2 ",
	// 收件人
	"T 24 0 80 515 死天天 \n",
	// 收件电话
	"T 24 0 180 515 13100001110 \n",
	// 收件地址
	"T 24 0 90 550 广东省深圳市宝安区中粮大厦 \n",
	"LINE 0 660 420 660 2 ",
	// 寄
	"SETMAG 2 2 \n",
	"T 55 11 11 680 寄 \n",
	"SETMAG 1 1 \n",
	"BOX 0 670 50 720 2 ",
	// 寄件人
	"T 24 0 80 670 晨阳 \n",
	// 寄件电话
	"T 24 0 180 670 13100001110 \n",
	// 寄件地址
	"T 24 0 90 705 广东省深圳市宝安区中粮大厦 \n",
	"LINE 0 815 550 815 2 ",
	"LINE 420 350 420 815 2\r\n",  //竖线
	// 备注
	"T 24 0 11 830 备注：20102 \n",
	// 物品类型
	"T 24 0 420 830 物品类型： \n",
	"T 24 0 420 860 衣物 \n",
	// 纵向条形码
	"VB 128 2 50 90 430 810 100009319371\n",
	"ENDML\r\n",
	"SETSP 0\n",
	"FORM\n",
	"PRINT\n"
]

module.exports = {
	'韵达同城联': YDTCL
}
