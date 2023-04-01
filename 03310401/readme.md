#### `0331`

### AXIOS 문법

* axios get 은 params {객체}
* axios post 는 data {객체}

> response.data : 서버가 제공한 응답(데이터)  
> response.status : 200 (성공), 400,500(실패)
> response.headers : 데이터에대한 데이터(메타데이터)들이 담겨져 있음
>
> res.send() 이용하여 데이터를 보낸다 / 데이터를 다시 클라이언트로 보낸다.

### body-parser

* POST로 정보 전송할때 요청의 body(req.body) 로 받을 수 있게 도와 줌
* 단점 ) 단 멀티파트 데이터는 처리하지 못함, (이미지 동영상 파일)
* i.e) multer를 이용하면 됨

### multer 미들웨어

* 파일 업로드를 위해 사용되는 미들웨어
* 싱글파일 single()
* 멀티파일 array()
*  fields()
