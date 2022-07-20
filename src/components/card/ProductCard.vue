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
		<v-card-subtitle class="px-2 py-0 ma-0" style="font-size: 12px">
			[{{ productItem.brand_name }}]
		</v-card-subtitle>
		<v-card-title
			ref="prd_title"
			class="px-2 py-0 ma-0"
			style="
				font-size: 12px;
				line-height: 20px !important;
				min-height: 40px;
				align-items: start;
			"
		>
			<!-- {{ productItem.title }} -->
			{{ resetTitle }}
		</v-card-title>

		<!-- {{ $vuetify.breakpoint.xs }}
		{{ $vuetify.breakpoint.sm }}
		{{ $vuetify.breakpoint.md }}
		{{ $vuetify.breakpoint.lg }}
		{{ $vuetify.breakpoint.xl }} -->
		<v-card-actions class="py-0">
			<div>
				<div
					class="font-weight-bold red--text my-1"
					style="font-size: 16px"
					:class="{ fontSizeSellerPrc: isGalaxyFold }"
				>
					{{ productItem.seller_prc | commaFilter }}원
				</div>
				<div
					class="text-decoration-line-through"
					style="font-size: 12px"
					:class="{ fontSizeCustPrc: isGalaxyFold }"
				>
					{{ productItem.cust_prc | commaFilter }}원
				</div>
			</div>
			<v-spacer />
			<v-btn icon class="px-0" @click="$emit('wish', productItem.product_cd)">
				<v-icon>mdi-heart-outline</v-icon>
			</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
	import FilterMixin from '@/mixins/FilterMixin.vue';
	import ComputedMixin from '@/mixins/ComputedMixin.vue';
	export default {
		mixins: [FilterMixin, ComputedMixin],
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
				this.titleElipsis();
			});
		},
		methods: {
			titleElipsis() {
				const title = this.productItem.title;

				const titleWidth = this.$refs.prd_title.clientWidth;

				const titleLength = this.productItem.title.length;
				//fontsize px,같은 문자는 제거
				const fontSize = Number(
					this.$refs.prd_title.style.fontSize
						.split('')
						.filter(num => {
							return !!Number(num);
						})
						.join(''),
				);
				//최대 라인 보여줄 수
				const maxLine = 2;

				//106 /
				//21  * 12 /106 = 2.3777  -> 2줄 하고 3글자... 임  > 2 (내가설정한 2라인보다 크면)
				// console.log(title);
				// console.log((titleLength * fontSize) / titleWidth);
				if ((titleLength * fontSize) / titleWidth > maxLine) {
					this.resetTitle =
						title.substr(0, (titleWidth / fontSize) * maxLine - 2) + '...';
					console.log(this.resetTitle);
				} else {
					this.resetTitle = title;
				}

				// console.log(this.productItem.title);
				// console.log(this.productItem.title.length);
				// console.log(this.$refs.prd_title.clientWidth);
				// console.log(this.$refs.prd_title.style.fontSize);
			},
		},
	};
</script>

<style>
	.fontSizeSellerPrc {
		font-size: 12px !important;
	}
	.fontSizeCustPrc {
		font-size: 10px !important;
	}
</style>
