<template>
	<v-dialog v-model="show" max-width="290" persistent>
		<v-date-picker
			v-model="selectDate"
			locale="ko-kr"
			no-title
			:allowed-dates="val => allowedDate(val)"
		/>
		<v-list class="overflow-y-auto" height="200px">
			<v-divider />
			<v-list-item-group color="primary">
				<v-list-item
					v-for="(time, index) in timeList"
					:key="`${time}-${index}`"
					style="justify-content: center"
					ripple
					@click="selectTime = time"
				>
					{{ time }}
				</v-list-item>
			</v-list-item-group>
			<v-divider />
		</v-list>
		<v-list>
			<v-list-item style="justify-content: center">
				<v-btn class="primary--text" text width="100%" @click="confirmDate">
					확인
				</v-btn>
			</v-list-item>
		</v-list>
	</v-dialog>
</template>

<script>
	import { format } from 'date-fns';
	export default {
		props: {
			show: {
				type: Boolean,
				default: true,
			},
		},
		data() {
			return {
				selectDate: null,
				selectTime: null,
			};
		},
		computed: {
			timeList() {
				const date = new Date(9999, 1, 1);
				const rtrnList = [];
				for (let index = 0; index < 48; index++) {
					rtrnList.push(format(date, 'HH:mm'));
					date.setMinutes(date.getMinutes() + 30);
				}

				return rtrnList;
			},
		},
		methods: {
			allowedDate(val) {
				const now = new Date();
				const formatNow = format(now, 'yyyy-MM-dd');

				return val > formatNow;
			},
			confirmDate() {
				if (!this.selectDate || !this.selectTime) {
					alert('날짜와 시간을 선택해 주세요.');
					return;
				}

				this.$emit('pickerClose', {
					selectDate: this.selectDate,
					selectTime: this.selectTime,
				});
			},
		},
	};
</script>

<style></style>
