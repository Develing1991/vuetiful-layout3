<template>
	<div>
		<v-dialog
			v-model="dialog"
			hide-overlay
			transition="dialog-bottom-transition"
			scrollable
			fullscreen
		>
			<v-card tile max-width="720" :height="$vuetify.breakpoint.height">
				<v-app-bar flat app max-width="720" class="mx-auto white" elevation="1">
					<div class="font-weight-bold">서비스 이용 약관</div>
					<v-spacer />
					<!-- <v-toolbar-items>
						<v-btn dark text @click="$emit('close')"> 동의 </v-btn>
					</v-toolbar-items> -->
					<v-btn icon @click="$emit('close')">
						<v-icon>mdi-close</v-icon>
					</v-btn>
				</v-app-bar>

				<v-card-text>
					<slot></slot>
				</v-card-text>
			</v-card>
		</v-dialog>
	</div>
</template>

<script>
	export default {
		props: {
			dialog: {
				type: Boolean,
				default: false,
			},
		},
	};
</script>

<style>
	.v-dialog {
		box-shadow: none;
		justify-content: center;
	}
	.v-dialog--fullscreen > .v-card {
		min-width: auto;
	}
</style>
