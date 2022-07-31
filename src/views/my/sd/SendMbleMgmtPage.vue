<template>
	<v-container>
		<v-row>
			<v-col cols="12">
				<v-text-field
					color="primary"
					placeholder="발신자명, 발신번호를 입력해주세요."
					append-icon="mdi-magnify"
					outlined
					dense
				/>
			</v-col>
		</v-row>
		<v-row class="caption">
			<v-col cols="6" class="text-left py-2">
				총
				<span class="primary--text">NNN</span>
				개
			</v-col>
			<v-col cols="6" class="text-right py-2">
				<v-btn
					outlined
					small
					tile
					elevation="0"
					@click="openBottomModal('발신번호 추가', 'sendrAdd')"
					>+ 추가</v-btn
				>
			</v-col>
		</v-row>
		<v-row
			style="border-top: 1px solid #ddd"
			class="caption text-center black--text font-weight-bold grey lighten-3 mx-2"
		>
			<v-col cols="4" class="py-2"> 발신자명 </v-col>
			<v-col cols="8" class="py-2"> 발신번호 </v-col>
		</v-row>
		<v-row
			v-for="i in 5"
			:key="i"
			style="border-top: 1px solid #ddd"
			class="caption text-center black--text mx-2"
		>
			<v-col cols="4" class="py-2"> 발신자명 </v-col>
			<v-col cols="2" class="py-2"> 15442222 </v-col>
			<v-col cols="6" class="py-2">
				<div class="text-right">
					<v-btn class="mr-1" small outlined tile>삭제</v-btn>
					<v-btn
						class="ml-1"
						small
						outlined
						tile
						@click="openBottomModal('발신번호 수정', 'sendrEdit')"
						>수정</v-btn
					>
				</div>
			</v-col>
		</v-row>

		<v-row />
		<BottomSlidePage
			:dialog="dialog"
			:title="trmsTitle"
			@close="dialog = false"
		>
			<div v-show="openList['sendrAdd']">
				<SendrMgmtComp />
			</div>
			<div v-show="openList['sendrEdit']">
				<SendrMgmtComp />
				<!-- props추가하던 뭘해서 데이터 넣기~ -->
			</div>
		</BottomSlidePage>
	</v-container>
</template>

<script>
	import BottomSlidePage from '@/components/pop/BottomSlidePage.vue';
	import SendrMgmtComp from '@/views/my/sd/components/SendrMgmtComp.vue';

	export default {
		components: {
			BottomSlidePage,
			SendrMgmtComp,
		},

		data() {
			return {
				dialog: false,
				trmsTitle: '',
				openList: {
					sendrAdd: false,
					sendrEdit: false,
				},
			};
		},
		methods: {
			openBottomModal(title, subject) {
				this.dialog = true;
				this.trmsTitle = title;
				this.initOpenList();
				this.openList[subject] = true;
			},
			initOpenList() {
				for (let key in this.openList) {
					this.openList[key] = false;
				}
			},
		},
	};
</script>

<style></style>
