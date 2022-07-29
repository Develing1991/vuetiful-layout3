<template>
	<v-container>
		<v-row class="my-4 text-center">
			<v-col cols="12">
				<div class="font-weight-bold text-h6">
					<div>변경할 이메일 주소를 입력하시고</div>
					<div>발송된 인증 번호를 정확하게 입력해주세요.</div>
				</div>
			</v-col>
		</v-row>

		<ValidationObserver ref="observer">
			<v-row class="mx-5">
				<v-col cols="9">
					<ValidationProvider
						v-slot="{ errors }"
						name="이메일"
						:rules="{
							required: true,
							email,
						}"
					>
						<v-text-field
							v-model="email"
							color="primary"
							label="이메일"
							prepend-inner-icon="mdi-account-outline"
							outlined
							dense
							:error-messages="`${errors}`"
						/>
					</ValidationProvider>
				</v-col>
				<v-col cols="3" class="pl-0 pb-0">
					<v-btn color="primary" width="100%" class="d-block primary">
						<div class="text-subtitle-1 white--text">인증</div></v-btn
					>
				</v-col>
			</v-row>
		</ValidationObserver>

		<ValidationObserver ref="observer">
			<v-row class="mx-5">
				<v-col cols="9">
					<ValidationProvider
						v-slot="{ errors }"
						name="이메일 인증번호"
						:rules="{
							required: true,
							digits: 6,
						}"
					>
						<v-text-field
							v-model="email_num"
							color="primary"
							label="이메일 인증번호"
							prepend-inner-icon="mdi-account-outline"
							outlined
							dense
							:error-messages="`${errors}`"
						/>
					</ValidationProvider>
				</v-col>
				<v-col cols="3" class="pl-0 pb-0">
					<v-btn color="primary" width="100%" class="d-block primary">
						<div class="text-subtitle-1 white--text">인증 확인</div></v-btn
					>
				</v-col>
			</v-row>
		</ValidationObserver>
		<v-row class="mx-5">
			<v-col cols="12">
				<div>※ 아이디, 비밀번호 찾기 시 이메일로 인증번호가 발송됩니다.</div>
				<div>※ 인증번호는 메일 발송 후 600초 이내 입력해주세요.</div>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	import VeeValidation from '@/mixins/VeeValidation.vue';

	export default {
		mixins: [VeeValidation],
		data() {
			return {
				email: null,
				email_num: null,
			};
		},
	};
</script>

<style></style>
