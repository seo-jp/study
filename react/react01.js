생활코딩 리액트 강의

* 개발환경 설정

npm : app 설치
npx : react라는 앱을 임시로 설치해 딱 한번만 설치하고 지우는 애라고 생각하면됨. 실행할때마다 얘를 최신으로 다운받음.

npm install -g create-react-app : 리액트 설치
create-react-app -V : 설치한 리액트 버전확인

리액트 프로젝트담당 폴더를 하나 만든다.
그리고 cd 폴더이동
create-react-app . : 개발환경 구축



* 샘플 웹앱 실행

편집기 > react-app폴더 이동
npm run start
Ctrl + c : 종료


* JS 코딩하는법

어떤 디렉토리 구조를 가지고있을까?

public : index.html이 있는곳.
         index.html에서 중요한것 = <div id="root"></div>
         사용자가 만든 컴퍼넌트들은 이 root태그 안쪽에 들어간다.
         이 컴퍼넌트들은 어디서 수정하고 만들수있을까 ? 

src    : 바로 여기 !
         그중에서 엔트리파일, 진입파일은 index.js 이다.
         ReactDOM.render(<App />,document.getElementById('root'));
         <App /> = 컴퍼넌트(사용자 정의태그).
         이 컴퍼넌트는 각 파일을 임포트해서 사용한다 = import App from './App';(.js가 생략되있음)
         
         기존 App.js 파일은 함수형과 클래스형 중 하나임. 내껀 함수형인데 강의에선 클래스형으로 사용한다고하니 수정함
         
         import logo from './logo.svg';
         import './App.css';
         import React, { Component } from 'react';

         class App extends Component {
           render() {
             return (
               <div className="App">
                 실제 구현코드
               </div>
             );
           }
         }

         export default App;
         
         

우와아아아
리액트는 따로 서버 재시작안해도 코드바꾸는대로 리로드해줌
야바이


* CSS 코딩하는법

src > index.css


* 배포하는법 (디플로이)

크롬 > 네트워크 선택 후 Empty cache and Hard Reload 해주기
얘를 누르면 캐쉬라는게 다 없어져버림.
얘를 누르면 1.7메가 정도 새로 다운받았다는게 보이는데, 이것은 리액트가 개발편의성을 위해
이것저것 추가한것이다 . 이게 create-react-app 생성 시 단점.. 무거움 + 보안적 문제
그렇기에 빌드할때엔 
npm run build 로 실행.
그렇다면 디렉토리 구조에서 이전엔 없었던 build 라는 디렉토리가 생성된다.

이 build파일에도 index.html 파일이있는데 공백이 하나도없고 읽을수도없음 ..
이건 create-react-app이 프로덕션환경에서 사용되는 앱을 만들기위해
우리가 이미 가지고있는 index.html에서 가지고있는 공백과같이 불필요한 것들을 싹 제거한것이다.
즉, 알아서 불필요한 용량을 제거해주고 보안적,심미적으로 좋지않은것들을 다 없애준다.

실제로 서비스할땐 build안의 파일을 쓰면된다.

npm을 통해 설치하는 간단한 웹 서버가 있음. (serve)
npm install -g serve : 이컴퓨터 어디에서나 serve라는 명령어를 통해 웹서버 설치가능
npx serve -s build : 한번만 실행시킬 웹서버 + 실행시킬때 빌드라는 디렉토리를 document root로 설정.

용량이 훨씬 줄어든것을 알수있다.


* 리액트가 없다면

public 은 우리가 npm start를 했을때 파일을 찾는 document root 다.


* 컴포넌트 만들기 1 - 2

자바스크립트 최신스펙 class 안의 함수는 function을 생략함
컴퍼넌트를 만들땐 꼭! 하나의 최상위 태그만 써야한다.


#App.js

class Subject extends Component {
  render(){
    return (
      <header>
        <h1>WEB</h1>
        world wide web!
      </header>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
         <Subject />
      </div>
    );
  }
}


오 .. 이런구조로
그리고 리액트에서 쓰는건 자바스크립트가 아님.
JSX 라는 언어인데 이걸 리액트가 자바스크립트언어로 바꿔서 처리해주는것이다.

-- 실습끝

import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';


class Subject extends Component {
  render(){
    return (
      <header>
        <h1>WEB</h1>
        world wide web!
      </header>
    );
  }
}

