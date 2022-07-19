<template>
	<!-- <v-footer class="pa-0" :app="useApp"> 푸터입니당 </v-footer> -->
	<v-footer padless :app="useApp" class="mt-10">
		<v-card flat tile class="secondary lighten-5">
			<v-card-text class="black--text">
				회원이용약관 | 개인정보처리방침
			</v-card-text>

			<v-card-text class="pt-0 black--text" style="font-size: 12px">
				<ul style="list-style: none; padding-left: 0px">
					<li>회사명 : (주)한국이컴</li>
					<li>대표이사 : 김정수</li>
					<li>
						소재지 : 서울시 금천구 가산디지털 2로 184 벽산디지털밸리2차
						1212-1213호
					</li>
					<li>사업자등록번호 : 114-81-76297</li>
					<li>통신판매업신고 : 2020-서울금천-0419호</li>
					<li>개인정보보호책임자 : 권대일</li>
					<li>이메일 : kkulcon@kbnc.co.kr</li>
				</ul>
			</v-card-text>

			<v-card-text class="py-0 black--text">
				COPYRIGHT @ KECOM CORP. ALL RIGHTS RESERVED.
			</v-card-text>
		</v-card>
	</v-footer>
</template>

<script>
	export default {
		props: {
			useApp: {
				type: Boolean,
				default: false,
			},
		},
		data: () => ({
			icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'],
		}),
	};
</script>

<style></style>
