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
							<div>약관동의</div>
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
							<div>회원정보입력</div>
						</span>
					</v-col>
					<v-col cols="1">
						<span>
							<v-icon color="green darken-2"> mdi-chevron-right </v-icon>
						</span>
					</v-col>
					<v-col cols="3">
						<span>
							<v-icon color="green darken-2"> mdi-account-plus-outline</v-icon>
							<div>가입완료</div>
						</span>
					</v-col>
				</v-row>
				<v-divider />
			</v-card>
			<div class="my-4 subtitle-1 font-weight-bold">
				<div>약관 및 개인정보 수집이용안내를</div>
				<div>
					반드시 읽고 난 뒤
					<span class="primary--text">동의</span>해 주세요.
				</div>
			</div>
		</template>

		<template slot="center">
			<ValidationObserver ref="observer">
				<form @submit.prevent="submit">
					<div class="ma-2">
						* 서비스 이용 동의
						<span class="font-weight-bold primary--text">(필수)</span>
					</div>
					<v-list outlined class="py-0">
						<v-list-item dense style="height: 70px">
							<v-list-item-content class="py-0">
								<ValidationProvider
									v-slot="{ errors }"
									name="전체 동의"
									:rules="{
										required_check: true,
									}"
								>
									<div @click="clkSvrcTrmsAll">
										<v-icon
											:class="{
												'float-left': true,
												'primary--text': !!svrcTrmsAll,
											}"
											>{{
												!!svrcTrmsAll
													? 'mdi-checkbox-marked'
													: 'mdi-checkbox-blank-outline'
											}}
										</v-icon>
										<input :value="svrcTrmsAll" type="hidden" />
										<div class="float-left ml-3">
											<div>서비스 이용약관 및 개인정보 수집 및 이용</div>
											<div class="red--text">동의에 모두 동의합니다.</div>
											<div class="mt-2 body-2 red--text">
												{{ errors[0] }}
											</div>
										</div>
									</div>
								</ValidationProvider>
							</v-list-item-content>
						</v-list-item>
						<v-divider />
						<v-list-item dense style="height: 70px">
							<v-list-item-content class="py-0">
								<ValidationProvider
									v-slot="{ errors }"
									name="서비스 이용약관 동의"
									:rules="{
										required_check: true,
									}"
								>
									<div @click="svrcTrmsCheck(0)">
										<v-icon
											:class="{
												'float-left': true,
												'primary--text': !!svrcTrmsCheckList[0],
											}"
											>{{
												!!svrcTrmsCheckList[0]
													? 'mdi-checkbox-marked'
													: 'mdi-checkbox-blank-outline'
											}}
										</v-icon>
										<input :value="svrcTrmsCheckList[0]" type="hidden" />
										<div class="float-left ml-3">
											서비스 이용약관 동의
											<div class="mt-2 body-2 red--text">
												{{ errors[0] }}
											</div>
										</div>
									</div>
								</ValidationProvider>
							</v-list-item-content>

							<v-list-item-action>
								<v-btn tile outlined small class="pr-0"
									>내용보기
									<v-icon> mdi-chevron-right </v-icon>
								</v-btn>
							</v-list-item-action>
						</v-list-item>
						<v-divider />
						<v-list-item dense style="height: 70px">
							<v-list-item-content class="py-0">
								<ValidationProvider
									v-slot="{ errors }"
									name="개인정보 수집 및 이용 동의"
									:rules="{
										required_check: true,
									}"
								>
									<div @click="svrcTrmsCheck(1)">
										<v-icon
											:class="{
												'float-left': true,
												'primary--text': !!svrcTrmsCheckList[1],
											}"
											>{{
												!!svrcTrmsCheckList[1]
													? 'mdi-checkbox-marked'
													: 'mdi-checkbox-blank-outline'
											}}
										</v-icon>
										<input :value="svrcTrmsCheckList[1]" type="hidden" />
										<div class="float-left ml-3">
											개인정보 수집 및 이용 동의
											<div class="mt-2 body-2 red--text">
												{{ errors[0] }}
											</div>
										</div>
									</div>
								</ValidationProvider>
							</v-list-item-content>
							<v-list-item-action>
								<v-btn tile outlined small class="pr-0"
									>내용보기
									<v-icon> mdi-chevron-right </v-icon>
								</v-btn>
							</v-list-item-action>
						</v-list-item>
					</v-list>
					<div class="body-2 text-center">
						귀하는 동의 거부 권리가 있으며, 동의 거부 시 서비스 가입이
						불가합니다.
					</div>
					<!-- ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd -->
					<v-divider />
					<div class="ma-2">
						* 서비스 이용 동의
						<span class="font-weight-bold primary--text">(필수)</span>
					</div>
					<v-list outlined class="py-0">
						<v-list-item dense style="height: 70px">
							<v-list-item-content class="py-0">
								<ValidationProvider
									v-slot="{ errors }"
									name="전체 동의"
									:rules="{
										required_check: true,
									}"
								>
									<div @click="clkSvrcTrmsAll">
										<v-icon
											:class="{
												'float-left': true,
												'primary--text': !!svrcTrmsAll,
											}"
											>{{
												!!svrcTrmsAll
													? 'mdi-checkbox-marked'
													: 'mdi-checkbox-blank-outline'
											}}
										</v-icon>
										<input :value="svrcTrmsAll" type="hidden" />
										<div class="float-left ml-3">
											<div>서비스 이용약관 및 개인정보 수집 및 이용</div>
											<div class="red--text">동의에 모두 동의합니다.</div>
											<div class="mt-2 body-2 red--text">
												{{ errors[0] }}
											</div>
										</div>
									</div>
								</ValidationProvider>
							</v-list-item-content>
						</v-list-item>
						<v-divider />
						<v-list-item dense style="height: 70px">
							<v-list-item-content class="py-0">
								<ValidationProvider
									v-slot="{ errors }"
									name="서비스 이용약관 동의"
									:rules="{
										required_check: true,
									}"
								>
									<div @click="svrcTrmsCheck(0)">
										<v-icon
											:class="{
												'float-left': true,
												'primary--text': !!svrcTrmsCheckList[0],
											}"
											>{{
												!!svrcTrmsCheckList[0]
													? 'mdi-checkbox-marked'
													: 'mdi-checkbox-blank-outline'
											}}
										</v-icon>
										<input :value="svrcTrmsCheckList[0]" type="hidden" />
										<div class="float-left ml-3">
											서비스 이용약관 동의
											<div class="mt-2 body-2 red--text">
												{{ errors[0] }}
											</div>
										</div>
									</div>
								</ValidationProvider>
							</v-list-item-content>

							<v-list-item-action>
								<v-btn tile outlined small class="pr-0"
									>내용보기
									<v-icon> mdi-chevron-right </v-icon>
								</v-btn>
							</v-list-item-action>
						</v-list-item>
						<v-divider />
						<v-list-item dense style="height: 70px">
							<v-list-item-content class="py-0">
								<ValidationProvider
									v-slot="{ errors }"
									name="개인정보 수집 및 이용 동의"
									:rules="{
										required_check: true,
									}"
								>
									<div @click="svrcTrmsCheck(1)">
										<v-icon
											:class="{
												'float-left': true,
												'primary--text': !!svrcTrmsCheckList[1],
											}"
											>{{
												!!svrcTrmsCheckList[1]
													? 'mdi-checkbox-marked'
													: 'mdi-checkbox-blank-outline'
											}}
										</v-icon>
										<input :value="svrcTrmsCheckList[1]" type="hidden" />
										<div class="float-left ml-3">
											개인정보 수집 및 이용 동의
											<div class="mt-2 body-2 red--text">
												{{ errors[0] }}
											</div>
										</div>
									</div>
								</ValidationProvider>
							</v-list-item-content>
							<v-list-item-action>
								<v-btn tile outlined small class="pr-0"
									>내용보기
									<v-icon> mdi-chevron-right </v-icon>
								</v-btn>
							</v-list-item-action>
						</v-list-item>
					</v-list>
					<div class="body-2 text-center">
						귀하는 동의 거부 권리가 있으며, 동의 거부 시 서비스 가입이
						불가합니다.
					</div>

					<v-btn
						color="primary"
						width="100%"
						large
						class="mt-5 d-block primary"
						type="submit"
					>
						<div class="text-subtitle-1 white--text">로그인</div></v-btn
					>
					<v-btn
						width="100%"
						large
						color="primary"
						outlined
						class="mt-5 d-block"
						@click="aaaa"
					>
						<div class="text-subtitle-1 primary--text">회원가입</div></v-btn
					>
				</form>
			</ValidationObserver>
		</template>
		<template slot="bottom"
			><div>
				<div
					class="d-inline-block mx-1"
					@click="$router.push({ name: 'FindAcctOneForm' })"
				>
					아이디 찾기
				</div>
				|
				<div
					class="d-inline-block mx-1"
					@click="$router.push({ name: 'FindPassForm' })"
				>
					비밀번호 찾기
				</div>
			</div>
		</template>
	</IndexPage>
