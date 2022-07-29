<template>
	<div>
		<v-container>
			<v-row class="pa-3">
				<v-col cols="12" class="primary lighten-3 caption">
					<ul>
						<li>
							주문 후 정상 발급된 쿠폰에 대해서는 취소, 환불이 불가합니다.
						</li>
						<li>
							발급 결과는 수신인의 통신환경에 따라 최대 25시간까지 소요될 수
							있습니다.
						</li>
					</ul>
				</v-col>
			</v-row>

			<v-row class="text-center px-2">
				<v-col :cols="$vuetify.breakpoint.width < 450 ? 4 : 2" class="px-0">
					<v-btn
						color="primary"
						:large="$vuetify.breakpoint.width < 450"
						class="px-0"
						outlined
					>
						오늘
					</v-btn>
				</v-col>
				<v-col :cols="$vuetify.breakpoint.width < 450 ? 4 : 2" class="px-0">
					<v-btn
						color="primary"
						:large="$vuetify.breakpoint.width < 450"
						class="px-0"
						outlined
					>
						7일
					</v-btn>
				</v-col>
				<v-col :cols="$vuetify.breakpoint.width < 450 ? 4 : 2" class="px-0">
					<v-btn
						color="primary"
						:large="$vuetify.breakpoint.width < 450"
						class="px-0"
						outlined
					>
						30일
					</v-btn>
				</v-col>
				<v-col :cols="$vuetify.breakpoint.width < 450 ? 4 : 2" class="px-0">
					<v-btn
						color="primary"
						:large="$vuetify.breakpoint.width < 450"
						class="px-0"
						outlined
					>
						3개월
					</v-btn>
				</v-col>
				<v-col :cols="$vuetify.breakpoint.width < 450 ? 4 : 2" class="px-0">
					<v-btn
						color="primary"
						:large="$vuetify.breakpoint.width < 450"
						class="px-0"
						outlined
					>
						6개월
					</v-btn>
				</v-col>
				<v-col :cols="$vuetify.breakpoint.width < 450 ? 4 : 2" class="px-0">
					<v-btn
						color="primary"
						:large="$vuetify.breakpoint.width < 450"
						class="px-0"
						outlined
					>
						12개월
					</v-btn>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
	export default {};
</script>

<style></style>
