<template>
	<v-card class="pt-1" ripple elevation="0" outlined>
		<v-img
			:src="productItem.image"
			class="white--text align-end ma-2"
			gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
			height="100px"
		/>
		<div
			class="pa-1 rounded primary white--text"
			style="position: absolute; right: 0; top: 0"
		>
			{{ productItem.disc_rat }}%
		</div>
		<v-list three-line class="pa-0">
			<v-list-item class="pa-0">
				<v-list-item-content class="pa-0 pt-2" style="align-items: start">
					<v-list-item-subtitle
						class="px-2 py-0 ma-0 black--text"
						style="line-height: 20px !important; min-height: 40px"
					>
						{{ productItem.title }}
					</v-list-item-subtitle>
					<v-list-title>
						<div class="px-2 mt-2 py-0 ma-0" style="font-size: 12px">
							[{{ productItem.brand_name }}]
						</div>

						<div
							class="px-2 mt-2 font-weight-bold red--text"
							style="font-size: 16px"
						>
							{{ productItem.seller_prc | commaFilter }}원
						</div>
						<div
							class="px-2 mt-2 text-decoration-line-through"
							style="font-size: 12px"
						>
							{{ productItem.cust_prc | commaFilter }}원
						</div>
					</v-list-title>
				</v-list-item-content>
			</v-list-item>
		</v-list>

		<v-card-actions class="py-0">
			<v-spacer />
			<v-btn icon class="px-0" @click="$emit('wish', productItem.product_cd)">
				<v-icon>mdi-heart-outline</v-icon>
			</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
	import FilterMixin from '@/mixins/FilterMixin.vue';
	export default {
		mixins: [FilterMixin],
		props: {
			productItem: {
				type: Object,
				default: () => ({}),
			},

			// brand: {
			// 	type: String,
			// 	default: null,
			// },
			// title: {
			// 	type: String,
			// 	default: null,
			// },
			// seller_prc: {
			// 	type: String,
			// 	default: null,
			// },
			// cust_prc: {
			// 	type: String,
			// 	default: null,
			// },
		},
		data() {
			return {
				resetTitle: '',
			};
		},
		computed: {
			elipsis() {
				return '';
			},
		},
		mounted() {
			//swiper ui까지 완료된 이후 동작
			this.$nextTick(function () {
				//this.titleElipsis();
			});
		},
	};
</script>

<style></style>
