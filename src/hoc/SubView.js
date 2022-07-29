///* eslint-disable */
import Vue from 'vue';

// const isMobile = () => {
// 	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
// 		navigator.userAgent,
// 	);
// };

export default function createComponentView() {
	return Vue.component('SubView', {
		props: {},
		data: function () {
			return {};
		},
		mixin: [''],
		computed: {},
		mounted() {},
		methods: {},
		template: `
    <div >
      <router-view/>
    </div>
    `,
		// functional 컴포넌트 시에는...
		//functional: true,
		// render: function (createElement, context) {
		// 	debugger;
		// 	return createElement('div', context.props.message);
		// },
	});
}
