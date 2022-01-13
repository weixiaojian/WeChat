<template>
	<view class="parsing">
		<view class="parsing-addr">
			<view class="title">
				批量识别
			</view>
			<!-- 提示语 -->
			<view class="parsing-addr-nian">粘贴或输入整段地址到下方输入框，将自动拆分姓名、电话和详细地址，多条地址间用【;】隔开</view>
			<!-- 文本解析 -->
			<view class="discern">
				<textarea class="parsing-addr-textarea" :placeholder="placeholder" v-model="batchAddress" />
				<view class="button-wraper">
					<view class="button-wraper-left">
						<i class="iconfont " v-html="'&#xe64b;'" @click="choosImg"></i>
						<view class="line"></view>
						<i class="iconfont " v-html="'&#xe646;'" @click="soundRecoring"></i>
						<view class="tips">仅支持单条识别</view>
					</view>
				</view>
			</view>
		</view>
		<view class="parsing-button">
			<ButtonBox :title="'智能识别'" :radius="'35rpx'" height="70rpx" width="700rpx" @hanldChange="ChangeBtn">
			</ButtonBox>
		</view>
		<!-- 语音识别  -->
		<uni-popup ref="showpopup" :type="'center'">
			<view class="alert-center-box speak-box">
				<i class="iconfont speak-close-btn" v-html="'&#xe66d;'"  @click='closeAlert'></i>
			  <view class="speak-title " :class="dotMove?'dotmove':''">{{recordState}}</view>
			  <view class="speak-tips">依次说出姓名、电话、地址信息</view>
			  <view class="button-box " :class="dottMove?'butboxmo':''" @click="shotPress" @touchstart="pressstart" @longpress="longPress" @touchend="pressEnd">
				<i class="iconfont " v-html="'&#xe646;'" :class="dottMove?'moveIcon':''"></i>
				</view>
			</view>
		</uni-popup>
		<!-- 授权弹窗 -->
		<uni-popup ref="showpopup1" :type="'center'">
			<view class="alert-center-box" @click.top='stopMaoPao'>
				<view class='alert-center-n'>
					<view>“韵达同城配”要使用你的“{{authTxt}}”，是否允许？</view>
				</view>
				<view class="tip-b-btns">
					<view @click="closeAlert">取消</view>
					<view @click='openSetting'>去授权</view>
				</view>
			</view>
		</uni-popup>
		<view class="cropper" v-show="imgCropper">
			<image-cropper :src="tempFilePath"  @confirm="cropperSure" @cancel="cancel"></image-cropper>
		</view>
	</view>
</template>

