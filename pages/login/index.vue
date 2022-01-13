<template>
	<view class="login">
		<view class="logo">
			<image src="../../static/img/zaitu.png" mode=""></image>
			<view class="text">韵达同城配</view>
		</view>
		<view class="main-view">
			<view class="button" @tap="confirm"><image src="/static/img/weixin.png" class="weixin"></image>微信快捷登录</view>
		</view>
		<view class="boot">
				<view class="img-box" @tap="agreeChange">
					<image  :src="agree?'/static/img/radio-check.png':'/static/img/circle.png'" ></image>
				</view>
				<view class="text">
					已阅读并同意	 <text class="booking" @click="goRead">《同城配用户服务协议》</text><text class="booking" @click="goRead">《同城配隐私政策》</text>。若您的手机号未注册，将为您直接注册
				</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				agree:false,//同意协议
			}
		},
		methods: {
			agreeChange(){
				this.agree = !this.agree
			}
		}
	}
</script>

<style lang="scss" scoped>
.login{
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
	.weixin{
		width: 40rpx;
		height: 40rpx;
		margin-right: 10rpx;
	}
	.logo{
		width: 100%;
		height: auto;
		text-align: center;
		margin-top: 180rpx;
		image{
			width: 160rpx;
			height: 160rpx;
		}
		.text{
			margin-top: 20rpx;
			font-size: 28rpx;
			font-weight: bold;
		}
	}
	.main-view{
		background-color: $ztd-color-white;
		margin-top: 100rpx;
		width: 100%;
		height: 100rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0 20rpx;
		.button{
			width: 80%;
			height: 70rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius:35rpx;
			border: 2rpx solid #55b839;
			color:$ztd-color-white;
			background-color:#55b839;
		}
	}
	.boot{
		position: absolute;
		bottom: 30rpx;
		left: 0;
		width: 100%;
		height: auto;
		padding: 6rpx 20rpx;
		display: flex;
		align-items: center;
		.img-box{
			width:36rpx;
			height: 36rpx;
			margin-right: 10rpx;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.text{
			flex: 1;
			color: #999;
			font-size: 26rpx;
		}
		.booking{
			color:$ztd-color-primary;
			font-weight: bold;
		}
	}
}
</style>
