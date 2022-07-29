<template>
	<v-container>
		<v-row>
			<v-col cols="12" class="font-weight-bold text-h6"> 회원탈퇴 안내 </v-col>
		</v-row>
		<v-divider class="my-2" />
		<v-row>
			<v-col cols="12">
				<div>
					<div class="subtitle-1">1. 개인정보보호 관리</div>
					<ul>
						<li>
							탈퇴 후 고객님의 아이디와 이메일정보는 꿀콘비즈 개인정보 처리
							방침에 의해 회원 탈퇴한 날로부터 영구 보관되며, 재가입이
							불가능합니다.
						</li>
						<li>
							거래 정보가 있는 경우, 판매 거래 정보관리를 위하여 거래의 종류 및
							금액, 거래상대방 정보 등의 거래 정보를 건당 거래금액이 1만원
							초과시 5년, 1만원 미만 시 1년을 유지, 보존합니다.
						</li>
					</ul>
					<div class="subtitle-1">2. 개인정보처리</div>
					<ul>
						<li>
							탈퇴 시 주문내역, 1:1문의 내역, 회원정보는 모두 삭제되며 복구
							불가능합니다.
						</li>
					</ul>
					<div class="subtitle-1">3. 회원탈퇴 불가</div>
					<ul>
						<li>
							다음의 경우는 회원탈퇴가 불가합니다. 해당 사항이 있으신 경우는
							아래 내역을 종료하신 후 탈퇴 신청하세요. 유효기간이 남은 발급 쿠폰
							및 예약발송 대기중인 주문이 없어야 탈퇴가 가능하며, 철회 또는
							취소로 인한 불이익은 회원님이 부담하셔야 함을 유의해 주시기
							바랍니다.
						</li>
					</ul>
				</div>
			</v-col>
		</v-row>
		<v-divider class="my-2" />

		<ValidationObserver ref="observer">
			<v-row>
				<v-col cols="12" class="font-weight-bold text-h6">
					비밀번호 확인
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="12">
					<ValidationProvider
						v-slot="{ errors }"
						name="비밀번호"
						:rules="{
							required: true,
						}"
						><v-text-field
							v-model="newPass"
							color="primary"
							placeholder="본인 확인을 위해 비밀번호를 입력해주세요"
							prepend-inner-icon="mdi-account-outline"
							outlined
							dense
							:error-messages="`${errors}`"
						/>
					</ValidationProvider>
				</v-col>
			</v-row>
			<v-divider class="my-2" />
			<v-row>
				<v-col cols="12" class="font-weight-bold text-h6"> 탈퇴 사유 </v-col>
			</v-row>
			<v-row>
				<v-col cols="12">
					<ValidationProvider
						v-slot="{ errors }"
						name="탈퇴사유 선택"
						:rules="{
							required: true,
						}"
					>
						<v-select
							:items="['Foo', 'Bar', 'Fizz', 'Buzz']"
							placeholder="탈퇴 사유 선택"
							outlined
							:error-messages="`${errors}`"
						/>
					</ValidationProvider>
					<ValidationProvider
						v-slot="{ errors }"
						name="탈퇴사유"
						:rules="{
							required: true,
						}"
					>
						<v-textarea
							id="grid2"
							ref="recvr_scroll2"
							color="primary"
							placeholder="직접 입력을 선택한 경우 입력해주세요"
							outlined
							dense
							:error-messages="`${errors}`"
							rows="5"
							row-height="30"
							no-resize
						/>
					</ValidationProvider>
					<ValidationProvider
						v-slot="{ errors }"
						name="동의"
						:rules="{
							required_check: true,
						}"
					>
						<div>
							<v-icon
								:class="{
									'float-left': true,
									'primary--text': true,
								}"
								>{{
									true ? 'mdi-checkbox-marked' : 'mdi-checkbox-blank-outline'
								}}
							</v-icon>
							<input value="" type="hidden" />
							<div class="float-left ml-3">
								위 안내를 모두 확인하고 탈퇴에 동의합니다.
							</div>
							<div class="ml-3 pt-1 error-text">
								{{ errors[0] }}
							</div>
						</div>
					</ValidationProvider>
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="12">
					<v-btn class="primary" width="100%" @click="confirmYes"> 확인 </v-btn>
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
		methods: {
			confirmYes() {
				// if (false) {
				// 	this.$refs.observer.validate();
				// }
				this.$router.push({ name: 'WithdrwlRsltPage' });
			},
		},
	};
</script>

<style>
	.error-text {
		line-height: 12px;
		word-break: break-word;
		overflow-wrap: break-word;
		word-wrap: break-word;
		-webkit-hyphens: auto;
		hyphens: auto;
		font-size: 12px;
		text-align: left;
		clear: both;
		color: #ff5252 !important;
	}
</style>
