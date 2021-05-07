# React.js 시작하기

[React 공식 문서](https://ko.reactjs.org/docs/getting-started.html)를 통해서 설치부터 개념 정리까지 리액트 학습을 위한 레포입니다. 

## Installation

- `Node.js` (10.16 이상의 버전)
  - [Node.js 다운로드](https://nodejs.org/ko/download/)
- `npm`(5.6 이상의 버전)
  - Node.js 의 패키지 매니저(모듈)



## Create React App

React App 개발 시작하기

```bash
npx create-react-app [app-name]
cd app-name
npm start
```

- `npx`: `npm` 5.2 버전부터 제공된 기본 패키지로 `npm`을 통해 모듈을 로컬에 설치했어야만 실행시킬 수 있었던 기존의 문제점을 해결했다. 모듈을 로컬에 저장하지 않고, 매번 최신 버전의 파일만 임시로 불러와서 실행 시킨 후에, 그 파일은 없어지는 방식으로 모듈이 돌아간다. 
  ** [참고자료 - npm과 npx의 차이](https://ljh86029926.gitbook.io/coding-apple-react/undefined/npm-npx)

- 실행 결과 (my-app 이라는 이름으로 app 생성)

  ![CreateReactApp](./images/CreateReactApp.png)
  - 리액트 앱을 만들게 되면 자동으로 `.git` 파일도 같이 생성되기 때문에 Git으로 관리하려면 이를 지워주면 됩니다. (Vue랑 똑같네요)

    ```bash
    rm -r .git
    ```

    ** `rm`는 조심히 다뤄야하는 명령어입니다. [rm을 안전 옵션으로 실행](https://www.lesstif.com/system-admin/rm-rf-14090708.html)을 참고해서 사고를 예빵하는 것도 괜찮을 것 같습니다.

    - 실행 결과

      ![DeleteDotGit](./images/DeleteDotGit.png)

      (master) 표시가 안나오는 것으로 깃이 삭제된 것을 확인

  - `npm start`: 서버 실행

    - 실행 결과

      ![StartServer](./images/StartServer.png)

    - 로컬에서 확인

      ![ReactWebStart](./images/ReactWebStart.png)



## Hello World