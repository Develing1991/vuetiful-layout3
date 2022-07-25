<template>
	<IndexPage>
		<template slot="top">
			<div class="mb-2">
				<div>아이디를 찾기 위해</div>
				<div>이름과 가입 시 등록한 이메일을 입력해주세요.</div>
			</div>
		</template>
		<template slot="center">
			<ValidationObserver ref="observer">
				<form @submit.prevent="submit">
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

					<template v-if="isAuth">
						<div class="primary lighten-3 black--text text-center my-3">
							<div class="white py-2 body-2">회원님의 아이디를 찾았습니다.</div>
							<div class="py-2">ab***ef</div>
							<div class="py-2">(가입일 : yyyy-mm-dd)</div>
							<div class="white py-2 body-2">
								아이디를 모두 확인하시려면 이메일인증 후 확인하실 수 있습니다.
							</div>
						</div>

						<v-btn
							color="primary"
							width="100%"
							large
							class="d-block primary"
							@click="$router.push({ name: 'FindAcctAllForm' })"
						>
							<div class="text-subtitle-1 white--text">
								이메일 인증 후 아이디 전체 보기
							</div></v-btn
						>
					</template>
					<template v-else>
						<v-btn
							color="primary"
							width="100%"
							large
							class="d-block primary"
							type="submit"
						>
							<div class="text-subtitle-1 white--text">확인</div></v-btn
						>
					</template>
				</form>
			</ValidationObserver>
		</template>
		<template slot="bottom">
			<div>
				<div class="d-inline-block mx-1">로그인</div>
				|
				<div class="d-inline-block mx-1">비밀번호 찾기</div>
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
			member_name: '',
			member_email: '',
			isAuth: false,
		}),
		methods: {
			async submit() {
				const rslt = await this.$refs.observer.validate();
				if (rslt) {
					this.isAuth = true;
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
