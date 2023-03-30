* promise 함수의성공 리턴값은 resolve (안에다가)
* 실패 리턴값은 reject( 안에다가 )

### form

* **입력된 데이터를 한 번에 서버로 전송** 하기 위해 사용
* 즉, 클라이언트가 서버에게 정보 전달 할 때 사용
* 속성 : action,name,target,method
* 폼 요소 : `<input>,<select>,<textarea>,<button>`

> * action : 폼을 전송할 서버 주소 지정
> * name : 폼을 식별하기 위한 이름 // document.forms['form태그_name속성값']
> * method : 폼을 서버에 전송할 http 메소드 지정
> * target : action 속성값에 지정한 스크립트 파일을 현재 창이 아닌 다른 위치에서 열 수 있도록 함( _target,_blank ...)

### GET 방식

* 폼에 입력한 정보가 url 에 추가되어 보임

### POST 방식
* 로그인과같은 안전한 처리방식은 POST를 사용해야함.
* URL 에 가려져서 작동함.

### input 속성
type : 인풋 타입
**name** : 이름지정 ,bE에서 name으로 key가 설정 된다.
readonly : 읽기 전용 ( 수정 불가)
autofocus : 자동 focus


* nodemon 패키지 :  자동으로 node를 재실행하는 패키지
* npm i -g nodemon
npx nodemon app.js
