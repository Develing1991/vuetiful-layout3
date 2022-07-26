import Vue from 'vue';
import VueRouter from 'vue-router';

import createComponent from '@/hoc/index.js';

Vue.use(VueRouter);
const routes = [
	{
		path: '/',
		redirect: '/ma/main',
	},
	{
		path: '/index.html',
		redirect: '/ma/main',
	},
	{
		path: '/ma',
		name: 'MainIndex',
		component: createComponent(
			() => import('@/layouts/header/MainAppbar.vue'),
			() => import('@/layouts/main/BaseView.vue'),
			() => import('@/layouts/footer/BaseFooter.vue'),
		),
		children: [
			{
				path: 'main',
				name: 'MainPage',
				component: () => import('@/views/ma/MainPage.vue'),
			},
		],
	},
	{
		path: '/mn',
		name: 'MenuIndex',
		component: createComponent(
			() => import('@/layouts/header/CateAppbar.vue'),
			() => import('@/layouts/main/BaseView.vue'),
			() => import('@/layouts/footer/CateFooter.vue'),
		),
		children: [
			{
				path: 'menu',
				name: 'MenuPage',
				component: () => import('@/views/mn/MenuPage.vue'),
			},
		],
	},
	{
		path: '/sc',
		name: 'SearchIndex',
		component: createComponent(
			() => import('@/layouts/header/SrchAppbar.vue'),
			() => import('@/layouts/main/BaseView.vue'),
		),
		children: [
			{
				path: 'search',
				name: 'SrchWordPage',
				component: () => import('@/views/sc/SrchWordPage.vue'),
			},
			{
				path: 'search-rslt',
				name: 'SrchRsltPage',
				component: () => import('@/views/sc/SrchRsltPage.vue'),
			},
		],
	},
	{
		path: '/au',
		name: 'AuthIndex',
		component: createComponent(
			() => import('@/layouts/header/BackAppbar.vue'),
			() => import('@/layouts/main/BaseView.vue'),
			() => import('@/layouts/footer/BaseFooter.vue'),
		),
		children: [
			{
				path: 'si/sign-in',
				name: 'SignInForm',
				meta: { title: '로그인' },
				component: () => import('@/views/au/si/SignInForm.vue'),
			},
			{
				path: 'si/find-acct-one',
				name: 'FindAcctOneForm',
				meta: { title: '아이디 찾기' },
				component: () => import('@/views/au/si/FindAcctOneForm.vue'),
			},
			{
				path: 'si/find-acct-all',
				name: 'FindAcctAllForm',
				meta: { title: '아이디 전체 보기' },
				component: () => import('@/views/au/si/FindAcctAllForm.vue'),
			},
			{
				path: 'si/find-pass',
				name: 'FindPassForm',
				meta: { title: '비밀번호 찾기' },
				component: () => import('@/views/au/si/FindPassForm.vue'),
			},
			{
				path: 'si/init-pass',
				name: 'InitPassForm',
				meta: { title: '비밀번호 재설정' },
				component: () => import('@/views/au/si/InitPassForm.vue'),
			},
			{
				path: 'su/trms-agrm',
				name: 'TrmsAgrmForm',
				meta: { title: '약관동의' },
				component: () => import('@/views/au/su/TrmsAgrmForm.vue'),
			},
			{
				path: 'su/sign-up',
				name: 'SignUpForm',
				meta: { title: '회원정보입력' },
				component: () => import('@/views/au/su/SignUpForm.vue'),
			},
			{
				path: 'su/sign-up-rslt',
				name: 'SignUpRsltPage',
				meta: { title: '가입완료' },
				component: () => import('@/views/au/su/SignUpRsltPage.vue'),
			},
		],
	},
	{
		path: '/pd',
		name: 'ProductIndex',
		component: createComponent(
			() => import('@/layouts/header/MainAppbar.vue'),
			() => import('@/layouts/main/BaseView.vue'),
			() => import('@/layouts/footer/BaseFooter.vue'),
		),
		children: [
			{
				path: 'prod-list',
				name: 'ProdListPage',
				component: () => import('@/views/pd/ProdListPage.vue'),
			},
		],
	},
	{
		path: '/pd',
		name: 'ProductIndex',
		component: createComponent(
			() => import('@/layouts/header/SrchAppbar.vue'),
			() => import('@/layouts/main/BaseView.vue'),
			() => import('@/layouts/footer/BaseFooter.vue'),
		),
		children: [
			{
				path: 'prod-dtal',
				name: 'ProdDtalPage',
				component: () => import('@/views/pd/ProdDtalPage.vue'),
			},
		],
	},
	// {
	// 	path: '/pd',
	// 	name: 'Product',
	// 	children: [
	// 		{
	// 			path: 'prod-list-index',
	// 			name: 'ProductListIndex',
	// 			component: createComponent(
	// 				() => import('@/layouts/header/MainAppbar.vue'),
	// 				() => import('@/layouts/main/BaseView.vue'),
	// 				() => import('@/layouts/footer/BaseFooter.vue'),
	// 			),
	// 			children: [
	// 				{
	// 					path: 'prod-list-page',
	// 					name: 'ProdListPage',
	// 					component: () => import('@/views/pd/ProdListPage.vue'),
	// 				},
	// 			],
	// 		},
	// 		{
	// 			path: 'prod-dtal-index',
	// 			name: 'ProductDtalIndex',
	// 			component: createComponent(
	// 				() => import('@/layouts/header/ProdAppbar.vue'),
	// 				() => import('@/layouts/main/BaseView.vue'),
	// 				//() => import('@/layouts/footer/BaseFooter.vue'),
	// 			),
	// 			children: [
	// 				{
	// 					path: 'prod-dtal-page',
	// 					name: 'ProdDtalPage',
	// 					component: () => import('@/views/pd/ProdDtalPage.vue'),
	// 				},
	// 			],
	// 		},
	// 	],
	// },
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/About.vue'),
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
