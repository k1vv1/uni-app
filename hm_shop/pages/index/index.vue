<template>
	<view class="home">
		<swiper indicator-dots circular :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="item in swipers" :key="item.id">
				<image :src="item.img" mode=""></image>
			</swiper-item>
		</swiper>
		<!-- 导航区域 -->
		<view class="nav">
			<view class="nav_item" v-for="(item,index) in navs" :key="index" @click="navItemClick(item.path)">
				<view :class="item.icon"></view>
				<text>{{item.title}}</text>
			</view>
		</view>
		<!-- 推荐商品区域 -->
		<view class="hot_goods">
			<view class="tit">推荐商品</view>
			<goods-list @goodsItemClick="goGoodsDetail" :goods="goods"></goods-list>
			<!-- <view class="goods_list">
				<view class="goods_item" v-for="item in goods" :key="item.id">
					<image :src="item.img_url"></image>
					<view class="prices">
						<text>¥ {{item.sell_price}}</text>
						<text>¥ {{item.market_price}}</text>
					</view>
					<view class="name">
						{{item.title}}
					</view>
				</view>
			</view> -->
		</view>
	</view>
</template>

<script>
	import goodsList from '../../components/goods-list/goods-list.vue'
	export default {
		data() {
			return {
				swipers: [],
				goods: [],
				navs: [
					{
						icon: 'iconfont icon-ziyuan',
						title: '黑马超市',
						path: '/pages/goods/goods'
					},
					{
						icon: 'iconfont icon-guanyuwomen',
						title: '联系我们',
						path: '/pages/contact/contact'
					},
					{
						icon: 'iconfont icon-tupian',
						title: '社区图片',
						path: '/pages/pics/pics'
					},
					{
						icon: 'iconfont icon-shipin',
						title: '学习视频',
						path: '/pages/videos/videos'
					}
				]
			}
		},
		onLoad() {
			this.getSwipers(),
			this.getHotGoods()
		},
		methods: {
			async getSwipers() {
				// uni.request({
				// 	url: 'http://localhost:8082/api/getlunbo',
				// 	success: (res) => { 
				// 		console.log(res)
				// 		if( res.data.status !== 0 ) {
				// 			return uni.showToast({
				// 				title: '获取数据失败'
				// 			})
				// 		}
				// 		this.swipers = res.data.message
				// 	}
				// })
				const res = await this.$myRequest({
					url: '/api/getlunbo'
				})
				this.swipers = res.data.message
			},
			async getHotGoods() {
				const res = await this.$myRequest({
					url: '/api/getgoods?pageindex=1'
				})
				this.goods = res.data.message
			},
			navItemClick(url) {
				uni.navigateTo({
					url
				})
			},
			goGoodsDetail(id) {
				uni.navigateTo({
					url: '/pages/goods-detail/goods-detail?id=' + id
				})
			}
		},
		components: {
			"goods-list": goodsList
		}
	}
</script>

<style lang="scss">
.home{
	swiper{
		width: 750rpx;
		height: 380rpx;
		image{
			height: 100%;
			width: 100%;
		}
	}
	.nav{
		display: flex;
		.nav_item{
			width: 25%;
			text-align: center;
			margin-bottom: 25rpx;
			view{
				width: 120rpx;
				height: 120rpx;
				background: $shop-color;
				border-radius: 60rpx;
				margin: 10px auto;
				line-height: 120rpx;
				color: #fff;
				font-size: 50rpx;
			}
			.icon-tupian{
				font-size: 40rpx;
			}
			text{
				font-size: 38rpx;
			}
		}
	}
	.hot_goods{
		background: #eee;
		overflow: hidden;
		margin-top: 10rpx;
		.tit{
			height: 50px;
			line-height: 50px;
			color: $shop-color;
			text-align: center;
			letter-spacing: 20px;
			background-color: #fff;
			margin: 7rpx 0;
		}
		// .goods_list{
		// 	padding: 0 15rpx;
		// 	display: flex;
		// 	flex-wrap: wrap;
		// 	justify-content: space-between;
		// 	.goods_item{
		// 		background: #fff;
		// 		width: 355rpx;
		// 		margin: 10rpx 0;
		// 		padding: 15rpx;
		// 		box-sizing: border-box;
		// 		image{
		// 			display: block;
		// 			width: 80%;
		// 			height: 150px;
		// 			margin: 0 auto;
		// 		}
		// 		.prices{
		// 			margin: 20rpx 0 5rpx 0;
		// 			color: $shop-color;
		// 			font-size: 36rpx;
		// 			text:nth-child(2){
		// 				color: #ccc;
		// 				font-size: 28rpx;
		// 				margin-left: 17rpx;
		// 				text-decoration: line-through;
		// 			}
		// 		}
		// 		.name{
		// 			font-size: 28rpx;
		// 			line-height: 50rpx;
		// 			padding-bottom: 15rpx;
		// 			padding-top: 10rpx;
		// 		}
		// 	}
		// }
	}
}
</style>
