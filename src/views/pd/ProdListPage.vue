<template>
	<div class="ma-2 mb-10">
		<SelectBanner @item="fetchProdList" />
		<v-divider />
		<SelectRsltBanner :title="title" />
	</div>
</template>

<script>
	import SelectBanner from '@/views/pd/components/SelectBanner.vue';
	import SelectRsltBanner from '@/views/pd/components/SelectRsltBanner.vue';
	export default {
		components: {
			SelectBanner,
			SelectRsltBanner,
		},
		data() {
			return {
				title: '',
			};
		},
		methods: {
			fetchProdList(item) {
				const data = JSON.parse(item);
				alert(`${data.title} 검색!!`);
				this.title = data.title;
			},
		},
	};
</script>

<style></style>
