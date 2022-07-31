<template>
	<v-footer app absolute class="px-3">
		<v-row>
			<v-col class="pa-0">
				<v-divider />
				<v-card tile elevation="0">
					<v-list-item dense ripple>
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
											@click="$router.push({ name: 'NotcPage' })"
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
											@click="$router.push({ name: 'InqrPage' })"
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
	</v-footer>
</template>

<script>
	export default {};
</script>

<style></style>
