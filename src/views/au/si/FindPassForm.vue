<template>
	<IndexPage>
		<template slot="top">
			<div class="mb-2">
				<div>비밀번호는 암호화된 상태로 저장되어 시스템 확인이</div>
				<div>
					불가능하므로
					<span class="red--text text-decoration-underline"
						>이메일 인증 후 다시 설정할 수 있습니다.</span
					>
				</div>
			</div>
		</template>
		<template slot="center">
			<ValidationObserver ref="observer">
				<form @submit.prevent="submit">
					<ValidationProvider
						v-slot="{ errors }"
						name="아이디"
						:rules="{
							required: true,
						}"
					>
						<v-text-field
							v-model="member_id"
							color="primary"
							label="아이디"
							prepend-inner-icon="mdi-account-outline"
							outlined
							dense
							:error-messages="`${errors}`"
						/>
					</ValidationProvider>
					<ValidationProvider
						v-slot="{ errors }"
						name="이름"
						:rules="{
							required: true,
						}"
					>
						<v-text-field
							v-model="member_name"
							color="primary"
							label="이름"
							prepend-inner-icon="mdi-account-outline"
							outlined
							dense
							:error-messages="`${errors}`"
						/>
					</ValidationProvider>
					<ValidationProvider
						v-slot="{ errors }"
						name="이메일"
						:rules="{
							required: true,
							email: true,
						}"
					>
						<v-text-field
							v-model="member_email"
							color="primary"
							label="이메일"
							prepend-inner-icon="mdi-account-outline"
							outlined
							dense
							:error-messages="`${errors}`"
						/>
					</ValidationProvider>

					<v-btn
						color="primary"
						width="100%"
						large
						class="d-block primary"
						type="submit"
					>
						<div class="text-subtitle-1 white--text">확인</div></v-btn
					>
				</form>
			</ValidationObserver>
		</template>
		<template slot="bottom">
			<div>
				<div class="d-inline-block mx-1">로그인</div>
				|
				<div class="d-inline-block mx-1">아이디 찾기</div>
				|
				<div class="d-inline-block mx-1">회원가입</div>
			</div>
		</template>
	</IndexPage>
</template>

<script>
	import VeeValidation from '@/mixins/VeeValidation.vue';
	import IndexPage from '@/views/au/si/IndexPage.vue';
	export default {
		components: {
			IndexPage,
		},
		mixins: [VeeValidation],
		data: () => ({
			value: '',
			member_id: '',
			member_name: '',
			member_email: '',
		}),
		methods: {
			async submit() {
				const rslt = await this.$refs.observer.validate();
				if (rslt) {
					this.$router.push({ name: 'InitPassForm' });
				}
			},
			clear() {
				this.value = '';
				this.$refs.observer.reset();
			},
		},
	};
</script>

<style></style>
