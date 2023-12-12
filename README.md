# 앵귤러 Todo List

## 구현사항

1. 투두리스트의 CRUD 로직 구현
2. 로컬스토리지를 통해 데이터 영구적으로 유지
3. Service를 통해 데이터 처리 로직 분리
4. BehaviorSubject를 생성해 데이터 흐름 전달

## UI / UX

[피그마 링크](<https://www.figma.com/file/xJhBNv2WIkUVb5AbvMxaNu/Daily-ui-challenge-042-%3A-Todo-list-(Community)?type=design&node-id=0%3A1&mode=design&t=Hvt7i4sQWVrDVRzt-1]>)

<img width="332" alt="image" src="https://github.com/alice-0130/ng-todo-list/assets/152949989/90ec10b7-8f71-4b3b-9927-d13d992e8b89">

## 궁금한 사항들

1. 각각 아이템을 구별하기 위해 인풋 프로퍼티 id를 설정했는데, update, delete 등을 할 때 id를 템플릿 참조 변수로 접근해서 가져오는데 적절한 방법인지?
2. todo item을 수정하거나 아이템 삭제 등의 행위를 할 때 파라미터로 `id`를 받는데, 이 땐 `id`가 number가 아닌 string으로 받아져서 html 단계에서 바로 타입캐스팅이 가능한지?
3. 옵저버블과 subject(behaviorSubject)가 자꾸 헷갈림. 페이지에서 service DI를 하여 behaviorSubject의 asObservable로 옵저버블을 만든 변수를 가져와서 async pipe로 구독했는데, 옵저버블로 변환해서 가져와야만 하는지, 그냥 behaviorSubject로 가져와서 처리할 수 있는지?
