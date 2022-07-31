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
		<v-row class="mb-5">
			<v-col cols="12" class="primary lighten-3 black--text py-2 caption">
				<div>
					* 재발송 : 성공건 중 유효기간이 남아있거나 사용 전인 경우만 3회 까지
					재발송 할 수 있습니다.
				</div>
				<div>* 쿠폰번호, 상품명, 유효기간을 포함한 단문으로만 발송됩니다.</div>
			</v-col>
		</v-row>
		<v-row class="caption">
			<v-col cols="6" class="text-left py-2">
				총
				<span class="primary--text">NNN</span>
				개
			</v-col>
			<v-col cols="6" class="text-right py-2">
				<v-btn outlined small tile elevation="0">선택 재발송 </v-btn>
			</v-col>
		</v-row>
		<v-row
			style="border-top: 1px solid #ddd"
			class="caption text-center black--text font-weight-bold grey lighten-3"
		>
			<v-col cols="3" class="py-2">
				<v-icon
					:class="{
						'primary--text': false,
					}"
					>{{ false ? 'mdi-checkbox-marked' : 'mdi-checkbox-blank-outline' }}
				</v-icon>
			</v-col>
			<v-col cols="6" class="py-2"> 수신자번호 </v-col>
			<v-col cols="3" class="py-2"> 잔여횟수 </v-col>
		</v-row>
		<v-row
			v-for="i in 5"
			:key="i"
			style="border-top: 1px solid #ddd"
			class="caption text-center black--text"
		>
			<v-col cols="3" class="py-2">
				<v-icon
					:class="{
						'primary--text': false,
					}"
					>{{ false ? 'mdi-checkbox-marked' : 'mdi-checkbox-blank-outline' }}
				</v-icon>
			</v-col>
			<v-col cols="6" class="py-2"> 010-1234-**** </v-col>
			<v-col cols="3" class="py-2"> 3 </v-col>
		</v-row>
		<v-row style="border-top: 1px solid #ddd">
			<v-col cols="12" class="pb-0" />
		</v-row>
	</v-container>
</template>

<script>
	export default {};
</script>

<style></style>
