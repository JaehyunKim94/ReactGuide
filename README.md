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
  - 리액트 앱을 만들게 되면 자동으로 `.git` 파일도 같이 생성되기 때문에 Git으로 관리하려면 이를 지워주면 됩니다. (Vue랑 똑같다)

    ```bash
    rm -r .git
    ```

    ** `rm`는 조심히 다뤄야하는 명령어입니다. [rm을 안전 옵션으로 실행](https://www.lesstif.com/system-admin/rm-rf-14090708.html)을 참고해서 사고를 예방하는 것도 괜찮을 것 같습니다.

    - 실행 결과

      ![DeleteDotGit](./images/DeleteDotGit.png)

      (master) 표시가 안나오는 것으로 깃이 삭제된 것을 확인

  - `npm start`: 서버 실행

    - 실행 결과

      ![StartServer](./images/StartServer.png)

    - 로컬에서 확인

      ![ReactWebStart](./images/ReactWebStart.png)
    
  - 생성되는 파일 둘러보기

    ```react
    import React from 'react';
    import ReactDOM from 'react-dom';
    import './index.css';
    import App from './App';
    import reportWebVitals from './reportWebVitals';
    
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('root')
    );
    
    // If you want to start measuring performance in your app, pass a function
    // to log results (for example: reportWebVitals(console.log))
    // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
    reportWebVitals();
    ```

    - `React.StrictMode`: App의 잠재적인 문제를 알아내기 위한 도구

    ```react
    import logo from './logo.svg';
    import './App.css';
    
    function App() {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      );
    }
    
    export default App;
    ```

    

## Hello World

가장 간단한 형태의 React 예시

```react
/* index.js */
ReactDOM.render(
	<h1>Hello World</h1>,
	document.getElementById('root');
)
```



## JSX 소개

- JSX

  : Javascript를 확장한 문법으로, 근본적으로는 `React.createElement(component, props, ...children)` 함수에 대한 *문법적 설탕(Syntactic sugar)를 제공합니다. 

  *문법적 설탕: 문법적 기능은 그대로지만 읽는 사람이 직관적으로 쉽게 코드를 읽을 수 있게 만듦

  ```react
  function getFullName(user) {
    return user.firstName + " " + user.lastName;
  }
  
  const chapter = "02_IntroduceJSX";
  
  const user = {
    firstName: "Kim",
    lastName: "Jaehyun",
  };
  
  /*
  div: 자식 포함하기
  h1: 변수 포함하기
  h2: 함수 호출 결과 포함하기
  */
  const element = (
    <div>
      <h1>{chapter}</h1>  
      <h2>Hello, {getFullName(user)}</h2>
    </div>
  );
  ```

  - JSX의 중괄호 안에는 유효한 모든 Javascript 표현식을 넣을 수 있다.

- JSX 속성 정의

  ```react
  // 속성에 따옴표를 사용한 문자열 리터럴 정의
  const elemA = <div tabIndex="0"></div>;
  // 중괄호를 사용한 어트리뷰트에 JS 표현식 삽입
  const elemB = <img src={user.imgSrc}></img>
  ```

  **JSX는 HTML보다는 JS에 가깝기 때문에, HTML 어트리뷰트 이름 대신  camelCase를 사용한다.** 

- JSX는 주입 공격을 방지합니다.

  ```react
  const title = response.potentiallyMaliciousInput;
  const element = <h1>{title}</h1>;
  ```

  - React DOM은 JSX에 삽입된 모든 값을 렌더링하기 전에 이스케이프 하므로, App에서 명시적으로 작성되지 않은 내용은 주입되지 않습니다. 모든 항목은 렌더링 되기 전에 문자열로 변환합니다. 이런 특성으로 *XSS(cross-site-scripting) 공격을 방지할 수 있습니다.

    *XSS: 스크립트 코드를 삽입 해 개발자가 고려하지 않은 기능이 작동하게 하는 공격으로, 사용자를 대상으로 한 공격이다. [참고자료](https://4rgos.tistory.com/1)

- JSX는 객체를 표현합니다.

  Babel은 JSX를 `React.createElement()` 호출로 컴파일 합니다.

  ```jsx
  const element = (
  	<h1 className="greeting">
  		Hello, world!
  	</h1>
  );
  ```

  ```react
  const element = React.createElement(
  	'h1',
  	{className: 'greeting'},
  	'Hello, world!'
  )
  ```

  

## 엘리먼트 렌더링

엘리먼트는 React 앱의 가장 작은 단위입니다. 브라우저 DOM 엘리먼트와 달리 일반 객체이며, 쉽게 생성할 수 있다. 

```react
/* index.js 일부 */
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
```

- `App.js`의 내용을 루트 DOM 노드에 렌더링한다. 