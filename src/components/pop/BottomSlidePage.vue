<template>
	<div>
		<v-dialog
			v-model="dialog"
			hide-overlay
			transition="dialog-bottom-transition"
			scrollable
			fullscreen
		>
			<!-- <v-app-bar flat app max-width="720" class="mx-auto white" elevation="1"> -->
			<!-- app-bar 중복이라 toolbar써야 됐는데 .. 늘어나길래 class="flex-grow-0" 클래스 추가했음 -->
			<v-card tile max-width="720" :height="$vuetify.breakpoint.height">
				<v-toolbar flat max-width="720" elevation="1" class="flex-grow-0">
					<v-icon style="visibility: hidden">mdi-close</v-icon>
					<v-spacer />
					<div class="font-weight-bold">{{ title }}</div>
					<v-spacer />
					<!-- <v-toolbar-items>
						<v-btn dark text @click="$emit('close')"> 동의 </v-btn>
					</v-toolbar-items> -->
					<v-btn icon @click="$emit('close')">
						<v-icon size="30">mdi-close</v-icon>
					</v-btn>
				</v-toolbar>

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
			title: {
				type: String,
				default: '',
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
