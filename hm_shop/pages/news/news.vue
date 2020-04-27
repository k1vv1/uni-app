<template>
	<view class="news">
		<news-item @itemClick="goDetail" :list="newsList"></news-item>
		<!-- <view class="news_item" v-for="item in newsList" :key="item.id">
			<image :src="item.img_url"></image>
			<view class="right">
				<view class="tit">
					{{item.title}}
				</view>
				<view class="info">
					<text>发表时间: {{item.add_time}}</text>
					<text>浏览：{{item.click}}</text>
				</view>
			</view>
		</view> -->
	</view>
</template>

<script>
	import newsItem from '../../components/news-item/news-item.vue'
	export default {
		data() {
			return {
				newsList: []
			}
		},
		onLoad() {
			this.getNews()
		},
		methods: {
			async getNews() {
				const res = await this.$myRequest({
					url: '/api/getnewslist'
				})
				this.newsList = res.data.message
			},
			goDetail(id) {
				uni.navigateTo({
					url: '/pages/news-detail/news-detail?id=' + id
				})
			}
		},
		components: {
			"news-item": newsItem
		}
	}
</script>

<style lang="scss">
.news{
	// .news_item{
	// 	display: flex;
	// 	padding: 10rpx 20rpx;
	// 	border-bottom: 1px solid $shop-color;
	// 	image{
	// 		min-width: 200rpx;
	// 		max-width: 200rpx;
	// 		height: 150rpx;
	// 	}
	// 	.right{
	// 		margin-left: 15rpx;
	// 		display: flex;
	// 		flex-direction: column;
	// 		justify-content: space-between;
	// 		.tit{
	// 			font-size: 30rpx;
	// 		}
	// 		.info{
	// 			font-size: 24rpx;
	// 			text:nth-child(2){
	// 				margin-left: 30rpx;
	// 			}
	// 		}
	// 	}
	// }
}
</style>
