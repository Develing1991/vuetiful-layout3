<template>
	<v-container class="mt-4 px-5">
		<v-row>
			<v-col cols="12" class="py-0 text-center body-2 font-weight-bold">
				<slot name="top"></slot>
			</v-col>
		</v-row>
		<v-row class="mb-3">
			<v-col cols="12">
				<slot name="center"></slot>
			</v-col>
		</v-row>
		<v-row>
			<v-col cols="12" class="pt-0 text-center">
				<slot name="bottom"></slot>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	export default {
		name: 'SiIndexPage',
	};
</script>

<style></style>
