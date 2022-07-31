<template>
	<ValidationObserver ref="observer">
		<v-container class="mt-2">
			<v-row>
				<v-col cols="12">
					<ValidationProvider
						v-slot="{ errors }"
						name="발신자명"
						:rules="{
							required: true,
						}"
					>
						<v-text-field
							v-model="sender_name"
							color="primary"
							placeholder="발신자명(30자 이내)"
							outlined
							dense
							:error-messages="`${errors}`"
						/>
					</ValidationProvider>
					<ValidationProvider
						v-slot="{ errors }"
						name="발신번호"
						:rules="{
							required: true,
						}"
					>
						<v-text-field
							v-model="sender_phone"
							color="primary"
							placeholder="발신번호를 입력해주세요"
							outlined
							dense
							:error-messages="`${errors}`"
						/>
					</ValidationProvider>
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="12">
					<div class="caption black--text">
						<div class="font-weight-bold">발신번호 입력 안내</div>
						<ul>
							<li>발신자명은 수신자에게 표시되지않습니다.</li>
							<li>
								번호도용 차단서비스에 가입된 휴대폰번호인 경우 발신에 실패할 수
								있습니다.
							</li>
							<li>
								발신번호가 올바르지 않으면 발신 실패합니다.
								<div>- 유선번호는 지역번호를 포함하여 개입</div>
								<div>- 전국대표변호는 지역번호 없이 가입</div>
							</li>
						</ul>
					</div>
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
				sender_name: null,
				sender_phone: null,
			};
		},
		methods: {
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
