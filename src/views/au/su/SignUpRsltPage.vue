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
					<v-col cols="1" color="green darken-2">
						<span>
							<v-icon> mdi-chevron-right </v-icon>
						</span>
					</v-col>
					<v-col cols="3" color="green darken-2">
						<span>
							<v-icon> mdi-account-edit-outline </v-icon>
							<div class="green--text darken-2">회원정보입력</div>
						</span>
					</v-col>
					<v-col cols="1" color="green darken-2">
						<span>
							<v-icon> mdi-chevron-right </v-icon>
						</span>
					</v-col>
					<v-col cols="3" color="green darken-2">
						<span>
							<v-icon> mdi-account-plus-outline</v-icon>
							<div class="green--text darken-2">가입완료</div>
						</span>
					</v-col>
				</v-row>
				<v-divider />
			</v-card>
		</template>

		<template slot="center"> </template>
		<template slot="bottom"> </template>
	</IndexPage>
</template>

<script>
	import IndexPage from '@/views/au/su/IndexPage.vue';

	export default {
		components: {
			IndexPage,
		},
	};
</script>

<style></style>
