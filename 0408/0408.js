// required 있는 input 비어있는지 확인하는 메소드
form.checkValidity(); // false / true

if (!form.checkValidity()) {
  form.reportValidity(); // 입력이 안되어 있을 때 말풍선을 보여줌
  return;
}
