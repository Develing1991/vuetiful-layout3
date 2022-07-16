module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/recommended", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    //셀프클로징 추가 //
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: "any", //빈 태그 /셀프클로징 강요 없음 always로 사용하면 ( 자체 확장과 충될되서 <br //> 됨..
          normal: "never", //일반태그는 제외
          component: "always"
        },
        svg: 'always',
        math: 'always',
      },
    ],
    //'no-console': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    //'prettier/prettier': ['로그레벨', {프리티어 속성}]
    'prettier/prettier': [
      'error', //'off' or 'warn' or 'error' 로그레벨 정의
      {
        singleQuote: true, //  "" -> ''
        semi: true, // alert('1') -> alert('1');
        useTabs: true, //공백 대신 탭을 사용해서 들여 씀
        tabWidth: 2, //탭 간격( 공백 수2 )
        printWidth: 80, //80칸이 넘어가면 개행
        bracketSpacing: true, //{foo: bar} -> { foo: bar }
        arrowParens: 'avoid', // always : (x) => x, avoid : x => x
        trailingComma: 'all', //객체에서 후행 쉼표 사용
        endOfLine: 'auto', // 줄끝 라인 맞추기
        vueIndentScriptAndStyle: true,// 스타일, 스크립트 인덴팅 자동정렬
      },
    ],
  },
};
