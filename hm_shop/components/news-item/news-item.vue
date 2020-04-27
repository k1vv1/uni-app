<template>
	<view>
		<view class="news_item" @click="navigator(item.id)" v-for="item in list" :key="item.id">
			<image :src="item.img_url"></image>
			<view class="right">
				<view class="tit">
					{{item.title}}
				</view>
				<view class="info">
					<text>发表时间: {{item.add_time | formatDate}}</text>
					<text>浏览：{{item.click}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['list'],
		// filters: {
		// 	formatDate(date){
		// 		const dt = new Date(date)
				
		// 		const y = dt.getFullYear()
		// 		const m = (dt.getMonth() + 1 + '').padStart(2, '0')
		// 		const d = (dt.getDate() + '').padStart(2, '0')
				
		// 		const hh = (dt.getHours() + '').padStart(2, '0')
		// 		const mm = (dt.getMinutes() + '').padStart(2, '0')
		// 		const ss = (dt.getSeconds() + '').padStart(2, '0')
				
		// 		return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
		// 		// return y + '-' + m + '-' + d + ' ' + hh + ':' + mm + ':' + ss
		// 	}
		// },
		data() {
			return {
				
			};
		},
		methods: {
			navigator(id) {
				this.$emit('itemClick',id)
			}
		}
	}
</script>

<style lang="scss">
.news_item{
	display: flex;
	padding: 10rpx 20rpx;
	border-bottom: 1px solid $shop-color;
	image{
		min-width: 200rpx;
		max-width: 200rpx;
		height: 150rpx;
	}
	.right{
		margin-left: 15rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.tit{
			font-size: 30rpx;
		}
		.info{
			font-size: 24rpx;
			text:nth-child(2){
				margin-left: 30rpx;
			}
		}
	}
}
</style>