class TOC extends Component {
  render(){
    return (
      <nav>
        <ul>
            <li>list1</li>
            <li>list2</li>
            <li>list3</li>
        </ul>
    </nav>
    )
  }
}

class Content extends Component {
  render(){
    return (
      <article>
        <h2>HTML</h2>
        HTML is HyperText Markup Language.
      </article>
    )
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
         <Subject />
         <TOC />
         <Content />
      </div>
    );
  }
}

export default App;

이런식으로 정리정돈을 해나가며 복잡도를 획기적으로 낮춘것부터 한걸음 시작하는..


* props

우리가 이렇게 정리한 태그를 패키지로 만들어서 인터넷에 올리면
다른사람이 우리가 정의한 태그를 자신의 어플리케이션에 붙여서 사용할수도있다. 스.고.이

props 는 컴퍼넌트의 속성을 나타낼 수 있다.

class Subject extends Component {
  render(){
    return (
      <header>
        <h1>{this.props.title}</h1>
        {this.props.sub}
      </header>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
         <Subject title="WEB" sub="world wide web!" />
         <TOC />
         <Content />
      </div>
    );
  }
}

이렇게 입력값에 따라 달라지는 출력값 구현.


* React Developer Tools

개발에있어서 중요한것은?
1.설명서를 볼줄아는것.
2.현재 상태를 측정하고 분석하는것.
3.다른사람에게 질문하는것.
4.검색하는것.

현재의 상태를 알아내는 도구 > 크롬웹앱 React Developer Tools


* Component 파일로 분리하기

더욱 깔끔한 정리를위해 파일로 분리하기
기본적으로 src 폴더에 새폴더를만든다.


* State 소개

props 와 state를 비교하며 알아보자
보통 제품은 내부적인 구현을 위해 다양한 상태들을 사용하고, 다양한 내부적 조작장치, 매커니즘들을 가지고있는데
이걸 스테이트 로 비유할수있다.
프롭스는 사용자가 컴퍼넌트를 사용하는 입장에서 중요한것.
스테이트는 프롭스의 값에 따라 내부구현에 필요한 데이터들 ..이라고 볼수있다.

컴퍼넌트의 속성을 이것저것 바꾸고싶을때, 사용자는 props를 통해 컴퍼넌트를 조작할 수 있다.
그러나 사용자는 알필요도없고 알아서는 안되는 내부적인것들을 state라고 한다.

Props  ---------->  Component ( ( state  ) )

Props와 State는 철저하게 분리시켜야한다.



* State 사용

class App extends Component {
  
  //초기화 (App실행시 가장 먼저 실행)
  constructor(props){
    super(props);
    //state값 초기화
    this.state = {
      Subject:{title:'WEB', sub:'World Wide Web'}
    }
  }

  //state값에 sub가있는지없는지 App.js만 봐서는 모름. 내부의 전선들을 철저하게 숨기는것이 좋은 코드이다.
  //상위컴퍼넌트의 state값을 하위컴퍼넌트의 props의 값으로 전달하는것은 얼마든지 가능합니다.
  render() {
    return (
      <div className="App">
         <Subject
                title={this.state.Subject.title}
                sub={this.state.Subject.sub} />
         <TOC />
         <Content title="HTML" sub="HTML is HyperText Markup Language." />
      </div>
    );
  }
}



* Key

여러개의 state 값 사용.

#App.js

this.state = {
      Subject:{title:'WEB', sub:'World Wide Web'},
      Content:[
        {id:1,title:'HTML',desc:'HTML is for information ....'},
        {id:2,title:'CSS',desc:'CSS is for design ....'},
        {id:3,title:'Javascript',desc:'Javascript is for interactive ....'}
      ]
    }


#TOC.js

class TOC extends Component {
    render(){
        var lists = [];
        var data = this.props.data;
        var i = 0;
        while(i < data.length){
            lists.push(<li key={data[i].id}><a href={"/content/"+data[i].id}>{data[i].title} : {data[i].desc}</a></li>);
            i = i + 1;
        }
        //이렇게 자동으로 생성시킬땐 식별자가 되는 key값이 필요하다.(임의설정)

        return (
        <nav>
          <ul>
              {lists}
          </ul>
      </nav>
      )
    }
  }

결국 state값을 props가 가져다 쓰는것같은데
data는  <TOC data={this.state.Content} /> 여기서설정.



* 이벤트 state props 그리고 render 함수


