<template>
	<ValidationObserver ref="observer">
		<v-container class="mt-2">
			<v-row>
				<v-col cols="12">
					<div class="font-weight-bold body-2 my-2">메시지 정보</div>
					<ValidationProvider
						v-slot="{ errors }"
						name="메시지 제목"
						:rules="{
							required: true,
							check_byte: byte_valid && limit_byte,
						}"
					>
						<v-text-field
							v-model="msg_title"
							color="primary"
							placeholder="메시지 제목을 입력해주세요"
							outlined
							dense
							counter
							:counter-value="() => `${msg_title_byte} / 80`"
							:error-messages="`${errors}`"
							@keyup="byteLengthOracle(80, $event, 'msg_title_byte')"
						/>
					</ValidationProvider>
					<ValidationProvider
						v-slot="{ errors }"
						name="메시지 내용"
						:rules="{
							required: true,
							check_byte: byte_valid && limit_byte,
						}"
					>
						<v-textarea
							v-model="msg_contents"
							color="primary"
							placeholder="메시지 내용을 입력해주세요"
							outlined
							dense
							counter
							:counter-value="() => `${msg_contents_byte} / 400`"
							:error-messages="`${errors}`"
							rows="5"
							row-height="30"
							no-resize
							@keyup="byteLengthOracle(400, $event, 'msg_contents_byte')"
						/>
					</ValidationProvider>
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="12">
					<v-btn class="primary" width="100%">저장</v-btn>
				</v-col>
			</v-row>
		</v-container>
	</ValidationObserver>
</template>

<script>
	import VeeValidation from '@/mixins/VeeValidation.vue';
	export default {
		mixins: [VeeValidation],

		data() {
			return {
				msg_title_byte: 0,
				msg_contents_byte: 0,
				byte_valid: false,
				limit_byte: 0,
				msg_title: null,
				msg_contents: null,
			};
		},
		methods: {
			byteLengthOracle(limit_byte, event, target) {
				let value = event.target.value;
				let byte = 0;
				for (let i = 0; i < value.length; i++) {
					if (value.charCodeAt(i) > 127) {
						byte += 3;
					} else {
						byte++;
					}
				}
				//return byte;
				this.byte_valid = false;
				//this.text_byte = byte;

				this[target] = byte;

				this.limit_byte = limit_byte;
				if (byte > limit_byte) {
					this.byte_valid = true;
				}
			},
			submit() {
				this.$refs.observer.validate();
			},
			clear() {
				this.value = '';
				this.$refs.observer.reset();
			},
		},
	};
</script>

<style></style>
