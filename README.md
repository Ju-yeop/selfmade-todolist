# selfmade-todolist

개선해야 할 점 : TODO 입력 후 바로 리스트를 삭제하면 타겟한 UL태그 내의 LI태그는 삭제되지만 LocalStorage에서는 삭제되지않는다.

<주의사항 및 의문점>
/*
1. 함수 소문자 대문자 구분 잘하기 
2. '' has already been declared -> const로 선언한 변수를 재설정하려고 할 경우의 에러 메세지, 
내장되어있는 함수명을 const로 선언해도 동일 에러 발생 Ex)const local -> Error
3. todo.js -> deletetodo에 parseInt를 쓰는 이유 */
