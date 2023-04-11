#### `0406`

# REST API / API

## API

* application Protocol Interface
* 프로그래밍할 때 필요한 인터페이스ㅁr
* ex ) 손님은 메뉴판(API)를 이용해서 직원(서버)에게 주문(요청/request)를 함

## REST API : REST 원리를 따르는 API

* REST : 한마디로 약속
* **주소 : 의미를 전달하기 위해 명사로 구성**

```
/user : 사용자 정보에 관련된 자원 요청 
/comment : 댓글 관련 자원요청
```

* **GET** : 조회할 때 사용
* **POST** : 생성할 때 사용
* **PUT / PATCH** : 무언가를 수정 할 때 사용
  ( put : 전체를 덮어쓰기 patch : 일부분 수정 )

#### 쿼리 스트링이란 ?

* /xxx/yyy?key=1value1&key2=value2

### REST API 예시 :

* GET /users : 모든 사용자 정보 읽어오기
* GET /user/:id : 특정 id 사용자 읽어오기
* POST /users : 사용자 생성
* PUT /user/:id : 해당 id 사용자 수정하기
* 
