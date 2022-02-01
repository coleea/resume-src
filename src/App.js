import React from 'react'
// import logo from './logo.svg';
import './App.css';

const projectList = [
  {
    title : 'express기반 웹 서비스 개발',
    description : [
        'PhantomJS로 커뮤니티 글 스크래핑하여 DB(heroku의 MongoDB)에 저장',
        'pug 템플릿 언어로 html 생성',
    ],
  },
  {
    title : 'next.js기반 출결관리 서비스',
    description : [
      '',
    ]
  },
  {
    title : 'next.js기반 커뮤니티',
    description : [
      'puppeteer로 커뮤니티 글 스크래핑',
    ]
  }
]

function App() {

  return (
    <div className="App">

      <div className='sidebar'>
        <a href="#basic_info">기본정보</a> 
        <a href="#history">간단이력</a> 
        <a href="#core_skills">핵심역량</a> 
        <a href="#career">경력</a> 
        <a href="#skills">기술</a> 
        <a href="#personal_info">개인정보</a> 
      </div>
      <header className="App-header">

        <div className='mainTitle'>
            <h1>이력서에 오신것을 환영합니다</h1> 
        </div>


        <a name="basic_info"></a>
        <div class="project">
            <div class='title center'>
                <h1><b>기본정보</b></h1>
            </div>
            <div class="description">    
                <ul>           
                    <li><u><b>웹 프론트엔드</b></u> 개발자 입니다</li>
                </ul>   
            </div> 
        </div>

        <a name="history"></a>
        <div class="project">
            <div class='title center'>
                <h1><b>간단이력</b></h1>
                <h3></h3>
            </div>
            <div class="description">    
                <ul>           
                    <li>
                        건국대(서울) 컴공
                        <div className='sub'>
                            - 2015.03 ~ 2017.02
                        </div>               
                        <div className='sub'>
                            - 편입하여 3~4학년 과정을 이수하였습니다
                        </div>               
                    </li>
                    <li>
                    파워보이스
                    <div className='sub'>
                    - 2017.01 ~ 2017.12
                    </div>               
                    <div className='sub'>
                        - C++ & 파이썬으로 자연어처리(NLP) 업무 수행
                    </div>               
                    </li>
        
                    <li>
                    해바라기소프트
                        <div className='sub'>
                        - 2018.05 ~ 2018.11
                        </div>                             
                        <div className='sub'>
                        - 웹개발입문. 스프링 + 제이쿼리로 사이트 구현
                        </div>               
                    </li>
                    
                    <li>
                        개인사업
                        <div className='sub'>
                            - 2019.01 ~ 현재
                        </div>               
                        <div className='sub'>
                            - 개인사업 하면서 남는 시간에 리액트 위주로 웹개발을 독학하였습니다
                        </div>               
                    </li>
                </ul>   
            </div> 
        </div>
        
        <a name="core_skills"></a>
        <div class="project">
            <div class='title center'>
                <h1><b>핵심역량</b></h1>
                <h3></h3>
                <img loading="lazy" className='img_tech'  className='img_tech' src="https://sc372.github.io/2017/05/30/javascript-intro/javascript.png"></img>
                <img loading="lazy" className='img_tech'  className='img_tech' src="https://i.pinimg.com/736x/c3/8e/e8/c38ee8475ee7f3680f706c56c3a1194c.jpg"></img>        
                <img loading="lazy" className='img_tech'  className='img_tech' src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"></img>        
                <img loading="lazy" className='img_tech'  className='img_tech' src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png"></img>
                <img loading="lazy" className='img_tech'  className='img_tech' src="https://res.cloudinary.com/practicaldev/image/fetch/s--kpVkTsRw--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/r7kj8y4dfyd1aw989edi.png"></img>
                <img loading="lazy" className='img_tech'  className='img_tech' src="https://poiemaweb.com/img/mongo-db-logo.png"></img>        
                <img loading="lazy" className='img_tech'  className='img_tech' src="./sass-logo.jpeg"></img>        

                
            </div>
            <div class="description">    
                <ul>           
                    <li><strong><u>next.js</u></strong>또는 <strong><u>express</u></strong> 기반의 웹개발을 수행합니다</li>
                    <li>프로젝트 생성에서 배포 및 도메인 연결까지 개발 전과정을 혼자 진행할 수 있습니다</li>
                    <li>Next.js의 <strong><u>API Routes</u></strong>를 통하여 <strong><u>MongoDB</u></strong>의 CRUD가 가능합니다</li>
                    <li><strong><u>MongoDB Atlas</u></strong>및 <strong><u>Supabase</u></strong>기반의 DB 생성 및 관리가 가능합니다</li>
                    <li>함수형 컴포넌트를 이용하여 SoC원칙에 입각하여 리액트 컴포넌트를 개발합니다</li>
                    <li>ES2021까지 <strong><u>ECMA 스펙</u></strong>에 대한 거의 모든것을 이해합니다 (promise, generator, async 등)</li>
                    <li>jQuery 없이 querySelector및 HTMLElement등의 <strong><u>웹표준 API만으로 엘리먼트를</u></strong> 조작하는데 불편함이 없습니다</li>
                    <li>웹브라우저의 렌더링 프로세스 및 js 런타임 환경에 입각하여 <strong><u>코드의 실행순서를 이해</u></strong>할 수 있습니다</li>
                    <li><strong><u>SCSS</u></strong> & <strong><u>CSS Module</u></strong> 기반의 스타일링을 지향합니다</li>
                    <li>디바이스에 따라서 가변적으로 표현되는 <strong><u>반응형 웹 디자인</u></strong> 경험이 존재합니다</li>

                    <li>영문독해, 쓰기, 리스닝 가능하며 <strong><u>공식문서 리딩</u></strong>을 지향합니다. 인터넷 검색만으로 해결이 불가능한 문제 발생시 스택오버플로우 및 개발 커뮤니티에 영문으로 커뮤니케이션하여 문제해결한 건이 다수 존재합니다</li>
                    <li><strong><u>flutter</u></strong>기반의 모바일 앱을 개발하여 플레이스토어에 출시한 경력이 존재합니다  </li>
                </ul>   
            </div> 
        </div> 

        <a name="career"></a>
        <div className='strong_font'>
            <h1>경력</h1>
        </div>


        <div class="project">
            <div class='title'>
                <h1><b>개발자 커뮤니티 사이트 구현</b></h1>
                <h4><i>(2021.01 ~ )</i></h4>
                <h3><i>(1인 프로젝트)</i></h3>
                <h3><i>개발 커뮤니티에서 읽을만한 글을 한데모아 게시판 형태로 보여주는 웹사이트입니다</i></h3>        
            </div>
            <div class="description">    
                <ul>           
                    <li>참여도 : 100%</li>
                    <li>URL : https://devkr.info</li>
                    <li>타입스크립트와 SCSS 기반으로 구현하였습니다</li>
                    <li>헤드리스 크롬 라이브러리인 puppeteer로 reddit, okky, dcinside의 글을 스크래핑하여 DB에 저장하였습니다</li>
                    <li>회원가입 및 로그인 페이지를 구현했습니다</li>
                    <li>MongoDB Realm 및 GraphQL기반의 데이터 요청으로 게시판을 구현했습니다</li>
                    <li>게시물 검색기능을 구현했습니다</li>
                    <li>자유게시판의 글등록, 삭제, 댓글쓰기 및 스크롤에 반응하는 글 로딩하기 기능을 구현했습니다</li>
                    <li>모바일 및 데스크탑 페이지를 별도로 만들지 않고 디바이스에 맞춰 동적으로 변하는 반응형 웹으로 구현했습니다</li>
                    <li>서버리스 기반의 AWS Lambda & S3를 이용하여 배포했습니다</li>
                    <li>
                        스택
                        <ul>
                            <li>Next.js, recoil, CSS Module, SCSS, styled-jsx</li>
                            <li>DB : MongoDB Atlas, Mongodb Realm(GraphQL 기반)</li>
                            <li>배포툴 : serverless프레임워크의 next-js 플러그인 (aws cloudfront로 디플로이)</li>
                            <li>스크랩핑 툴 : puppeteer</li>
                        </ul>
                    </li>
                </ul>   
            </div> 
        </div>

        <div class="project">
            <div class='title'>
                <h1><b>학생 출결관리 사이트 구현</b></h1>
                <h4><i>(2020.01 ~)</i></h4>
                <h3><i>(1인 프로젝트)</i></h3>
            </div>
            <div class="description">    
                <ul>           
                    <li>참여도 : 100%</li>
                    <li>next.js기반으로 제작되었습니다</li>
                    <li>next-iron-session에 기반한 로그인 기능을 구현했습니다</li>
                    <li>학생이 과목을 신청하거나 신청을 취소하는 페이지를 만들었습니다</li>
                    <li>선생님이 과목에 등록한 학생 정보를 열람하는 페이지를 만들었습니다</li>
                    <li>mongoDB atlas를 DB로 사용했습니다</li>
                    <li>API Routes에 기반한 DB CRUD를 구현했습니다</li>
                    <li>함수형 컴포넌트 및 훅에 기반하여 페이지를 구현했습니다</li>
                    <li>AWS EC2로 배포했습니다</li>
                </ul>   
            </div> 
        </div>

        <div class="project">
            <div class='title'>
                <h1><b>커뮤니티 베스트글 모음 사이트 구현</b></h1>
                <h4><i>(2019.01 ~ 2019.10)</i></h4>
                <h3><i>(1인 프로젝트)</i></h3>
            </div>
            <div class="description">    
                <ul>           
                    <li>참여도 : 100%</li>
                    <li>express & pug 템플릿 엔진 기반으로 제작된 사이트입니다</li>
                    <li>PhantomJS로 각종 커뮤니티의 베스트 글을 크롤링하여 DB에 저장하였습니다</li>
                    <li>heroku의 MongoDB 애드온즈를 DB로 사용하여 스크랩한 데이터를 관리했습니다</li>
                    <li>REST기반의 API를 작성했습니다</li>
                    <li>페이지네이션 및 검색 기능이 포함된 게시판을 구현했습니다</li>
                    <li>SEO(Search Engine Optimization)를 적용하여 페이지뷰를 증가시킨 경험이 있습니다</li>
                    <li>heroku로 배포하였습니다</li>
                </ul>   
            </div> 
        </div>

        <div class="project">
            <div class='title center'>
                <h1><b>해바라기 소프트</b></h1>
                <h4><i>(2018.05 ~ 2018.10)</i></h4>
                <h4><i>전자투표 솔루션 업체에서 프론트 및 백엔드 엔지니어로 업무를 수행 하였습니다</i></h4>
            </div>
            <div class="description">    
                <ul>
                    <li>
                        스프링 + 타임리프 + 제이쿼리 기반의 프로젝트를 수행하였습니다
                    </li>
                    <li>
                        투표결과를 엑셀파일로 생성하는 기능을 구현하였습니다
                        <div className='sub'>
                            - 사내 자체제작된 ORM으로 MySQL에서 투표관련 데이터를 가져와서 엑셀 파일로 제작하여 클라이언트에게 리스폰스 해주는 기능을 구현하였습니다
                        </div>               
                    </li>
                    <li>
                        chart.js라는 js기반의 데이터 시각화 라이브러리로 투표 결과를 시각화하는 페이지를 10여개 제작하였습니다
                        <div className='sub'>
                            - 막대 그래프, 원형 그래프 등의 다양한 그래프로 투표 결과를 시각화하였습니다
                        </div>               
                    </li>
                    <li>
                        타임리프 & 제이쿼리 기반으로 게시판을 구현하였습니다
                        <div className='sub'>
                            - "글 작성하기, 글 수정하기, 글 상세보기" 등의 페이지를 제작하였습니다
                        </div>               
                    </li>
                </ul>
            </div>
        </div>

        <div class="project">
            <div class='title center'>
                <h1><b>파워보이스</b></h1>
                <h4><i>(2017.01 ~ 2017.12)</i></h4>
                <h4><i>자연어처리 업무를 담당하였습니다</i></h4>
            </div>
            <div class="description">    
                <ul>
                    <li>구어체 문장의 패턴을 분석하여 특정 명령어로 분류하는 classification 작업을 수행하였습니다</li>
                    <li>형태소 분석기 엔진을 최적화하여 타겟 키워드의 검출을 약 5% 향상시켰습니다</li>
                    <li>
                        형태소 분석기 전체 리팩토링 작업을 수행했습니다
                        <ul className='sub_ul'>
                            <li><i>C기반의 전체 소스코드를 C++로 리팩토링 하였습니다.</i></li>
                            <li><i>전체적인 코드가 비효율적으로 작성되었다고 판단되었기 때문입니다</i></li>
                            <li><i>중복되는 코드를 제거하고 코드 재사용성을 높이고 문법을 간결하게 작성하여 코드길이를 약 1/5로 줄였습니다</i></li>
                            <li><i>문자열 검색 알고리즘을 boyer-moore에서 aho-corasick으로 대체하고 파일 I/O횟수를 최소화하여 이전엔진 대비 처리속도를 약 2.8배 향상시켰습니다</i></li>
                            <li><i>사용하는 메모리 사이즈를 약 50% 줄였습니다</i></li>
                        </ul>
                    </li>
                    <li>
                        문자열에서 키워드를 검출하는 수작업을 프로그램으로 자동화 하였습니다           
                        <ul className='sub_ul'>
                            <li>
                            <i>"여기 불났어요"같은 문장에서 "불나다" 라는 어휘를 검출하는 작업을 파이썬으로 100% 자동화 하였습니다</i>          
                            </li>
                            <li><i>약 6개월 걸릴것으로 예상했던 작업이 3주만에 완료 되었습니다.</i> </li>
                            <li><i>직원들이 다른 업무에 집중할 수 있게되어 팀 전체의 생산성이 증대 되었습니다</i></li>
                        </ul>
                    </li>
                </ul>   
            </div> 
        </div>

        <a name="skills"></a>
        <div className='strong_font'>
            <h1><b>기술</b></h1>
        </div>
    

        <div class="project">
            <div class='title'>
                <img loading="lazy"  className='img_tech' src="https://sc372.github.io/2017/05/30/javascript-intro/javascript.png"></img>
                <p className='mobile_title'><strong>Javascript</strong></p>
            </div>
            <div class="description">    
                <ul>           
                    <li>ES1부터 ES2021까지 거의 <strong><u>모든 문법</u></strong>을 읽고 쓰고 이해할 수 있습니다</li>
                    <li>콜백과 이벤트 루프, 프라미스와 마이크로테스크 큐, async함수 및 자바스크립트 런타임에서 <strong><u>코드가 어떤 순서대로 실행</u></strong>되는지, 왜 그렇게 실행되는지 이해할 수 있습니다.</li>
                    <li>코드의 실행흐름이 이해가지 않아서 버그가 발생하는 일이 없습니다</li>
                    <li>jQuery 없이 querySelector및 HTMLElement등의 Web API로 <strong><u>엘리먼트를 다루고 조작</u></strong>하는데 불편함이 없습니다</li>
                    <li>필요한 <strong><u>정규식</u></strong>은 대부분 이해하고 구현할 수 있습니다</li>
                    <li>함수형의 원칙인 순수함수의 지향 및 <strong><u>부수효과의 최소화</u></strong>에 입각하여 개발합니다</li>
                    <li>읽기쉬운 코드가 최고의 코드라는 가치에 입각하여 누가 언제 읽어도 이해할 수 있도록 <strong><u>선언적</u></strong>으로 개발합니다</li>
                </ul>   
            </div> 
        </div>

        <div class="project">
        <div class='title'>
        <img loading="lazy" class="img_tech" src="https://i.pinimg.com/736x/c3/8e/e8/c38ee8475ee7f3680f706c56c3a1194c.jpg" />
            <p className='mobile_title'><strong>Typescript</strong></p>
        </div>
        <div class="description">    
            <ul>           
                <li>any 및 강제 형변환을 지양하고 타입가드를 통한 타입 추론을 지향합니다</li>                
            </ul>   
        </div> 
    </div>

        <div class="project">
            <div class='title'>
                <img loading="lazy"  className='img_tech'  src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png"></img>
                <p className='mobile_title'><strong>React</strong></p>
            </div>
            <div class="description">    
                <ul>           
                    <li><strong><u>React hooks</u></strong>기반의 함수형 컴포넌트 기반으로 개발합니다</li>
                    <li><strong><u>SoC</u></strong>철학에 기반하여 컴포넌트를 분리하여 작성합니다</li>
                    <li>React Fiber기반의 리컨사일러가 어떤 타이밍에 컴포넌트를 재호출하고 언제 이펙트함수 등이 호출되는지 <strong><u>실행흐름</u></strong>을 이해할 수 있습니다</li>
                    <li>함수형 컴포넌트 기반에 필수적인 <strong><u>클로저</u></strong>의 작동원리를 숙지하고 있습니다</li>
                </ul>   
            </div> 
        </div> 


        <div class="project">
            <div class='title center'>
                <h1><b>배포</b></h1>
                <img loading="lazy" width="100px"  className='img_tech'  src="https://media.istockphoto.com/vectors/space-rocket-ship-launch-icon-symbol-sign-vector-illustration-icon-vector-id1249577261?k=20&m=1249577261&s=170667a&w=0&h=XWXNf2eItfPfuRe67N5-6dqcPRH745bvbDInj74Xv3w="></img>        
                <h3></h3>
            </div>
            <div class="description">    
                <ul>           
                    <li>AWS EC2, Heroku, Netlify, Github Page로 배포한 경험이 있습니다</li>
                    <li>서버리스 플랫폼인 AWS Lambda@Edge 및 Cloudfront로 배포한 경험이 있습니다.</li>
                </ul>   
            </div> 
        </div>

        <a name="personal_info"></a>
        <div class="project">
            <div class='title center'>
                <h1><b>개인정보</b></h1>
                <h3><i></i></h3>
                <img loading="lazy" className='img_tech' src="https://www.pinclipart.com/picdir/big/247-2473891_personal-information-svg-png-icon-free-download-clipart.png"></img>
            </div>
            <div class="description">    
                <ul>           
                    <li><strong>기술블로그</strong> : <a href="https://blog.devkr.info">https://blog.devkr.info</a>  </li>
                    <li>
                        <img loading="lazy" height="30px" src="https://cdn-icons-png.flaticon.com/512/25/25231.png"></img> 
                        <strong> Github</strong> : <a href="https://github.com/coleea?tab=repositories">https://github.com/coleea?tab=repositories</a>
                        <div className='sub'>
                        - 주로 공부한 내용을 올려둡니다
                        </div>
                    </li>
                    <li><img loading="lazy" height="30px" src="https://cdn-icons-png.flaticon.com/512/174/174857.png"></img> <strong>링크드인</strong> : <a href='https://www.linkedin.com/in/leekb86/'>https://www.linkedin.com/in/leekb86/</a> </li>
                    <li><strong>Phone</strong> : 010-9333-3385</li>
                    <li><strong>E-Mail</strong> : tmwlak@gmail.com</li>
                    <li><strong>이름</strong> : 이국범</li>
                </ul>   
            </div> 
        </div>
      </header>
    </div>
  );
}

export default App;
