<template>
	<v-dialog v-model="show" max-width="290" persistent>
		<!-- <v-date-picker
			v-model="picker"
			:first-day-of-week="0"
			locale="ko-kr"
			@click="aaaaa(picker)"
			     
		/> -->
		<v-date-picker
			v-model="date"
			locale="ko-kr"
			no-title
			@input="$emit('pickerClose', date)"
		/>
		<v-list class="overflow-y-auto" height="100px">
			<v-divider />
			<v-list-item ripple> 00:00 </v-list-item>
			<v-list-item ripple> 00:30 </v-list-item>
			<v-list-item ripple> 01:00 </v-list-item>
			<v-divider />
		</v-list>
	</v-dialog>
</template>

<script>
	export default {
		props: {
			show: {
				type: Boolean,
				default: true,
			},
		},
		data() {
			return {
				date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
					.toISOString()
					.substr(0, 10),
			};
		},
		methods: {},
	};
</script>

<style></style>
