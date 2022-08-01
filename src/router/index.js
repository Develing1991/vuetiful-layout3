import Vue from 'vue';
import VueRouter from 'vue-router';

import createComponent from '@/hoc/index.js';
import createComponentView from '@/hoc/subView.js';

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
		name: 'ProductIndexMainAppbar',
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
		name: 'ProductIndexSrchAppbar',
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
	{
		path: '/od',
		name: 'OrderIndex',
		component: createComponent(
			() => import('@/layouts/header/BackAppbar.vue'),
			() => import('@/layouts/main/BaseView.vue'),
			() => import('@/layouts/footer/BaseFooter.vue'),
		),
		children: [
			{
				path: 'ordr-prod',
				name: 'OrdrProdPage',
				meta: { title: '주문/결제' },
				component: () => import('@/views/od/OrdrProdPage.vue'),
			},
			{
				path: 'ordr-prod-rslt',
				name: 'OrdrProdRsltPage',
				meta: { title: '주문완료' },
				component: () => import('@/views/od/OrdrProdRsltPage.vue'),
			},
		],
	},
	{
		path: '/my',
		name: 'MyIndexBackAppbar',
		component: createComponent(
			() => import('@/layouts/header/BackAppbar.vue'),
			() => import('@/layouts/main/BaseView.vue'),
			() => import('@/layouts/footer/BaseFooter.vue'),
		),
		children: [
			{
				path: 'pv',
				name: '',
				component: createComponentView(),
				children: [
					{
						path: 'my-page',
						name: 'MyPage',
						meta: { title: '마이페이지' },
						component: () => import('@/views/my/MyPage.vue'),
					},
					{
						path: 'cnfm-pass-page',
						name: 'CnfmPassPage',
						meta: { title: '개인정보수정' },
						component: () => import('@/views/my/pv/CnfmPassPage.vue'),
					},
					{
						path: 'edit-myinfo-page',
						name: 'EditMyInfoPage',
						meta: { title: '개인정보수정' },
						component: () => import('@/views/my/pv/EditMyInfoPage.vue'),
					},
				],
			},
			{
				path: 'od',
				name: '',
				component: createComponentView(),
				children: [
					{
						path: 'ordr-list-page',
						name: 'OrdrListPage',
						meta: { title: '주문/발급내역' },
						component: () => import('@/views/my/od/OrdrListPage.vue'),
					},
					{
						path: 'ordr-dtal-page',
						name: 'OrdrDtalPage',
						meta: { title: '주문/발급상세' },
						component: () => import('@/views/my/od/OrdrDtalPage.vue'),
					},
					{
						path: 'ordr-cncl-page',
						name: 'OrdrCnclPage',
						meta: { title: '결제취소' },
						component: () => import('@/views/my/od/OrdrCnclPage.vue'),
					},
				],
			},
			{
				path: 'cc',
				name: '',
				component: createComponentView(),
				children: [
					{
						path: 'cncl-hist-list-page',
						name: 'CnclHistListPage',
						meta: { title: '취소/환불내역' },
						component: () => import('@/views/my/cc/CnclHistListPage.vue'),
					},
					{
						path: 'cncl-hist-dtal-page',
						name: 'CnclHistDtalPage',
						meta: { title: '취소/환불상세' },
						component: () => import('@/views/my/cc/CnclHistDtalPage.vue'),
					},
				],
			},
			{
				path: 'ws',
				name: '',
				component: createComponentView(),
				children: [
					{
						path: 'wish-list-page',
						name: 'WishListPage',
						meta: { title: '찜목록' },
						component: () => import('@/views/my/ws/WishListPage.vue'),
					},
				],
			},
			{
				path: 'ms',
				name: '',
				component: createComponentView(),
				children: [
					{
						path: 'send-msg-mgmt-page',
						name: 'SendMsgMgmtPage',
						meta: { title: '메시지 관리' },
						component: () => import('@/views/my/ms/SendMsgMgmtPage.vue'),
					},
				],
			},
			{
				path: 'sd',
				name: '',
				component: createComponentView(),
				children: [
					{
						path: 'send-mble-Mgmt-page',
						name: 'SendMbleMgmtPage',
						meta: { title: '발신번호 관리' },
						component: () => import('@/views/my/sd/SendMbleMgmtPage.vue'),
					},
				],
			},
			{
				path: 'cs',
				name: '',
				component: createComponentView(),
				children: [
					{
						path: 'notc-page',
						name: 'NotcPage',
						meta: { title: '공지사항' },
						component: () => import('@/views/my/cs/NotcPage.vue'),
					},
					{
						path: 'inqr-page',
						name: 'InqrPage',
						meta: { title: 'FAQ' },
						component: () => import('@/views/my/cs/InqrPage.vue'),
					},
				],
			},
		],
	},
	{
		path: '/my',
		name: 'MyIndexMainAppbar',
		component: createComponent(
			() => import('@/layouts/header/MainAppbar.vue'),
			() => import('@/layouts/main/BaseView.vue'),
			() => import('@/layouts/footer/BaseFooter.vue'),
		),
		children: [
			{
				path: 'with-drwl-rslt-page',
				name: 'WithdrwlRsltPage',
				meta: { title: '개인정보수정' },
				component: () => import('@/views/my/pv/WithdrwlRsltPage.vue'),
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

//글로벌 비포 가드
router.beforeEach((to, from, next) => {
	//https://v3.router.vuejs.org/guide/advanced/meta.html (vue-router 공식문서 참조)
	// if (to.matched.some(record => record.meta.auth)) {
	// 	//auth가 true이면
	// 	if (!store.getters.isLogin) {
	// 		next({ path: '/login', query: { redirect: to.fullPath } });
	// 	}
	// } else {
	// 	next();
	// }
	next();
	//라우터 이동 후 스크롤 위치 탑으로 초기화
	window.scrollTo(0, 0);

	console.log(to);
	console.log(from);
});

export default router;
