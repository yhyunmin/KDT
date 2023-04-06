#### `0404`

# MVC
* **Model View Controller**  
소프트웨어 설계와 관련된 디자인 패턴 ( 디자인 패턴 :상황에 따라 설계 방법을 정리한 코딩 방법론)
> ## 장점
> * 패턴들을 구분해 개발한다
> * 유지 보수가 용이하다.
> * 유연성이 높다
> * 확장성이 높다.
> * 협업에 용이하다.

> ## 단점
> * 완벽한 의존성 분리가 어렵다  
> * **설계 단계가 복잡하다**  
> * 설계 시간이 오래걸린다.  
> * 클래스(단위)가 많아진다.

## MVC 흐름
  ![img.png](img.png)'
* **Model** : 데이터를 처리하는 부분 ( model 폴더 )
* **View** : UI 관련된 것을 처리하는 부분 ( 사용자에게 보여지는 부분 ) CSS / HTML 
* **Contorller** : View 와 Model 을 연결해주는 부분

## Node.js 에서 MVC 구조
![img_1.png](img_1.png)

## 폴더구조
* controller 폴더 : View와 Model연결하는부분
  (Cmain.js)
* model 폴더 : 데이터 처리하는 부분
  (Comment.js)
* routes 폴더 : 경로 설정하는 부분
  (index.js)
* views 폴더 : UI 관련 처리




### req.params 

* 라우터의 매개변수
예를 들어 /:id/:name 경로가 있으면 ":id"속성과 ":name"속성을 req.params.id, req.params.name 으로 사용할 수 있다.
