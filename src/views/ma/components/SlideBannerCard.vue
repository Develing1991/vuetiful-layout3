<template>
	<v-card tile class="pt-1" ripple>
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
			class="px-2 py-0 ma-0"
			style="font-size: 12px; line-height: 20px"
		>
			{{ productItem.title }}
		</v-card-title>

		<v-card-actions class="py-0">
			<div>
				<div class="font-weight-bold body-1 red--text my-1">
					{{ productItem.seller_prc | commaFilter }}원
				</div>
				<div class="text-decoration-line-through body-2">
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
	};
</script>

<style></style>
