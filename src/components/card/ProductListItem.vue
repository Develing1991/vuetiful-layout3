<template>
	<div @click="bb">
		<v-list three-line>
			<v-list-item>
				<v-list-item-avatar tile size="90" color="grey">
					<v-img
						src="https://thumbnail6.coupangcdn.com/thumbnails/remote/300x300ex/image/product/image/vendoritem/2019/02/11/3186737276/e4f9115d-ff6d-406c-8e9e-52382c5b0abc.jpg"
					/>
				</v-list-item-avatar>
				<v-list-item-content>
					<v-list-item-subtitle
						class="grey--text font-weight-bold mb-1 text-caption"
					>
						[브랜드명]
					</v-list-item-subtitle>
					<v-list-item-subtitle class="font-weight-bold my-2 body-2">
						발행 상품명 글자수 제한 한줄로 표시 가나다라마바아사아자차카타파하
					</v-list-item-subtitle>
					<v-list-item-subtitle>
						<span class="font-weight-bold subtitle-2 red--text">45%</span>
						<span
							class="text-caption text-decoration-line-through ml-2 grey--text"
						>
							10,000원
						</span>
					</v-list-item-subtitle>
					<v-list-item-subtitle>
						<span class="font-weight-bold red--text" style="font-size: 17px"
							>5,500원</span
						>
					</v-list-item-subtitle>
				</v-list-item-content>
				<v-list-item-action class="my-auto">
					<v-list-item-icon class="ma-auto" @click.stop="aa">
						<v-icon :color="true ? 'red' : 'grey'">
							{{ true ? mdiIcon : mdiIconOutline }}
						</v-icon>
					</v-list-item-icon>
				</v-list-item-action>
			</v-list-item>
		</v-list>
		<v-divider />
	</div>
</template>
<script>
	export default {
		props: {
			mdiIcon: {
				type: String,
				default: '',
			},
			mdiIconOutline: {
				type: String,
				default: '',
			},
		},
		methods: {
			aa() {
				alert('Wla');
			},
			bb() {
				alert('bb');
			},
		},
	};
</script>

<style></style>
