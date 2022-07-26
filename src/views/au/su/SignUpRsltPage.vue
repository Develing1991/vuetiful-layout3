<template>
	<IndexPage>
		<template slot="top">
			<v-card elevation="0" tile class="pa-0 ma-0" width="100%">
				<v-row justify="center" class="pb-2">
					<v-col cols="3">
						<span>
							<v-icon color="green darken-2">
								mdi-text-box-check-outline
							</v-icon>
							<div class="green--text darken-2">약관동의</div>
						</span>
					</v-col>
					<v-col cols="1">
						<span>
							<v-icon color="green darken-2"> mdi-chevron-right </v-icon>
						</span>
					</v-col>
					<v-col cols="3">
						<span>
							<v-icon color="green darken-2"> mdi-account-edit-outline </v-icon>
							<div class="green--text darken-2">회원정보입력</div>
						</span>
					</v-col>
					<v-col cols="1">
						<span>
							<v-icon color="green darken-2"> mdi-chevron-right </v-icon>
						</span>
					</v-col>
					<v-col cols="3">
						<span>
							<v-icon color="green darken-2">
								mdi-account-check-outline
							</v-icon>
							<div class="green--text darken-2">가입완료</div>
						</span>
					</v-col>
				</v-row>
				<v-divider />
			</v-card>
		</template>

		<template slot="center">
			<v-row v-if="isNormalRslt">
				<v-col cols="12" class="text-center">
					<v-avatar color="primary" size="128">
						<v-icon size="96" dark>mdi-account-check-outline</v-icon>
					</v-avatar>
					<div class="text-h6 font-weight-bold my-4">
						회원가입이 <span class="primary--text">완료</span>되었습니다.
					</div>
					<div class="body-2 my-4">
						로그인 후 서비스를 이용하실 수 있습니다.
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