<script>
	import ImageCropper from "@/components/invinbg-image-cropper/invinbg-image-cropper.vue";
	var plugin = requirePlugin("WechatSI");
	var manager = plugin.getRecordRecognitionManager();
	var temout = '';
	var inter = '';
	export default {
		data() {
			return {
				placeholder: '例如：韵达同城，130xxxxx1234，广东省深圳市宝安区xx街道xx小区xx楼xx号（批量识别暂不支持港澳台、国际地址）',
				batchAddress: '',
				pageId:'',
				record: false,//打开语音识别
				recordState: '按住说话',
				recordTxt:false,
				authTxt:'',
				isSetAuth:false,
				tempFilePath:'',
				cropFilePath:'',
				imgCropper:false,
				dotMove:false,
				dottMove:false
			};
		},
		onLoad(option) {
			self = this;
			console.log(option)
			if(option.pageId){
				this.pageId = option.pageId;
			}
		},
		components:{
			ImageCropper
		},
		methods: {
			closeAlert: function () {
				let self = this;
				self.record=false,
				self.isSetAuth=false
				self.$refs['showpopup'].close();
				self.$refs['showpopup1'].close();
			},
			soundRecoring(){
				let  self = this;
				this.$getAuth('scope.record').then(res=>{
					if(res){
						self.clicktouse =true;
						// self.record = true;
						self.$refs['showpopup'].open();
					}else{
						self.authTxt='麦克风';
						self.$refs['showpopup1'].open();
					}
				});
			},
				stopMaoPao:function() {},
			  pressstart: function () {
			  },
			  shotPress: function () {
			    // console.log("开始按键")
					uni.showToast({
							title: '说话时间太短',
							mask: true,
							icon: 'none',
							duration: 1500,
						});
			  },
			  pressEnd: function () {
			    let self = this;
					self.recordState = '识别中...'
			    clearInterval(inter);
			    clearTimeout(temout);
			    manager.stop();
			    self.dotMove = false;
			    self.dottMove = false
			    setTimeout(function () { 
			     self.recordState = '按住说话';
			     self.recordTips = '依次说出姓名、电话、地址信息'
			    }, 1000)
			  },
			  longPress: function () {
			    let self = this;
			    self.needHand = true;
			    self.recordState='请说话';
			    self.dotMove=true;
			    self.dottMove=true;
			    console.log(self.dottMove)
			    temout = setTimeout(function () {
			      self.needHand= true;
			      self.recordState= 10;
			      self.dotMove= false;
			      self.dottMove= true;
			      self.recordTips='剩余时间'
			      inter = setInterval(function () {
			        self.recordState = self.recordState - 1;
			        // that.setData({
			        //   recordState: self.data.recordState - 1,
			        // });
			        if (self.recordState == 0) {
			          clearInterval(inter);
			          clearTimeout(temout);
			          self.recordState='按住说话';
			          self.recordTips='依次说出姓名、电话、地址信息';
			          that.pressEnd();
			        }
			      }, 1000);
			    }, 20000);
			    manager.onStart = function (res) {
			      console.log("成功开始录音识别", res)
			    }
			    manager.onRecognize = function (res) {
			      console.log("current result", res.result)
			    }
			    manager.onStop = function (res) {
						console.log(res)
			      console.log("record file path", res.tempFilePath);
			      self.recordState = '识别中...';
			     // console.log(res.result);
			      if (res.result == null || res.result == '' || res.result == undefined) {
							uni.showToast({
									title: '无法识别请重试',
									mask: true,
									icon: 'none',
									duration: 1500,
								});
			        self.recordState= '按住说话';
			        self.dotMove=false;
			        self.dottMove=false
							
			      } else {
			        //console.log("result", res.result);
							self.recordState= '按住说话';
							self.dotMove= false;
							self.dottMove= false;
							// self.copyVal= res.result;
			    //     self.smartBtn();
							console.log('res.data',res.result)
							self.batchAddress = res.result;
							// self.analysis();
			        //调用第二弹窗隐藏第一弹窗  copyStatus
			      }
			    }
			    manager.onError = function (res) {
			      console.error("error msg", res.msg)
			      self.recordState='按住说话';
			      // that.recordTips = '依次说出姓名、电话、地址信息';
			    }
			    manager.start({ duration: 40000, lang: "zh_CN" });
			  },
			cropperSure(e){
							let self = this;
							this.cropFilePath = e.detail.tempFilePath
							console.log(this.cropFilePath)
							var FSM = uni.getFileSystemManager();
								FSM.readFile({
									filePath: this.cropFilePath,
									encoding: "base64",
									success: function (data) {
										let _data = data.data
										self.$api.imgAnalysis(_data).then(res =>{
											console.log(res)
											if(res.code ==200){
												self.batchAddress = res.data;
												// self.analysis();
												self.clearImgData()
											}
										})
									}
								});
						},
						clearImgData(){
							let self = this;
							self.tempFilePath='';
							self.cropFilePath='';
							self.imgCropper=false;
						},
						cancel() {
							let self =this;
							self.clearImgData()
						},
			//选择图片
						choosImg(e) {
							var self = this;
							uni.chooseImage({
								count: 1,
								sizeType: ['compressed'],  //可选择原图或压缩后的图片
								sourceType: ['album', 'camera'], //可选择性开放访问相册、相机
								success(res) {
									self.tempFilePath =  res.tempFilePaths[0];
									console.log(self.tempFilePath)
									self.imgCropper = true;
								},
								fail: function () {
									// uni.showLoading({
									// 	title: '图片上传失败，请重新选择',
									// });
									// setTimeout(function(){
									// 	uni.hideLoading();
									// },1500);
								},
							});
						},
			// 智能解析
			ChangeBtn() {
				let self = this;
				if(this.batchAddress == ''){uni.showToast({icon:"none",title:"请输入要解析数据"});return;};
				let _data = { address:this.$Reg.removeHTMLTag(this.batchAddress)};
				console.log(_data)
				this.$api.getAddressAnalyList(_data).then(res => {
					console.log(res);
					if(res.code == 200) {
						let { data } = res
						if(this.pageId =='sends'){
							setTimeout(()=>{uni.navigateBack({delta:1})},500);
							uni.$emit('batchRec',data);
						}else{
							uni.navigateTo({
								url: '/pages/excelMail/orderExcel?order=' + JSON.stringify(data)+'&pageId=batch'
							})
						}
						
					} else {
						uni.showToast({icon:'none',title:res.message,duration:2500})
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.parsing {
		width: 100%;
		height: 100%;
		background-color: $ztd-color-white;
		
		&-addr {
			background-color: $ztd-color-white;
			padding: 20rpx;
			.title{
				font-size: 30rpx;
				font-weight: bold;
				padding: 20rpx 0;
			}
			&-nian {
				background-color: $ztd-color-block;
				color: $ztd-color-primary;
				font-size:26rpx;
				border-radius: 8rpx;
				padding: 20rpx;
				margin-bottom: 20rpx;
			}
			.discern{
				width: 100%;
				height: 500rpx;
				border: 2rpx solid #ddd;
				.button-wraper{
					width: 100%;
					display: flex;
					justify-content: space-between;
					align-items: center;
					height: 60rpx;
					padding:0 60rpx;
					&-left{
						display: flex;
						justify-content: flex-start;
						align-items: center;
						.line{
							width: 2rpx;
							height: 40rpx;
							background-color:#999;
							margin: 0 26rpx 0 36rpx;
						}
						.iconfont{
							font-size:42rpx;
						}
						.tips{
							margin-top:8rpx;
							width: 210rpx;
							height:42rpx;
							display: flex;
							justify-content: center;
							align-items: center;
							background-color:$ztd-color-primary;
							color:$ztd-color-white;
							border-radius: 8rpx;
							font-weight: 600;
						}
					}
				
				}
			}
			.parsing-addr-textarea {
				width: 100%;
				padding: 30rpx;
				font-size: 24rpx;
				height: 410rpx;
			}
		}
		
		&-button {
			position: fixed;
			bottom: 0;
			left: 0;
			right: 0;
			background-color: $ztd-color-white;
			height: 120rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 18rpx 18rpx 0 0;
			font-weight: bold;
		}
		// 语音弹框
		.copy-close-btn,.speak-close-btn{
		  width: 35rpx;
		  height: 35rpx;
		  position: absolute;
		  right: 30rpx;
		  top: 30rpx;
		}
		/* 语音识别 */
		.speak-box{
		  /* padding-bottom: 30rpx; */
		  height: 550rpx;
		}
		.speak-title{
		  width: 100%;
		  text-align: center;
		  font-weight: bold;
		  font-size: 32rpx;
		  padding: 40rpx 0;
		}
		.speak-tips{
		  width: 100%;
		  text-align: center;
		  color: #888;
		}
		.button-box{
		  width: 152rpx;
		  height: 152rpx;
		  border-radius: 50%;
		  background: #FFD500;
		  margin:auto;
		  margin-top: 110rpx;
		  position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.button-box>i{
		  font-size: 60rpx;
		  background: transparent;
		}
		.button-box>i.moveIcon{
		  color: #fff;
		}
		.dotmove:after {
		  overflow: hidden;
		  display: inline-block;
		  vertical-align:bottom;
		  animation: ellipsis 2s infinite;
		  content: "\2026"; /* ascii code for the ellipsis character */
		}	
		@keyframes ellipsis {
		    from {
		        width: 4rpx;
		    }
		    to {
		        width: 35rpx;
		    }
		} 
		.butboxmo{
		  animation:myfirst 1.5s ease infinite normal;
		}
		.butboxmo>image{
		  width: 152rpx;
		  height: 152rpx;
		}
		@keyframes myfirst
		{
		  0% {width:152rpx;height:152rpx;background-color:rgba(244,202,68,1);margin-top: 100rpx;}
		  100% {width:300rpx;height:300rpx;background-color:rgba(244,202,68,0.1);margin-top:35rpx;}
		}
	}
</style>
