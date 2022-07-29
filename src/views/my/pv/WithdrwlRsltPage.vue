<template>
	<IndexPage>
		<template slot="top">
			<div class="my-16"></div>
		</template>

		<template slot="center">
			<v-row v-if="isNormalRslt">
				<v-col cols="12" class="text-center">
					<v-avatar color="primary" size="128">
						<v-icon size="96" dark>mdi-account-remove-outline</v-icon>
					</v-avatar>
					<div class="text-h6 font-weight-bold my-4 mt-10">
						<div class="my-3">
							회원탈퇴가 <span class="primary--text">완료</span>되었습니다.
						</div>
						<div class="mt-8">
							<div>
								그 동안
								<span class="primary--text">꿀콘비즈</span>를
							</div>
						</div>
						<div class="my-3">이용해 주셔서 감사합니다.</div>
					</div>
				</v-col>
			</v-row>

			<v-row v-else>
				<v-col cols="12" class="text-center">
					<v-avatar color="primary" size="128">
						<v-icon size="96" dark>mdi-account-check-outline</v-icon>
					</v-avatar>
					<div class="text-h6 font-weight-bold my-4">
						회원가입신청이 <span class="primary--text">완료</span>되었습니다.
					</div>
					<div class="body-2 my-4">
						<div>승인 처리는 영업일을 기준 1일 이내에 완료되며,</div>
						<div>회원가입 완료 안내 메일이 발송됩니다.</div>
						<div>회원가입 완료 후 서비스를 이용하실 수 있습니다.</div>
						<div>감사합니다.</div>
					</div>

					<v-btn
						width="100%"
						class="primary"
						tile
						large
						@click="$router.push({ name: 'SignInForm' })"
					>
						로그인
					</v-btn>
				</v-col>
			</v-row>
		</template>
		<template slot="bottom"> </template>
	</IndexPage>
</template>

<script>
	import IndexPage from '@/views/au/su/IndexPage.vue';

	export default {
		components: {
			IndexPage,
		},
		data() {
			return {
				isNormalRslt: true,
			};
		},
	};
</script>

<style></style>
