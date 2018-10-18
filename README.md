# masteringjs_newsui

[newsstand UI 구현링크](http://hyeyoonjung.com/masteringjs_newsui/main.html)

1. 기능요구사항 (한 개씩 개발한다)
  - 10개의 뉴스데이터가 화면에 노출된다.
  - 우측상단의 좌우화살표 '<, >' 를 클릭하면 뉴스영역이 교체된다.
  - 좌측 네비게이션 영역의 뉴스를 클릭하면, 선택된 뉴스가 하이라이팅되고, 우측에 해당 뉴스페이지가 보여진다.
2. 기술요구사항
  - 초기화면에 보여질 데이터 렌더링은 newslist.js 안의 배열을 활용한다.
  - templating 작업은 template literal 을 사용한다.
  - 메인영역의 tempalting작업은 templates/news.js 안의 fnNewsListTemplate 함수를 활용
  - 좌측네비영역의 templating작업은 fnNewsListTemplate를 참고해서 비슷하게 개발한다.
  - 이벤트는 delegation을 사용하려고 노력한다.
  - ES2015문법을 최대한 활용
  - ES modules, ES Classes 를 활용
  - 데이터조작은 함수형메서드(고차함수)활용
  - 함수단위 작게하기