클릭한것에 따라 해당되는 컨텐츠가 출력되게해보자
이벤트에따라 state가 바뀌고, 바뀐 state가 props값으로 전달됨으로서 동적으로 어플리케이션이 바뀌는것이 목표.

render : 어떤 html을 그릴것인가.
react에서는 props나 state값이 바뀌면 , 그 state를 가지고있는 component에 render함수가 다시 호출되며,
하위 component의 render함수도 다시 호출이됨.
state에서 쓰는 값 이름들은 내가 맘대로 만들어도 되는것이구나 .. 

class App extends Component {
 
  constructor(props){
    super(props);
    this.state = {
      mode:'welcome',
      Subject:{title:'WEB', sub:'World Wide Web'},
      welcome:{title:'Welcome', desc:'Hello React!!'},
      TOC:[
        {id:1,title:'HTML',desc:'HTML is for information ....'},
        {id:2,title:'CSS',desc:'CSS is for design ....'},
        {id:3,title:'Javascript',desc:'Javascript is for interactive ....'}
      ]
    }
  }

  render() {
    var _title,_desc = null;
    if(this.state.mode == 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if(this.state.mode == 'read'){
      _title = this.state.TOC[0].title;
      _desc = this.state.TOC[0].desc;
    }
    return (
      <div className="App">
         <Subject
                title={this.state.Subject.title}
                sub={this.state.Subject.sub} />
         <TOC data={this.state.TOC} />
         <Content
                title={_title}
                desc={_desc} />
      </div>
    );
  }
}

즉 리액트는 링크를 클릭하면 url을 타고 이동하는것이 아닌 이벤트를 발생시켜 state,props을 변경해주고
그에따라 페이지가 다시 렌더링되는것임.
그렇기에 싱글페이지웹앱이라고한다. (유투브 지우영님댓글참고)



* 이벤트 설치

리액트에선 onClick
온클릭을 걸어농고 이벤트를 실행시키면 (function(e) 파라미터값에 event)


* bind 함수 이해하기

* this = component 자신
기본적으로 render라는 함수안에서 this는 이 render함수가 속해있는 컴퍼넌트 자체를 가르키는데
렌더 함수 안에서 쓰이는 함수는 이상하게 this가 아무값도 없다.
이렇게 this값이 없을때 강제로 this값을 주입하는 방법이 있다.

>> 예시

var obj = {name:'egoing'};

function bindTest(){
  console.log(this.name);
}

이러한코드에서 bindTest안의 this를 obj로 설정하고싶을때
내가만든 함수에 bind함수를 걸어준다.
var bindTest2 = bindTest.bind(obj);
그러면 bindTest안의 this는 obj가 된다.

return (
      <div className="App">
        <header>
          <h1><a href="/" onClick={function(e) {
            console.log(e);
            e.preventDefault(); //a태그의 기본적인 동작을 중지(페이지 이동)
            this.setState({
              mode:'welcome'
            });
          }.bind(this)}>{this.state.Subject.title}</a></h1>
          {this.state.Subject.sub}
        </header>
         <TOC data={this.state.TOC} />
         <Content
                title={_title}
                desc={_desc} />
                
      </div>
    );

그렇기에 bind에 this를 하게되면 App이라고하는 컴퍼넌트 자체를 가르키는 객체를 이 함수안으로 주입해서 이 함수안에서 this는 그 객체가 되게 하는것.


*setState함수 이해하기

동적으로 페이지를 바꾸려면 setState함수를 사용한다. 직접 때려박는거 x
this.state.mode = 'welcome'; 이렇게 바꾸면 리액트는 모른다..

this.setState({
  mode:'welcome'
});


* 컴포넌트 이벤트 만들기

// App.js
return (
      <div className="App">
        <header>
         <Subject
         title={this.state.Subject.title}
         sub={this.state.Subject.sub}
         onChangePage={function(){
            this.setState({mode:'welcome'});
         }.bind(this)} />
         </header>
         <TOC data={this.state.TOC} />
         <Content
                title={_title}
                desc={_desc} />
                
      </div>
    );

// Subject.js
class Subject extends Component {
    render(){
      return (
        <header>
          <h1><a href="/" onClick={function(e){
            e.preventDefault();
            this.props.onChangePage();
          }}>{this.props.title}</a></h1>
          {this.props.sub}
        </header>
      );
    }
  }

