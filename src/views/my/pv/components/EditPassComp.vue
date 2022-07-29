<template>
	<v-container>
		<v-row class="my-4 text-center">
			<v-col cols="12">
				<div class="font-weight-bold text-h6">
					<div>비밀번호가 타인에게</div>
					<div>노출되지 않도록 주의하시고</div>
					<br />
					<div>개인정보 보호를 위해 주기적으로</div>
					<div>변경하시는 것이 좋습니다.</div>
				</div>
			</v-col>
		</v-row>
		<ValidationObserver ref="observer">
			<v-row class="mx-5">
				<v-col cols="12">
					<ValidationProvider
						v-slot="{ errors }"
						name="신규 비밀번호"
						:rules="{
							required: true,
						}"
						><v-text-field
							v-model="newPass"
							color="primary"
							label="신규 비밀번호"
							prepend-inner-icon="mdi-account-outline"
							outlined
							dense
							:error-messages="`${errors}`"
						/>
					</ValidationProvider>
					<ValidationProvider
						v-slot="{ errors }"
						name="신규 비밀번호 확인"
						:rules="{
							required: true,
						}"
						><v-text-field
							v-model="newPassCfrm"
							color="primary"
							label="신규 비밀번호 확인"
							prepend-inner-icon="mdi-account-outline"
							outlined
							dense
							:error-messages="`${errors}`"
						/>
					</ValidationProvider>
				</v-col>
				<v-col cols="12" class="pt-0">
					<v-btn class="primary" width="100%" @click="$emit('close')">
						확인
					</v-btn>
				</v-col>
			</v-row>
		</ValidationObserver>
	</v-container>
</template>

<script>
	import VeeValidation from '@/mixins/VeeValidation.vue';

	export default {
		mixins: [VeeValidation],
		data() {
			return {
				newPass: null,
				newPassCfrm: null,
			};
		},
	};
</script>

<style></style>
