<template>
	<v-container>
		<v-row class="px-3">
			<v-col cols="3" class="px-1 pb-0">
				<v-card outlined tile class="text-center pa-4 caption" height="50">
					전체
				</v-card>
			</v-col>
			<v-col cols="3" class="px-1 pb-0">
				<v-card outlined tile class="text-center pa-4 caption" height="50">
					서비스 이용
				</v-card>
			</v-col>
			<v-col cols="3" class="px-1 pb-0">
				<v-card outlined tile class="text-center pa-4 caption" height="50">
					주문/결제
				</v-card>
			</v-col>
			<v-col cols="3" class="px-1 pb-0">
				<v-card outlined tile class="text-center pa-4 caption" height="50">
					취소/환불
				</v-card>
			</v-col>
		</v-row>
		<v-row class="px-3">
			<v-col cols="3" class="px-1 pt-2">
				<v-card outlined tile class="text-center pa-4 caption" height="50">
					발송/수신
				</v-card>
			</v-col>
			<v-col cols="3" class="px-1 pt-2">
				<v-card outlined tile class="text-center pa-4 caption" height="50">
					대량 발송
				</v-card>
			</v-col>
			<v-col cols="3" class="px-1 pt-2">
				<v-card outlined tile class="text-center pa-4 caption" height="50">
					유효기간
				</v-card>
			</v-col>
			<v-col cols="3" class="px-1 pt-2">
				<v-card outlined tile class="text-center pa-4 caption" height="50">
					기타
				</v-card>
			</v-col>
		</v-row>

		<v-row class="caption">
			<v-col cols="12" class="text-left font-weight-bold py-2 ml-2">
				Q. 주문/결제
			</v-col>
		</v-row>
		<v-row
			style="border-top: 1px solid #ddd"
			class="caption text-center black--text font-weight-bold grey lighten-3 mx-2"
		>
			<v-col cols="3" class="py-2"> no </v-col>
			<v-col cols="9" class="py-2"> 제목</v-col>
		</v-row>
		<v-row
			v-for="faq in faqList"
			:key="faq.id"
			style="border-top: 1px solid #ddd"
			class="caption black--text mx-2"
		>
			<v-col cols="3" class="py-2 text-center" @click="showFaq(faq.id)">
				{{ faq.id }}
			</v-col>
			<v-col cols="9" class="py-2" @click="showFaq(faq.id)">
				{{ faq.title }}
			</v-col>
			<transition name="fade">
				<v-col
					v-show="faq.show"
					cols="12"
					class="py-2 primary lighten-3"
					style="border-top: 1px solid #ddd"
				>
					<div>{{ faq.contents }}</div>
				</v-col>
			</transition>
		</v-row>
	</v-container>
</template>

<script>
	export default {
		data() {
			return {
				faqList: [
					{
						id: 1,
						title: '결제는 무엇으로할 수 있나요?',
						contents:
							'내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.',
						show: false,
					},
					{
						id: 2,
						title: '결제는 무엇으로할 수 있나요?',
						contents:
							'내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.',
						show: false,
					},
					{
						id: 3,
						title: '결제는 무엇으로할 수 있나요?',
						contents:
							'내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.',
						show: false,
					},
					{
						id: 4,
						title: '결제는 무엇으로할 수 있나요?',
						contents:
							'내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.',
						show: false,
					},
					{
						id: 5,
						title: '결제는 무엇으로할 수 있나요?',
						contents:
							'내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.',
						show: false,
					},
				],
			};
		},
		methods: {
			showFaq(id) {
				this.initFaqList();
				this.faqList.forEach(faq => {
					if (faq.id === id) {
						console.log(id);
						faq.show = true;
					}
				});
			},
			openBottomModal(title, subject) {
				this.dialog = true;
				this.trmsTitle = title;
				this.initOpenList();
				this.openList[subject] = true;
			},
			initFaqList() {
				this.faqList = this.faqList.map(faq => {
					faq.show = false;
					return faq;
				});
			},
		},
	};
</script>

<style>
	.fade-enter-active {
		transition: opacity 1s;
	}

	.fade-leave-active {
		transition: opacity 0s;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
		opacity: 0;
	}
</style>
