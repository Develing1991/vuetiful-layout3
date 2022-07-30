<template>
	<v-dialog v-model="show" persistent width="290px">
		<v-date-picker
			v-model="date"
			scrollable
			no-title
			locale="ko-kr"
			@input="selectDate"
		>
			<!-- <v-spacer />
			<v-btn text color="primary" @click="modal = false"> Cancel </v-btn>
			<v-btn text color="primary" @click="$refs.dialog.save(date)"> OK </v-btn> -->
		</v-date-picker>
	</v-dialog>
</template>

<script>
	export default {
		props: {
			show: {
				type: Boolean,
				default: false,
			},
			gbn: {
				type: String,
				default: 'startDtm',
			},
		},
		data() {
			return {
				date: null,
			};
		},
		methods: {
			selectDate() {
				this.$emit('selectDate', {
					date: this.date,
					gbn: this.gbn,
				});
			},
		},
	};
</script>

<style></style>
