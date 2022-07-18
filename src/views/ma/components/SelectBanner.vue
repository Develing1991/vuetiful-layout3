<template>
	<v-container class="pa-1 mt-3">
		<v-row>
			<v-col
				v-for="item in items"
				:key="item.id"
				:cols="12 / items.length"
				class="pa-0"
			>
				<v-btn
					:class="{ orange: item.done, 'white--text': item.done }"
					width="100%"
					elevation="1"
					x-large
					tile
					@click="selectGbn(item)"
					>{{ item.title }}</v-btn
				>
			</v-col>
		</v-row>
		<v-row>
			<v-divider />
		</v-row>

		<!-- 카테고리 선택 -->
		<v-row v-show="isDone.id === 'cate'">
			<v-col>
				<v-chip-group mandatory active-class="primary--text">
					<v-chip
						v-for="cateA in categoryA"
						:key="cateA.cd"
						label
						class="mx-2"
						@click="clkCateA(cateA)"
					>
						{{ cateA.title }}
					</v-chip>
				</v-chip-group>
				<div class="mx-2" style="max-height: 150px; overflow-y: auto">
					<a
						v-for="brand in brands"
						:key="brand.cd"
						href=""
						label
						class="d-inline-block px-0 pr-2 py-2"
						style="text-decoration: none"
					>
						{{ brand.title }}</a
					>
				</div>
			</v-col>
		</v-row>
		<v-row v-show="isDone.id === 'brand'">
			<v-col>
				<div class="mx-2" style="max-height: 150px; overflow-y: auto">
					<v-card
						v-for="i in 15"
						:key="i"
						class="d-inline-block pa-2 ma-2"
						style="text-align: center"
					>
						<v-img
							class="white--text align-end"
							height="80px"
							width="80px"
							src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
						/>
						<v-card-title class="pa-0">
							<div class="mx-auto">브랜드</div>
						</v-card-title>
					</v-card>
				</div>
			</v-col>
		</v-row>
		<v-row v-show="isDone.id === 'price'">
			<v-col>
				<div style="max-height: 150px; overflow: auto">
					<v-chip-group
						mandatory
						active-class="primary--text"
						column
						style="width: 170px"
					>
						<v-chip label class="mx-2"> 전체 </v-chip>
						<v-chip label class="mx-2"> 3천원 미만 </v-chip>
						<v-chip label class="mx-2"> 3천원 ~ 5천원 미만 </v-chip>
					</v-chip-group>
				</div>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	export default {
		data() {
			return {
				items: [
					{
						id: 'cate',
						title: '카테고리',
						contents: '카테고리내용',
						done: true,
					},
					{
						id: 'brand',
						title: '브랜드',
						contents: '브랜드내용',
						done: false,
					},
					{
						id: 'price',
						title: '가격대',
						contents: '가격대내용',
						done: false,
					},
				],

				categoryA: [
					{
						title: '전체보기',
						cd: 'A001',
						brands: [
							{
								cd: 'A001_1',
								title: '전체',
							},
						],
					},
					{
						title: '카페',
						cd: 'A002',
						brands: [
							{
								cd: 'A002_1',
								title: '스타벅스123',
							},
							{
								cd: 'A002_2',
								title: '공차123',
							},
							{
								cd: 'A002_3',
								title: '이디야123',
							},
							{
								cd: 'A002_4',
								title: '커피빈123',
							},
							{
								cd: 'A002_5',
								title: '컴포즈123',
							},
							{
								cd: 'A002_6',
								title: '쥬시123',
							},
						],
					},
					{
						title: '편의점',
						cd: 'A003',
						brands: [
							{
								cd: 'A003_1',
								title: 'GS25',
							},
							{
								cd: 'A003_2',
								title: 'CU',
							},
						],
					},
					{
						title: '상품권',
						cd: 'A004',
						brands: [
							{
								cd: 'A004_1',
								title: '문화상품권',
							},
							{
								cd: 'A004_2',
								title: '컬쳐랜드',
							},
						],
					},
					{
						title: '치킨',
						cd: 'A005',
						brands: [
							{
								cd: 'A005_1',
								title: 'BBQ',
							},
							{
								cd: 'A005_2',
								title: '교촌',
							},
						],
					},
					{
						title: '컴퓨터',
						cd: 'A006',
						brands: [
							{
								cd: 'A006_1',
								title: '삼성',
							},
							{
								cd: 'A006_2',
								title: '엘지',
							},
						],
					},
					{
						title: '악세사리',
						cd: 'A007',
						brands: [
							{
								cd: 'A007_1',
								title: '여기',
							},
							{
								cd: 'A007_2',
								title: '저기',
							},
						],
					},
					{
						title: '의류',
						cd: 'A008',
						brands: [
							{
								cd: 'A008_1',
								title: 'dkdkdk',
							},
							{
								cd: 'A008_2',
								title: 'ㅇㅇㅇㅇ',
							},
						],
					},
				],
				brands: [],
			};
		},
		computed: {
			isDone() {
				return this.items.find(item => {
					return item.done && item.id;
				});
			},
		},
		methods: {
			selectGbn(getItem) {
				this.items = this.items.map(item => {
					item.done = item.id === getItem.id ? true : false;
					return item;
				});
			},
			clkCateA(cate) {
				this.brands = cate.brands;
			},
		},
	};
</script>

<style></style>
