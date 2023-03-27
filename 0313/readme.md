#### `0313`

> ## DOM

- JS를통해 DOM(HTML)을 컨트롤을 알아봄.

* querySelector('요소 선택자') : 문서에 존재하는 요소를 찾아줌
* querySelectorAll(요소 선택자) : 존재하는 해당 요소를 찾아주는 메소드  
  (모든 요소를 가져와서 배열로 만들어줌)
* getElementById("ID이름") : ID를 가지는 요소를 불러오는 메소드

> ## 요소다루기

### .textContent .innerText .innerHTML

- 태그내에 들어갈 문자열을 지정
- 요소.textContent="hi"
  (선택된)

### classList.

- class를 추가, 제거 그리고 존재 하는지 체크
- classList를 이용하여 CSS기능을 활용할 수 있다.

### setAttribute : html요소 속성 추가

- 태그의 속성값을 직접 지정할 수있다
  (요소.setAttribute)

### 다른 노드에 접근하기

- children/ child

### createElement(html 요소)

- 특정 html 태그를 생성한다.

* 요소를 만들었으면 .append(), .prepend()
* 삭제는 .remove() ,
