<template>
	<div>
		<v-container>
			<v-row class="my-4 text-center">
				<v-col cols="12">
					<div class="font-weight-bold text-h6">
						<div>개인정보를 안전하게 보호하기 위해</div>
						<div>
							<span class="primary--text">비밀번호</span>
							를 한번 더 입력해 주세요.
						</div>
					</div>
				</v-col>
			</v-row>
			<v-row class="text-center">
				<v-col cols="12">
					<div class="caption grey--text">
						고객님의 정보 및 비밀번호를 수정 할 수 있습니다.
					</div>
				</v-col>
			</v-row>
			<v-row class="mx-5">
				<v-col cols="12"> 아이디 : abcdefg </v-col>
				<v-col cols="12">
					<ValidationObserver ref="observer">
						<ValidationProvider
							v-slot="{ errors }"
							name="비밀번호"
							:rules="{
								required: true,
							}"
							><v-text-field
								v-model="pass"
								color="primary"
								label="비밀번호"
								prepend-inner-icon="mdi-account-outline"
								outlined
								dense
								:error-messages="`${errors}`"
							/>
						</ValidationProvider>
					</ValidationObserver>
				</v-col>
				<v-col cols="12">
					<v-btn class="primary" width="100%"> 확인 </v-btn>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
	import VeeValidation from '@/mixins/VeeValidation.vue';
	export default {
		mixins: [VeeValidation],
		data() {
			return {
				pass: null,
			};
		},
	};
</script>

<style></style>
