///* eslint-disable */
import Vue from 'vue';
import MenuPage from '@/views/mn/MenuPage.vue';
// const isMobile = () => {
// 	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
// 		navigator.userAgent,
// 	);
// };

export default function createComponent(...childs) {
	const DefaultComponent = Vue.component('TempView', {
		template: '<div></div>',
	});
	return Vue.component('Index', {
		data: function () {
			return {
				message: '메시지테스트',
				slideMenu: false,
				maxWidth: '720px',
				margin: '0 auto',
			};
		},
		mixin: [''],
		computed: {
			isMobile() {
				const isMobile =
					/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
						navigator.userAgent,
					);
				return !isMobile ? '720px' : '';
			},
		},
		template: `
    <div>
      <CustomAppbar @menu="menu"  @left="clickLeft" @center="clickCenter" @right="clickRight" :style="{maxWidth:maxWidth, margin:margin}"></CustomAppbar>
      <CustomView :style="{maxWidth:maxWidth, margin:margin}"></CustomView>
      <CustomFooter :style="{maxWidth:maxWidth, margin:margin}"></CustomFooter>
	  <MenuPage :slideMenu="slideMenu" @menu="menu"/>
    </div>
    `,
		components: {
			MenuPage,
			CustomAppbar: childs[0] ?? DefaultComponent,
			CustomView: childs[1] ?? DefaultComponent,
			CustomFooter: childs[2] ?? DefaultComponent,
		},
		mounted() {
			console.log('index.vue생성');
		},
		props: {
			id: Number,
			name: String,
			hp: Number,
		},
		methods: {
			// 버튼 클릭 이벤트 핸들러에서 $emit을 호출해서 attack 이벤트 실행하기
			menu(show) {
				this.slideMenu = show;
			},
			clickLeft() {
				console.log('left');
			},
			clickCenter() {
				console.log('center');
			},
			clickRight() {
				console.log('right');
			},
		},
		// functional 컴포넌트 시에는...
		//functional: true,
		// render: function (createElement, context) {
		// 	debugger;
		// 	return createElement('div', context.props.message);
		// },
	});
}
