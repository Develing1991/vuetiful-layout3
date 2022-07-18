<template>
	<v-navigation-drawer
		v-model="slideMenu"
		absolute
		temporary
		width="100%"
		stateless
		overlay-opacity="0"
		:style="{
			maxWidth: '720px',
			marginLeft:
				$vuetify.breakpoint.width > 720
					? `${($vuetify.breakpoint.width - 740) / 2}px`
					: '0px',
		}"
	>
		<!-- <v-app-bar app color="white elevation-1">  app 속성 삭제 -->
		<v-app-bar
			color="white elevation-1"
			:style="{ maxWidth: '720px', margin: '0 auto' }"
		>
			<!-- {{ $vuetify.breakpoint.width }}
			{{ ($vuetify.breakpoint.width - 740) / 2 }} -->
			<span v-if="true" class="font-weight-bold">completed0728</span>
			<v-btn
				v-else
				color="grey darken-1"
				elevation="0"
				tile
				small
				outlined
				:ripple="false"
			>
				<div class="black--text">로그인</div>
			</v-btn>

			<v-btn
				color="grey darken-1"
				class="ml-3"
				elevation="0"
				tile
				small
				outlined
				:ripple="false"
			>
				<div class="black--text">{{ true ? '회원가입' : '로그아웃' }}</div>
			</v-btn>
			<v-spacer />

			<div @click="$emit('menu', false)">
				<v-icon>mdi-close</v-icon>
			</div>
		</v-app-bar>
		<v-list nav dense>
			<v-list-item-group active-class="deep-purple--text text--accent-4">
				<v-list-item>
					<v-list-item-title>Foo</v-list-item-title>
				</v-list-item>

				<v-list-item>
					<v-list-item-title>Bar</v-list-item-title>
				</v-list-item>

				<v-list-item>
					<v-list-item-title>Fizz</v-list-item-title>
				</v-list-item>

				<v-list-item>
					<v-list-item-title>Buzz</v-list-item-title>
				</v-list-item>
			</v-list-item-group>
		</v-list>
	</v-navigation-drawer>
</template>

<script>
	export default {
		props: {
			slideMenu: {
				type: Boolean,
				default: true,
			},
		},
	};
</script>

<style></style>
