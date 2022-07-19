<template>
	<v-container>
		<v-row>
			<v-col class="pa-0">
				<v-card tile elevation="0" outlined>
					<v-list-item dense>
						<v-list-item-content>
							<v-list-item-title>
								<v-row jutify="center">
									<v-col cols="4" class="text-center">
										<v-avatar
											color="grey lighten-2"
											class="mb-2"
											rounded
											size="50"
										/>
										<div>마이페이지</div>
									</v-col>
									<v-col cols="4" class="text-center">
										<v-avatar
											color="grey lighten-2"
											class="mb-2"
											rounded
											size="50"
										/>
										<div>찜목록</div>
									</v-col>
									<v-col cols="4" class="text-center">
										<v-avatar
											color="grey lighten-2"
											class="mb-2"
											rounded
											size="50"
										/>
										<div>메시지관리</div>
									</v-col>
								</v-row>
							</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-card>
			</v-col>
		</v-row>
		<v-row style="height: 480px">
			<v-col class="pa-0" cols="4" style="border-right: 1px solid #ddd">
				<template v-for="category in categories">
					<v-btn
						:key="category.id"
						:class="{ primary: category.done, white: true }"
						width="100%"
						height="48"
						tile
						elevation="0"
						style="justify-content: left"
						@click="selectCategory(category)"
					>
						{{ category.name }}</v-btn
					>
					<v-divider :key="`${category.name}-${category.id}`" />
				</template>
			</v-col>
			<!-- <v-col class="py-0 px-1" cols="1" style="width: 2px">
				<v-divider vertical />
			</v-col> -->
			<v-col class="pa-0">
				<v-card tile elevation="0" class="pt-0">
					<div v-for="brand in selectCateBrands" :key="brand.brand_cd" dense>
						<v-list-item ripple>
							<v-list-item-content>
								<v-list-item-title>{{ brand.name }}</v-list-item-title>
								<!-- <v-list-item-subtitle>2022.00.00</v-list-item-subtitle> -->
							</v-list-item-content>
						</v-list-item>
						<v-divider />
					</div>
				</v-card>
			</v-col>
		</v-row>
		<v-row>
			<v-col class="pa-0">
				<v-card tile elevation="0" outlined>
					<v-list-item dense>
						<v-list-item-content>
							<v-list-item-title class="font-weight-bold">
								꿀콘 발송 방법 안내
							</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
					<v-divider />
					<v-list-item dense>
						<v-list-item-content>
							<v-list-item-title>
								<v-row>
									<v-col cols="12" class="pb-0 font-weight-bold">
										고객센터
									</v-col>
								</v-row>
								<v-row jutify="center">
									<v-col cols="6">
										<v-btn
											width="100%"
											small
											tile
											elevation="0"
											style="border: 1px solid #ddd"
										>
											공지사항</v-btn
										>
									</v-col>
									<v-col cols="6">
										<v-btn
											width="100%"
											small
											tile
											elevation="0"
											style="border: 1px solid #ddd"
										>
											FAQ</v-btn
										>
									</v-col>
								</v-row>
							</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	export default {
		data() {
			return {
				selectCateBrands: {},
				categories: [
					{
						id: 1,
						name: '카테고리',
						done: true,
						logo: '',
						brands: [
							{ brand_cd: 'A1', name: '전체보기' },
							{ brand_cd: 'A2', name: '카페' },
							{ brand_cd: 'A3', name: '상품권' },
							{ brand_cd: 'A4', name: '햄버거' },
							{ brand_cd: 'A5', name: '치킨' },
							{ brand_cd: 'A6', name: '베이커리/도넛/떡' },
							{ brand_cd: 'A7', name: '아이스크림' },
							{ brand_cd: 'A8', name: '편의점' },
							{ brand_cd: 'A9', name: '피자' },
							{ brand_cd: 'A10', name: '기타' },
						],
					},
					{
						id: 2,
						name: '브랜드',
						logo: '',
						done: false,
						brands: [
							{ brand_cd: 'b1', name: '교촌치킨' },
							{ brand_cd: 'b2', name: 'BBQ' },
							{ brand_cd: 'b3', name: 'BHC' },
						],
					},
					{
						id: 3,
						name: '가격대',
						logo: '',
						done: false,
						brands: [
							{ brand_cd: 'c1', name: 'CU' },
							{ brand_cd: 'c2', name: 'GS25' },
							{ brand_cd: 'c3', name: '세븐일레븐' },
						],
					},
				],
				others: [
					{ id: 1, title: '공지사항' },
					{ id: 2, title: '이벤트' },
					{ id: 3, title: '고객센터' },
					{ id: 4, title: '환경설정' },
					{ id: 5, title: '약관 및 정책' },
				],
			};
		},
		mounted() {
			//console.log(document.getElementsByClassName('v-tabs-items'));
			//console.log(this.$vuetify);
			this.initBrands();
			// document.getElementsByClassName('v-tabs-items')[0].style.borderLeft =
			// 	'1px solid rgba(0, 0, 0, 0.12)';
		},
		methods: {
			initBrands() {
				const { brands } = this.categories[0];
				this.selectCateBrands = brands;
			},
			selectCategory(category) {
				this.selectCateBrands = category.brands;
				this.categories = this.categories.map(cateMapItem => {
					cateMapItem.done = false;
					if (cateMapItem.id === category.id) {
						cateMapItem.done = true;
					}
					return cateMapItem;
				});
			},
		},
	};
</script>
<style></style>
