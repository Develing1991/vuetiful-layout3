<script>
	import {
		alpha_num,
		required,
		digits,
		email,
		confirmed,
		max,
		regex,
		numeric,
		dimensions,
		ext,
		size,
		mimes,
	} from 'vee-validate/dist/rules';
	import { extend, ValidationObserver, ValidationProvider } from 'vee-validate';

	//	setInteractionMode('eager');

	//message: '{_field_} zzz needs to be {length} digits. ({_value_})',

	// 영문, 숫자체크
	extend('alpha_num', {
		...alpha_num,
		message: '영문과 숫자만 입력해주세요.',
	});

	// 숫자 체크
	extend('numeric', {
		...numeric,
		message: '숫자만 입력해주세요.',
	});
	// 숫자 체크+ 자릿 수
	extend('digits', {
		...digits,
		message: '숫자 {length}자리를 입력해주세요.',
	});

	// 필수 체크
	extend('required', {
		...required,
		message: '{_field_}를 입력해주세요.',
	});

	// 필수 체크 (체크박스)
	extend('required_check', {
		...required,
		message: '{_field_}를 체크해주세요.',
	});

	// 필수 체크 (셀렉트박스)
	extend('required_select', {
		...required,
		message: '{_field_}를 선택해주세요.',
	});

	//최대 자릿수
	extend('max', {
		...max,
		message: '{_field_}는 {length}자 이하로 입력해주세요.',
	});

	// 정규식
	extend('regex', {
		...regex,
		message: '{_field_}의 {_value_}값이 형식에 맞지 않습니다.',
		//message: '{_field_}의 {_value_} does not match {regex}',
	});

	//이메일
	extend('email', {
		...email,
		message: '이메일 형식이 올바르지 않습니다.',
	});

	extend('confirmed', {
		...confirmed,
		message: '비밀번호가 일치하지 않습니다.',
	});

	extend('dimensions', {
		...dimensions,
		message: '이미지 사이즈를 확인해주세요.',
	});

	extend('ext', {
		...ext,
		message: '파일 형식이 올바르지 않습니다.',
	});

	extend('size', {
		...size,
		message: '파일크기를 초과!',
	});
	extend('mimes', {
		...mimes,
		message: '파일 mimes포맷 불일치',
	});

	/**
	 * 커스텀 영역
	 */

	//공백 불가
	extend('not_space', {
		validate: value => {
			let regex = value.search(/\s/);
			if (regex !== -1) {
				return '공백을 제거해주세요.';
			} else {
				return true;
			}
		},
	});

	//비밀번호 특수 + 영문 + 숫자
	extend('password_valid', {
		validate: value => {
			/* eslint-disable */
			const regExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{10,20}$/;
			if (!regExp.test(value)) {
				return '영문, 숫자, 특수문자를 조합한 10자리 이상 20자리 이하 비밀번호를 입력해 주세요. ';
			} else {
				return true;
			}
		},
	});

	//휴대폰번호 정규체크
	extend('phone_valid', {
		validate: value => {
			/* eslint-disable */
			const regExp = /^(?:(010\d{4})|(070\d{4})|(01[1|6|7|8|9]\d{3,4}))(\d{4})$/;
			
			if (!regExp.test(value)) {
				return '휴대번호를 정확히 입력해주세요.';
			} else {
				return true;
			}
		},
	});
	
	//수신자번호 번호 검사 확인
	extend('phone_check', {
		validate: value => {
			return '휴대번호 검사를 실행해주세요.';
		},
	});

	//바이트 체크
	extend('check_byte', {
		validate: (value,values) => {
			const limit_byte = values[0];
			return `${limit_byte}byte를 초과할 수 없습니다.`;
		},
	});
/****************************************************
 * 바이트 체크 오라클 한글 3바이트처리
 ****************************************************/
// function byteLengthOracle1(value) {
// 	let byte = 0;

// 	for (let i = 0; i < value.length; i++) {
// 		if(value.charCodeAt(i) > 127){
// 			byte += 3;
// 		}else{
// 			byte++;
// 		}
// 	}
// 	return byte;
//}
/****************************************************
 * 바이트 체크 기본
 ****************************************************/
// function byteLength(value) {
// 	let byte = 0;

// 	for (let i = 0; i < value.length; i++) {
// 		var ch = value.charAt(i);

// 		if (escape(ch).length > 4) {
// 			// 한글일경우
// 			byte += 2;
// 		} else if (ch == '\n' || ch == '\r') {
// 			byte += 1;
// 		} else if (ch == '<' || ch == '>') {
// 			// 특수문자는 4byte
// 			byte += 4;
// 		} else {
// 			//나머지는 모두 1byte
// 			byte += 1;
// 		}
// 	} //END FOR
// 	return byte;
// }
	export default {
		components: {
			ValidationProvider,
			ValidationObserver,
		},
	};
</script>