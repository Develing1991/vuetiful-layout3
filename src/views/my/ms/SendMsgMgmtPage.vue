<template>
	<v-container>
		<v-row>
			<v-col cols="12">
				<v-text-field
					color="primary"
					placeholder="수신자 번호를 입력해주세요."
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
					@click="openBottomModal('메시지 추가', 'msgAdd')"
					>+ 추가</v-btn
				>
			</v-col>
		</v-row>
		<v-row>
			<v-col cols="12">
				<v-expansion-panels accordion>
					<v-expansion-panel v-for="(item, i) in 10" :key="i">
						<v-expansion-panel-header
							>메시지 제목입니다. 메시지 제목
						</v-expansion-panel-header>
						<v-expansion-panel-content>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
							<div class="text-right">
								<v-btn class="mr-1" small outlined tile>삭제</v-btn>
								<v-btn
									class="ml-1"
									small
									outlined
									tile
									@click="openBottomModal('메시지 수정', 'msgEdit')"
									>수정</v-btn
								>
							</div>
						</v-expansion-panel-content>
					</v-expansion-panel>
				</v-expansion-panels>
			</v-col>
		</v-row>
		<v-row />
		<BottomSlidePage
			:dialog="dialog"
			:title="trmsTitle"
			@close="dialog = false"
		>
			<div v-show="openList['msgAdd']">
				<MsgMgmtComp />
			</div>
			<div v-show="openList['msgEdit']">
				<MsgMgmtComp />
				<!-- props추가하던 뭘해서 데이터 넣기~ -->
			</div>
		</BottomSlidePage>
	</v-container>
</template>

<script>
	import BottomSlidePage from '@/components/pop/BottomSlidePage.vue';
	import MsgMgmtComp from '@/views/my/ms/components/MsgMgmtComp.vue';

	export default {
		components: {
			BottomSlidePage,
			MsgMgmtComp,
		},

		data() {
			return {
				dialog: false,
				trmsTitle: '',
				openList: {
					msgAdd: false,
					msgEdit: false,
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
