<template>
	<v-container>
		<v-row>
			<v-col cols="12">
				<v-text-field
					color="primary"
					placeholder="검색어를 입력해주세요."
					append-icon="mdi-magnify"
					outlined
					dense
				/>
			</v-col>
		</v-row>
		<v-row class="caption">
			<v-col cols="12" class="text-left py-2">
				총
				<span class="primary--text">NNN</span>
				개
			</v-col>
		</v-row>
		<v-row
			style="border-top: 1px solid #ddd"
			class="caption text-center black--text font-weight-bold grey lighten-3 mx-2"
		>
			<v-col cols="9" class="py-2"> 제목 </v-col>
			<v-col cols="3" class="py-2"> 등록일</v-col>
		</v-row>
		<v-row
			v-for="i in 5"
			:key="i"
			style="border-top: 1px solid #ddd"
			class="caption black--text mx-2"
			@click="openBottomModal('공지사항', 'notc')"
		>
			<v-col cols="9" class="py-2 text-left"> 시스템 점검 안내 </v-col>
			<v-col cols="3" class="py-2 text-center"> 2022-06-01 </v-col>
		</v-row>

		<v-row />
		<BottomSlidePage
			:dialog="dialog"
			:title="trmsTitle"
			@close="dialog = false"
		>
			<div v-show="openList['notc']">
				<NotcDtalComp />
			</div>
		</BottomSlidePage>
	</v-container>
</template>

<script>
	import BottomSlidePage from '@/components/pop/BottomSlidePage.vue';
	import NotcDtalComp from '@/views/my/cs/components/NotcDtalComp.vue';

	export default {
		components: {
			BottomSlidePage,
			NotcDtalComp,
		},

		data() {
			return {
				dialog: false,
				trmsTitle: '',
				openList: {
					notc: false,
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