</template>

<script>
	import VeeValidation from '@/mixins/VeeValidation.vue';
	import IndexPage from '@/views/au/su/IndexPage.vue';
	export default {
		components: {
			IndexPage,
		},
		mixins: [VeeValidation],
		data: () => ({
			value: '',
			member_id: '',
			password: '',
			showPass: true,
			emailSave: false,
			svrcTrmsAll: null,
			svrcTrmsCheckList: [null, null],
		}),
		methods: {
			submit() {
				console.log(this.svrcTrmsAll);
				this.$refs.observer.validate();
			},
			aaaa() {
				console.log(this.autoLogin);
			},
			clear() {
				this.value = '';
				this.$refs.observer.reset();
			},
			clkSvrcTrmsAll() {
				this.svrcTrmsAll = !this.svrcTrmsAll;
				this.svrcTrmsCheckList = [true, true];
				if (!this.svrcTrmsAll) {
					this.svrcTrmsAll = null;
					this.svrcTrmsCheckList = [null, null];
				}
			},
			svrcTrmsCheck(value) {
				this.svrcTrmsCheckList[value] = !this.svrcTrmsCheckList[value];
				if (!this.svrcTrmsCheckList[value]) {
					this.svrcTrmsCheckList[value] = null;
				}
				this.svrcTrmsCheckList = [...this.svrcTrmsCheckList];
				const subChecked = this.svrcTrmsCheckList.filter(svrcTermCheck => {
					return svrcTermCheck === true;
				});

				this.svrcTrmsAll = null;
				if (
					subChecked.length === this.svrcTrmsCheckList.length &&
					!this.svrcTrmsAll
				) {
					this.svrcTrmsAll = true;
				}
			},
		},
	};
</script>

<style></style>
