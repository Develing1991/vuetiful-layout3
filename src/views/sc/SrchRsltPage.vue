<template>
	<div>
		<v-card tile elevation="0">
			<v-list-item dense class="mt-2">
				<v-list-item-content>
					<v-list-item-title> NNN개의 검색결과가 있습니다. </v-list-item-title>
					<!-- <v-list-item-subtitle>2022.00.00</v-list-item-subtitle> -->
				</v-list-item-content>
			</v-list-item>
			<v-divider />

			<v-row class="px-0 mx-0">
				<v-col cols="8" class="px-0 mx-0">
					<v-btn
						class="float-left my-4 ml-4 px-1"
						outlined
						small
						tile
						elevation="0"
						>카페 ▼
					</v-btn>
					<v-btn
						class="float-left my-4 mx-0 ml-4 px-1"
						outlined
						small
						tile
						elevation="0"
						>브랜드 ▼
					</v-btn>
				</v-col>
				<v-col cols="4" class="px-0">
					<v-btn
						class="float-right my-4 mx-0 mr-4 px-1"
						outlined
						small
						tile
						elevation="0"
						>인기상품순 ▼
					</v-btn>
				</v-col>
			</v-row>
			<v-divider />
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
									알록패치 싱글 근육통 통증완화 의료기기 적외선 조사기, 엘립시스
									적용 하이ㅋ
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
									<span class="font-weight-bold red--text subtitle-1"
										>5,500원</span
									>
								</v-list-item-subtitle>
							</v-list-item-content>
							<v-list-item-action class="my-auto">
								<v-list-item-icon class="ma-auto" @click.stop="aa">
									<v-icon :color="true ? 'red' : 'grey'">
										{{ true ? 'mdi-heart' : 'mdi-heart-outline' }}
									</v-icon>
								</v-list-item-icon>
							</v-list-item-action>
						</v-list-item>
					</v-list>
					<v-divider />
				</div>
			</template>
		</v-card>

		<!-- <template>
			<v-list-item dense class="mt-2">
				<v-list-item-content>
					<v-list-item-title> NNN개의 검색결과가 있습니다. </v-list-item-title>
				</v-list-item-content>
			</v-list-item>
			<v-divider />
			<DefaultRsltPage title="인기상품" />
		</template> -->
	</div>
</template>

<script>
	//import DefaultRsltPage from '@/views/no/DefaultRsltPage.vue';

	export default {
		components: {
			//DefaultRsltPage,
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
